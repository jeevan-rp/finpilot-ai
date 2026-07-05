import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Mic, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import api from '../services/api';

// Agent Timeline Mock
const TIMELINE_STEPS = [
  { id: 1, label: 'Analyze User', status: 'done' },
  { id: 2, label: 'Understand Intent', status: 'done' },
  { id: 3, label: 'Generate Recommendation', status: 'done' },
  { id: 4, label: 'Await Confirmation', status: 'current' },
  { id: 5, label: 'Execute Action', status: 'pending' },
  { id: 6, label: 'Notify User', status: 'pending' },
];

export default function AICoach() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'ai', content: "Hello! I'm FinPilot, your autonomous banking assistant. I noticed your salary was credited today. How can I help you manage your finances?", timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    const newUserMsg = { id: Date.now(), role: 'user', content: userText, timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);
    setShowTimeline(true);

    try {
      const { data } = await api.post('/ai/chat', { message: userText });
      
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'ai',
        content: data.response,
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        actionRequired: data.actionRequired
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'ai',
        content: "I'm sorry, I'm having trouble connecting to my brain right now.",
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        actionRequired: false
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-8rem)] max-h-[800px]">
      
      {/* Main Chat Interface */}
      <div className="flex-1 flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden relative">
        
        {/* Header */}
        <div className="px-6 py-4 border-b dark:border-gray-800 flex items-center justify-between bg-white dark:bg-gray-900 z-10 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary relative">
              <Bot className="w-5 h-5" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success rounded-full border-2 border-white dark:border-gray-900"></span>
            </div>
            <div>
              <h2 className="font-bold dark:text-white">FinPilot Copilot</h2>
              <p className="text-xs text-success font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Autonomous Mode Active
              </p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn("flex flex-col max-w-[80%]", msg.role === 'user' ? "ml-auto items-end" : "mr-auto items-start")}
              >
                <div className="flex items-end gap-2 mb-1">
                  {msg.role === 'ai' && <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mb-1"><Bot className="w-3 h-3 text-primary" /></div>}
                  <div className={cn(
                    "px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed relative",
                    msg.role === 'user' 
                      ? "bg-primary text-white rounded-br-sm" 
                      : "bg-gray-50 dark:bg-gray-800 dark:text-gray-100 rounded-bl-sm border border-gray-100 dark:border-gray-700"
                  )}>
                    {msg.content}
                    {msg.actionRequired && (
                      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 flex gap-2">
                        <button className="flex-1 bg-primary text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition text-xs">Approve Action</button>
                        <button className="flex-1 bg-gray-200 dark:bg-gray-700 dark:text-gray-300 py-2 rounded-lg font-medium hover:bg-gray-300 transition text-xs">Cancel</button>
                      </div>
                    )}
                  </div>
                </div>
                <span className="text-[10px] text-gray-400 font-medium px-8">{msg.timestamp}</span>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-end gap-2 max-w-[80%]">
                 <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mb-1"><Bot className="w-3 h-3 text-primary" /></div>
                 <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={endOfMessagesRef} />
        </div>

        {/* Suggested Prompts */}
        <div className="px-6 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
          {['Should I apply for a credit card?', 'Create an FD of ₹10,000', 'Analyze my recent expenses'].map((prompt, i) => (
            <button key={i} onClick={() => setInputValue(prompt)} className="whitespace-nowrap px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-300 rounded-full text-xs font-medium border border-blue-100 dark:border-blue-900/50 hover:bg-blue-100 transition-colors">
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 p-2 rounded-xl border border-gray-200 dark:border-gray-700 focus-within:border-primary transition-colors">
            <button className="p-2 text-gray-400 hover:text-primary transition-colors">
              <Mic className="w-5 h-5" />
            </button>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask FinPilot anything..."
              className="flex-1 bg-transparent border-none outline-none text-sm dark:text-white"
            />
            <button 
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="p-2 bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Agent Timeline (Agentic AI Visualization) */}
      <AnimatePresence>
        {showTimeline && (
          <motion.div 
            initial={{ opacity: 0, width: 0, opacity: 0 }}
            animate={{ opacity: 1, width: 320 }}
            className="hidden lg:flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden shrink-0"
          >
            <div className="p-4 border-b dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <h3 className="font-bold text-sm dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Agent Reasoning Timeline
              </h3>
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 dark:before:via-gray-700 before:to-transparent">
                {TIMELINE_STEPS.map((step, i) => (
                  <div key={step.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-gray-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm",
                      step.status === 'done' ? 'bg-success text-white' : step.status === 'current' ? 'bg-primary text-white animate-pulse' : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                    )}>
                      {step.status === 'done' ? <CheckCircle2 className="w-5 h-5" /> : <div className="w-2 h-2 rounded-full bg-current"></div>}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                      <div className={cn("text-xs font-bold uppercase mb-1", step.status === 'done' ? 'text-success' : step.status === 'current' ? 'text-primary' : 'text-gray-400')}>{step.status}</div>
                      <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">{step.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}