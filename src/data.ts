import { Skill, Project, Experience } from "./types";

export const PERSONAL_INFO = {
  name: "Vikranth Yerraboyina",
  title: "AI / Machine Learning Engineer",
  location: "Vijayawada, Andhra Pradesh, India",
  email: "vikranthabv@gmail.com",
  phone: "+91 8309234351",
  linkedin: "https://www.linkedin.com/in/vikranth-yerraboyina-7ab4b52a1",
  github: "https://github.com/Vikku03",
  summary:
    "AI/ML Engineer with 3+ years of experience building AI-powered applications and machine learning solutions using Python. Skilled in data preprocessing, exploratory data analysis, feature engineering, model training, evaluation, deployment, REST APIs, SQL, Docker, AWS, FastAPI, TensorFlow, PyTorch, Scikit-learn, NumPy, and Pandas. Experienced in integrating ML models into production systems and collaborating in Agile teams.",
  education: {
    degree: "Bachelor of Science (B.Sc.) in Computer Science",
    school: "Andhra Loyola College, Vijayawada",
    period: "2020 - 2023",
    gpa: "CGPA: 7.8/10",
  },
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Telugu", level: "Native" },
  ],
};

export const SKILLS: Skill[] = [
  // Programming
  { name: "Python", category: "Programming", level: 95 },
  { name: "SQL", category: "Programming", level: 88 },
  { name: "JavaScript", category: "Programming", level: 80 },
  { name: "TypeScript", category: "Programming", level: 75 },

  // AI/ML
  { name: "Scikit-learn", category: "AI/ML", level: 92 },
  { name: "TensorFlow", category: "AI/ML", level: 85 },
  { name: "PyTorch", category: "AI/ML", level: 80 },
  { name: "Natural Language Processing (NLP)", category: "AI/ML", level: 88 },
  { name: "Generative AI (GenAI)", category: "AI/ML", level: 90 },
  { name: "Prompt Engineering", category: "AI/ML", level: 92 },

  // Data
  { name: "NumPy", category: "Data Science", level: 92 },
  { name: "Pandas", category: "Data Science", level: 94 },
  { name: "Exploratory Data Analysis (EDA)", category: "Data Science", level: 90 },
  { name: "Feature Engineering", category: "Data Science", level: 88 },
  { name: "Model Evaluation", category: "Data Science", level: 86 },

  // Backend
  { name: "FastAPI", category: "Backend", level: 90 },
  { name: "Flask", category: "Backend", level: 85 },
  { name: "Django", category: "Backend", level: 78 },
  { name: "REST APIs", category: "Backend", level: 92 },

  // Databases
  { name: "PostgreSQL", category: "Databases", level: 85 },
  { name: "MySQL", category: "Databases", level: 82 },
  { name: "Redis", category: "Databases", level: 75 },

  // Cloud & DevOps
  { name: "AWS (Amazon Web Services)", category: "Cloud & DevOps", level: 82 },
  { name: "Docker", category: "Cloud & DevOps", level: 88 },
  { name: "Git & GitHub", category: "Cloud & DevOps", level: 90 },
  { name: "CI/CD Pipelines", category: "Cloud & DevOps", level: 80 },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Edubot",
    role: "AI / Machine Learning Engineer",
    location: "Vijayawada, AP, India",
    period: "Sep 2023 - Present",
    details: [
      "Built AI-powered learning solutions using Python and machine learning, delivering 20+ production features.",
      "Designed machine learning pipelines covering end-to-end preprocessing, feature engineering, training, validation, and production deployment.",
      "Processed datasets with 100k+ records using Pandas and NumPy to significantly improve data quality and pipeline reliability.",
      "Trained and evaluated recommendation and classification models using Scikit-learn and TensorFlow, improving prediction accuracy by approximately 18%.",
      "Developed high-performance FastAPI and Flask inference APIs for real-time model serving.",
      "Integrated state-of-the-art LLM-powered features and AI services into various educational platforms.",
      "Optimized complex SQL queries, reducing data retrieval latency by approximately 35%.",
      "Containerized AI services using Docker and automated deployments through AWS CI/CD pipelines, reducing deployment time by approximately 60%, improving release reliability by 40%, and achieving over 99.9% application availability.",
      "Collaborated with a cross-functional Agile team of 8+ engineers, data scientists, and QA professionals to ship critical AI-powered features on schedule.",
      "Monitored post-deployment model performance, tracking drift and documenting ML workflows to support continuous improvement.",
    ],
    skillsUsed: [
      "Python",
      "FastAPI",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "Docker",
      "AWS",
      "SQL",
      "Generative AI",
      "Prompt Engineering",
    ],
    metrics: [
      { value: "18%", label: "Accuracy Improvement" },
      { value: "-35%", label: "Query Latency" },
      { value: "-60%", label: "Deployment Time" },
      { value: "20+", label: "Features Shipped" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "samastha",
    name: "Samastha Edge AI Learning Platform",
    subtitle: "Real-time AI Recommendations & API Serving",
    description:
      "A high-availability platform designed to serve localized AI recommendation models directly at the edge. Optimized for low-latency scoring and intelligent personalized learning pathways.",
    details: [
      "Built AI-powered recommendation workflows that dynamically tailor learning paths to individual user performance.",
      "Deployed scalable machine learning inference APIs using FastAPI and containerized them for lightweight cloud deployments.",
      "Applied advanced feature engineering and Exploratory Data Analysis (EDA) on user engagement data to substantially improve recommendation quality.",
    ],
    tags: ["FastAPI", "Scikit-learn", "EDA", "Feature Engineering", "Python", "Docker"],
  },
  {
    id: "edubot-lms",
    name: "Edubot LMS (Learning Management System)",
    subtitle: "Predictive Analytics & Automatic Reporting Engine",
    description:
      "A learning analytics backend that processes educational engagement data to forecast student dropouts and dynamically flags learning gaps.",
    details: [
      "Integrated predictive analytics workflows using Python, Scikit-learn, and SQL to forecast user performance and identify at-risk students.",
      "Engineered automated daily and weekly reporting engines that synthesize raw activity logs into human-readable learning summaries.",
      "Designed and optimized SQL database structures to query and analyze millions of engagement points efficiently.",
    ],
    tags: ["Python", "SQL", "Pandas", "Scikit-learn", "PostgreSQL", "Data Pipeline"],
  },
  {
    id: "career-xcelerator",
    name: "Career Xcelerator",
    subtitle: "Personalized Career Recommendations & Skill GAP Analysis",
    description:
      "An automated platform mapping user skillsets against live industry demand to recommend personalized learning pathways and job opportunities.",
    details: [
      "Developed personalized learning recommendation engines matching user skills to targeted job roles.",
      "Built resilient backend REST APIs to integrate third-party skill databases and retrieve real-time job market requirements.",
      "Designed similarity metrics to quantify skill gaps and suggest highly specific modules to close those gaps.",
    ],
    tags: ["Python", "Flask", "REST APIs", "Pandas", "NLP", "MySQL"],
  },
  {
    id: "interview-prep",
    name: "Interview Preparation Platform",
    subtitle: "LLM-Assisted Mock Interviewer & Feedback Engine",
    description:
      "An intelligent workspace simulating realistic technical interviews and providing granular, actionable feedback using LLM prompt engineering.",
    details: [
      "Created AI-assisted mock interview modules that simulate realistic, role-specific technical question-and-answer loops.",
      "Engineered advanced prompt strategies to analyze user answers and provide intelligent feedback on correctness, clarity, and depth.",
      "Implemented NLP metrics to score soft skills and technical keyword usage, presenting scores on an interactive breakdown page.",
    ],
    tags: ["Generative AI", "Prompt Engineering", "NLP", "FastAPI", "LLM Integration"],
  },
];
