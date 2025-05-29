"use client";

import { BotMessage, SenderType } from "@/types/Chat";
import React, { useEffect } from "react";

export default function AIChatMessage({ id, message, sender }: BotMessage) {
  const [displayedMessage, setDisplayedMessage] = React.useState<string>("");
  const [isTypingEnd, setIsTypingEnd] = React.useState<boolean>(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedMessage((prev) => prev + message.charAt(index));
      index++;
      if (index === message.length) {
        clearInterval(interval);
        setIsTypingEnd(true);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [message]);

  return (
    <div className="w-full p-2 rounded-2xl bg-zinc-800 bg-opacity-60 backdrop-blur-md">
      {/* message owner details container */}
      <div className="flex items-center gap-2 p-1 font-semibold">
        <div className="w-6 h-6 rounded-full bg-teal-600"></div>
        <h2 className="text-sm">AI Chat bot</h2>
      </div>

      {/* message container */}
      <div className="bg-zinc-900 p-4 mt-1 rounded-t-sm rounded-b-lg font-mono">
        {message}
        {/* {!isTypingEnd && <span className="animate-pulse">|</span>} */}
      </div>
    </div>
  );
}
