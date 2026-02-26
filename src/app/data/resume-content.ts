export interface ExternalLink {
  label: string;
  url: string;
  placeholder?: boolean;
}

export interface TimelineEntry {
  title: string;
  subtitle?: string;
  organization?: string;
  location?: string;
  periodLabel: string;
  startDate: string;
  endDate?: string | null;
  image: string;
  shortDescription: string;
  longDescription: string;
  links?: ExternalLink[];
}

export interface ResumeContent {
  profiles: {
    email: string;
    github: ExternalLink;
    linkedin: ExternalLink;
    googleScholar: ExternalLink;
  };
  workExperiences: TimelineEntry[];
  projects: TimelineEntry[];
  courses: string[];
  extracurriculars: string[];
}

export const RESUME_CONTENT: ResumeContent = {
  profiles: {
    email: 'og2186@nyu.edu',
    github: {
      label: 'GitHub Profile',
      url: 'https://github.com/ojasgr1706'
    },
    linkedin: {
      label: 'LinkedIn Profile',
      url: 'https://www.linkedin.com/in/ojas-gramopadhye'
    },
    googleScholar: {
      label: 'Google Scholar Profile',
      url: 'http://scholar.google.com/citations?user=QRH55V0AAAAJ&hl=en&oi=ao'
    }
  },
  workExperiences: [
    {
      title: 'AI Engineering Intern',
      subtitle: 'Verifiable Agent Infrastructure for Enterprise AI Governance',
      organization: 'Arbis.AI',
      periodLabel: 'Feb 2026 - Present',
      startDate: '2026-02',
      endDate: null,
      image: 'pictures/work/ml_picture.png',
      shortDescription:
        'Building infrastructure for verifiable AI agents with a focus on auditability, governance, and secure decision workflows.',
      longDescription:
        'AI engineering internship focused on production-grade agent infrastructure for enterprise governance. The work emphasizes audit trails, verification, and secure decision flow design so agent behavior is reviewable and policy-compliant in real deployments.'
    },
    {
      title: 'Teaching Assistant - Machine Learning',
      subtitle: 'Teaching Assistant Roles',
      organization: 'New York University',
      periodLabel: "Jun 2025 - Present",
      startDate: '2025-06',
      endDate: null,
      image: 'pictures/work/ml_picture.png',
      shortDescription:
        'Supports the Machine Learning course through assignment design, grading rubrics, and student guidance across core ML topics.',
      longDescription:
        'Teaching assistant role for Machine Learning under Prof. Mina Ghashami. Responsibilities include designing assignments, creating grading rubrics, evaluating implementations across classical ML and neural network topics, and helping students debug concepts and project work.'
    },
    {
      title: 'Grader - Object Oriented Programming',
      subtitle: 'Teaching Assistant Roles',
      organization: 'New York University',
      periodLabel: "Jun 2025 - Present",
      startDate: '2025-06',
      endDate: null,
      image: 'pictures/work/oop_picture.png',
      shortDescription:
        'Grades UML, Java/C++, and design pattern assignments for the Object-Oriented Programming course.',
      longDescription:
        'Grader role for Object-Oriented Programming under Prof. Hasan Aljabbouli. Evaluates UML diagrams, Java/C++ assignments, and design-pattern-heavy submissions for a large class while maintaining consistent grading standards across weekly coursework.'
    },
    {
      title: 'Research Assistant',
      subtitle: 'Detection and Mitigation of Hallucination in Generative Models',
      organization: 'IBM Research | IIT Bombay',
      periodLabel: 'May 2023 - May 2024',
      startDate: '2023-05',
      endDate: '2024-05',
      image: 'pictures/work/IBM_poster.png',
      shortDescription:
        'Designed and evaluated LLM hallucination mitigation pipelines for medical QA, contributing to EMNLP Findings 2024 work.',
      longDescription:
        'Research assistantship on hallucination mitigation in generative models for medical question answering. Built a forward-backward reasoning pipeline, created a Subjective Medical QA benchmark, and fine-tuned LLaMA-2 variants with reward-based verification to improve diagnostic accuracy and reasoning reliability.',
      links: [
        {
          label: 'Paper',
          url: 'https://arxiv.org/abs/2403.04890'
        }
      ]
    },
    {
      title: 'Data Science Intern',
      subtitle: 'Japanese OCR Pipeline',
      organization: 'Daikin',
      periodLabel: 'May 2022 - Jul 2022',
      startDate: '2022-05',
      endDate: '2022-07',
      image: 'pictures/work/Daikin_project.jpg',
      shortDescription:
        'Built an end-to-end OCR pipeline for 3,000+ Japanese documents with preprocessing, detection, and evaluation workflows.',
      longDescription:
        'Internship focused on industrial OCR for Japanese documents. Built document-cleaning and image-normalization pipelines, trained a MobileNetV3 + differentiable binarization detector, and implemented evaluation workflows to support dataset preparation and measurement on proprietary scanned records.'
    },
    {
      title: 'Data Science Associate | R&D Team',
      subtitle: 'Locust Occurrence Modeling and Prediction',
      organization: 'Dtime.ai',
      periodLabel: 'May 2021 - Jul 2021',
      startDate: '2021-05',
      endDate: '2021-07',
      image: 'pictures/work/dtime_project.png',
      shortDescription:
        'Developed spatiotemporal models for locust outbreak prediction using geospatial/weather data and ConvLSTM U-Net variants.',
      longDescription:
        'Worked on an early-warning system for locust outbreaks affecting East African agriculture. Processed long-horizon agroclimatic and vegetation data into structured grids, addressed class imbalance, and improved precision using pixel-level spatiotemporal modeling with ConvLSTM U-Net approaches.'
    }
  ],
  projects: [
    {
      title: 'Multi-subject Alignment: Neural Speech Decoding',
      subtitle: 'Graduate Research | NYU Video Lab',
      organization: 'New York University',
      periodLabel: 'Sep 2025 - Present',
      startDate: '2025-09',
      endDate: null,
      image: 'pictures/placeholders/357-3577296_mechanical-engineering-logo-hd-png-download.png',
      shortDescription:
        'Graduate research on subject-invariant neural speech decoding using contrastive alignment and adapter-based modeling across ECoG participants.',
      longDescription:
        'Research project on cross-subject neural speech decoding that learns shared representations across participants. Includes contrastive alignment, adapter-based architectures, and wav2vec2-inspired self-supervised pretraining for neural signals using masked modeling, quantization, and transformer context modeling.',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/ojasgr1706/neural-speech-decoding-placeholder',
          placeholder: true
        }
      ]
    },
    {
      title: 'Learning Tool Use Policies with Reinforcement Learning',
      subtitle: 'Course Project | Deep Learning',
      organization: 'New York University',
      periodLabel: 'Sep 2025 - Dec 2025',
      startDate: '2025-09',
      endDate: '2025-12',
      image: 'pictures/placeholders/code-icon-trendy-flat-style-isolated-coding-programming-line-icon-code-symbol-your-web-site-design-logo-app-ui-vector-illustration-eps10_721440-1997.avif',
      shortDescription:
        'Trained a language-conditioned PPO agent to learn sequential tool-use policies over a discrete action space.',
      longDescription:
        'Deep learning course project that formulates tool invocation as a Markov Decision Process. Built a language-conditioned PPO agent over actions like Retrieve, Calculate, Summarize, and Finish, and added paraphrase-robust augmentation plus step-cost rewards to encourage efficient multi-step reasoning behavior.',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/ojasgr1706/tool-use-rl-placeholder',
          placeholder: true
        }
      ]
    },
    {
      title: 'Erica: AI Tutor Agent with GraphRAG',
      subtitle: 'Course Project | Artificial Intelligence',
      organization: 'New York University',
      periodLabel: 'Sep 2025 - Dec 2025',
      startDate: '2025-09',
      endDate: '2025-12',
      image: 'pictures/placeholders/pc-system-icon-in-simple-one-line-style-vector.jpg',
      shortDescription:
        'Built a Dockerized tutor agent that combines LLMs, GraphRAG, semantic search, and a typed knowledge graph for grounded explanations.',
      longDescription:
        'AI course project for a tutoring agent that ingests multi-format course material, enriches it with LLM metadata, stores artifacts in MongoDB, and builds a GraphRAG pipeline for concept-aware retrieval. Added a UI for prerequisite-aware, reference-backed answers and subgraph visualization to improve explainability.',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/ojasgr1706/erica-graphrag-placeholder',
          placeholder: true
        }
      ]
    },
    {
      title: 'Flowsight: NYC Traffic Collision Analysis and Prediction',
      subtitle: 'Course Project | Big Data',
      organization: 'New York University',
      periodLabel: 'Jan 2025 - May 2025',
      startDate: '2025-01',
      endDate: '2025-05',
      image: 'pictures/placeholders/software-code-coding-html-icon-simple-editable-vector-graphics-isolated-white-background-illustration-graphic-web-253258452.webp',
      shortDescription:
        'Built a Kafka-MongoDB-Spark pipeline on NYC traffic/collision data and surfaced risk predictions in a React + D3 dashboard.',
      longDescription:
        'Big Data course project on traffic risk modeling in NYC. Processed millions of records using a Kafka, MongoDB, and Spark pipeline, enriched speed data with crash context using nearest-neighbor geospatial joins, then trained a Spark ML risk model and visualized high-risk zones in an interactive dashboard.',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/ojasgr1706/flowsight-placeholder',
          placeholder: true
        }
      ]
    },
    {
      title: 'Modulus: Agentic AI Assistant',
      subtitle: 'Independent Project',
      organization: 'New York University',
      periodLabel: 'Jun 2025 - Aug 2025',
      startDate: '2025-06',
      endDate: '2025-08',
      image: 'pictures/placeholders/pc-system-icon-in-simple-one-line-style-vector.jpg',
      shortDescription:
        'Built an agentic LLM assistant using MCP and LangGraph with multi-threaded conversations, tool routing, and persistent memory.',
      longDescription:
        'Independent project on an agentic AI assistant architecture using the Model Context Protocol (MCP) and LangGraph to support multi-turn, multi-threaded conversations, stateful execution, and dynamic tool routing. Added ChromaDB and MongoDB-backed memory with a FastAPI backend and React frontend for scalable interaction and retrieval.',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/ojasgr1706/modulus-agentic-assistant-placeholder',
          placeholder: true
        }
      ]
    },
    {
      title: 'Autonomous Mobility Tool for Visually Impaired',
      subtitle: 'Team Sixth Sense, NYU',
      organization: 'New York University',
      periodLabel: 'Jan 2025 - Jun 2025',
      startDate: '2025-01',
      endDate: '2025-06',
      image: 'pictures/project/sixth_sense.png',
      shortDescription:
        'Developed a vision-language scene description system to assist visually impaired users using scene parsing and LLM reasoning.',
      longDescription:
        'Team Sixth Sense project at NYU focused on assistive autonomous mobility. Built a vision-language scene description system for visually impaired users using structured scene parsing with LLM-based reasoning techniques such as few-shot prompting, chain-of-thought reasoning, and iterative verification.',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/ojasgr1706/sixth-sense-autonomous-mobility-placeholder',
          placeholder: true
        }
      ]
    },
    {
      title: 'Indic Handwriting Recognition',
      subtitle: 'R&D Project | IIT Bombay',
      organization: 'IIT Bombay',
      periodLabel: 'Spring 2022',
      startDate: '2022-01',
      endDate: '2022-05',
      image: 'pictures/placeholders/357-3577296_mechanical-engineering-logo-hd-png-download.png',
      shortDescription:
        'R&D project on handwriting recognition for Indic languages using convolutional and BiLSTM layers with CTC loss.',
      longDescription:
        'Research-oriented project exploring handwriting recognition for Indic languages. Implemented convolutional + bidirectional LSTM architectures with CTC loss, built baseline recognition pipelines, and studied related topics such as subset selection and knowledge distillation from recent literature.',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/ojasgr1706/indic-handwriting-recognition-placeholder',
          placeholder: true
        }
      ]
    },
    {
      title: 'C-like Language Compiler',
      subtitle: 'Course Project | IIT Bombay',
      organization: 'IIT Bombay',
      periodLabel: 'Spring 2021',
      startDate: '2021-01',
      endDate: '2021-05',
      image: 'pictures/placeholders/code-icon-trendy-flat-style-isolated-coding-programming-line-icon-code-symbol-your-web-site-design-logo-app-ui-vector-illustration-eps10_721440-1997.avif',
      shortDescription:
        'Built a compiler for a C-like language with Lex/Yacc, AST-based parsing, three-address code, and RTL generation.',
      longDescription:
        'Compiler construction course project implementing a full pipeline from lexical analysis and parsing to intermediate representation generation. Built scanner/parser components, generated three-address code from AST structures, and added register transfer language output for downstream assembly-like compilation steps.',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/ojasgr1706/c-like-compiler-placeholder',
          placeholder: true
        }
      ]
    },
    {
      title: 'Red Plag: Plagiarism Checker',
      subtitle: 'Course Project | IIT Bombay',
      organization: 'IIT Bombay',
      periodLabel: 'Autumn 2020',
      startDate: '2020-08',
      endDate: '2020-11',
      image: 'pictures/placeholders/pc-system-icon-in-simple-one-line-style-vector.jpg',
      shortDescription:
        'Developed a multi-language plagiarism checker with tokenization/winnowing and an Angular + Django web interface.',
      longDescription:
        'Built a plagiarism detection tool for C++, Java, and Python submissions using language-specific tokenization plus k-gram hashing and winnowing. Added an Angular frontend for visualizing results and a Django backend with storage and JWT-based authentication for controlled access.',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/ojasgr1706/red-plag-placeholder',
          placeholder: true
        }
      ]
    },
    {
      title: 'Spoof-Resistant Face Recognition',
      subtitle: 'Institute Technical Summer Project | IIT Bombay',
      organization: 'WnCC, IIT Bombay',
      periodLabel: 'Summer 2020',
      startDate: '2020-05',
      endDate: '2020-07',
      image: 'pictures/project/liveness_detection.jpg',
      shortDescription:
        'Built a liveness-aware face recognition system using CNNs, facial encodings, and classical classifiers.',
      longDescription:
        'Summer project on biometric security that distinguishes live versus spoofed faces and performs identity recognition. Combined a liveness detection model with facial encodings from landmark-based pipelines and support vector machine classification, using OpenCV-based face detection to isolate the region of interest.',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/ojasgr1706/face-liveness-placeholder',
          placeholder: true
        }
      ]
    },
    {
      title: 'Lossless High-Entropy Compression Algorithm',
      subtitle: 'Seasons of Code | IIT Bombay',
      organization: 'WnCC, IIT Bombay',
      periodLabel: 'Summer 2020',
      startDate: '2020-05',
      endDate: '2020-07',
      image: 'pictures/project/lstm.jpg',
      shortDescription:
        'Implemented sequence compression methods using LSTM-based seq2seq models for high-entropy numeric signals.',
      longDescription:
        'Project on data compression for fixed-length numeric sequences, targeting compact representations that preserve recoverability. Implemented sequence-to-sequence recurrent models with LSTM units and supporting algorithms to compress signals while maintaining one-to-one reconstruction mapping behavior.',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/ojasgr1706/high-entropy-compression-placeholder',
          placeholder: true
        }
      ]
    }
  ],
  courses: [
    'AI, ML & Intelligent Agents',
    'Deep Learning & Neural Systems',
    'Robotics, Perception & Autonomous Systems',
    'Data Engineering, Big Data & ML Systems',
    'Algorithms, Data Structures & Theory',
    'Programming Languages, Compilers & Automata',
    'Software Systems, Operating Systems & Architecture',
    'Databases, Information Systems & Data Analytics',
    'Computer Vision, Image Processing & Graphics',
    'Mathematics, Logic, Speech & Scientific Foundations'
  ],
  extracurriculars: [
    "Competed in the 36th Inter-IIT Aquatics Meet as part of the Men's Aquatics contingent (2nd position, 2022).",
    'Competed in the All India IPSC Swimming Championship (U-19) and won a silver medal (2016).',
    'Participated in the 62nd National School Swimming Championship (U-19), organized by SGFI (2016).',
    "Helped organize lectures at Techfest, Asia's largest science and technology festival (2019 - 2020).",
    'Served as ISMP Mentor at IIT Bombay, mentoring first-year students through academic and personal challenges (2022 - 2023).',
    'Served as DAMP Mentor in the CSE Department at IIT Bombay, guiding students over two academic cycles (2021 - 2023).',
    'Mentored a 5-member ML project team as ITSP Mentor at IIT Bombay (Summer 2021).'
  ]
};
