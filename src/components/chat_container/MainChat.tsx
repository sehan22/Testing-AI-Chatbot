import React, { useEffect } from "react";
import AIChatMessage from "./chat_message/AI_Chat_Message";
import UserChatMessage from "./chat_message/User_Chat_Message";
import {
  chatConversation,
  ChatMessage,
  SenderType,
  UserMessage,
} from "@/types/Chat";
import { v4 as uuidv4 } from "uuid";
import { Icon } from "@iconify/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type ActiveConvData = {
  activeConvData: chatConversation | null;
};

export default function MainChat({ activeConvData }: ActiveConvData) {
  let scrollEl: HTMLDivElement | null = null;

  const handleScrollToTop = () => {
    scrollEl?.scrollTo({ top: 0, behavior: "smooth" });
  };

  // default data for user message object
  const defaultChatMessage: ChatMessage = {
    id: "",
    message: "",
    sender: SenderType.USER,
  };

  /* local state */
  const [userMessage, setUserMessage] =
    React.useState<ChatMessage>(defaultChatMessage);
  const [userMessageArr, setUserMessageArr] = React.useState<ChatMessage[]>([]);
  const [isUserMsgReady, setIsUserMsgReady] = React.useState<boolean>(false);
  const [isBotTyping, setIsBotTyping] = React.useState<boolean>(false);
  const [isOverflow, setIsOverflow] = React.useState<boolean>(false);

  useEffect(() => {
    console.warn("userMessageArr : ", userMessageArr);
  }, [userMessageArr]);

  /* set user and chatbot message to the array (button and input field action) */
  const sendMessage = async () => {
    /* check input field validation before submit */
    setIsUserMsgReady(true);

    if (userMessage.message.trim() === "") return;

    /* set user message to conversation array */
    setUserMessageArr((prev) => [...prev, userMessage]);

    // 2 seconds timeout - remove this after testing
    await new Promise((resolve) => setTimeout(resolve, 500));

    /* set AI message to object */
    setIsBotTyping(true);

    try {
      const res = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.message }),
      });

      const data = await res.json();

      // set AI bot message to state
      const botMessage: ChatMessage = {
        id: uuidv4(),
        sender: SenderType.BOT,
        message: data.reply,
      };

      setUserMessageArr((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("API error:", error);
    } finally {
      setUserMessage(defaultChatMessage);
      setIsBotTyping(false);
      setIsUserMsgReady(false);
    }
  };

  /* set only user message to state (input field onChange action) */
  const handleSetMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage({
      id: uuidv4(),
      message: e.target.value,
      sender: SenderType.USER,
    });
  };

  /* set default object to message (clear object) - (button onClick action) */
  const handleClear = () => {
    setUserMessage(defaultChatMessage);
  };

  /* handle clear conversation */
  const handleClearConversation = () => {
    setUserMessageArr([]);
  };

  return (
    <div className="w-80 relative flex flex-1 justify-center overflow-hidden border border-zinc-800 rounded-2xl">
      {/* main chat center container */}
      <div
        className={`z-10 flex flex-col ${
          userMessageArr.length === 0
            ? "justify-center"
            : "justify-end transition-all duration-300"
        } items-center gap-6 h-full p-4 w-[900px] text-slate-100 rounded-2xl`}
      >
        {/* Topic container */}
        {userMessageArr.length === 0 && (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">
              Welcome To Chatbot Name
            </h1>
            <p className="mt-2 text-base font-normal text-slate-300">
              Lorem ipsum dolor sit amet consectetur. Platea ac parturient sed
              amet. Rutrum felis.
            </p>
          </div>
        )}

        {/* chat container */}
        <div
          ref={(el) => {
            scrollEl = el;

            if (el) {
              // Scroll to bottom
              el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });

              // Basic overflow check
              const overflow = el.scrollHeight > el.clientHeight;
              setIsOverflow(overflow);
            }
          }}
          className={`${
            userMessageArr.length > 0 && "flex-1 transition-all duration-300 "
          }flex flex-col overflow-auto w-full gap-6 hidden-scrollbar`}
        >
          {/* {chatConversation.map((chatMessage: ChatMessage) => { */}
          {userMessageArr.map((chatMessage: ChatMessage, index) => {
            return chatMessage.sender === SenderType.BOT ? (
              <AIChatMessage
                /* key={chatMessage.id} */
                key={index}
                id={chatMessage.id}
                sender={chatMessage.sender}
                message={chatMessage.message}
              />
            ) : (
              chatMessage.sender === SenderType.USER && (
                <UserChatMessage
                  /* key={chatMessage.id} */
                  key={index}
                  id={chatMessage.id}
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                />
              )
            );
          })}

          {isBotTyping && (
            <div className="w-full p-2 rounded-2xl bg-zinc-800 bg-opacity-60 backdrop-blur-md">
              {/* message owner details container */}
              <div className="flex items-center gap-2 p-1 font-semibold">
                <div className="w-6 h-6 rounded-full bg-teal-600"></div>
                <h2 className="text-sm">AI Chat bot</h2>
              </div>

              {/* message container */}
              <div className="flex  gap-1 bg-zinc-900 p-6 mt-1 rounded-t-sm rounded-b-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0s]"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
        </div>

        {/* chat controlling container */}
        <div className="trasition duration-300 flex gap-2 p-2 w-full rounded-2xl text-center bg-zinc-700">
          {/* message input - need to change input to textarea */}
          <input
            placeholder="Type Here..."
            type="text"
            value={userMessage.message}
            onChange={(e) => {
              handleSetMessage(e);
            }}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                userMessage.message.length > 0 &&
                !isUserMsgReady
              ) {
                sendMessage();
              }
            }}
            className="flex-1 h-12 rounded-xl bg-zinc-900 text-gray-200 border-s-2 border-slate-200 focus:border-teal-600 outline-none placeholder-gray-400 px-4"
          />

          {/* close button */}

          <button
            className={`${
              userMessage.message.length <= 0 && "hidden trasition duration-300"
            } trasition duration-300 flex justify-center items-center disabled:saturate-50 disabled:bg-zinc-800 disabled:cursor-not-allowed h-12 w-12 rounded-xl bg-zinc-900`}
            disabled={userMessage.message.length === 0}
            onClick={handleClear}
          >
            <Icon icon="mdi:clear-outline" width="18" />
          </button>

          {/* stop button */}
          {/*           {isBotTyping && (
            <button
              className="flex justify-center items-center disabled:saturate-50 disabled:cursor-not-allowed h-12 w-12 rounded-xl bg-teal-600"
              onClick={() => {}}
            >
              <Icon icon="material-symbols:stop-outline-rounded" width="26" />
            </button>
          )} */}

          {/* message sending button */}
          <button
            className="flex justify-center items-center disabled:saturate-50 disabled:cursor-not-allowed h-12 w-12 rounded-xl bg-teal-600"
            disabled={
              userMessage.message.length === 0 || isBotTyping || isUserMsgReady
            }
            onClick={sendMessage}
          >
            <Icon icon="lets-icons:send-hor" width="26" />
          </button>
        </div>
      </div>

      {/* floating CTA buttons container */}
      <div className="z-10 absolute flex flex-col items-end gap-2 right-0 bottom-0 m-4 text-white">
        {isOverflow && (
          <button type="button" className="flex justify-center items-center h-10 w-10 bg-zinc-700 rounded-lg" onClick={handleScrollToTop}>
            <Icon icon="octicon:move-to-top-16" width="16" />
          </button>
        )}

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button
              type="button"
              className="flex justify-center items-center h-16 w-16 rounded-2xl bg-teal-600"
            >
              <Icon icon="pajamas:duo-chat-new" width="24" />
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleClearConversation}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/*         <button
          className="text-white absolute w-fit h-fit top-0 bottom-0 my-auto right-0 p-4 bg-slate-700 rounded-2xl m-4 z-10"
          type="button"
          onClick={() => {
            setUserMessageArr([]);
          }}
        >
          Clear All Chat
        </button> */}

      {/* blur background elements */}
      <div className="z-0 absolute -bottom-60 -left-60 gradient-area-one"></div>
      <div className="z-0 absolute -top-40 -right-40 gradient-area-two"></div>
    </div>
  );
}
