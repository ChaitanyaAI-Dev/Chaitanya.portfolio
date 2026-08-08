export const portfolioData = {
  name: "Chaitanya S.",
  title: "Applied AI Engineer",
  tagline:
    "Applied AI Engineer building LLM applications, RAG systems, agentic workflows, and AI platform infrastructure.",
  subtitle:
    "I design and build AI-powered software systems with Python, FastAPI, LangGraph, LangChain, LlamaIndex, vector databases, guardrails, and evaluation workflows — focused on grounded, auditable, document-intelligence applications.",
  status:
    "Open to Applied AI, Generative AI, LLM Engineering, RAG, Agentic AI, AI Platform Engineering, AI Backend Engineering, and AI Solutions Engineering roles.",

  contact: {
    email: "chaitanya.aicareers@gmail.com",
    github: "https://github.com/ChaitanyaAI-Dev/",
    linkedin: "https://www.linkedin.com/in/chaitanyaai-dev/",
    huggingface: "https://huggingface.co/ChaitanyaAI-Dev",
  },

  heroBadges: [
    "Applied AI",
    "LLM Applications",
    "RAG",
    "Agentic AI",
    "AI Platform Engineering",
  ],

  about: {
    heading: "Building practical AI systems across retrieval, agents, and backend platforms.",
    paragraphs: [
      "I am an Applied AI Engineer focused on production-grade LLM applications, Retrieval-Augmented Generation (RAG), agentic AI workflows, document intelligence, and AI platform engineering.",
      "My work combines LLM applications, backend APIs, retrieval pipelines, vector databases, structured outputs, evaluation, guardrails, and human-in-the-loop workflows to turn AI capabilities into usable software systems.",
      "I bring software-engineering experience in FDA-regulated pharmaceutical environments, including 21 CFR Part 11, GxP, ALCOA+, auditability, and validation-oriented system design — useful for AI systems that need to be grounded, secure, and reviewable.",
    ],
    highlights: [
      "Applied AI systems spanning RAG, document intelligence, summarization, compliance QA, and agentic workflows",
      "LLM-powered summarization, entity extraction, and retrieval over 50,000+ pages of compliance documentation",
      "Agentic AI architecture with LangGraph, MCP, tool calling, HITL approvals, sandboxed execution, and persistent state",
      "Backend AI foundation across Python, FastAPI, PostgreSQL, vector databases, Docker, AWS, and compliance-aware workflows",
    ],
  },

  skills: [
    {
      title: "AI / LLM Engineering",
      items: [
        "Generative AI",
        "LLM Applications",
        "RAG Architecture",
        "LangChain",
        "LlamaIndex",
        "OpenAI API",
        "GPT-4/4o",
        "Hugging Face",
        "Prompt Engineering",
        "Structured Outputs",
        "Hallucination Mitigation",
      ],
    },
    {
      title: "Retrieval & Document Intelligence",
      items: [
        "Embeddings",
        "Semantic Search",
        "Semantic Chunking",
        "Hybrid Search",
        "BM25",
        "GraphRAG",
        "Vector Databases",
        "Metadata Filtering",
        "Reranking",
        "Citation-Grounded Generation",
        "Document Summarization",
      ],
    },
    {
      title: "Agentic AI & Automation",
      items: [
        "AI Agents",
        "LangGraph",
        "Multi-Agent Systems",
        "MCP",
        "Tool / Function Calling",
        "Task Routing",
        "Human-in-the-Loop Approvals",
        "Sandboxed Execution",
        "Agent State Persistence",
      ],
    },
    {
      title: "Backend & Platform Engineering",
      items: [
        "Python",
        "SQL",
        "FastAPI",
        "REST APIs",
        "Async Architecture",
        "Pydantic",
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
      title: "Evaluation, Safety & Governance",
      items: [
        "Phoenix",
        "LangSmith",
        "Groundedness Evaluation",
        "Retrieval Precision",
        "NeMo Guardrails",
        "Llama Guard",
        "Prompt-Injection Defense",
        "RBAC",
        "Audit Logging",
        "Validation Review Controls",
      ],
    },
    {
      title: "Regulated AI & Compliance",
      items: [
        "FDA 21 CFR Part 11",
        "GxP",
        "ALCOA+",
        "Regulatory Document Workflows",
        "SOP",
        "CAPA",
        "Deviation Workflows",
        "Quality Systems",
        "Validation-Oriented Systems",
      ],
    },
  ],

  experience: [
    {
      role: "Applied AI Engineer",
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
        "Shipped LLM-powered summarization, entity extraction, and knowledge-retrieval features for enterprise regulatory documentation, processing 50,000+ pages of compliance text.",
        "Built retrieval-based AI capabilities into backend services through RESTful FastAPI microservices, maintaining sub-300 ms API response latency under high-volume query loads.",
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
      "Regulatory Document Intelligence, Summarization & Compliance QA Platform",
    summary:
      "A modular AI platform combining regulatory retrieval, document summarization, compliance-focused question answering, and citation-backed generation for regulated document workflows.",
    problem:
      "Regulatory, quality, and compliance teams work across fragmented guidance documents, SOPs, CAPA records, deviation documents, and controlled PDFs. Finding reliable, source-backed answers is slow when information is spread across many document types and review workflows.",
    solution:
      "PharmaAI unifies ingestion, semantic chunking, embeddings, vector retrieval, hybrid search, reranking, GraphRAG, summarization, structured outputs, guardrails, evaluation, and citation-backed generation into one modular architecture for regulated document intelligence.",
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
        title: "Regulatory RAG",
        description:
          "End-to-end RAG pipeline covering ingestion, semantic chunking, embeddings, vector indexing, reranking, and citation-backed generation, extended with hybrid search and GraphRAG for relationship-aware retrieval.",
      },
      {
        title: "Document Summarization",
        description:
          "Summarization workflows that support rapid understanding of FDA guidance documents, regulatory PDFs, and controlled pharmaceutical content.",
      },
      {
        title: "Compliance QA",
        description:
          "Assistant workflows for SOP, CAPA, deviation, regulatory, and quality-process use cases with structured outputs, evidence-backed responses, and inline citations.",
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
      status: "In progress",
      description:
        "Local-first multi-agent automation platform built with LangGraph, deterministic workflow orchestration, MCP tool integration, human approval gates, sandboxed execution, and PostgreSQL-backed state persistence.",
      tags: ["Agentic AI", "LangGraph", "MCP", "HITL", "PostgreSQL"],
      github: "",
      demo: "",
    },
    {
      title: "PharmaRAG",
      status: "Demo",
      description:
        "Focused regulatory RAG system for citation-backed question answering over FDA guidance documents and regulatory PDFs using chunking, embeddings, semantic retrieval, and grounded generation.",
      tags: ["RAG", "Semantic Search", "Vector DB", "Regulatory AI"],
      github: "https://github.com/ChaitanyaAI-Dev/pharmarag-mvp",
      demo: "https://huggingface.co/spaces/ChaitanyaAI-Dev/pharmarag-mvp",
    },
    {
      title: "PharmaSummarizer",
      status: "Demo",
      description:
        "LLM-powered document-intelligence workflow that summarizes pharmaceutical and regulatory PDFs, surfaces key highlights, and supports faster review of controlled documents.",
      tags: ["Summarization", "LLMs", "Document Intelligence", "FastAPI"],
      github: "https://github.com/ChaitanyaAI-Dev/pharmasummarizer-mvp",
      demo: "https://huggingface.co/spaces/ChaitanyaAI-Dev/pharmasummarizer-mvp",
    },
    {
      title: "CompliBot",
      status: "Demo",
      description:
        "Compliance-focused assistant for SOP understanding, CAPA procedures, deviation handling, and quality-process interpretation with structured, grounded responses.",
      tags: ["Compliance AI", "SOP", "CAPA", "Structured Outputs"],
      github: "https://github.com/ChaitanyaAI-Dev/complibot-mvp",
      demo: "https://huggingface.co/spaces/ChaitanyaAI-Dev/complibot-mvp",
    },
    {
      title: "HR AI Content System",
      status: "Demo",
      description:
        "AI-ready HR content workflow for transforming unstructured HR material into structured, searchable, governed knowledge assets with retrieval, metadata, and evaluation support.",
      tags: ["Generative AI", "Content Automation", "Retrieval", "Governance"],
      github: "https://github.com/ChaitanyaAI-Dev/hr-ai-content-system",
      demo: "https://huggingface.co/spaces/ChaitanyaAI-Dev/hr-ai-content-system",
    },
  ],


  resume: {
    text: "Download my latest resume for a detailed view of my experience across Applied AI, Generative AI, RAG systems, agentic workflows, AI platform engineering, backend engineering, document intelligence, and regulated pharmaceutical software.",
    buttonLabel: "Download Resume",
    filePath: "/Chaitanya_S_Applied_AI_Engineer_Resume.pdf",
  },

  contactSection: {
    heading: "Let’s Connect",
    text: "Open to Applied AI Engineer, Generative AI Engineer, LLM Engineer, RAG Engineer, AI Platform Engineer, AI Backend Engineer, and AI Solutions Engineer roles.",
    closing:
      "Interested in AI systems, RAG platforms, agentic workflows, or backend AI products? Connect with me on LinkedIn or explore the demos and repositories above.",
  },

  footer: {
    text: "Building practical AI systems across LLM applications, RAG, agentic workflows, backend services, and document intelligence.",
  },
};
