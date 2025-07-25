import { NextResponse } from "next/server"

// Mock voice message data
const mockVoiceMessages = [
  {
    id: "1",
    sender: "Mom",
    message: "Happy birthday, sweetheart! I hope your special day is filled with love and joy!",
    audioUrl: "/audio/mom-birthday-message.mp3",
    timestamp: new Date().toISOString(),
  },
  {
    id: "2",
    sender: "Best Friend",
    message: "Another year of awesome! Can't wait to celebrate with you!",
    audioUrl: "/audio/friend-birthday-message.mp3",
    timestamp: new Date().toISOString(),
  },
]

export async function GET() {
  try {
    return NextResponse.json(mockVoiceMessages)
  } catch (error) {
    console.error("Error fetching voice messages:", error)
    return NextResponse.json({ error: "Failed to fetch voice messages" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { sender, message, audioBlob } = await request.json()

    // In a real app, you would save the audio blob to storage
    // and store the message metadata in a database

    const newMessage = {
      id: Date.now().toString(),
      sender,
      message,
      audioUrl: `/audio/${Date.now()}.mp3`, // Mock URL
      timestamp: new Date().toISOString(),
    }

    return NextResponse.json(newMessage)
  } catch (error) {
    console.error("Error saving voice message:", error)
    return NextResponse.json({ error: "Failed to save voice message" }, { status: 500 })
  }
}
