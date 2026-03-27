"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// basePath prefix for static export (GitHub Pages)
const B = "/ai-factory-preview";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const ENDORSEMENTS = [
  {
    quote:
      "AI is no longer just the domain of big labs. With the right frameworks, every SME and every academic can build their own AI Factory.",
    author: "Prof. Simon See",
    role: "Global Head, NVIDIA AI Technology Center",
  },
  {
    quote:
      "This book demystifies artificial intelligence and shows how any business can build its own AI factory to solve problems at scale.",
    author: "Bruce Magid, PhD",
    role: "Acting President, Golden Gate University",
  },
  {
    quote:
      "People are our most valued asset. This book aptly demonstrates that AI is not about replacing workers but about equipping, enhancing, embracing, and enlivening our lives.",
    author: "Patrick Tay",
    role: "Member of Singapore Parliament & Asst Secretary-General, NTUC",
  },
  {
    quote:
      "A practical guide for SMEs wanting to make sense of AI. SMEs can begin by adopting what's useful, then move towards building capabilities.",
    author: "Ang Yuit",
    role: "President, Association of Small Media Enterprises (ASME)",
  },
  {
    quote:
      "A clear, comprehensive guide for small and mid-sized enterprises, blending a strong conceptual framework with practical, ready-to-use tools.",
    author: "Martin Gonzalez",
    role: "Bestselling author & Org Design Lead, Google DeepMind",
  },
];

type LinkedInPost = {
  title: string;
  snippet: string;
  url: string;
  author: string;
  type?: string;
  date?: string;
};

type Chapter = {
  number: number;
  title: string;
  summary: string;
  keyIdeas: string[];
  isFree: boolean;
  linkedInPosts?: LinkedInPost[];
};

type Section = {
  id: string;
  label: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  gradient: string;
  accent: string;
  accentRing: string;
  iconBg: string;
  borderColor: string;
  chapters: Chapter[];
  infographic?: string;
};

