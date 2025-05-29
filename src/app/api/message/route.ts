import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userMessage: string = body.message?.toLowerCase() || "";

    if (!userMessage) {
      return NextResponse.json(
        { error: "Message is required!" },
        { status: 400 }
      );
    }

    // Simple rule-based responses for educational counseling
    let reply = "";

    if (userMessage.includes("courses") || userMessage.includes("study")) {
      reply =
        "We offer a variety of courses including science, arts, and technology. What subject are you interested in?";
    } else if (
      userMessage.includes("career") ||
      userMessage.includes("job") ||
      userMessage.includes("future")
    ) {
      reply =
        "Choosing a career depends on your interests and skills. Do you want advice on STEM, arts, or business fields?";
    } else if (
      userMessage.includes("admission") ||
      userMessage.includes("apply") ||
      userMessage.includes("enroll")
    ) {
      reply =
        "Admission deadlines vary by program. Would you like to know about undergraduate or postgraduate admissions?";
    } else if (
      userMessage.includes("scholarship") ||
      userMessage.includes("financial aid") ||
      userMessage.includes("fees")
    ) {
      reply =
        "We offer scholarships based on merit and need. Would you like information on eligibility criteria?";
    } else if (
      userMessage.includes("hello") ||
      userMessage.includes("hi") ||
      userMessage.includes("hey")
    ) {
      reply = "Hello! How can I assist you with your educational goals today?";
    } else {
      reply =
        "I'm here to help with educational counseling. Could you please provide more details or ask a specific question?";
    }

    return NextResponse.json({
      reply: `${reply}`,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

/* import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userMessage: string = body.message;

    // get userMessage and create response for AI chatbot

    if (!userMessage) {
      return NextResponse.json(
        { error: "Message is required!" },
        { status: 400 }
      );
    }

    // 2 seconds timeout - remove this after testing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return NextResponse.json({
      reply: `Hi!👋 I'm your EduWise Guru AI Assistant. How can I help today? - ${uuidv4()}`,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
 */
