"use client";

import { useEffect, useRef, useState } from "react";

/* PLACEHOLDER INFORMATIOn */
const PLACEHOLDER_TASKS_DAY = [
  { time: "9:00 AM", title: "Review flashcards" },
  { time: "2:00 PM", title: "Practice set: Biology Ch.3" },
  { time: "6:00 PM", title: "Quiz prep" },
];

const PLACEHOLDER_TASKS_WEEK = [
  "Mon: Review flashcards, Biology Ch.3",
  "Tue: New set – Chemistry",
  "Wed: Quiz prep, Office hours",
  "Thu: Catch-up day",
  "Fri: Weekly review",
];

const PLACEHOLDER_TASKS_MONTH = [
  "Week 1: Biology units 1–2",
  "Week 2: Chemistry intro",
  "Week 3: Midterm prep",
  "Week 4: Review & quizzes",
];

const PLACEHOLDER_BOT_REPLY =
  "I'm your Beluga study assistant. Ask me about your study sets, schedule, or anything else!";

export default function UserHome() {
  /* toggle calendar view */
  const [calendarView, setCalendarView] = useState("day");

  /* toggle who is sending message */
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! How can I help you today?" },
  ]);

  /* toggle input */
  const [input, setInput] = useState("");

  /* contains list of messages */
  const messageListRef = useRef(null);

  /* scroll to bottom of message list */
  useEffect(() => {
    const el = messageListRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  /* dont send empty messages, trim input, add user message, add bot message */
  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setMessages((prev) => [
      ...prev,
      { role: "bot", text: PLACEHOLDER_BOT_REPLY },
    ]);
  }

  return (
    <main className="flex flex-1 flex-col px-6 py-8">
      {/* Secondary navbar under global header */}
      <nav className="mb-8 flex justify-center">
        <div className="inline-flex items-center gap-8 rounded-full bg-zinc-900/5 px-6 py-3 backdrop-blur-sm">
          <button className="text-sm font-medium text-zinc-900">
            Home
          </button>
          <button className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
            Study sets
          </button>
          <button className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
            Classes
          </button>
        </div>
      </nav>

      {/* 3-card grid layout */}
      <section className="flex flex-1 flex-col">
        <div className="grid flex-1 gap-6 md:grid-cols-2">
          {/* Left large card */}
          <div className="rounded-2xl bg-white/70 p-6 shadow-md ring-1 ring-zinc-200/70">
            <div className="h-full w-full rounded-xl border border-dashed border-zinc-300/80" />
          </div>

          {/* Right column with two stacked cards */}
          <div className="flex flex-col gap-6">
            {/* Top-right: Calendar / tasks for day, week, month */}
            <div className="min-h-[280px] overflow-hidden rounded-2xl bg-zinc-50 shadow-md ring-1 ring-zinc-200/80">
              <div className="flex w-full items-center gap-2 bg-zinc-900/90 px-4 py-2">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex min-h-[220px] flex-col p-4">
                <div className="mb-3 flex gap-1 rounded-lg bg-zinc-200/60 p-1">
                  {["day", "week", "month"].map((view) => (
                    <button
                      key={view}
                      type="button"
                      onClick={() => setCalendarView(view)}
                      className={`flex-1 rounded-md px-2 py-1.5 text-xs font-medium capitalize transition-colors ${
                        calendarView === view
                          ? "bg-white text-zinc-900 shadow-sm"
                          : "text-zinc-600 hover:text-zinc-900"
                      }`}
                    >
                      {view}
                    </button>
                  ))}
                </div>
                <div className="min-h-[140px] flex-1 rounded-lg border border-zinc-200/80 bg-white p-3">
                  {calendarView === "day" && (
                    <ul className="space-y-2">
                      {PLACEHOLDER_TASKS_DAY.map((task, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="shrink-0 font-medium text-zinc-500">
                            {task.time}
                          </span>
                          <span className="text-zinc-800">{task.title}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {calendarView === "week" && (
                    <ul className="space-y-1.5 text-sm text-zinc-800">
                      {PLACEHOLDER_TASKS_WEEK.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  )}
                  {calendarView === "month" && (
                    <ul className="space-y-1.5 text-sm text-zinc-800">
                      {PLACEHOLDER_TASKS_MONTH.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom-right: Chatbox */}
            <div className="flex h-[320px] flex-col overflow-hidden rounded-2xl bg-zinc-50 shadow-md ring-1 ring-zinc-200/80">
              <div className="flex shrink-0 w-full items-center gap-2 bg-zinc-900/90 px-4 py-2">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex min-h-0 flex-1 flex-col p-3">
                <div
                  ref={messageListRef}
                  className="mb-3 min-h-0 flex-1 space-y-2 overflow-y-auto rounded-lg border border-zinc-200/80 bg-white p-3"
                >
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                        msg.role === "user"
                          ? "ml-auto bg-zinc-900/90 text-white"
                          : "bg-zinc-100 text-zinc-800"
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Message the chatbot..."
                    className="flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-800 placeholder-zinc-400 focus:border-zinc-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleSend}
                    className="rounded-lg bg-zinc-900/90 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800/90"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
