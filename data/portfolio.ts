export const portfolioData = {
  name: "Chaitanya S.",
  title: "Applied AI Engineer",
  tagline:
    "Applied AI Engineer building production-grade RAG, agentic AI, and AI platform systems.",
  subtitle:
    "I build LLM applications, retrieval-augmented generation systems, multi-agent workflows, and document-intelligence platforms with Python, FastAPI, LangGraph, LangChain, LlamaIndex, vector databases, and compliance-aware engineering practices.",
  status:
    "Open to full-time opportunities in Applied AI, Generative AI, LLM Engineering, RAG, Agentic AI, AI Platform Engineering, and AI Backend Engineering.",

  contact: {
    email: "chaitanya.aicareers@gmail.com",
    github: "https://github.com/ChaitanyaAI-Dev/",
    linkedin: "https://www.linkedin.com/in/chaitanya-s-8a1827263/",
    huggingface: "https://huggingface.co/ChaitanyaAI-Dev",
  },

  heroBadges: ["Applied AI", "RAG", "Agentic AI", "AI Platform Engineering"],

  about: {
    heading: "About Me",
    paragraphs: [
      "I'm an Applied AI Engineer focused on production-grade LLM applications, Retrieval-Augmented Generation (RAG), GraphRAG, agentic AI systems, and document-intelligence platforms.",
      "My work combines AI engineering with backend development, retrieval architecture, evaluation, guardrails, and human-in-the-loop workflows for secure and auditable AI systems.",
      "I also bring software-engineering experience in FDA-regulated pharmaceutical environments, including 21 CFR Part 11, GxP, ALCOA+, auditability, and validation-oriented system design.",
    ],
    highlights: [
      "Built RAG and document-intelligence workflows for regulated pharmaceutical content",
      "Shipped LLM-powered summarization, entity extraction, and retrieval over 50,000+ pages of compliance documentation",
      "Designed agentic AI workflows with LangGraph, MCP, tool calling, HITL approvals, and sandboxed execution",
      "Strong foundation across Python, FastAPI, PostgreSQL, vector databases, Docker, AWS, and compliance-aware systems",
    ],
  },

  skills: [
    {
      title: "Generative AI & LLMs",
      items: [
        "RAG Architecture",
        "LangChain",
        "LlamaIndex",
        "OpenAI API",
        "GPT-4/4o",
        "Hugging Face Transformers",
        "Prompt Engineering",
        "Structured Outputs",
        "Hallucination Mitigation",
      ],
    },
    {
      title: "Agentic AI & Automation",
      items: [
        "AI Agents",
        "LangGraph",
        "Multi-Agent Systems",
        "MCP (Model Context Protocol)",
        "Tool / Function Calling",
        "Task Routing",
        "Human-in-the-Loop Approvals",
        "Sandboxed Execution",
      ],
    },
    {
      title: "Retrieval & NLP",
      items: [
        "Embeddings",
        "Semantic Search",
        "Semantic Chunking",
        "Hybrid Search",
        "BM25",
        "GraphRAG",
        "Dense Vector Retrieval",
        "Metadata Filtering",
        "Reranking",
        "Citation-Grounded Generation",
      ],
    },
    {
      title: "AI Evaluation & Safety",
      items: [
        "Phoenix",
        "LangSmith",
        "Groundedness Evaluation",
        "Retrieval Precision",
        "NeMo Guardrails",
        "Llama Guard",
        "Prompt-Injection Defense",
        "Audit Logging",
      ],
    },
    {
      title: "Backend & Infrastructure",
      items: [
        "Python",
        "SQL",
        "FastAPI",
        "REST APIs",
        "Async Architecture",
        "Pydantic",
        "Streamlit",
        "Pandas",
        "NumPy",
        "PostgreSQL",
        "ChromaDB",
        "Pinecone",
        "Docker",
        "AWS EC2/S3",
        "CI/CD",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Security & Compliance",
      items: [
        "RBAC",
        "FDA 21 CFR Part 11",
        "GxP",
        "ALCOA+",
        "Regulatory Document Workflows",
        "SOP",
        "CAPA",
        "Deviation Workflows",
        "Validation-Oriented Systems",
      ],
    },
  ],

  experience: [
    {
      role: "Founder & Lead AI Engineer / Architect",
      company: "SPACTR AI Labs LLC",
      location: "Milwaukee, WI (Remote)",
      dates: "June 2026 – Present",
      techStack:
        "Python, FastAPI, LangGraph, MCP, LangChain, LlamaIndex, ChromaDB, Pinecone, NeMo Guardrails, Llama Guard, Streamlit, Docker, AWS EC2/S3, OpenAI API, Hugging Face",
      groups: [
        {
          title:
            "PharmaAI Platform — Regulatory, Summarization & Compliance Intelligence System",
          bullets: [
            "Architected an end-to-end RAG pipeline using LlamaIndex and custom ingestion workflows covering semantic chunking, vector indexing, reranking, and citation generation for FDA guidance documents and regulatory PDFs.",
            "Extended retrieval precision using hybrid search, dense vectors, BM25, and GraphRAG for relationship-aware query resolution across regulatory, SOP, CAPA, and deviation workflows, evaluating groundedness and latency through Phoenix, LangSmith, and custom evaluation suites.",
            "Engineered a compliance-focused QA assistant integrating NeMo Guardrails, Llama Guard, prompt-injection defense, structured outputs, mandatory inline citations, and evidence-backed answer generation.",
            "Consolidated retrieval, summarization, compliance QA, and document-intelligence workflows behind shared asynchronous FastAPI services with RBAC, audit logging, and validation review controls.",
          ],
        },
        {
          title:
            "Agentic AI Orchestration Platform — Local-First & Private-Cloud Multi-Agent System",
          bullets: [
            "Built a local-first, privacy-focused multi-agent orchestration platform on LangGraph using deterministic state-machine control, modular agents, dynamic task routing, and execution planning.",
            "Implemented tool/function calling with human-in-the-loop approval gates and sandboxed execution runtimes so operators explicitly authorize sensitive AI actions before execution.",
            "Integrated external tools through Model Context Protocol (MCP) servers, establishing a standardized interface for agents to query local files, PostgreSQL databases, REST APIs, and external systems.",
            "Developed a database-backed wait-state pattern that serializes agent state and memory to PostgreSQL during approval pauses and resumes execution without context loss.",
          ],
        },
      ],
    },
    {
      role: "AI/ML Engineer",
      company: "SolutionsMax Technology Services Inc",
      location: "Sacramento, CA (Remote)",
      dates: "May 2024 – May 2026",
      techStack:
        "Python, FastAPI, OpenAI API, LangChain, Pinecone, PostgreSQL, Docker, AWS EC2/S3, REST APIs, CI/CD",
      bullets: [
        "Shipped production LLM-powered summarization, entity extraction, and knowledge-retrieval features for enterprise regulatory documentation, processing 50,000+ pages of compliance text.",
        "Built retrieval-based AI capabilities into enterprise backend services through RESTful FastAPI microservices, maintaining sub-300 ms API response latency under high-volume query loads.",
        "Designed and optimized vector-search indexing pipelines using Pinecone and PostgreSQL, including custom chunking, embedding workflows, and metadata filtering to improve retrieval accuracy.",
        "Implemented prompt-engineering patterns, Pydantic-based structured JSON outputs, and validation guardrails to reduce hallucination risk across automated compliance workflows.",
        "Built preprocessing and validation workflows that converted unstructured regulatory content into retrieval-ready chunks and Pydantic-validated structured outputs for downstream AI services.",
        "Containerized AI microservices using Docker and deployed scalable API endpoints on AWS EC2 and S3 with CI/CD practices for repeatable releases.",
        "Partnered cross-functionally with product and engineering teams to design automated document-intelligence workflows, reducing manual regulatory review cycles by 35%.",
      ],
    },
    {
      role: "Software Engineer — Regulated Data Systems",
      company: "SolutionsMax Technology Services Pvt Ltd",
      location: "Visakhapatnam, India",
      dates: "June 2020 – July 2023",
      techStack: "Python, SQL, PostgreSQL, ETL Pipelines, Data Modeling, QA Automation",
      bullets: [
        "Engineered Python and SQL data and reporting pipelines for FDA-regulated systems aligned with 21 CFR Part 11 and ALCOA+ data-integrity standards.",
        "Designed relational data models and automated ETL workflows that improved data traceability and auditability across pharmaceutical product-lifecycle systems.",
        "Built validation, transformation, and reporting workflows for structured enterprise datasets supporting regulatory, quality, and compliance processes.",
        "Automated validation and reporting processes, reducing manual QA testing overhead by 40% and strengthening audit readiness across regulated datasets.",
        "Authored functional specifications and technical design documents mapping regulatory mandates and business requirements into implementation-ready engineering deliverables.",
      ],
    },
  ],

  featuredProject: {
    title: "PharmaAI Platform",
    subtitle:
      "Regulatory, Summarization, and Compliance Intelligence System",
    summary:
      "A modular pharmaceutical AI platform combining regulatory knowledge retrieval, document summarization, compliance-focused question answering, and citation-backed generation in a single architecture.",
    problem:
      "Pharmaceutical and regulated teams work across fragmented guidance files, SOPs, CAPA records, deviation documents, and controlled PDFs. Finding reliable, source-backed answers is slow when information is spread across many document types and workflows.",
    solution:
      "PharmaAI Platform brings ingestion, semantic chunking, embeddings, vector retrieval, hybrid search, reranking, GraphRAG, summarization, structured outputs, and compliance assistance into one modular system designed for regulated document workflows.",
    techStack: [
      "Python",
      "FastAPI",
      "Streamlit",
      "ChromaDB",
      "Pinecone",
      "LangChain",
      "LlamaIndex",
      "OpenAI API",
      "Hugging Face",
      "Phoenix",
      "LangSmith",
      "Docker",
      "AWS EC2/S3",
    ],
    features: [
      {
        title: "Regulatory Retrieval",
        description:
          "End-to-end RAG pipeline covering ingestion, semantic chunking, embeddings, vector indexing, reranking, and citation-backed generation, extended with hybrid search and GraphRAG for relationship-aware retrieval.",
      },
      {
        title: "Document Summarization",
        description:
          "Summarization workflows that support rapid understanding of FDA guidance documents, regulatory PDFs, and controlled pharmaceutical content.",
      },
      {
        title: "Compliance Assistance",
        description:
          "Compliance-focused assistant for SOP, CAPA, deviation, regulatory, and quality workflows with structured outputs, evidence-backed responses, and inline citations.",
      },
      {
        title: "Evaluation & Governance",
        description:
          "Groundedness, retrieval precision, and latency evaluation through Phoenix, LangSmith, and custom evaluation suites, with guardrails, audit logging, RBAC, and validation review controls.",
      },
    ],
    github: "https://github.com/ChaitanyaAI-Dev/pharma-ai-platform",
    demo: "https://huggingface.co/spaces/ChaitanyaAI-Dev/pharma-ai-platform",
  },

  projects: [
    {
      title: "Agentic AI Orchestration Platform",
      description:
        "Local-first multi-agent automation platform built on LangGraph with deterministic state-machine orchestration, MCP tool integration, sandboxed execution, and human-in-the-loop approval checkpoints.",
      tags: ["Agentic AI", "LangGraph", "MCP", "Human-in-the-Loop"],
      github: "",
      demo: "",
    },
    {
      title: "PharmaAI Platform",
      description:
        "Regulatory, summarization, and compliance intelligence platform combining RAG, hybrid search, GraphRAG, structured outputs, citations, guardrails, and evaluation workflows.",
      tags: ["RAG", "GraphRAG", "Compliance AI", "Document Intelligence"],
      github: "https://github.com/ChaitanyaAI-Dev/pharma-ai-platform",
      demo: "https://huggingface.co/spaces/ChaitanyaAI-Dev/pharma-ai-platform",
    },
    {
      title: "PharmaRAG",
      description:
        "RAG-based regulatory retrieval system for grounded, citation-backed question answering over FDA guidance documents and regulatory PDFs.",
      tags: ["RAG", "Semantic Retrieval", "Regulatory AI"],
      github: "https://github.com/ChaitanyaAI-Dev/pharmarag-mvp",
      demo: "https://huggingface.co/spaces/ChaitanyaAI-Dev/pharmarag-mvp",
    },
    {
      title: "PharmaSummarizer",
      description:
        "Document-intelligence workflow that generates summaries and surfaces key insights from pharmaceutical and regulatory PDFs.",
      tags: ["Summarization", "Document Intelligence", "LLMs"],
      github: "https://github.com/ChaitanyaAI-Dev/pharmasummarizer-mvp",
      demo: "https://huggingface.co/spaces/ChaitanyaAI-Dev/pharmasummarizer-mvp",
    },
    {
      title: "CompliBot",
      description:
        "Compliance-focused assistant designed for SOP understanding, CAPA procedures, deviation handling, and quality-process interpretation using structured outputs and grounded responses.",
      tags: ["Compliance AI", "SOPs", "Quality Systems"],
      github: "https://github.com/ChaitanyaAI-Dev/complibot-mvp",
      demo: "https://huggingface.co/spaces/ChaitanyaAI-Dev/complibot-mvp",
    },
    {
      title: "Backend AI Workflows",
      description:
        "Backend-oriented AI services and APIs built with Python and FastAPI to support retrieval workflows, document processing, structured outputs, and production-style integrations.",
      tags: ["Python", "FastAPI", "Backend AI"],
      github: "https://github.com/ChaitanyaAI-Dev/",
      demo: "",
    },
  ],

  demos: [
    {
      title: "PharmaAI Platform — Live",
      description:
        "Try the live RAG, summarization, and compliance assistant running on Hugging Face Spaces.",
      link: "https://huggingface.co/spaces/ChaitanyaAI-Dev/pharma-ai-platform",
    },
    {
      title: "More Prototypes",
      description:
        "Browse my Hugging Face Spaces, model demos, and works in progress.",
      link: "https://huggingface.co/ChaitanyaAI-Dev",
    },
  ],

  resume: {
    text: "Download my latest resume for a detailed view of my experience across Applied AI, Generative AI, RAG systems, agentic workflows, AI platform engineering, backend engineering, document intelligence, and regulated pharmaceutical software.",
    buttonLabel: "Download Resume",
    filePath: "/Chaitanya_S_Applied_AI_Engineer_Resume.pdf",
  },

  contactSection: {
    heading: "Contact",
    text: "I'm currently open to full-time opportunities in Applied AI, Generative AI, LLM Engineering, RAG, Agentic AI, AI Platform Engineering, and AI Backend Engineering.",
    closing:
      "Interested in collaborating, hiring, or discussing AI systems for regulated workflows? Let's connect.",
  },

  footer: {
    text: "Building production-grade RAG, agentic AI, and AI platform systems for regulated and knowledge-heavy environments.",
  },
};