const SECTIONS: Section[] = [
  {
    id: "foundation",
    label: "Foundation",
    shortLabel: "F",
    title: "Welcome to the AI Factory",
    subtitle: "The metaphor that makes AI accessible to every business leader",
    gradient: "from-blue-600 to-cyan-500",
    accent: "text-blue-400",
    accentRing: "ring-blue-500/30",
    iconBg: "bg-blue-600/20 text-blue-400",
    borderColor: "border-blue-500/40",
    infographic: "/infographics/ch1-welcome-to-the-ai-factory.png",
    chapters: [
      {
        number: 1,
        title: "Welcome to the AI Factory",
        isFree: true,
        summary:
          "Just as the first Industrial Revolution had cotton mills and the second had assembly lines, the fourth has AI Factories — operations that manufacture intelligence instead of physical goods. This chapter introduces the core metaphor: your business is a factory, and its product is now digital intelligence. The authors break down the AI Factory Formula (Data + Compute + Models = Tokens) and reveal why 80% of professionals are still just consuming AI, while only 20% are building real capability. Using L'Oréal's AI-powered beauty diagnostics as a case study, the chapter shows what it looks like when an enterprise runs its own intelligence production line.",
        keyIdeas: [
          "The Four Industrial Revolutions — steam, electricity, computing, and now intelligence production",
          "AI Factory Formula: Data + Compute + Models → Tokens — the equation behind every AI output",
          "Three factory layers: Infrastructure (the foundation), Production (the assembly line), Application (the shopfront)",
          "Five Elements of GenAI Capability — what separates an AI-ready workforce from passive users",
          "The 80:20 gap: most professionals consume AI outputs; this book is for the 20% who want to build",
          "Case study: How L'Oréal built its own AI Factory — from beauty diagnostics to personalised product recommendations at scale",
        ],
        linkedInPosts: [
          {
            title: "Kevin Shepherdson: Capability-as-a-Service",
            snippet: "Introduces the AI Factory model and the shift from AI literacy to AI capability — from the NewInAsia channel.",
            url: "https://www.youtube.com/watch?v=cW3cyJv4Ol8",
            author: "NewInAsia",
            type: "Video",
            date: "Oct 2025",
          },
          {
            title: "The AI Factory: Turning AI Fluency into Capability",
            snippet: "Explains the 20% of professionals building vs 80% consuming — the core Factory metaphor.",
            url: "https://www.dpexnetwork.org/articles/the-ai-factory-turning-ai-fluency-into-capability",
            author: "DPEX Network",
            type: "Article",
            date: "Nov 2025",
          },
          {
            title: "What I Witnessed at the AI Factory Book Launch",
            snippet: "Kevin's account of the book's significance for SMEs and non-tech professionals.",
            url: "https://www.dpexnetwork.org/articles/what-i-witnessed-at-the-ai-factory-book-launch-a-turning-point-for-singapores-smes--non-tech-professionals",
            author: "DPEX Network",
            type: "Article",
            date: "Nov 2025",
          },
          {
            title: "From AI Literacy to AI Capability Building",
            snippet: "Connects the AI literacy → AI capability journey directly to the Book.",
            url: "https://www.linkedin.com/posts/kevinshepherdson_from-ai-literacy-to-ai-capability-building-activity-7394144811760537600-hcQP",
            author: "Kevin Shepherdson",
            type: "LinkedIn",
            date: "Nov 2025",
          },
          {
            title: "AI Factory Launch Powers SME Generative AI Transformation",
            snippet: "Media coverage of the AI Factory's relevance to Singapore SMEs.",
            url: "https://newinasia.com/2025/11/17/singapore-smes-generative-ai-guidebook/",
            author: "New in Asia",
            type: "Press",
            date: "Nov 2025",
          },
        ],
      },
    ],
  },
  {
    id: "part1",
    label: "Floor 1 — Production",
    shortLabel: "F1",
    title: "Production & Processes",
    subtitle:
      "The factory floor — where digital intelligence is manufactured on the assembly line",
    gradient: "from-emerald-600 to-teal-500",
    accent: "text-emerald-400",
    accentRing: "ring-emerald-500/30",
    iconBg: "bg-emerald-600/20 text-emerald-400",
    borderColor: "border-emerald-500/40",
    infographic: "/infographics/ch2-the-outputs.png",
    chapters: [
      {
        number: 2,
        title: "The Outputs",
        isFree: true,
        summary:
          "What does an AI Factory actually produce? Not widgets — digital intelligence. This chapter catalogues the six types of digital intelligence products (from automated reports to synthetic media) and maps 10 GenAI applications already transforming workplaces: content generation, code assistance, customer service bots, data analysis, translation, image creation, and more. Think of it as the product catalogue for your AI Factory — before you build the assembly line, you need to know what's rolling off it. The chapter draws a direct line from raw enterprise data to monetisable intelligence outputs.",
        keyIdeas: [
          "Six Digital Intelligence Products — the output categories every AI Factory can produce",
          "10 common GenAI use cases already in the workplace (content, code, customer service, analytics, and more)",
          "From raw data to actionable intelligence — the value chain of the intelligence economy",
          "Why the output matters more than the model: choosing the right AI product for your business problem",
          "The rise of the intelligence economy — where digital output becomes competitive advantage",
        ],
        linkedInPosts: [
          {
            title: "The AI Factory — AI Capability Guide for SMEs",
            snippet: "Highlights the digital intelligence output concept from the book launch.",
            url: "https://www.linkedin.com/posts/straits-interactive_the-ai-factory-ai-capability-guide-for-activity-7421763973257052160-2XVH",
            author: "Straits Interactive",
            type: "LinkedIn",
            date: "Mar 2026",
          },
          {
            title: "Generative AI in 2025: The 6Cs Scorecard",
            snippet: "Reviews types of GenAI outputs produced across industries in 2025.",
            url: "https://www.linkedin.com/pulse/2025-ai-scorecard-look-back-generative-trends-we-predicted-pomac",
            author: "Straits Interactive",
            type: "Article",
            date: "Dec 2025",
          },
        ],
      },
      {
        number: 3,
        title: "The Workers",
        isFree: false,
        summary:
          "In a traditional factory, workers operate machines. In the AI Factory, the workers are the models themselves — LLMs like GPT, Claude, and Gemini that consume tokens as raw material and produce tokens as finished goods. This chapter demystifies the Transformer architecture (the engine inside every modern LLM), explains what tokens actually are (not words — subword units), and reframes the manager's role: you're no longer writing code, you're supervising a digital workforce.",
        keyIdeas: [
          "LLMs as factory workers — they consume tokens (raw material) and produce tokens (finished goods)",
          "What tokens really are: subword units, not words — and why token economics matters",
          "The Transformer architecture: self-attention, the mechanism that lets AI understand context",
          "Your role as manager: supervising, not programming — directing AI workers through instructions",
          "Choosing the right worker for the job: when to use GPT vs Claude vs open-source models",
        ],
        linkedInPosts: [
          {
            title: "The Rundown: State of AI with Andeed Ma",
            snippet: "Discussion on the current state of GenAI models and what it means for businesses deploying AI workers.",
            url: "https://www.youtube.com/watch?v=bK_g2zxVvD4",
            author: "DPEX Network",
            type: "Video",
            date: "Mar 2025",
          },
        ],
      },
      {
        number: 4,
        title: "The Blueprints",
        isFree: false,
        summary:
          "You wouldn't build a factory without an architectural plan. This chapter introduces the GenAI Maturity Profile Framework — a five-stage progression from Use (experimenting with off-the-shelf tools) through Create, Deploy, Govern, and finally Manage (running AI as a sustained business operation). Each stage maps to specific Capability Clusters, so leaders can benchmark exactly where their organisation stands and what's needed to advance. Includes 10 essential business use cases to prioritise.",
        keyIdeas: [
          "The GenAI Maturity Profile: five stages — Use, Create, Deploy, Govern, Manage",
          "Capability Clusters — the specific skills and systems required at each maturity stage",
          "10 essential business use cases: from document summarisation to autonomous customer workflows",
          "How to benchmark your organisation's AI maturity against the framework",
          "Your AI Factory Blueprint in action — turning assessment results into a concrete roadmap",
        ],
        linkedInPosts: [
          {
            title: "2025: A Year of Building AI Capability",
            snippet: "Reviews the GenAI Maturity Blueprint in practice across organisations in Singapore and the region.",
            url: "https://www.dpexnetwork.org/articles/2025-a-year-of-building-ai-capability",
            author: "DPEX Network",
            type: "Article",
            date: "Dec 2025",
          },
          {
            title: "SMU Academy Launches AI Roadmap for Singapore SMEs",
            snippet: "SME AI Blueprint in action through the SMU–Straits Interactive partnership.",
            url: "https://www.linkedin.com/posts/singapore-management-university_asme-smu-academy-and-straits-interactive-activity-7394947241041403906-CdAu",
            author: "Singapore Management University",
            type: "LinkedIn",
            date: "Nov 2025",
          },
          {
            title: "Building AI Literacy with Adamson Center",
            snippet: "Capability framework blueprint applied across Philippines via Adamson University partnership.",
            url: "https://www.linkedin.com/posts/straits-interactive_building-ai-literacywith-adamson-center-activity-7386687987780284416-H7if",
            author: "Straits Interactive",
            type: "LinkedIn",
            date: "Oct 2025",
          },
        ],
      },
      {
        number: 5,
        title: "The Production Line",
        isFree: false,
        summary:
          "This is the assembly line of your AI Factory — the systematic five-stage process that transforms a business problem into a deployed AI solution. From data collection and preparation, through model selection, prompt design, testing, and finally deployment and maintenance. The chapter shows how a mid-sized business with no data science team can still run a production line, using no-code platforms and pre-trained models. It's the chapter that turns the metaphor into a repeatable process.",
        keyIdeas: [
          "Five stages of AI production: Collect → Prepare → Build → Test → Deploy & Maintain",
          "Building a 'data science department' without hiring data scientists or writing code",
          "Model selection: choosing between fine-tuning, RAG, and prompt-only approaches",
          "Testing and validation: how to QA your AI outputs before they reach customers",
          "Case study: a mid-sized business running its first AI production line end-to-end",
        ],
        linkedInPosts: [
          {
            title: "How Capability-as-a-Service Supports Professional Upskilling",
            snippet: "Describes the AI production pipeline for L&D — how professionals move from literacy to deployed capability.",
            url: "https://www.dpexnetwork.org/articles/how-capability-as-a-service-supports-professional-upskilling-for-an-ai-driven-future",
            author: "DPEX Network",
            type: "Article",
            date: "Dec 2025",
          },
        ],
      },
      {
        number: 6,
        title: "The Instructions",
        isFree: false,
        summary:
          "Factory workers need work orders. AI workers need prompts. This chapter reframes prompt engineering as the art of giving precise, actionable instructions to your digital workforce — not a one-time trick, but a three-level skill progression from basic queries to advanced Chain-of-Thought (CoT) techniques. Covers zero-shot, few-shot, CoT, and Tree-of-Thought prompting, plus multimodal methods for working with images, audio, and video. The 80:20 insight: 80% of AI users write basic prompts, but the top 20% who master structured instructions unlock dramatically better outputs.",
        keyIdeas: [
          "The 80:20 reality: most users write basic prompts; structured instructions unlock 10x better outputs",
          "Three levels of prompt engineering: basic (zero-shot), intermediate (few-shot), advanced (CoT, ToT)",
          "Chain of Thought (CoT) prompting — making the AI 'show its working' for complex reasoning tasks",
          "Tree-of-Thought: exploring multiple reasoning paths simultaneously for higher-quality answers",
          "Multimodal prompting: giving instructions that combine text, images, audio, and video inputs",
        ],
        linkedInPosts: [
          {
            title: "More Than Just Prompt Engineering",
            snippet: "In last week's cohort we did more than just learn prompt engineering — we built real AI capability.",
            url: "https://www.linkedin.com/posts/kevinshepherdson_in-last-weeks-cohort-we-did-more-than-just-activity-7418785217827454976-Fm6Q",
            author: "Kevin Shepherdson",
            type: "LinkedIn",
            date: "Feb 2026",
          },
        ],
      },
      {
        number: 7,
        title: "The Owners",
        isFree: false,
        summary:
          "Who owns the factory? The DeepSeek moment — when a Chinese lab matched frontier performance at a fraction of the cost — threw open the factory doors and forced a reckoning: should your AI be closed-source (renting someone else's factory), open-source (building your own), or a hybrid via RAG? This chapter maps the AI app landscape into three categories — Core (built from scratch), Clone (fine-tuned from existing models), and Combination (integrating multiple AI services) — and explores what 'ownership' means when your competitive advantage depends on models you didn't build.",
        keyIdeas: [
          "The DeepSeek moment — when open-source matched frontier AI at a fraction of the cost",
          "Three types of AI apps: Core (built from scratch), Clone (fine-tuned), Combination (integrated)",
          "Open vs. closed vs. hybrid: choosing your factory ownership model",
          "RAG as the middle path — augmenting general models with your proprietary data",
          "Responsibility in the open era: who's accountable when anyone can build with powerful models?",
        ],
        linkedInPosts: [
          {
            title: "New Industry Graduate Diploma in Generative AI",
            snippet: "SMU partnership for GenAI ownership and deployment — a new pathway for working professionals.",
            url: "https://www.linkedin.com/posts/straits-interactive_launch-of-industry-graduate-diploma-in-generative-activity-7424334805410082816-2uKn",
            author: "Straits Interactive",
            type: "LinkedIn",
            date: "Mar 2026",
          },
        ],
      },
    ],
  },
  {
    id: "part2",
    label: "Floor 2 — Operations",
    shortLabel: "F2",
    title: "Business Administration & Operations",
    subtitle:
      "The management floor — governance, ethics, collaboration, and human oversight",
    gradient: "from-violet-600 to-purple-500",
    accent: "text-violet-400",
    accentRing: "ring-violet-500/30",
    iconBg: "bg-violet-600/20 text-violet-400",
    borderColor: "border-violet-500/40",
    infographic: "/infographics/ch8-customization.png",
    chapters: [
      {
        number: 8,
        title: "Customization",
        isFree: true,
        summary:
          "General-purpose AI hits a plateau — ChatGPT can write a generic email, but can it write one that sounds like your company, references your products, and follows your compliance rules? This chapter is about crossing that gap. It introduces the four-step GenAI integration process for building custom intelligence: (1) identify the business problem, (2) prepare your proprietary data, (3) choose your integration method (RAG, fine-tuning, or agents), and (4) deploy and iterate. RAG (Retrieval-Augmented Generation) is explained as the 'smart factory floor' — a system that retrieves your company's own documents and feeds them to the LLM at query time, so the AI gives answers grounded in your data, not just its training.",
        keyIdeas: [
          "The plateau of general AI — why off-the-shelf tools can't solve company-specific problems",
          "Four-step GenAI integration: Problem → Data → Method (RAG/fine-tuning/agents) → Deploy & iterate",
          "RAG as the smart factory floor — grounding AI responses in your proprietary documents and data",
          "Fine-tuning vs. RAG vs. agents: which customisation method fits which business need",
          "From passive consumer to intelligence creator — the mindset shift that separates AI-enabled companies",
        ],
        linkedInPosts: [
          {
            title: "Doubling Down on AI Capability Building",
            snippet: "Rolling out AI Factory playbooks and pilots with grants — custom intelligence in action.",
            url: "https://www.linkedin.com/posts/alvintoh_were-doubling-down-on-ai-capability-building-activity-7427883425014992897-F21F",
            author: "Alvin Toh",
            type: "LinkedIn",
            date: "Mar 2026",
          },
        ],
      },
      {
        number: 9,
        title: "Workshopping",
        isFree: false,
        summary:
          "Not every business needs a full factory — some need a workshop first. This chapter introduces the AI Workshop as a focused, practical mini-factory: a contained environment where teams can experiment, prototype, and build AI capabilities before scaling. Built around the ISO 5338 AI lifecycle standard, it lays out five essential building blocks and a step-by-step workshop lifecycle that has been field-tested in cohorts across Singapore and the Philippines.",
        keyIdeas: [
          "The AI Workshop — a focused mini-factory for teams not ready for full-scale AI operations",
          "Five essential building blocks: problem framing, data readiness, tool selection, prototyping, evaluation",
          "AI Workshop Lifecycle aligned to ISO 5338 — a standards-based approach to experimentation",
          "The Gen AI Capability Framework — mapping team readiness to workshop intensity",
          "Field-tested across Singapore and Philippines cohorts — practical lessons from real deployments",
        ],
        linkedInPosts: [
          {
            title: "Strengthen Your Business with AI: Key Takeaways from DPEX AI Workshop",
            snippet: "Direct case study of the AI Workshop lifecycle — how businesses moved from learning to deployment.",
            url: "https://www.instagram.com/p/DRjIzhbkmtW/",
            author: "Straits Interactive",
            type: "Social",
            date: "2025",
          },
          {
            title: "On Stage: Straits Interactive at ASME AI Festival Asia 2025",
            snippet: "Live AI workshop delivery and methodology showcase at ASME AI Festival Asia.",
            url: "https://www.youtube.com/watch?v=3MbR5X2lUik",
            author: "DPEX Network",
            type: "Video",
            date: "Feb 2025",
          },
        ],
      },
      {
        number: 10,
        title: "Human-Machine Collaboration",
        isFree: false,
        summary:
          "AI doesn't replace the factory worker — it changes the job description. This chapter maps the new division of labour: AI handles the repetitive, data-heavy tasks while humans focus on judgement, creativity, and relationship-building. It examines the 2025 workforce snapshot (which roles are growing, which are shrinking, and which are transforming entirely) and makes the case for a new C-suite role — the Chief AI Officer (CAIO) — who bridges the gap between technical capability and business strategy.",
        keyIdeas: [
          "The new division of labour — which tasks go to AI, which stay with humans, and why",
          "From task-taker to value creator: how AI elevates (not eliminates) human roles",
          "The 2025 workforce snapshot — which roles are growing, shrinking, and transforming",
          "The rise of the Chief AI Officer (CAIO) — bridging technical capability and business strategy",
          "Why human skills like judgement, empathy, and creativity become more valuable, not less",
        ],
        linkedInPosts: [
          {
            title: "The Human Capabilities That Count: Rethinking Careers in Data",
            snippet: "Human skills AI cannot replace — the collaboration imperative for the intelligence economy.",
            url: "https://www.dpexnetwork.org/articles/future-proofing-jobs-the-human-capabilities-ai-cant-replicate",
            author: "DPEX Network",
            type: "Article",
            date: "Dec 2025",
          },
          {
            title: "How AI is Transforming Work in Southeast Asia",
            snippet: "Is AI after my tasks or my job? Human-AI division of labour in ASEAN — Alvin Toh's take.",
            url: "https://www.linkedin.com/posts/alvintoh_asiapulse-is-ai-after-my-tasks-or-my-job-activity-7381325693449592833-n0ad",
            author: "Alvin Toh",
            type: "LinkedIn",
            date: "Oct 2025",
          },
          {
            title: "AI Delay Puts SMEs at Risk of Cyber Compliance Gaps",
            snippet: "Human oversight becomes critical when SMEs delay AI adoption — the compliance cost of waiting.",
            url: "https://www.dpexnetwork.org/articles/ai-delay-puts-smes-at-risk-of-cyber-compliance-gaps",
            author: "DPEX Network",
            type: "Article",
            date: "Sep 2025",
          },
        ],
      },
      {
        number: 11,
        title: "Governance & Ethics",
        isFree: false,
        summary:
          "Every factory needs safety regulations. With the EU AI Act now fully in force and ISO 42001 setting the management standard, this chapter gives you the practical toolkit — the 3As and 3Is framework — to build ethical AI operations before regulators come knocking.",
        keyIdeas: [
          "The EU AI Act explained — risk levels, compliance timelines, and what it means for ASEAN businesses",
          "ISO 42001: the AI Management System standard — your governance blueprint",
          "Six Principles of ethical AI — from transparency to human oversight",
          "The 3As and 3Is toolkit — a practical framework you can deploy on Monday morning",
        ],
        linkedInPosts: [
          {
            title: "The Complex World of Generative AI Governance",
            snippet: "Explores the ethical and regulatory landscape of GenAI — frameworks, risks, and responsible deployment.",
            url: "https://www.youtube.com/watch?v=9GUls-cE_3o",
            author: "YouTube",
            type: "Video",
            date: "Dec 2024",
          },
          {
            title: "Governing the Shift from Tools to Digital Teammates",
            snippet: "Alvin Toh on AI governance for the agentic era — when AI stops being a tool and becomes a teammate.",
            url: "https://www.dpexnetwork.org/articles/governing-the-shift-from-tools-to-digital-teammates-with-the-ai-factory",
            author: "DPEX Network",
            type: "Article",
            date: "Feb 2026",
          },
          {
            title: "AI Rules Are Changing: Key Regulatory Updates for 2025 & 2026",
            snippet: "Regulatory updates aligning with the 3As & 3Is governance frameworks discussed in Ch 11.",
            url: "https://www.youtube.com/watch?v=hvlTWt30CEw",
            author: "YouTube",
            type: "Video",
            date: "Jan 2026",
          },
        ],
      },
      {
        number: 12,
        title: "Accountability, Safety & Risks",
        isFree: false,
        summary:
          "When your AI Factory ships a faulty product, who's liable? This chapter introduces Model Cards — the 'nutrition labels' of AI — and confronts the hard questions: copyright ownership of AI-generated content, counterfeit intelligence, and why leadership accountability means you own what your AI ships.",
        keyIdeas: [
          "Data protection meets product liability — what happens when AI outputs cause harm",
          "Model Cards: the 'nutrition labels' of AI — documenting what your model can and can't do",
          "Copyright and counterfeit intelligence — who owns what AI creates?",
          "Leadership accountability: you can delegate the task to AI, but not the responsibility",
        ],
        linkedInPosts: [
          {
            title: "ASEAN's New AI and Data Frameworks Push Connectivity to Intelligence",
            snippet: "Regulatory accountability across ASEAN — how new frameworks are reshaping AI product liability.",
            url: "https://www.dpexnetwork.org/articles/aseans-new-ai-and-data-frameworks-push-connectivity-to-intelligence",
            author: "DPEX Network",
            type: "Article",
            date: "Feb 2026",
          },
        ],
      },
      {
        number: 13,
        title: "Intelligence Cost & Judgement",
        isFree: false,
        summary:
          "Cheaper AI doesn't mean better AI. This chapter exposes the quality paradox — when faster, cheaper tokens produce confidently wrong answers — and introduces token economics as the new currency of intelligence production. The critical insight: LLM benchmarks look impressive, but human judgement remains the final quality checkpoint.",
        keyIdeas: [
          "Token economics — the new currency of intelligence (and why cost-per-token is misleading)",
          "LLM benchmarks vs. human IQ — what the scores actually tell you (and what they hide)",
          "The quality paradox: when AI gets faster and cheaper, hallucinations become harder to catch",
          "Human oversight as the final checkpoint — why you can't automate judgement away",
        ],
        linkedInPosts: [
          {
            title: "The 2025 AI Scorecard: A Look Back on GenAI Trends",
            snippet: "Evaluates AI quality, cost and judgement in real-world deployments — the quality paradox in practice.",
            url: "https://www.dpexnetwork.org/articles/the-2025-ai-scorecard-a-look-back-on-generative-ai-trends-we-predicted",
            author: "DPEX Network",
            type: "Article",
            date: "Dec 2025",
          },
        ],
      },
    ],
  },
  {
    id: "part3",
    label: "The Future",
    shortLabel: "P3",
    title: "The Future",
    subtitle: "Autonomous agents, agentic AI, and building what comes next",
    gradient: "from-orange-500 to-amber-500",
    accent: "text-orange-400",
    accentRing: "ring-orange-500/30",
    iconBg: "bg-orange-500/20 text-orange-400",
    borderColor: "border-orange-500/40",
    infographic: "/infographics/ch14-autonomous-agents.png",
    chapters: [
      {
        number: 14,
        title: "The Age of Autonomous Agents",
        isFree: true,
        summary:
          "What happens when factory workers no longer need a supervisor standing over them? This chapter explores the frontier of AI: autonomous agents that can plan, reason, use tools, and execute multi-step tasks without explicit instructions for every action. The book places agents on the intelligence spectrum — from ANI (narrow AI, where we are today) through AGI (artificial general intelligence) to ASI (superintelligence) — and shows that agentic AI is already here in practical form. Using the 7P framework (Purpose, People, Process, Platform, Privacy, Protection, Performance), the chapter provides a decision matrix for deploying agents responsibly. A standout section shows how business leaders can create functional agents without writing a single line of code, using platforms like Capabara and no-code agent builders.",
        keyIdeas: [
          "The AI intelligence spectrum: ANI → AGI → ASI — and where today's agents actually sit",
          "Agentic AI is already here — agents that plan, reason, use tools, and execute multi-step workflows",
          "The 7P framework for deploying agents: Purpose, People, Process, Platform, Privacy, Protection, Performance",
          "Creating business agents without coding — using Capabara and no-code builders to automate workflows",
          "From tools to digital teammates — the governance shift when AI stops waiting for instructions",
          "The accountability question: 'You can delegate a task to AI, but not the responsibility' — Kevin Shepherdson",
        ],
        linkedInPosts: [
          {
            title: "Insight: The Double-Edged Sword That Is Agentic AI",
            snippet: "Agentic AI risks and opportunities — originally published in Digital Edge, The Edge Malaysia Weekly.",
            url: "https://www.dpexnetwork.org/articles/insight-the-double-edged-sword-that-is-agentic-ai",
            author: "DPEX Network",
            type: "Article",
            date: "Sep 2025",
          },
          {
            title: "Governing the Shift from Tools to Digital Teammates",
            snippet: "Alvin Toh on agents as digital teammates — and what governance looks like in the agentic era.",
            url: "https://www.dpexnetwork.org/articles/governing-the-shift-from-tools-to-digital-teammates-with-the-ai-factory",
            author: "DPEX Network",
            type: "Article",
            date: "Feb 2026",
          },
          {
            title: "Data and AI Governance: Riding the Next Wave with GenAI",
            snippet: "Agentic and autonomous AI at community level — reflections from the first DPEX Network community event.",
            url: "https://www.linkedin.com/posts/alvintoh_a-look-at-the-first-dpex-network-community-activity-7353702908607033344-iDZW",
            author: "Alvin Toh",
            type: "LinkedIn",
            date: "Jul 2025",
          },
          {
            title: "The Importance of Human Oversight in the Age of AI",
            snippet: "Human oversight as the essential check on autonomous agents — from the Temasek Lead Summit 2026.",
            url: "https://www.dpexnetwork.org/articles/the-importance-of-human-oversight-in-the-age-of-artificial-intelligence",
            author: "DPEX Network",
            type: "Article",
            date: "Mar 2026",
          },
        ],
      },
      {
        number: 15,
        title: "Call to Action: Building the Future of Intelligence",
        isFree: false,
        summary:
          "The final chapter doesn't just summarise — it issues a mandate. The AI Factory journey culminates in a clear call: every business leader must decide whether to build intelligence capability now or fall behind. The Capability Framework becomes your roadmap from here.",
        keyIdeas: [
          "The leadership mandate — why waiting is the riskiest strategy of all",
          "Recap of the AI Factory journey — from metaphor to operational reality",
          "The Capability Framework as your personal roadmap — where to start on Monday morning",
          "Thriving in the intelligence economy — what separates winners from bystanders",
        ],
        linkedInPosts: [
          {
            title: "Building the AI-Enabled Enterprise: Five GenAI Trends",
            snippet: "2026 roadmap for AI-enabled enterprises — from AI bilingualists to mandatory AI governance.",
            url: "https://www.dpexnetwork.org/articles/why-holistic-ai-capabilities-ai-bilingualists-cross-functional-funding-workflow-augmentation-and-mandatory-ai-governance-will-define-enterprise-success",
            author: "DPEX Network",
            type: "Article",
            date: "Jan 2026",
          },
          {
            title: "2025 → 2026: Looking Back to the Future",
            snippet: "Year-in-review and forward-looking AI capability mandate — what 2025 taught us about building AI.",
            url: "https://www.youtube.com/watch?v=2yfbab_shv4",
            author: "YouTube",
            type: "Video",
            date: "Jan 2026",
          },
          {
            title: "Event Recap: Why 2025 Is the Best Time to Upskill in AI",
            snippet: "Call to action for professionals to build AI capability now — before the window closes.",
            url: "https://www.youtube.com/shorts/RL0PZk5-Eq4",
            author: "YouTube",
            type: "Video",
            date: "2025",
          },
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENTS                                                         */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  GOOGLE SHEETS DYNAMIC RESOURCES                                    */
/* ------------------------------------------------------------------ */

const SHEET_ID = "1fyKvkaURZYrAdCEQCtc_ILbyGyS7seKeEr5bpc7Fewg";
const SHEET_NAME = "ai_factory_assets_filtered";
const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_NAME)}`;

function parseCSVRow(row: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < row.length; i++) {
    const c = row[i];
    if (inQuotes) {
      if (c === '"' && row[i + 1] === '"') { current += '"'; i++; }
      else if (c === '"') { inQuotes = false; }
      else { current += c; }
    } else {
      if (c === '"') { inQuotes = true; }
      else if (c === ',') { result.push(current.trim()); current = ""; }
      else { current += c; }
    }
  }
  result.push(current.trim());
  return result;
}

function chapterNumFromStr(ch: string): number {
  const m = ch.match(/\d+/);
  return m ? parseInt(m[0], 10) : 0;
}

type SheetResource = {
  chapter: number;
  chapterTitle: string;
  contentTitle: string;
  type: string;
  source: string;
  url: string;
  keyConnection: string;
  date: string;
};

function useSheetResources(): Map<number, LinkedInPost[]> {
  const [resourceMap, setResourceMap] = useState<Map<number, LinkedInPost[]>>(new Map());

  useEffect(() => {
    let cancelled = false;
    fetch(SHEET_CSV_URL)
      .then((r) => r.text())
      .then((csv) => {
        if (cancelled) return;
        const lines = csv.split("\n").filter((l) => l.trim());
        if (lines.length < 2) return;
        // Skip header row
        const rows: SheetResource[] = [];
        for (let i = 1; i < lines.length; i++) {
          const cols = parseCSVRow(lines[i]);
          if (cols.length < 7) continue;
          rows.push({
            chapter: chapterNumFromStr(cols[0]),
            chapterTitle: cols[1],
            contentTitle: cols[2],
            type: cols[3],
            source: cols[4],
            url: cols[5],
            keyConnection: cols[6],
            date: cols[7] || "",
          });
        }
        // Group by chapter
        const map = new Map<number, LinkedInPost[]>();
        for (const r of rows) {
          if (!r.chapter || !r.url) continue;
          const post: LinkedInPost = {
            title: r.contentTitle,
            snippet: r.keyConnection,
            url: r.url,
            author: r.source,
            type: r.type,
            date: r.date,
          };
          const list = map.get(r.chapter) || [];
          list.push(post);
          map.set(r.chapter, list);
        }
        setResourceMap(map);
      })
      .catch(() => {
        // Silently fall back to hardcoded data
      });
    return () => { cancelled = true; };
  }, []);

  return resourceMap;
}

/** Merge sheet resources into sections — sheet data wins if available */
function mergeSections(sections: Section[], sheetMap: Map<number, LinkedInPost[]>): Section[] {
  if (sheetMap.size === 0) return sections; // fallback to hardcoded
  return sections.map((s) => ({
    ...s,
    chapters: s.chapters.map((ch) => {
      const sheetPosts = sheetMap.get(ch.number);
      return sheetPosts ? { ...ch, linkedInPosts: sheetPosts } : ch;
    }),
  }));
}

function LinkedInIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition">
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

/* ---- Navbar ---- */
function Navbar({
  activeSection,
  onNav,
}: {
  activeSection: string;
  onNav: (id: string) => void;
}) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <button onClick={() => onNav("hero")} className="flex items-center gap-2 font-bold text-lg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-blue">
            <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M17 18h1" /><path d="M12 18h1" /><path d="M7 18h1" />
          </svg>
          The AI Factory
        </button>
        <div className="hidden md:flex items-center gap-1 text-sm">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => onNav(s.id)}
              className={`px-3 py-1.5 rounded-full transition text-sm ${
                activeSection === s.id ? "bg-surface text-foreground font-medium" : "text-muted hover:text-foreground"
              }`}
            >
              {s.shortLabel}
            </button>
          ))}
          <div className="w-px h-5 bg-border mx-2" />
          <button onClick={() => onNav("endorsements")} className="px-3 py-1.5 text-muted hover:text-foreground transition">
            Endorsements
          </button>
          <a href="#get-book" className="ml-2 rounded-full bg-accent-orange px-4 py-1.5 text-white font-medium hover:opacity-90 transition">
            Get the Book
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ---- Hero ---- */
function HeroSection({ onNav }: { onNav: (id: string) => void }) {
  return (
    <section id="hero" className="relative pt-24 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-background to-background" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Book cover */}
          <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/10 blur-2xl" />
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border/50 w-[220px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${B}/AI Factory image_Cover.jpeg`}
                  alt="The AI Factory book cover"
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-accent-orange text-white rounded-full w-14 h-14 flex flex-col items-center justify-center text-center shadow-lg glow-orange">
                <span className="text-[8px] font-medium leading-tight">FREE<br />BONUS<br />INSIDE</span>
              </div>
            </div>
          </div>

          {/* Title + CTAs */}
          <div className="animate-fade-in-up flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-orange/30 bg-accent-orange/10 px-3 py-1 text-xs text-accent-orange font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange"></span>
              </span>
              The AI Factory Series &mdash; AI-Blended Books for Business Leaders
            </div>
            <h1 className="text-4xl md:text-5xl leading-[1.1] mb-2">
              The{" "}
              <span className="text-gradient-blue">AI Factory</span>
            </h1>
            <p className="text-lg text-muted mb-1" style={{ fontFamily: "var(--font-sans)" }}>
              AI Capability Guide for SMEs
            </p>
            <p className="text-sm text-muted mb-4">
              By Kevin Shepherdson, Celine Chew &amp; Joaquin Jay Gonzalez III
            </p>
            <p className="text-sm text-muted leading-relaxed mb-5 max-w-lg">
              Every company is now an intelligence manufacturer. This book gives SME leaders a practical framework to build, customize, and deploy their own AI Factory &mdash; no coding required.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => onNav("foundation")} className="rounded-full bg-accent-blue px-5 py-2.5 text-white font-medium glow-blue hover:opacity-90 transition text-sm">
                Preview Chapters
              </button>
              <a href="#get-book" className="rounded-full border border-border px-5 py-2.5 text-foreground font-medium hover:bg-surface transition text-sm">
                Get Your Copy
              </a>
            </div>
          </div>
        </div>

        {/* Infographic thumbnail cards */}
        <div className="mt-10">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
            Explore by Section
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => onNav(s.id)}
                className={`group relative rounded-xl border border-border/60 bg-surface/40 overflow-hidden hover:border-transparent hover:ring-2 ${s.accentRing} card-lift text-left`}
              >
                {s.infographic && (
                  <div className="aspect-[4/3] overflow-hidden bg-surface">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${B}${s.infographic}`}
                      alt={s.title}
                      className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                )}
                <div className="p-2.5">
                  <div className={`text-[10px] font-bold uppercase tracking-wider ${s.accent} mb-0.5`}>
                    {s.shortLabel === "F" ? "Foundation" : s.shortLabel === "F1" ? "Floor 1" : s.shortLabel === "F2" ? "Floor 2" : "Part 3"}
                  </div>
                  <div className="text-xs font-semibold text-foreground leading-tight">{s.title}</div>
                  <div className="text-[10px] text-muted mt-0.5">{s.chapters.length} ch.</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Formula bar */}
        <div className="mt-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-mono">
            <span className="rounded bg-blue-600/15 border border-blue-600/30 px-2.5 py-1 text-blue-400">Data</span>
            <span className="text-muted">+</span>
            <span className="rounded bg-emerald-600/15 border border-emerald-600/30 px-2.5 py-1 text-emerald-400">Compute</span>
            <span className="text-muted">+</span>
            <span className="rounded bg-violet-600/15 border border-violet-600/30 px-2.5 py-1 text-violet-400">Models</span>
            <span className="text-muted">=</span>
            <span className="rounded bg-orange-500/15 border border-orange-500/30 px-2.5 py-1 text-orange-400 font-semibold">Intelligence</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- LinkedIn post ---- */
function LinkedInPostCard({ post }: { post: LinkedInPost }) {
  const typeConfig: Record<string, { bg: string; text: string; label: string }> = {
    Video:   { bg: "bg-red-600",     text: "text-white", label: "▶ Video" },
    Article: { bg: "bg-emerald-700", text: "text-white", label: "✦ Article" },
    LinkedIn:{ bg: "bg-[#0a66c2]",   text: "text-white", label: "in LinkedIn" },
    Press:   { bg: "bg-slate-600",   text: "text-white", label: "↗ Press" },
    Social:  { bg: "bg-pink-600",    text: "text-white", label: "◎ Social" },
  };
  const cfg = typeConfig[post.type ?? "LinkedIn"] ?? typeConfig["LinkedIn"];
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-2.5 rounded-lg border border-blue-500/20 bg-blue-500/5 p-3 hover:bg-blue-500/10 transition group"
    >
      <div className={`flex-shrink-0 mt-0.5 px-1.5 h-5 rounded ${cfg.bg} ${cfg.text} flex items-center text-[9px] font-bold whitespace-nowrap`}>
        {cfg.label}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-semibold text-blue-300 group-hover:text-blue-200 transition leading-tight">{post.title}</div>
        <div className="text-[11px] text-muted mt-0.5 line-clamp-2">{post.snippet}</div>
        <div className="text-[10px] text-blue-400/60 mt-1">{post.author}{post.date ? ` · ${post.date}` : ""}</div>
      </div>
      <ArrowIcon />
    </a>
  );
}

/* ---- Chapter card ---- */
function ChapterCard({ chapter, section }: { chapter: Chapter; section: Section }) {
  if (!chapter.isFree) {
    return (
      <div className="relative rounded-xl border border-border bg-surface/30 p-4 overflow-hidden">
        <div className="gate-shimmer absolute inset-0 pointer-events-none" />
        <div className="relative">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs text-muted">Chapter {chapter.number}</span>
              <h4 className="font-semibold mt-0.5 text-sm">{chapter.title}</h4>
              <p className="text-xs text-muted mt-1.5">{chapter.summary}</p>
            </div>
            <div className="ml-3 flex-shrink-0 rounded-full bg-border/50 p-1.5">
              <LockIcon />
            </div>
          </div>
          {/* Key ideas teaser */}
          {chapter.keyIdeas.length > 0 && (
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {chapter.keyIdeas.slice(0, 3).map((idea) => (
                <span key={idea} className="inline-block text-[10px] text-muted/80 bg-surface/60 border border-border/40 rounded-full px-2 py-0.5 line-clamp-1">
                  {idea.split("—")[0].trim()}
                </span>
              ))}
            </div>
          )}
          {chapter.linkedInPosts && chapter.linkedInPosts.length > 0 && (
            <div className="mt-3 space-y-2">
              {chapter.linkedInPosts.map((post) => (
                <LinkedInPostCard key={post.url} post={post} />
              ))}
            </div>
          )}
          <div className="mt-3 pt-2 border-t border-border/50">
            <a href="#get-book" className="text-xs text-accent-blue hover:underline">
              Unlock full chapter &rarr; Get the book
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-surface/50 p-4 hover:bg-surface-hover transition">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted">Chapter {chapter.number}</span>
            <span className={`text-[10px] font-semibold rounded-full px-2 py-0.5 bg-gradient-to-r ${section.gradient} text-white`}>
              FREE PREVIEW
            </span>
          </div>
          <h4 className="font-semibold mt-0.5 text-sm">{chapter.title}</h4>
        </div>
      </div>
      <p className="text-xs text-muted mt-2 leading-relaxed">{chapter.summary}</p>

      {/* Key ideas - always visible for free chapters */}
      <div className="mt-3">
        <h5 className="text-[10px] font-semibold text-muted uppercase tracking-wide mb-2">Key Ideas from the Book</h5>
        <ul className="space-y-1.5">
          {chapter.keyIdeas.map((idea) => (
            <li key={idea} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
              <span className={`${section.accent} mt-0.5 flex-shrink-0`}>&bull;</span>
              {idea}
            </li>
          ))}
        </ul>
      </div>

      {chapter.linkedInPosts && chapter.linkedInPosts.length > 0 && (
        <div className="mt-3 space-y-2">
          <h5 className="text-[10px] font-semibold text-muted uppercase tracking-wide mb-1">Related Content</h5>
          {chapter.linkedInPosts.map((post) => (
            <LinkedInPostCard key={post.url} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ---- Chapter 1 Flipbook deep dive ---- */
const CH1_PAGES = [
  {
    title: "A Brief History of Industrial Progress",
    content: `Steam engines powered the first factories leading to mankind's first industrial revolution. Our grandparents witnessed the second industrial surge propelled by electricity and assembly lines. Computers automated the factories of the third industrial revolution, unlocking the digital world and the era of software. Now, we stand at the dawn of a fourth revolution propelled by AI factories fuelled by data, electricity, and algorithms. This revolution is unique: AI is not just executing tasks, but producing ideas, simulating judgment, and learning context.`,
    highlight: `"Every company is now fundamentally an intelligence manufacturer." — Jensen Huang, CEO of NVIDIA`,
  },
  {
    title: "The Siemens of the AI Age",
    content: `Consider NVIDIA's evolution from gaming GPUs to the backbone of AI. Its chips power data centers where raw data is smelted into insights, much like blast furnaces once transformed ore into steel. In 2023, NVIDIA's market cap soared past $1 trillion as demand for AI infrastructure exploded. CEO Jensen Huang isn't just selling hardware. He's defining the infrastructure — and metaphor — of the intelligence age. Think of NVIDIA as the steel supplier of the AI age but smarter. Beyond raw materials, its GPUs and tools power the entire intelligence production line, democratizing access for companies of all sizes.`,
    highlight: `"A data centre that turns electricity into intelligence." — Jensen Huang, CEO of NVIDIA`,
  },
  {
    title: "What Is an AI Factory?",
    content: `At its core, an AI Factory is a metaphor for producing intelligence at scale using machines. Instead of workers assembling products on a physical line, AI models process data to generate human-like outputs. The AI Factory Formula: Data + Compute Power + Models = Intelligence (Tokens). Data is the raw material — like steel or cotton. Compute Power is the electricity and machinery, primarily GPUs. Models are the digital workers — algorithms that understand and generate language, images, and more. Tokens are the factory's output: modular units of digital intelligence, used in chatbots, design tools, and beyond.`,
    highlight: "AI Factory Formula: Data + Compute Power + Models = Intelligence (Tokens)",
  },
  {
    title: "Real-World Examples of AI Factory Output",
    content: `These outputs represent the "invisible goods" of the AI Factory: (1) Text Generation — ChatGPT writing an email or summarizing a report. (2) Image Creation — Midjourney generating a product concept from a prompt. (3) Music Composition — Suno AI composing background music for training videos. (4) Video & Simulation — Sora creating short video clips from simple instructions. (5) Synthetic Voices — HeyGen or Eleven Labs creating customer service agents with realistic tones. A security firm "orders" incident summaries like a retailer orders uniforms. A law firm "manufactures" tailored legal analyses. A hospital generates personalized discharge instructions in seconds.`,
    highlight: "What once took teams days to compile now takes the AI Factory minutes.",
  },
  {
    title: "The 3 Layers of the AI Factory",
    content: `NVIDIA's Jensen Huang describes three foundational layers: (1) Infrastructure Layer — data centres, cloud platforms, specialised chips, and the power grid. Like the plumbing and wiring of a traditional factory. Example: Microsoft Azure or Amazon Web Services hosting large language models. (2) Production Layer — where intelligence is manufactured by training models on data. The assembly line that turns raw materials into finished goods. Example: Training a model to generate customer service replies from chat logs. (3) Application Layer — where AI outputs reach the real world via chatbots, recommendation engines, and AI-driven applications. The finished products leaving the factory for distribution and use.`,
    highlight: "Infrastructure → Production → Application: three layers that manufacture intelligence",
  },
  {
    title: "The Five Elements of GenAI Capability",
    content: `Owning a factory doesn't automatically guarantee success. The critical question is: what does your organization need to truly harness this new machinery? It rests on five essential elements. Knowledge — the institutional memory, documents, expertise your organization has gained. This is the raw material for AI. Skills — your team's ability to prompt, supervise, validate, and apply AI in workflows. Tools and Technology — the AI models, APIs, and software platforms. Critical but not sufficient on their own. Processes — your internal systems and workflows where AI must be integrated. Mindset — the willingness to experiment, adapt, and rethink how intelligence is used across roles.`,
    highlight: "Owning a power tool doesn't make you a carpenter. Without all five elements, you're still just a consumer.",
  },
  {
    title: "How L'Oreal Operates Its AI Factory",
    content: `L'Oreal integrates generative AI into its core marketing, product development, and customer engagement. (1) Raw Material: Customer reviews (3.5 million/year), social media images, and IoT data from smart mirrors in stores. (2) Processing: AI models analyze trends (e.g., "glossy lips are trending in Tokyo") and generate product recommendations for suppliers and ad copy like "Meet your new summer shine, inspired by Harajuku nights." (3) Output: 30% faster time-to-market for new cosmetics lines. This is what it looks like when a company runs its own intelligence production line at scale.`,
    highlight: "If L'Oreal can build an AI Factory, so can your SME — same principles, different scale.",
  },
  {
    title: "From Consumers to Capability Builders",
    content: `Most companies focus primarily on tools. They download a chatbot for free, subscribe to a language model, or run a demo and call that AI adoption. But owning a power tool doesn't make you a carpenter. If you buy Microsoft Copilot but don't train your team, connect it to your processes, or shape it with your knowledge, then you're still just a consumer. To truly benefit, businesses need to move from consuming tools to building capability — owning the full stack. Those who do will produce smarter outputs, respond faster to market changes, reduce dependency on third parties, and build lasting competitive advantage.`,
    highlight: `"There are two types of companies in the Age of AI: those that thrive and those that go bust."`,
  },
  {
    title: "The Takeaway: Build, Don't Wait",
    content: `The AI Factory isn't coming. It's here. It's time to start building. Competitive advantage comes from designing how your company Produces intelligence (data + models), Packages it (APIs, apps, services), and Applies it (workflows, customer experiences). The question is no longer if but how and how fast. In the coming chapters, we'll dive into the types of AI workers in the factory, how these factories are transforming industries, and how you can start building your own AI Workshop to stay competitive in a world of infinite intelligence.`,
    highlight: `"The future belongs to those who see intelligence as something to manufacture, not just consume."`,
  },
];

