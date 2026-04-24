export type ExternalLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  timeframe?: string;
  subtitle: string;
  highlights: string[];
  tech: string[];
  links: ExternalLink[];
};

export type BlogPost = {
  title: string;
  date?: string;
  excerpt: string;
  href: string;
  source?: string;
};

export type Publication = {
  title: string;
  venue?: string;
  year?: string;
  status?: string;
  description?: string;
  links: ExternalLink[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export const profile = {
  name: 'Ayush Pandey',
  headline: 'Associate AI Engineer · Systems, AI infrastructure, and multi-agent platforms',
  location: 'India',
  email: 'ayushpandey1177@gmail.com',
  about: [
    "I work as an Associate AI Engineer at an analytics firm, and I will be graduating in 2026 with a B.Tech in Computer Science (AI specialization) and a CGPA of 8.65.",
    "About a year and a half ago, I made the decision to seriously pursue engineering. It was not a straight path, I stumbled through hackathons, interviews, and plenty of rejections, with just a few close calls and wins along the way. But those experiences taught me something important: I enjoy building systems far more than chasing every opportunity at once. That realization shaped how I approach my career today.",
    "Through hackathons, side projects, and countless hours on LeetCode, I built a foundation in problem‑solving and system design. Winning a few competitions and completing strong projects gave me confidence, but more importantly, they gave me perspective on what it takes to build things that last.",
    "Now, my focus is on system architecture and inference engineering, routing, batching, KV/prefill optimizations, and making AI systems reliable at scale. At work, I am building multi‑agent systems and MLOps pipelines, where I get to combine engineering discipline with AI research. I am also diving deeper into inference, exploring practical reliability and optimizations, and learning from resources like Philip Kiely’s book, which helped me frame my journey in a more structured way.",
    "This journey is ongoing. I see my career as a series of experiments each project, each blog, each system I design is a step toward understanding how to make AI infrastructure scalable and trustworthy. I will be sharing what I learn through blogs and projects, not just as documentation of my work, but as stories of the challenges, trade‑offs, and breakthroughs that come with building systems in the real world."
  ]
} as const;

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Aryannovice' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayush-pandey07/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/aryannovice/' },
  { label: 'CodeChef', href: 'https://www.codechef.com/users/aryannovice' },
  { label: 'Hugging Face', href: 'https://huggingface.co/Aryannovice' },
  { label: 'Hashnode', href: 'https://hashnode.com/@aryannovice' },
  { label: 'Medium', href: 'https://medium.com/@ayushpandey1177' }
];

