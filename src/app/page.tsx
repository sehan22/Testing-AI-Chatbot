"use client";

import Conversation from "@/components/chat_container/Conversation";
import MainChat from "@/components/chat_container/MainChat";
import { chatConversation, sampleChatConversations } from "@/types/Chat";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

type activeConvDetails = {
  activeConvId: string | null;
  activeConvData: chatConversation | null;
};

export default function Home() {
  const [activeConvDetails, setActiveConvDetails] =
    React.useState<activeConvDetails>({
      activeConvId: null,
      activeConvData: null,
    });

  return (
    // main container
    <div className="flex gap-6 p-6 h-screen w-full bg-zinc-900">
      {/* side menubar main container */}
      <div className="w-80 flex flex-col items-center justify-start gap-6">
        {/* brand details container */}
        <div className="flex items-center gap-1 w-full p-2 rounded-2xl bg-zinc-700">
          {/* Logo */}
          <div className="flex justify-center items-center w-16 h-full aspect-square rounded-l-xl rounded-r-sm bg-teal-600">
            <Image src={"/chabot_icon.png"} width={50} height={50} alt="icon" />
          </div>

          {/* brand name and slogan */}
          <div className="w-full h-full p-2 bg-zinc-900 rounded-r-xl rounded-l-sm text-white">
            <h3 className="font-bold text-2xl">EduWise Guru</h3>
            <p className="text-slate-300 text-[0.75rem] font-semibold">
              Simple Guidance for Smart Decisions...
            </p>
          </div>
        </div>

        <div className="relative overflow-clip flex flex-1 flex-col justify-center items-center text-center p-6 text-white gap-4 w-full bg-zinc-700 rounded-xl">
          <Image
            className="object-cover"
            src={"/chatbot.png"}
            height={385}
            width={290}
            alt={"chatbot_image"}
          />

          <div>
            <h1 className="font-bold text-2xl">EduWise Guru <br />AI Assistant</h1>
            <p className="text-slate-300 text-[0.75rem] font-semibold">
              Lorem ipsum dolor sit amet consectetur. Tellus massa eget euismod
              augue. Pellentesque mauris nec faucibus eget sagittis dui at
              aliquam sed. Tristique quis neque sed facilisi varius odio.
            </p>
          </div>

          <div className="z-0 absolute -bottom-60 left-0 right-60 m-auto gradient-area-one"></div>
        </div>

        {/* chat history details container */}
        <div className="hidden flex flex-col overflow-hidden gap-3 flex-1 w-full">
          {/* topic */}
          <div className="inline-flex items-center gap-1 text-white">
            <Icon icon="material-symbols:history-rounded" width="18" />
            <h3 className="text-base font-bold">Chat History</h3>
          </div>

          {/* chat history */}
          <div className="flex flex-1 rounded-2xl flex-col justify-start overflow-auto hidden-scrollbar gap-1.5 text-slate-300 text-sm">
            {/* chat */}
            {sampleChatConversations.map((conv: chatConversation, index) => (
              <Conversation
                key={conv.id}
                conv={conv}
                isActive={conv.id === activeConvDetails.activeConvId}
                onSelect={() =>
                  setActiveConvDetails({
                    activeConvId: conv.id,
                    activeConvData: conv,
                  })
                }
              />
            ))}

            {/* end */}
            <div className="flex flex-1 min-h-20 justify-center items-center w-full p-2 bg-zinc-700 border-zinc-700 text-slate-300 text-opacity-50">
              No more conversations to show.
            </div>
          </div>
        </div>
      </div>

      {/* main chat container */}
      <MainChat activeConvData={activeConvDetails.activeConvData} />
    </div>
  );
}
