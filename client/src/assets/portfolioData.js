export const NAV_ITEMS = ["About", "Experience", "Projects", "Certifications", "Contact"];

export const EDUCATION = [
	{
		institution: "Amrita Vishwa Vidyapeetham",
		degree: "B.Tech Computer Science Engineering",
		duration: "August 2023 - May 2027",
		score: "CGPA: 7.73 (5th Sem)",
	},
	{
		institution: "Ignite Junior College",
		degree: "12th State Board",
		duration: "March 2021 - March 2023",
		score: "GPA: 9.26",
	},
	{
		institution: "Sri Chaitanya School",
		degree: "10th State Board",
		duration: "March 2020 - March 2021",
		score: "GPA: 10.0",
	},
];

export const SKILLS = [
	{
		title: "Languages",
		iconKey: "Code2",
		items: ["C++", "C", "Java", "Python", "SQL", "JavaScript", "Dart"],
		color: "text-blue-400",
	},
	{
		title: "Frameworks & Stacks",
		iconKey: "Layout",
		items: ["React", "Flutter", "MERN Stack (MongoDB, Express, React, Node.js)"],
		color: "text-emerald-400",
	},
	{
		title: "Databases",
		iconKey: "Database",
		items: ["MongoDB", "Firebase", "SQFlite"],
		color: "text-amber-400",
	},
	{
		title: "Libraries & Technologies",
		iconKey: "GitBranch",
		items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Flexbox", "Git"],
		color: "text-fuchsia-400",
	},
	{
		title: "Tools",
		iconKey: "Server",
		items: ["GitHub", "Figma", "Google Colab", "VS Code"],
		color: "text-rose-400",
	},
];

export const PROJECTS = [
	{
		id: "schedai",
		title: "SchedAI",
		duration: "Jan 2026 - Feb 2026",
		description: [
			"Built a full-stack academic scheduling platform handling 27 courses, 24 faculty, 10 rooms, and ~300 students with role-based dashboards.",
			"Integrated a Rust-based genetic algorithm with 23 constraints, reducing scheduling conflicts by ~85% and generating timetables in under 3 seconds.",
			"Developed REST APIs with JWT authentication and real-time analytics (utilization, gap analysis) with sub-100ms response.",
		],
		tags: ["React", "Node.js", "Express", "MongoDB", "Rust", "JWT", "Tailwind CSS"],
		githubUrl: "https://github.com/Eshwarnath24/SchedAI",
		liveUrl: "https://sched-ai-opal.vercel.app/",
		isMobile: false,
	},
	{
		id: "jobportal",
		title: "Full-Stack Job Portal",
		duration: "Dec 2025 - Jan 2026",
		description: [
			"Developed a full-stack job platform with job posting, application tracking, and recruiter dashboards.",
			"Implemented dual authentication using Clerk and JWT with secure role-based access control.",
			"Integrated Cloudinary, Sentry, and AI features for enhanced functionality and monitoring.",
		],
		tags: ["MongoDB", "Express", "React", "Node.js", "Clerk", "Cloudinary", "Sentry"],
		githubUrl: "https://github.com/Eshwarnath24/Job-Portal",
		liveUrl: "https://job-portal-client-eight-wheat.vercel.app/",
		isMobile: false,
	},
	{
		id: "movievault",
		title: "Movie Vault (OTT Prototype)",
		duration: "Sept 2025 - Oct 2025",
		description: [
			"Built a Flutter-based OTT-style application for movie browsing, search, and watchlist management.",
			"Integrated YouTube iFrame API for trailer playback and Firebase for authentication and real-time data.",
			"Designed responsive UI with features like continue watching and subscription interface.",
		],
		tags: ["Flutter", "Dart", "Firebase", "YouTube API"],
		githubUrl: "https://github.com/Eshwarnath24/Movie-Vault/",
		liveUrl: "https://movie-vault-omega-lac.vercel.app/",
		isMobile: true,
	},
	{
		id: "banking",
		title: "Banking Cash Flow Minimizer",
		duration: "Oct 2024",
		description: [
			"Designed and implemented a graph-based solution to optimize banking cash flows using the Greedy Algorithm.",
			"Identified and eliminated redundant transactions to minimize costs and streamline money transfers.",
		],
		tags: ["Python", "Graphs", "Greedy Algorithm", "DSA"],
		githubUrl: "https://github.com/Eshwarnath24/Cash-Flow-Minimizer/",
		isMobile: false,
	},
];

export const CERTIFICATIONS = [
	{
		name: "Machine Learning with Python",
		date: "Jan 2025",
		url: "https://drive.google.com/file/d/19UdFGOExCUvmaNDKWVaqic7jkKfucSSU/view?usp=sharing",
	},
	{
		name: "Torch it Up - AI Journey with PyTorch",
		date: "Mar 2025",
		url: "https://drive.google.com/file/d/1RkaPcYZiFFF_xHpvbpx3EQh4tMWMqnwC/view?usp=sharing",
	},
];
