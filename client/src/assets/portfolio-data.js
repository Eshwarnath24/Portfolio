// Portfolio Resume Data
export const education = [
  {
    institution: "Amrita Vishwa Vidyapeetham",
    degree: "B.Tech Computer Science Engineering",
    duration: "August 2023 – May 2027",
    score: "CGPA: 7.73 (5th Sem)"
  },
  {
    institution: "Ignite Junior College",
    degree: "12th State Board",
    duration: "March 2021 – March 2023",
    score: "GPA: 9.26"
  },
  {
    institution: "Sri Chaitanya School",
    degree: "10th State Board",
    duration: "March 2020 – March 2021",
    score: "GPA: 10.0"
  }
];

export const skills = [
  { 
    title: "Languages", 
    items: ["C++", "C", "Java", "Python", "SQL", "JavaScript", "Dart"], 
    color: "text-blue-400" 
  },
  { 
    title: "Frameworks & Stacks", 
    items: ["React", "Flutter", "MERN Stack"], 
    color: "text-emerald-400" 
  },
  { 
    title: "Databases", 
    items: ["MongoDB", "Firebase", "SQFlite"], 
    color: "text-amber-400" 
  },
  { 
    title: "Tools & Libraries", 
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Git", "GitHub", "Figma", "Google Colab"], 
    color: "text-fuchsia-400" 
  }
];

export const projects = [
  {
    title: "SchedAI",
    duration: "Jan 2026 – Feb 2026",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80", 
    description: [
      "Built a full-stack academic scheduling platform handling 27 courses, 24 faculty, 10 rooms, and ~300 students with role-based dashboards.",
      "Integrated a Rust-based genetic algorithm with 23 constraints, reducing scheduling conflicts by ~85% and generating timetables in under 3 seconds.",
      "Developed REST APIs with JWT authentication and real-time analytics (utilization, gap analysis) with sub-100ms response."
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Rust", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/Eshwarnath24/SchedAI",
    liveUrl: "https://sched-ai-opal.vercel.app/",
    gradient: "from-indigo-500/20 via-indigo-500/5 to-transparent",
    theme: { text: "group-hover:text-indigo-400", border: "border-indigo-500/20", bullet: "text-indigo-500" }
  },
  {
    title: "Full-Stack Job Portal",
    duration: "Dec 2025 – Jan 2026",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    description: [
      "Developed a full-stack job platform with job posting, application tracking, and recruiter dashboards.",
      "Implemented dual authentication using Clerk and JWT with secure role-based access control.",
      "Integrated Cloudinary, Sentry, and AI features for enhanced functionality and monitoring."
    ],
    tags: ["MongoDB", "Express", "React", "Node.js", "Clerk", "Cloudinary", "Sentry"],
    githubUrl: "https://github.com/Eshwarnath24/Job-Portal",
    liveUrl: "https://job-portal-client-eight-wheat.vercel.app/",
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    theme: { text: "group-hover:text-emerald-400", border: "border-emerald-500/20", bullet: "text-emerald-500" }
  },
  {
    title: "Movie Vault (OTT Prototype)",
    duration: "Sept 2025 – Oct 2025",
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&fit=crop&w=800&q=80",
    description: [
      "Built a Flutter-based OTT-style application for movie browsing, search, and watchlist management.",
      "Integrated YouTube iFrame API for trailer playback and Firebase for authentication and real-time data.",
      "Designed responsive UI with features like continue watching and subscription interface."
    ],
    tags: ["Flutter", "Dart", "Firebase", "YouTube API"],
    githubUrl: "https://github.com/Eshwarnath24/Movie-Vault/",
    liveUrl: "https://movie-vault-omega-lac.vercel.app/",
    gradient: "from-fuchsia-500/20 via-fuchsia-500/5 to-transparent",
    theme: { text: "group-hover:text-fuchsia-400", border: "border-fuchsia-500/20", bullet: "text-fuchsia-500" }
  },
  {
    title: "Banking Cash Flow Minimizer",
    duration: "Oct 2024",
    description: [
      "Designed and implemented a graph-based solution to optimize banking cash flows using the Greedy Algorithm.",
      "Identified and eliminated redundant transactions to minimize costs and streamline money transfers."
    ],
    tags: ["Python", "Graphs", "Greedy Algorithm", "DSA"],
    githubUrl: "https://github.com/Eshwarnath24/Cash-Flow-Minimizer/",
    gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
    theme: { text: "group-hover:text-amber-400", border: "border-amber-500/20", bullet: "text-amber-500" }
  }
];

export const certifications = [
  {
    name: "Machine Learning with Python",
    date: "Jan 2025",
    url: "https://drive.google.com/file/d/19UdFGOExCUvmaNDKWVaqic7jkKfucSSU/view?usp=sharing"
  },
  {
    name: "Torch it Up – AI Journey with PyTorch",
    date: "Mar 2025",
    url: "https://drive.google.com/file/d/1RkaPcYZiFFF_xHpvbpx3EQh4tMWMqnwC/view?usp=sharing"
  }
];
