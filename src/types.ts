export interface Skill {
  name: string;
  category: "Programming" | "AI/ML" | "Data Science" | "Backend" | "Databases" | "Cloud & DevOps";
  level: number; // 0-100 for visual bars
}

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  details: string[];
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  details: string[];
  skillsUsed: string[];
  metrics: { value: string; label: string }[];
}

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}
