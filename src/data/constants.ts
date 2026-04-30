/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProblemStatement, AITool, ScheduleItem } from '../types';

export const REGISTRATION_LINK = "https://forms.gle/2x7ZK6MYHxbfLbVF9";

export const PROBLEM_STATEMENTS: ProblemStatement[] = [
  { id: "01", title: "Campus Navigation", desc: "Smart routing and interactive mapping for seamless navigation within campus", color: "bg-accent-orange" },
  { id: "02", title: "Building Navigation", desc: "Indoor wayfinding to help individuals locate specific classrooms and offices", color: "bg-accent-teal" },
  { id: "03", title: "E-Canteen", desc: "Digital storefront and queue management system for campus cafeterias", color: "bg-accent-yellow" },
  { id: "04", title: "Online Parking Slots", desc: "Real-time availability tracking and reservation system for campus parking", color: "bg-accent-pink" },
  { id: "05", title: "Online Subject Notes", desc: "Centralized repository for sharing, structuring, and accessing academic notes", color: "bg-accent-purple" },
  { id: "06", title: "E-Campus Trash Recycle", desc: "Gamified and interactive tracking for waste management and campus recycling", color: "bg-accent-orange" },
  { id: "07", title: "Navigation for Old and handicapped", desc: "Accessible routing with wheelchair-friendly pathways and specialized assistance", color: "bg-accent-teal" },
  { id: "08", title: "Water Cooler Navigation for Visitors", desc: "Easily locate hydration stations and essential facilities across the campus", color: "bg-accent-yellow" },
  { id: "09", title: "Lecture and Lab Notification App", desc: "Instant mobile alerts for schedule changes, room swaps, and latest lab updates", color: "bg-accent-pink" },
  { id: "10", title: "Online Notice Board", desc: "Digital, real-time centralized bulletin for all official announcements and events", color: "bg-accent-purple" },
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  { title: "Pre-Hackathon Sensitization", time: "9:30 – 10:30 AM" },
  { title: "Inauguration Ceremony", time: "10:00 – 10:30 AM" },
  { title: "Offline Hackathon Phase", time: "10:30 AM – 4:30 PM" },
  { title: "Mandatory Break", time: "4:30 – 5:30 PM" },
  { title: "Online Hackathon Phase", time: "5:30 PM onwards" },
];

export const AI_TOOLS: AITool[] = [
  { name: "GITHUB COPILOT", desc: "AI code autocomplete", color: "bg-[#FAFAFA]", tag: "Coding", link: "https://github.com/features/copilot" },
  { name: "CHATGPT", desc: "Ideation, debugging, documentation", color: "bg-[#10A37F] text-white", tag: "Assistant", link: "https://chatgpt.com" },
  { name: "CLAUDE (ANTHROPIC)", desc: "Writing, code explanation, analysis", color: "bg-[#D97757] text-white", tag: "Analysis", link: "https://claude.ai" },
  { name: "GEMINI", desc: "Multimodal AI for data & research", color: "bg-[#4285F4] text-white", tag: "Multimodal", link: "https://gemini.google.com" },
  { name: "CURSOR / CODEIUM", desc: "AI-native code editors", color: "bg-accent-yellow", tag: "IDE", link: "https://cursor.com" },
  { name: "MIDJOURNEY / DALL-E", desc: "UI/UX visual assets", color: "bg-accent-purple text-white", tag: "Design", link: "https://www.midjourney.com" },
];
