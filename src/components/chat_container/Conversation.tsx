import { chatConversation } from "@/types/Chat";
import React from "react";

export type ConversationProps = {
  conv: chatConversation;
  isActive: boolean;
  onSelect: () => void;
};

export default function Conversation({
  conv,
  isActive,
  onSelect,
}: ConversationProps) {
  return (
    <button
      type="button"
      className={`${
        isActive ? "border-teal-600" : "border-zinc-800"
      } w-full p-2 bg-zinc-700 text-start border-b-4 rounded-sm`}
      onClick={onSelect}
    >
      <h1 className="truncate">{conv.title} {conv.title} {conv.title}</h1>
    </button>
  );
}
