export enum SenderType {
  USER = "USER",
  BOT = "BOT",
}

export type ChatMessage = {
  id: string;
  sender: SenderType;
  message: string;
};

export type UserMessage = {
  id: string;
  sender: SenderType.USER;
  message: string;
};

export type BotMessage = {
  id: string;
  sender: SenderType.BOT;
  message: string;
};

export type chatConversation = {
  id: string;
  title: string;
  message: ChatMessage[];
};

export const sampleChatConversations: chatConversation[] = [
  {
    id: "1",
    title: "Order Help",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "Hi, I need help with my order.",
      },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Sure, what’s your order ID?",
      },
    ],
  },
  {
    id: "2",
    title: "Return Policy",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "What’s your return policy?",
      },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "You can return items within 30 days.",
      },
    ],
  },
  {
    id: "3",
    title: "Shipping Time",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "How long does shipping take?",
      },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Usually 3–5 business days.",
      },
    ],
  },
  {
    id: "4",
    title: "Cancel Order",
    message: [
      { id: "1", sender: SenderType.USER, message: "Can I cancel my order?" },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Yes, if it hasn’t been shipped.",
      },
    ],
  },
  {
    id: "5",
    title: "Change Address",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "I want to change my shipping address.",
      },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Please provide the new address.",
      },
    ],
  },
  {
    id: "6",
    title: "Product Availability",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "Is the black t-shirt available in L?",
      },
      { id: "2", sender: SenderType.BOT, message: "Yes, it's in stock." },
    ],
  },
  {
    id: "7",
    title: "Payment Failed",
    message: [
      { id: "1", sender: SenderType.USER, message: "My payment failed." },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Please try a different payment method.",
      },
    ],
  },
  {
    id: "8",
    title: "Tracking Number",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "Can I get my tracking number?",
      },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Sure, here it is: #TRK123456",
      },
    ],
  },
  {
    id: "9",
    title: "Delayed Delivery",
    message: [
      { id: "1", sender: SenderType.USER, message: "My order is delayed." },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Apologies. Let me check the status.",
      },
    ],
  },
  {
    id: "10",
    title: "Wrong Item",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "I received the wrong item.",
      },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "We’re sorry. We'll arrange a replacement.",
      },
    ],
  },
  {
    id: "11",
    title: "Apply Coupon",
    message: [
      { id: "1", sender: SenderType.USER, message: "How do I apply a coupon?" },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Enter it at checkout in the coupon box.",
      },
    ],
  },
  {
    id: "12",
    title: "Store Hours",
    message: [
      { id: "1", sender: SenderType.USER, message: "When is your store open?" },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "We’re open 9 AM – 9 PM daily.",
      },
    ],
  },
  {
    id: "13",
    title: "Bulk Order",
    message: [
      { id: "1", sender: SenderType.USER, message: "Can I make a bulk order?" },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Yes, bulk discounts are available!",
      },
    ],
  },
  {
    id: "14",
    title: "Exchange Item",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "Can I exchange my t-shirt?",
      },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Yes, within 15 days of purchase.",
      },
    ],
  },
  {
    id: "15",
    title: "Out of Stock",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "When will red hoodies be back in stock?",
      },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Expected restock is next week.",
      },
    ],
  },
  {
    id: "16",
    title: "Referral Program",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "Do you have a referral program?",
      },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Yes! Refer friends and earn discounts.",
      },
    ],
  },
  {
    id: "17",
    title: "Gift Cards",
    message: [
      { id: "1", sender: SenderType.USER, message: "Do you sell gift cards?" },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Yes, available from $10 to $100.",
      },
    ],
  },
  {
    id: "18",
    title: "Damaged Product",
    message: [
      { id: "1", sender: SenderType.USER, message: "I got a damaged product." },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "We're sorry. We'll replace it immediately.",
      },
    ],
  },
  {
    id: "19",
    title: "Custom Design",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "Can I upload my own design?",
      },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Yes! Use our custom design tool.",
      },
    ],
  },
  {
    id: "20",
    title: "Cancel Subscription",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "How do I cancel my subscription?",
      },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Go to account settings > subscriptions.",
      },
    ],
  },
  {
    id: "21",
    title: "Language Support",
    message: [
      { id: "1", sender: SenderType.USER, message: "Do you support Sinhala?" },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Yes, Sinhala is available in settings.",
      },
    ],
  },
  {
    id: "22",
    title: "Live Chat Agent",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "Can I talk to a live agent?",
      },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Sure, connecting you now...",
      },
    ],
  },
  {
    id: "23",
    title: "Multiple Addresses",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "Can I save multiple addresses?",
      },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Yes, add them in your profile settings.",
      },
    ],
  },
  {
    id: "24",
    title: "Newsletter",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "How do I subscribe to the newsletter?",
      },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Scroll to the footer and enter your email.",
      },
    ],
  },
  {
    id: "25",
    title: "App Download",
    message: [
      {
        id: "1",
        sender: SenderType.USER,
        message: "Do you have a mobile app?",
      },
      {
        id: "2",
        sender: SenderType.BOT,
        message: "Yes! Available on iOS and Android.",
      },
    ],
  },
];
