const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'mock-key');

exports.chatWithAgent = async (req, res) => {
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Determine if we actually have an API key. If not, fallback to a mock response.
    if (!process.env.GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY not found. Using mock response.");
      return res.status(200).json({
        response: `[MOCK] I received your message: "${message}". I recommend investing this in an Index Fund.`,
        actionRequired: message.toLowerCase().includes('create') || message.toLowerCase().includes('invest')
      });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
    
    const prompt = `
      You are FinPilot, an autonomous banking AI assistant for a premium fintech app.
      The user says: "${message}"
      
      Respond professionally but concisely (2-3 sentences max). 
      If the user asks to perform an action (e.g., invest, create FD, block card, pay bill), strongly recommend it and ask for confirmation.
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    // Simple heuristic to determine if the frontend needs to show an "Approve / Cancel" action block
    const actionRequired = text.toLowerCase().includes('confirm') || text.toLowerCase().includes('would you like me to') || text.toLowerCase().includes('execute');

    res.status(200).json({
      response: text,
      actionRequired
    });
  } catch (error) {
    console.error("AI Chat Error:", error);
    res.status(500).json({ error: 'Failed to communicate with AI Coach' });
  }
};