function Chapter1Flipbook() {
  const [page, setPage] = useState(0);
  const [flipping, setFlipping] = useState(false);

  const goTo = (p: number) => {
    if (p === page || flipping) return;
    setFlipping(true);
    setTimeout(() => {
      setPage(p);
      setFlipping(false);
    }, 250);
  };

  const pg = CH1_PAGES[page];

  return (
    <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold rounded-full px-3 py-1 bg-blue-600/20 text-blue-400">
            FULL CHAPTER PREVIEW
          </span>
          <span className="text-[10px] text-muted">Chapter 1 &middot; Flipbook</span>
        </div>
        <div className="text-[10px] text-muted">
          {page + 1} / {CH1_PAGES.length}
        </div>
      </div>

      {/* Page content */}
      <div className={`min-h-[320px] transition-all duration-250 ${flipping ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}>
        <h3 className="text-lg font-bold mb-3 text-foreground">{pg.title}</h3>

        <div className="text-sm leading-relaxed text-muted mb-4">
          <p>{pg.content}</p>
        </div>

        {/* Highlight callout */}
        <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-3 mb-4">
          <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1">Key Takeaway</div>
          <p className="text-sm text-blue-200 font-medium italic" style={{ fontFamily: "var(--font-display)" }}>
            {pg.highlight}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/30">
        <button
          onClick={() => goTo(Math.max(0, page - 1))}
          disabled={page === 0}
          className="flex items-center gap-1 text-xs text-muted hover:text-foreground disabled:opacity-30 disabled:hover:text-muted transition"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          Previous
        </button>

        {/* Page dots */}
        <div className="flex gap-1.5">
          {CH1_PAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition ${i === page ? "bg-blue-400 scale-125" : "bg-border hover:bg-muted"}`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(Math.min(CH1_PAGES.length - 1, page + 1))}
          disabled={page === CH1_PAGES.length - 1}
          className="flex items-center gap-1 text-xs text-muted hover:text-foreground disabled:opacity-30 disabled:hover:text-muted transition"
        >
          Next
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
}

/* ---- Section content panel ---- */
function SectionContent({ section }: { section: Section }) {
  const freeCount = section.chapters.filter((c) => c.isFree).length;
  const gatedCount = section.chapters.length - freeCount;

  return (
    <div className="animate-fade-in-up" style={{ animationDuration: "0.3s" }}>
      {/* Section header */}
      <div className="mb-5">
        <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${section.accent} mb-2`}>
          <div className={`w-6 h-6 rounded-md flex items-center justify-center ${section.iconBg} text-[10px] font-bold`}>
            {section.shortLabel}
          </div>
          {section.label}
        </div>
        <h2 className="text-2xl font-bold">{section.title}</h2>
        <p className="text-sm text-muted mt-1">{section.subtitle}</p>
        <div className="flex items-center gap-3 mt-2 text-xs text-muted">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {freeCount} free
          </span>
          {gatedCount > 0 && (
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-border" />
              {gatedCount} in full book
            </span>
          )}
        </div>
      </div>

      {/* Infographic */}
      {section.infographic && (
        <div className="mb-5 rounded-xl border border-border overflow-hidden bg-surface/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${B}${section.infographic}`}
            alt={`${section.title} infographic`}
            className="w-full"
          />
        </div>
      )}

      {/* Chapters */}
      <div className="space-y-3">
        {section.chapters.map((ch) => (
          <ChapterCard key={ch.number} chapter={ch} section={section} />
        ))}
      </div>

      {/* Chapter 1 deep dive for Foundation */}
      {section.id === "foundation" && <Chapter1Flipbook />}
    </div>
  );
}