export const projects: Project[] = [
  {
    title: 'Decentralized Pocket Memory (DPM)',
    timeframe: 'March 2026',
    subtitle: 'Retrieval & Indexing Engine — C++ semantic retrieval with hybrid ANN indexing and ownership verification.',
    highlights: [
      'Built a high-performance retrieval engine in C++ with multiple indexing strategies (HNSW, brute-force, hierarchical ANN) to balance latency and accuracy.',
      'Achieved ~0.47 ms mean query latency and ~3.5k+ chunks/sec ingestion via optimized indexing and memory-efficient vector representations (32× compression).',
      'Designed a modular ingestion/indexing pipeline supporting GitHub, Reddit, and Markdown sources with cryptographic ownership verification (Polygon hashing).'
    ],
    tech: ['C++', 'ANN / HNSW', 'Vector Search', 'Indexing', 'Crypto verification'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Aryannovice/Decentralized-Pocket-Memory' },
      {
        label: 'Blog',
        href: 'https://aryannovice.hashnode.dev/1-bit-evolution-building-a-decentralized-memory-layer-from-the-metal-up?utm_source=hashnode&utm_medium=feed'
      }
    ]
  },
  {
    title: 'AI Gateway',
    timeframe: 'January 2026',
    subtitle: 'Privacy-aware LLM routing & control pipeline with PII detection and cost-aware decisions.',
    highlights: [
      'Built a privacy-aware LLM routing system with RoBERTa-based PII detection to select local vs cloud inference based on sensitivity and token constraints.',
      'Reduced token usage by ~6–8% using embedding-based context retrieval and prompt compression, improving response efficiency and API cost.',
      'Designed routing observability: latency tracking (~295 ms cloud inference), redaction logging, and decision tracing across routing modes (strict/balanced/performance).'
    ],
    tech: ['LLM Routing', 'PII Detection', 'Observability', 'Prompt Compression', 'Embeddings'],
    links: [
      { label: 'Live', href: 'https://metamorphosis-cyan.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/Aryannovice/metamorphosisT/tree/main' }
    ]
  },
  {
    title: 'Llama-SRE Orchestrator',
    timeframe: 'April 2026',
    subtitle: 'Autonomous GPU cluster manager & deterministic benchmark for SRE agents.',
    highlights: [
      'Engineered a 3-node GPU cluster simulator on Hugging Face Spaces using OpenEnv to benchmark SRE agents against VRAM leaks, TRT spikes, and cascading OOM failures.',
      'Established a deterministic evaluation suite achieving a 0.736 baseline mean score, with granular task results of 0.99 (Easy), 0.64 (Medium), and 0.56 (Hard).',
      'Implemented proactive backpressure and state-transition logic (Drain/Rebalance) for 60-step trajectories, improving reliability and reducing p95 latency in high concurrency incidents.'
    ],
    tech: ['GPU Systems', 'SRE Agents', 'Deterministic Eval', 'Reliability'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Aryannovice/autonomous-llm-cluster-manager' },
      { label: 'HF Space', href: 'https://huggingface.co/spaces/Aryannovice/autonomous-llm-cluster-manager' }
    ]
  },
  {
    title: 'BinaryByte',
    timeframe: 'January 2026 – March 2026',
    subtitle: 'Open-source CLI CI/CD & state manager for AI agents.',
    highlights: [
      'Built and distributed a pip-installable CLI for managing AI agent lifecycle with consistent state control across tools via shared `state.yaml`.',
      'Designed an evaluation pipeline with safety checks (commands, file paths, secrets) and versioned snapshots for reproducibility and behavior traceability.',
      'Implemented modular CI/CD workflows with rollback support and plugin-based adapters to integrate new agent tools without modifying core logic.'
    ],
    tech: ['Python', 'CLI', 'CI/CD', 'Safety Checks', 'MLOps'],
    links: [{ label: 'GitHub', href: 'https://github.com/Aryannovice/BinaryByte' }]
  },
  {
    title: 'QueueCTL',
    timeframe: '2026',
    subtitle: 'CLI job queue & scheduler with retries, DLQ handling, and persistent queue management.',
    highlights: [
      'Built a Go-based CLI job queue and worker system with SQLite-backed persistence for reliable async task execution across multiple workers.',
      'Implemented exponential backoff retries and failure handling via a Dead Letter Queue (DLQ) to improve fault tolerance and recovery.',
      'Designed a concurrent worker model supporting parallel execution and real-time queue inspection for consistent scheduling and monitoring.'
    ],
    tech: ['Go', 'SQLite', 'Concurrency', 'Retry / DLQ'],
    links: [{ label: 'GitHub', href: 'https://github.com/Aryannovice/QueueCTL' }]
  }
];

export const blogs: BlogPost[] = [
  {
    title: '1-Bit Evolution: Building a Decentralized Memory Layer from the Metal Up',
    date: '2026',
    excerpt: 'A deep dive into building DPM — design choices, indexing trade-offs, and what “memory” means in practice.',
    href: 'https://aryannovice.hashnode.dev/1-bit-evolution-building-a-decentralized-memory-layer-from-the-metal-up?utm_source=hashnode&utm_medium=feed',
    source: 'Hashnode'
  }
];

export const publications: Publication[] = [
  {
    title: 'Blind Image Super-Resolution with Blind IQA',
    venue: 'IEEE (scheduled)',
    year: '2026',
    status: 'Scheduled to publish later this year',
    description: 'U-Net and VGG16-based CNN variants with blind IQA (NIQE/PIQE), achieving 32.7 dB PSNR and 0.85 SSIM on satellite super-resolution.',
    links: [{ label: 'Codebase', href: 'https://github.com/Aryannovice/BlindImagesuperresolution' }]
  },
  {
    title: 'Comparative Analysis of ML, Bayesian, and CNN Models',
    venue: 'IEEE',
    year: '2025',
    description:
      'Evaluated performance trade-offs across classical ML, Bayesian methods, and CNN-based approaches on standard face datasets (ORL & LFW), focusing on accuracy/robustness versus model complexity.',
    links: [{ label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org/document/10986852' }]
  },
  {
    title: 'BERTopic using Transformer Embeddings',
    venue: 'Workshop paper',
    year: '2025',
    description:
      'Built a semantic topic clustering pipeline for unstructured text using transformer-based embeddings, emphasizing practical topic extraction and clustering stability for real-world corpora.',
    links: [
      {
        label: 'Paper',
        href: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy84N2UxZDhkZTgzZGY2MjkyL0VSS1o5MDR3dm1sSXZpRUNkaHFyQXRRQjRHa1hIeTh5di1LblRGdWc1bWRadlE%5FZT1PS29yd3E&cid=87E1D8DE83DF6292&id=87E1D8DE83DF6292%21s4ef79912be304869be2102761aab02d4&parId=87E1D8DE83DF6292%21s513fc1be900a48a78f1f8f2a73c73ec6&o=OneUp'
      }
    ]
  }
];
