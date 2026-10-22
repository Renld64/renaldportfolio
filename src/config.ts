interface Project {
    id: number;
    title: string;
    category: string;
    technologies: string;
    image: string;
    description: string;
    link: string;
    gallery?: string[];
    video?: string;
}

export const config = {
    developer: {
        name: "John Renald",
        fullName: "John Renald Hidalgo",
        title: "AI & Full-Stack Developer",
        description: "AI & Full-Stack Developer building intelligent systems and modern web applications. Passionate about machine learning, deep learning, and creating next-gen autonomous agents."
    },
    social: {
        github: "Renld64",
        email: "renaldmain02@gmail.com",
        location: "Philippines"
    },
    about: {
        title: "About Me",
        description: "I am a dedicated IT Support professional with hands-on experience in troubleshooting hardware, software, and network issues, combined with strong skills in Quality Assurance and AI Automation. I specialize in providing timely technical solutions, ensuring system reliability through structured testing, and building intelligent automation workflows that minimize downtime and manual work. Known for my problem-solving ability, attention to detail, patience, and clear communication with non-technical users, I am committed to excellent customer service while improving processes through quality standards and AI-driven automation. I continuously expand my technical expertise to support the efficiency and growth of the team."
    },
    experiences: [
        {
            position: "Quality Assurance Role",
            company: "Quantum Metal Philippines INC",
            period: "Jan 2026 - Present",
            location: "Philippines",
            description: "A Quality Assurance (QA) professional is responsible for ensuring that products, services, or processes meet defined quality standards before they reach customers or go into production.",
            responsibilities: [],
            technologies: []
        },
        {
            position: "Information Technology Support Role",
            company: "ATAW MARKETING",
            period: "2024",
            location: "",
            description: "I am an experienced IT Support professional skilled in troubleshooting hardware, software, and network issues. I work with Windows, Office 365, Active Directory, and remote desktop tools to provide fast and clear support to both technical and non-technical users.\n\nI focus on solving problems quickly, reducing downtime, and keeping systems running smoothly. With strong communication and customer service skills, I aim to deliver high user satisfaction and help the organization grow.",
            responsibilities: [
                "Troubleshooting hardware, software, and network issues",
                "Providing support to technical and non-technical users",
                "Reducing downtime and keeping systems running smoothly"
            ],
            technologies: ["Windows", "Office 365", "Active Directory", "Remote Desktop"]
        },
        {
            position: "IT Support Role",
            company: "Araullo University",
            period: "2022",
            location: "",
            description: "Assisted in troubleshooting hardware, software, and basic network issues for end-users.",
            responsibilities: [
                "Assisted in troubleshooting hardware, software, and basic network issues for end-users."
            ],
            technologies: []
        },
        {
            position: "Microsoft Office",
            company: "Begin Learning",
            period: "2021",
            location: "Bangladesh",
            description: "Started my journey into the digital world by learning Microsoft Office tools. This foundational step introduced me to computers and sparked my curiosity for technology.",
            responsibilities: [
                "Learning Microsoft Word, Excel, and PowerPoint",
                "Creating documents and presentations",
                "Understanding basic computer operations",
                "Building foundational digital skills"
            ],
            technologies: ["MS Word", "MS Excel", "MS PowerPoint", "Computer Basics"]
        }
    ],
    projects: [
        {
            id: 10,
            title: "Aurum Platform",
            category: "Current Work / Quality Assurance Tester",
            technologies: "Software Testing, Quality Assurance",
            image: "/images/aurum-platform.png",
            description: "I currently work as a tester on Aurum Platform, contributing to the platform's quality assurance.",
            link: "https://app.aurumplatform.xyz/signin"
        },
        {
            id: 9,
            title: "Automation Testing",
            category: "Quality Assurance / Test Automation",
            technologies: "Playwright",
            image: "/images/playwright-logo.svg",
            description: "Automated testing for web applications and backend services, focused on repeatable checks, reliable workflows, and regression coverage.",
            link: "https://github.com/Renld64/playwright-staging"
        },
        {
            id: 1,
            title: "3D Shortfilm Animation",
            category: "Capstone / 3D Animation",
            technologies: "Blender",
            image: "/images/shortfilm-1.png",
            gallery: ["/images/shortfilm-1.png", "/images/shortfilm-2.png", "/images/shortfilm-3.png", "/images/shortfilm-4.png"],
            description: "3D Short Film Animation is our capstone project: a short film set during the pandemic. It follows five companions facing challenges in their studies and shows that cheating is not the way to succeed.",
            link: ""
        },
        {
            id: 4,
            title: "Lakbay Transit",
            category: "Mobile App / Ticket Booking",
            technologies: "Android Studio",
            image: "/images/lakbay-transit-1.png",
            gallery: ["/images/lakbay-transit-1.png", "/images/lakbay-transit-2.png", "/images/lakbay-transit-3.png", "/images/lakbay-transit-4.png", "/images/lakbay-transit-5.png", "/images/lakbay-transit-6.png"],
            description: "Lakbay Transit is a modern bus company in the Philippines, operating routes connecting Metro Manila to Central Luzon and Northern Luzon. The Lakbay Transit mobile application simplifies the task of maintaining a good connection between passengers and bus drivers.",
            link: ""
        },
        {
            id: 6,
            title: "RedxChess",
            category: "AI / Game Engine",
            technologies: "Python, C++, Neural Networks, Bitboards, UCI Protocol",
            image: "/images/RedxChess.png",
            description: "A high-performance chess engine rated 3640 ELO. Features advanced search algorithms, neural network evaluation, and optimized bitboard representation for lightning-fast move generation.",
            link: "/play"
        }
    ] as Project[],
    contact: {
        email: "renaldmain02@gmail.com",
        github: "https://github.com/Renld64",
        jobstreet: "https://ph.jobstreet.com/profiles/johnrenald-hidalgo-VdY85V8p7p",
        linkedin: "https://linkedin.com/in/red1-for-hek",
        twitter: "https://x.com/red_1_ul",
        facebook: "https://www.facebook.com/john.renaldz.cortez",
        instagram: "https://www.instagram.com/__renald64/"
    },
    skills: {
        support: {
            title: "IT SUPPORT",
            description: "Keeping systems reliable and users connected",
            details: "Troubleshooting hardware, software, and network issues to reduce downtime and keep systems running smoothly. Providing clear, patient support to technical and non-technical users, with hands-on experience in Windows, Office 365, Active Directory, and remote desktop tools.",
            tools: ["Windows", "Office 365", "Active Directory", "Remote Desktop", "Hardware Troubleshooting", "Software Support", "Network Troubleshooting", "Customer Service"]
        },
        develop: {
            title: "AI AUTOMATION",
            description: "Building intelligent workflows & autonomous systems",
            details: "Designing and deploying end-to-end AI-powered automations that eliminate repetitive work. Specializing in LLM agents, workflow orchestration, RAG pipelines, and multi-system integrations that run reliably in production.",
            tools: ["Python", "LangChain", "LangGraph", "n8n", "OpenAI / Claude APIs", "FastAPI", "RAG", "Vector DBs", "Zapier / Make", "Prompt Engineering", "Webhooks & APIs"]
        },
        design: {
            title: "QUALITY ASSURANCE",
            description: "Guaranteeing reliable & production-ready systems",
            details: "Designing automated testing strategies for AI agents, web applications, and backend services. Focused on unit/integration testing, LLM output evaluation, performance benchmarking, and continuous quality gates in CI/CD pipelines.",
            tools: ["Pytest", "Playwright", "Selenium", "Jest", "LangSmith", "Postman", "CI/CD", "Load Testing", "Model Evals", "Test Automation"]
        }
    }
};