/* ---- Endorsements ---- */
function EndorsementsSection() {
  return (
    <section id="endorsements" className="py-14 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl text-center mb-1">What Leaders Are Saying</h2>
        <p className="text-center text-muted text-xs mb-8">
          Endorsed by leaders from NVIDIA, Google DeepMind, Singapore Parliament &amp; more
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {ENDORSEMENTS.map((e) => (
            <div key={e.author} className="relative rounded-xl border border-border/60 bg-surface/40 p-5 card-lift group">
              <div className="quote-mark">&ldquo;</div>
              <p className="text-sm text-muted/90 leading-relaxed italic mb-4 relative z-10 pt-4" style={{ fontFamily: "var(--font-display)" }}>
                {e.quote}
              </p>
              <div className="relative z-10 pt-3 border-t border-border/30">
                <div className="text-xs font-semibold">{e.author}</div>
                <div className="text-[10px] text-muted">{e.role}</div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Authors ---- */
function AuthorsSection() {
  return (
    <section id="authors" className="py-12 border-t border-border/50">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-xl font-bold text-center mb-6">The Authors</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              name: "Kevin Shepherdson",
              role: "Founder, Strings Interactive",
              desc: "Pioneer of the AI Factory framework and the 3-tier AI capability model.",
              linkedin: "https://www.linkedin.com/in/kevinshepherdson/",
            },
            {
              name: "Celine Chew",
              role: "Learning Psychologist, Strings Interactive",
              desc: "L&D specialist bridging learning science with AI adoption.",
            },
            {
              name: "Joaquin Jay Gonzalez III",
              role: "Professor, Golden Gate University",
              desc: "Distinguished academic leader bringing governance and policy perspectives.",
            },
          ].map((a) => (
            <div key={a.name} className="rounded-xl border border-border bg-surface/50 p-4 text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-600/20 mx-auto mb-3 flex items-center justify-center text-xl font-bold text-blue-400">
                {a.name[0]}
              </div>
              <h4 className="font-semibold text-sm">{a.name}</h4>
              <div className="text-[10px] text-accent-blue mb-1.5">{a.role}</div>
              <p className="text-[11px] text-muted">{a.desc}</p>
              {"linkedin" in a && a.linkedin && (
                <a href={a.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-[10px] text-[#0a66c2] hover:underline">
                  <LinkedInIcon size={10} />
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- CTA ---- */
function CTASection() {
  return (
    <section id="get-book" className="py-16 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 via-blue-950/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[100px]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl mb-3">
          Start Building Your <span className="italic">AI Factory</span>
        </h2>
        <p className="text-muted text-sm mb-8 max-w-md mx-auto leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
          Get the complete guide with all 15 chapters, practical frameworks, case studies, self-assessments, and the AI Tool Builder bonus toolkit.
        </p>
        <a
          href="mailto:info@straitsinteractive.com?subject=AI%20Factory%20Book%20Inquiry"
          className="inline-block rounded-full bg-accent-orange px-10 py-3.5 text-white font-semibold glow-orange hover:scale-105 transition-transform duration-300 text-sm"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Get Your Copy
        </a>
        <p className="text-[10px] text-muted mt-4" style={{ fontFamily: "var(--font-sans)" }}>
          Published by Straits Interactive &bull; Available across ASEAN
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE                                                          */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [activeSection, setActiveSection] = useState("foundation");
  const explorerRef = useRef<HTMLDivElement>(null);
  const sheetResources = useSheetResources();
  const sections = mergeSections(SECTIONS, sheetResources);

  const handleNav = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (id === "endorsements") {
      document.getElementById("endorsements")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    // Set active section and scroll to explorer
    setActiveSection(id);
    setTimeout(() => {
      explorerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <main>
      <Navbar activeSection={activeSection} onNav={handleNav} />
      <HeroSection onNav={handleNav} />

      {/* ---- Chapter Explorer: sidebar + content ---- */}
      <section ref={explorerRef} id="chapters" className="py-10 scroll-mt-16 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl mb-1">Explore the Book</h2>
            <p className="text-xs text-muted" style={{ fontFamily: "var(--font-sans)" }}>
              15 chapters across 4 sections &bull; One free chapter per section
            </p>
          </div>

          <div className="flex gap-6">
            {/* ---- Sidebar ---- */}
            <div className="hidden md:block w-56 flex-shrink-0">
              <div className="sticky top-20 space-y-1">
                {sections.map((s) => {
                  const isActive = activeSection === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveSection(s.id)}
                      className={`w-full text-left rounded-xl p-3 transition-all ${
                        isActive
                          ? `bg-surface border ${s.borderColor} ring-1 ${s.accentRing}`
                          : "hover:bg-surface/50 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold ${isActive ? s.iconBg : "bg-border/30 text-muted"}`}>
                          {s.shortLabel}
                        </div>
                        <div>
                          <div className={`text-xs font-semibold ${isActive ? "text-foreground" : "text-muted"}`}>
                            {s.title}
                          </div>
                          <div className="text-[10px] text-muted">{s.chapters.length} chapters</div>
                        </div>
                      </div>
                      {/* Mini infographic */}
                      {isActive && s.infographic && (
                        <div className="mt-2 rounded-lg overflow-hidden border border-border/50 aspect-[16/9]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={`${B}${s.infographic}`} alt="" className="w-full h-full object-cover object-top" />
                        </div>
                      )}
                    </button>
                  );
                })}

                <div className="mt-4 pt-4 border-t border-border/50">
                  <a href="#get-book" className="block rounded-xl border border-accent-orange/30 bg-accent-orange/5 p-3 hover:bg-accent-orange/10 transition text-center">
                    <div className="text-xs font-semibold text-accent-orange mb-1">Get the Full Book</div>
                    <div className="text-[10px] text-muted">All 15 chapters + bonus toolkit</div>
                  </a>
                </div>
              </div>
            </div>

            {/* ---- Content ---- */}
            <div className="flex-1 min-w-0">
              {/* Mobile tabs */}
              <div className="md:hidden flex gap-1 mb-6 overflow-x-auto pb-2">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSection(s.id)}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition ${
                      activeSection === s.id
                        ? `bg-gradient-to-r ${s.gradient} text-white`
                        : "bg-surface text-muted border border-border"
                    }`}
                  >
                    {s.shortLabel}
                  </button>
                ))}
              </div>

              {sections.map((s) =>
                activeSection === s.id ? <SectionContent key={s.id} section={s} /> : null
              )}
            </div>
          </div>
        </div>
      </section>

      <EndorsementsSection />
      <AuthorsSection />
      <CTASection />

      <footer className="border-t border-border/50 py-6">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] text-muted">
          <div>&copy; 2025 The AI Factory. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a href="https://straitsinteractive.com" className="text-accent-blue hover:underline" target="_blank" rel="noopener noreferrer">
              Straits Interactive
            </a>
            <span>&bull;</span>
            <a href="https://capabara.com" className="text-accent-blue hover:underline" target="_blank" rel="noopener noreferrer">
              Capabara
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
