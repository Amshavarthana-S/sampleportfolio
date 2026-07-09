// Amshavarthana Sreesivanathasarma - ML & Data Science Portfolio

export const personalInfo = {
  name: "Amshavarthana",
  fullName: "Amshavarthana Sreesivanathasarma",
  title: [
    "Aspiring ML Engineer",
    "Data Science Student",
    "Tech Writer on Medium"
  ],
  tagline: "Turning data into decisions — one model at a time.",
  bio: "3rd-year Software Engineering undergraduate at the University of Kelaniya, passionate about Data Science and Machine Learning. I build predictive models, write beginner-friendly AI/ML articles on Medium, and am actively preparing for an ML/Data Science internship.",
  email: "amshasarma@gmail.com",
  phone: "+94 755 710 942",
  location: "Colombo, Sri Lanka",
  university: "University of Kelaniya · 3rd Year",
  photo: "/mypic.jpeg",
  social: {
    github: "https://github.com/Amshavarthana-S",
    linkedin: "https://www.linkedin.com/in/amshavarthana-sreesivanathasarma/",
    medium: "https://medium.com/@amsha09sarma11",
    email: "mailto:amshasarma@gmail.com"
  }
};

export const projects = [
  {
    id: 1,
    title: "EduMind AI",
    description: "Smart student companion for Sri Lankan A/L & university students. Tracks studies, manages tasks, monitors wellness, and provides AI-powered support via Groq LLaMA 3.3 70B — in English, Tamil, or Sinhala.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    tags: ["Python", "Streamlit", "Groq LLaMA 3.3", "SQLite", "Plotly"],
    badge: "AI + Web App",
    category: "ml",
    github: "https://github.com/Amshavarthana-S/EduMindAI",
    demo: "https://edumindai-studybuddy.streamlit.app"
  },
  {
    id: 2,
    title: "Alexa Voice Assistant",
    description: "AI-powered voice assistant using OpenAI Whisper for speech-to-text, MLP Neural Network for intent classification, and TF-IDF vectorization. Supports 20+ commands with a glassmorphic Streamlit UI.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tags: ["Python", "OpenAI Whisper", "scikit-learn MLP", "TF-IDF", "Streamlit"],
    badge: "Voice AI + Deep Learning",
    category: "ml",
    github: "https://github.com/Amshavarthana-S/alexa-voice-assistant",
    demo: "#"
  },
  {
    id: 3,
    title: "Flight Fare Prediction",
    description: "End-to-end ML pipeline predicting airline ticket prices using regression models with feature engineering on real-world flight datasets. Deployed as a Flask web app.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    tags: ["Python", "scikit-learn", "Random Forest", "Flask", "Pandas"],
    badge: "ML + Web App",
    category: "ml",
    github: "https://github.com/Amshavarthana-S",
    demo: "#"
  },
  {
    id: 4,
    title: "Uber Ride Fare Prediction",
    description: "ML model predicting Uber fares based on pickup/drop-off coordinates and temporal features using Haversine formula for geospatial distance engineering.",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&h=600&fit=crop",
    tags: ["Python", "scikit-learn", "Flask", "Pandas", "NumPy"],
    badge: "ML + Web App",
    category: "ml",
    github: "https://github.com/Amshavarthana-S/end-to-end-uber-fare-prediction",
    demo: "#"
  },
  {
    id: 5,
    title: "Employee Attrition Prediction",
    description: "ML system predicting employee attrition risk paired with Power BI dashboards for HR decision-making and workforce analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Python", "ML", "Power BI", "scikit-learn", "Pandas"],
    badge: "ML + Power BI",
    category: "ml",
    github: "https://github.com/Amshavarthana-S/HR-Employee-Attrition-Dashboard",
    demo: "#"
  },
  {
    id: 6,
    title: "Fuel vs Food Price Analysis",
    description: "Exploratory data analysis uncovering the relationship between fuel and food prices using real datasets, with trend visualizations and pattern insights.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["Python", "Pandas", "Seaborn", "Matplotlib", "EDA"],
    badge: "Data Analysis",
    category: "data",
    github: "https://github.com/Amshavarthana-S/fuel-food-price-analysis",
    demo: "#"
  },
  {
    id: 7,
    title: "Movie Recommendation System",
    description: "A comprehensive movie recommendation engine suggesting movies based on user preferences and content similarity, built with Python, Streamlit, and scikit-learn.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
    tags: ["Python", "Machine Learning", "Streamlit", "scikit-learn", "Pandas"],
    badge: "ML + Web App",
    category: "ml",
    github: "https://github.com/Amshavarthana-S/movie-recommendation-app",
    demo: "#"
  },
  {
    id: 8,
    title: "Password Strength Classifier using NLP",
    description: "A machine learning model predicting password strength by combining character-level NLP feature extraction (TF-IDF) with hand-engineered structural features using Logistic Regression.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
    tags: ["Python", "scikit-learn", "NLP", "TF-IDF", "Logistic Regression"],
    badge: "ML + NLP",
    category: "ml",
    github: "https://github.com/Amshavarthana-S/password-strength-nlp",
    demo: "#"
  }
];

