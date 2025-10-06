/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import Image from "next/image";

import logoAnimation from "../../../assets/bot.gif";
const initialMessages = [
  {
    id: 1,
    sender: "Customer Support",
    message: "Welcome our Agency.",
    time: "2:20 PM",
    isUser: false,
  },
  
  {
    id: 3,
    sender: "Customer Support",
    message: "Welcome our Agency.",
    time: "2:20 PM",
    isUser: false,
  },
  
];

export default function ChatWidget({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "User",
        message: inputValue,
        time: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
        isUser: true,
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: {
    key: string;
    shiftKey: any;
    preventDefault: () => void;
  }) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="block md:absolute bottom-8 right-8 z-50 ">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute top-14 md:-top-[420px] md:bottom-0 right-0 w-[90vw] max-w-[380px] h-[500px] bg-black rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-800 animate-in slide-in-from-bottom-5 ">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">
                  Chat with AI!
                </h3>
                <p className="text-white/80 text-xs">We're here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-[#0a0a0f]">
            {messages.map((msg) => (
              <div key={msg.id} className="flex flex-col">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    {!msg.isUser && (
                      <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                    <span className="text-xs text-gray-400">{msg.sender}</span>
                  </div>
                </div>
                <div
                  className={`${
                    msg.isUser
                      ? "ml-auto bg-gray-700 text-white"
                      : "bg-indigo-600 text-white"
                  } rounded-2xl px-4 py-3 max-w-[80%] text-sm shadow-md`}
                >
                  {msg.message}
                </div>
                {msg.isUser && (
                  <span className="text-xs text-gray-500 ml-auto mt-1">
                    Seen
                  </span>
                )}
                {!msg.isUser &&
                  msg.id ===
                    messages.filter((m) => !m.isUser).slice(-1)[0]?.id && (
                    <span className="text-xs text-gray-500 mt-1">Delivery</span>
                  )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-[#0a0a0f] border-t border-gray-800">
            <div className="flex items-center gap-2 bg-gray-900 rounded-full px-4 py-3 border border-gray-700">
              <button className="text-gray-400 hover:text-gray-300 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </button>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Write here..."
                className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 cursor-pointer hidden rounded-full shadow-2xl md:flex items-center justify-center hover:scale-110 transition-all bg-black/70`}
      >
        <Image
          src={logoAnimation}
          alt="Animated Logo"
          width={96}
          height={96}
          className="object-contain"
        />
      </button>

      <button onClick={() => setIsOpen(!isOpen)} className="p-3  block md:hidden bg-[#25153694] rounded-full">
        <MessageCircle />
      </button>
    </div>
  );
}
