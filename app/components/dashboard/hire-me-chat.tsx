"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { X, MessageCircle, Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function HireMe() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! 👋 I'm your AI Portfolio Assistant. Ask me anything about skills, projects, or experience!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses: { [key: string]: string } = {
    "sql|database|postgres":
      "Yes! I have strong SQL expertise with PostgreSQL. I've built production databases with complex queries, optimizations, and data migrations. Recently used it for retail analytics and inventory management systems.",
    "power bi|dashboard|analytics":
      "Power BI is one of my specializations! I create interactive dashboards, DAX formulas, and data models. My retail stockout prediction dashboard reduced waste by 12% - would love to discuss it!",
    "nextjs|react|typescript":
      "I'm proficient in Next.js, React, and TypeScript. I've built full-stack applications with Server Components, API routes, and real-time data synchronization.",
    "ai|machine learning|ml":
      "I work with AI/ML for practical applications like predictive modeling and automation. I've integrated LLMs for features like color extraction (EyeDrop) and intelligent recommendations.",
    "hire me|contact|let's work":
      "I'm open to exciting opportunities! I specialize in Full-Stack Development, Data Analytics, and AI integration. Let's connect - check the portfolio footer for my contact info!",
    default:
      "That's great! Tell me more about what you're looking for. I can discuss my experience with Web Development, Data Analytics, or AI solutions.",
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (keyword === "default") continue;
      if (keyword.split("|").some((k) => lowerMessage.includes(k))) {
        return response;
      }
    }
    return botResponses.default;
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] h-125 glass-effect border-primary/20 flex flex-col z-40 animate-scale-in">
          {/* Header */}
          <div className="bg-linear-to-r from-primary to-accent p-4 rounded-t-lg">
            <h3 className="font-bold text-primary-foreground">
              Hire Me AI Assistant
            </h3>
            <p className="text-xs text-primary-foreground/80">
              Ask about my skills & projects
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-foreground/50 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-foreground/50 animate-bounce delay-100" />
                    <div className="w-2 h-2 rounded-full bg-foreground/50 animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-4 space-y-2">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me something..."
                className="bg-background/50 border-border/50"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                disabled={isLoading || !input.trim()}
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Try asking about SQL, Power BI, or hire me!
            </p>
          </div>
        </Card>
      )}
    </>
  );
}