export const certifications = [
  {
    id: 2,
    title: "The Complete Python Masterclass",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-724f31db-9bdf-4bf9-aa9c-e205825f4f2e/"
  },
  {
    id: 3,
    title: "Statistics Foundations",
    issuer: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/certificates/b8a950afa8ebbbfa4693412cb5063ae26723cf4beda6b0244cc23261f05d682b"
  },
  {
    id: 4,
    title: "Data Analytics Course",
    issuer: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/certificates/0a42aad6a57c9b1bf92c354733cc77b4b6ce6f4ae7c50faa8b27188f4ffea37c"
  },
  {
    id: 5,
    title: "Machine Learning with Python",
    issuer: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning/certificates/ba1b96d02def625d38017d3938e7a5941b8787493608de0582b7c8e7c47a725d?trk=share_certificate"
  }
];

export const articles = [
  {
    id: 1,
    title: "RAG Explained: Retrieval-Augmented Generation for Beginners",
    description: "A beginner-friendly breakdown of how RAG combines retrieval systems with generative LLMs to reduce hallucinations and ground outputs in real documents.",
    readTime: "7 min read",
    tag: "LLMs",
    link: "https://medium.com/@amshavarthana"
  },
  {
    id: 2,
    title: "Small Language Models: The Quiet Revolution",
    description: "Exploring how smaller, fine-tuned models are giving large LLMs a run for their money in on-device and domain-specific tasks.",
    readTime: "6 min read",
    tag: "AI Trends",
    link: "https://medium.com/@amshavarthana"
  },
  {
    id: 3,
    title: "The 3 Types of Machine Learning (And When to Use Each)",
    description: "Supervised, unsupervised, and reinforcement learning demystified with real-world analogies anyone can follow.",
    readTime: "5 min read",
    tag: "ML Basics",
    link: "https://medium.com/@amshavarthana"
  },
  {
    id: 4,
    title: "Python for Data Science: Your First 30 Days",
    description: "A practical roadmap covering NumPy, Pandas, Matplotlib, and scikit-learn — the four libraries every ML beginner needs to master.",
    readTime: "8 min read",
    tag: "Python",
    link: "https://medium.com/@amshavarthana"
  },
  {
    id: 5,
    title: "How Neural Networks Actually Learn",
    description: "Backpropagation, gradients, and loss functions explained from first principles — no PhD required.",
    readTime: "9 min read",
    tag: "Deep Learning",
    link: "https://medium.com/@amshavarthana"
  }
];

export const skills = [
  {
    category: "Machine Learning",
    items: [
      { name: "scikit-learn", level: 85 },
      { name: "XGBoost", level: 82 },
      { name: "MLP Neural Network", level: 78 },
      { name: "Decision Trees / Random Forest", level: 85 },
      { name: "Feature Engineering", level: 80 }
    ]
  },
  {
    category: "Data Science",
    items: [
      { name: "Python", level: 90 },
      { name: "Pandas & NumPy", level: 88 },
      { name: "Matplotlib / Seaborn / Plotly", level: 82 },
      { name: "Power BI", level: 75 },
      { name: "SQL (MySQL, SQLite)", level: 80 }
    ]
  },
  {
    category: "AI & Tools",
    items: [
      { name: "Groq LLaMA 3.3 70B", level: 80 },
      { name: "OpenAI Whisper", level: 78 },
      { name: "Tavily API", level: 75 },
      { name: "Streamlit / Flask", level: 85 },
      { name: "TF-IDF / NLP", level: 75 }
    ]
  },
  {
    category: "Software Engineering",
    items: [
      { name: "Java & Spring Boot", level: 75 },
      { name: "JavaScript", level: 80 },
      { name: "HTML / CSS", level: 85 },
      { name: "Git / GitHub", level: 88 },
      { name: "REST APIs", level: 82 }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "VS Code", level: 90 },
      { name: "Jupyter Notebook", level: 85 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Excel", level: 80 }
    ]
  }
];
