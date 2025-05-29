import { ChatMessage, SenderType, UserMessage } from "@/types/Chat";
import React from "react";

export default function UserChatMessage({id, message, sender}: UserMessage) {
  return (
    <div className="flex justify-end">
        {/* bg-zinc-900 */}
      <div className="w-2/3 rounded-2xl"> 
        {/* message owner details container */}
        <div className="flex items-center justify-end gap-2 p-1 font-semibold">
          <h2 className="text-sm">User Name</h2>
          <div className="w-6 h-6 rounded-full bg-yellow-600"></div>
        </div>

        {/* message container */}
        <div className="bg-zinc-800 p-4 rounded-sm rounded-tl-2xl rounded-br-2xl bg-opacity-60 backdrop-blur-md">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
