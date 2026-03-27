"use client";

import { useState, useRef } from "react";

// basePath prefix for static export (GitHub Pages)
const B = process.env.NODE_ENV === "production" ? "/ai-factory-preview" : "";

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
          "Traces the evolution of industrial revolutions to reveal how AI is powering a fourth revolution — one that manufactures intelligence instead of physical goods. Introduces the AI Factory Formula and the three core layers.",
        keyIdeas: [
          "The Four Industrial Revolutions — from steam to intelligence",
          "AI Factory Formula: Data + Compute + Models → Tokens",
          "Three layers: Infrastructure, Production, Application",
          "Five Elements of GenAI Capability",
          "From consumers to capability builders",
          "Real-world example: How L'Oréal operates its own AI Factory",
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
          "Explores the digital outputs of the AI Factory — from actionable intelligence to 6 digital product types and 10 common GenAI workplace applications.",
        keyIdeas: [
          "From raw data to actionable intelligence",
          "10 common GenAI use cases in the workplace",
          "6 Digital Intelligence Products",
          "The rise of the intelligence economy",
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
          "Meet the AI workforce — the algorithms that produce tokens instead of bolts. Covers defining generative AI, tokens, and the manager's role.",
        keyIdeas: [
          "Defining Generative AI and its workers",
          "Tokens as inputs and outputs",
          "The Transformer architecture explained",
          "Putting your AI workforce to work",
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
          "Every factory needs a blueprint. Introduces the five-stage GenAI Maturity Profile Framework: Use, Create, Deploy, Govern, and Manage.",
        keyIdeas: [
          "The GenAI Maturity Profile Framework",
          "10 essential business use cases",
          "Capability Clusters",
          "Your AI Factory Blueprint in action",
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
          "The heart of the factory — a systematic five-stage process from data collection to deployment and maintenance.",
        keyIdeas: [
          "The five stages of AI production",
          "Building a data science department without coding",
          "Mid-sized business implementation example",
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
          "Prompt engineering as the art of giving precise, actionable orders to your AI workforce. Three levels, CoT techniques, and multimodal methods.",
        keyIdeas: [
          "The 80:20 workforce reality of prompt engineering",
          "Three levels of prompt engineering",
          "Chain of Thought (CoT) prompting & variants",
          "Multimodal prompting methods",
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
          "From the DeepSeek moment to the open-source revolution. Closed, Open, or RAG? Understanding the AI app landscape.",
        keyIdeas: [
          "The DeepSeek moment — factory doors swing open",
          "Open source vs. proprietary",
          "Core, Clone, and Combination apps",
          "Responsibility in the open era",
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
          "Moving from passive consumers to intelligence creators. Introduces the four-step GenAI integration process and RAG as the smart factory floor.",
        keyIdeas: [
          "The plateau of general AI — why custom intelligence matters",
          "Four-step GenAI integration process",
          "How RAG works: the smart factory floor",
          "What makes custom intelligence possible",
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
          "Every SME needs an AI Workshop — a focused, practical mini-factory. Five essential building blocks and the AI Workshop Lifecycle.",
        keyIdeas: [
          "The Gen AI Capability Framework",
          "Five essential building blocks",
          "AI Workshop Lifecycle (ISO 5338)",
          "Practical advice for digital transformation",
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
          "The new division of labour between humans and AI as partners. The rise of the Chief AI Officer (CAIO).",
        keyIdeas: [
          "From task-taker to value creator",
          "The shifting workforce (2025 snapshot)",
          "The rise of the Chief AI Officer",
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
          "Building ethical assembly lines. EU AI Act, ISO 42001, the Six Principles, and the 3As and 3Is toolkit.",
        keyIdeas: [
          "The EU AI Act and risk levels",
          "ISO 42001: AI Management System",
          "Six Principles of ethical AI",
          "The 3As and 3Is practical toolkit",
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
          "Every AI product represents your brand. Model cards, copyright protection, and trustworthy AI products.",
        keyIdeas: [
          "Data protection and product liability",
          'Model Cards: the "nutrition labels" of AI',
          "Copyright and counterfeit intelligence",
          "Leadership accountability: you own what you ship",
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
          "Balancing cheap, fast production with quality. Token economics, hallucinations, and human oversight.",
        keyIdeas: [
          "Token economics: the new currency of intelligence",
          "LLM benchmarks vs. human IQ",
          "The quality paradox and judgment gap",
          "Human oversight as the final checkpoint",
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
          "AI workers that don't need explicit instructions for every task. The AI spectrum, 7P considerations, and creating business agents without coding.",
        keyIdeas: [
          "ANI, AGI, ASI — where agents fit on the spectrum",
          "Agentic AI: what's possible now",
          "7P considerations for deploying agents",
          "Creating business agents without coding",
          "Agency, autonomy, and new challenges",
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
          "The leadership mandate for the intelligence economy. Recaps the AI Factory journey and the Capability Framework as a call to action.",
        keyIdeas: [
          "Recap of the AI Factory journey",
          "The leadership mandate",
          "Thriving in the intelligence economy",
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
  const [expanded, setExpanded] = useState(false);

  if (!chapter.isFree) {
    return (
      <div className="relative rounded-xl border border-border bg-surface/30 p-4 overflow-hidden">
        <div className="gate-shimmer absolute inset-0 pointer-events-none" />
        <div className="relative">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs text-muted">Chapter {chapter.number}</span>
              <h4 className="font-semibold mt-0.5 text-sm">{chapter.title}</h4>
              <p className="text-xs text-muted mt-1.5 line-clamp-2">{chapter.summary}</p>
            </div>
            <div className="ml-3 flex-shrink-0 rounded-full bg-border/50 p-1.5">
              <LockIcon />
            </div>
          </div>
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
      <p className="text-xs text-muted mt-1.5">{chapter.summary}</p>
      {expanded && (
        <div className="mt-3">
          <h5 className="text-[10px] font-semibold text-muted uppercase tracking-wide mb-2">Key Ideas</h5>
          <ul className="space-y-1">
            {chapter.keyIdeas.map((idea) => (
              <li key={idea} className="flex items-start gap-2 text-xs text-muted">
                <span className="text-accent-blue mt-0.5">&bull;</span>
                {idea}
              </li>
            ))}
          </ul>
        </div>
      )}
      {chapter.linkedInPosts && chapter.linkedInPosts.length > 0 && (
        <div className="mt-3 space-y-2">
          {chapter.linkedInPosts.map((post) => (
            <LinkedInPostCard key={post.url} post={post} />
          ))}
        </div>
      )}
      <button onClick={() => setExpanded(!expanded)} className="mt-2 text-xs text-accent-blue hover:underline">
        {expanded ? "Show less" : "Key ideas ↓"}
      </button>
    </div>
  );
}

/* ---- Chapter 1 deep dive ---- */
function Chapter1DeepDive() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-semibold rounded-full px-3 py-1 bg-blue-600/20 text-blue-400">
          FULL CHAPTER PREVIEW
        </span>
      </div>
      <h3 className="text-lg font-bold mb-1">Chapter 1: Welcome to the AI Factory</h3>
      <p className="text-muted text-xs mb-4 italic">
        &ldquo;Every company is now fundamentally an intelligence manufacturer.&rdquo; &mdash; Jensen Huang, NVIDIA
      </p>

      <div className="space-y-4 text-sm leading-relaxed text-muted">
        <p>
          We are living through a fourth industrial revolution. While steam, electricity, and microchips powered the first three, this new era is fueled by{" "}
          <strong className="text-foreground">data, algorithms, and computing infrastructure</strong>.
        </p>

        <div className="rounded-lg border border-border bg-background/50 p-4">
          <h4 className="text-foreground font-semibold text-sm mb-2">Three Layers of the AI Factory</h4>
          <div className="space-y-2">
            {[
              { layer: "Infrastructure", desc: "Data centres, cloud platforms, GPUs" },
              { layer: "Production", desc: "Training AI models, transforming inputs to intelligence" },
              { layer: "Application", desc: "Where AI outputs reach the real world" },
            ].map((l) => (
              <div key={l.layer} className="flex items-start gap-2 rounded bg-surface/50 p-2 text-xs">
                <div className="w-6 h-6 rounded bg-accent-blue/15 flex items-center justify-center text-accent-blue text-[10px] font-bold flex-shrink-0">
                  {l.layer[0]}
                </div>
                <div>
                  <span className="font-semibold text-foreground">{l.layer}</span>
                  <span className="text-muted"> &mdash; {l.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showMore && (
          <>
            <div className="rounded-lg border border-border bg-background/50 p-4">
              <h4 className="text-foreground font-semibold text-sm mb-2">Five Elements of GenAI Capability</h4>
              <div className="grid gap-1.5">
                {[
                  { el: "Knowledge", desc: "Your raw material for AI" },
                  { el: "Skills", desc: "Prompt, supervise, validate, apply" },
                  { el: "Tools", desc: "AI models, APIs, platforms" },
                  { el: "Processes", desc: "Workflows where AI is embedded" },
                  { el: "Mindset", desc: "Willingness to experiment" },
                ].map((e) => (
                  <div key={e.el} className="flex items-center gap-2 rounded bg-surface/50 p-2 text-xs">
                    <span className="font-semibold text-foreground w-20 flex-shrink-0">{e.el}</span>
                    <span className="text-muted">{e.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-accent-orange/30 bg-accent-orange/5 p-4">
              <h4 className="text-accent-orange font-semibold text-xs mb-2">Self-Check: Are You Ready?</h4>
              <ul className="text-[11px] text-muted space-y-1">
                {[
                  "I understand the AI Factory metaphor and how it applies to business",
                  "I can explain the three layers",
                  "I can identify business processes where digital intelligence adds value",
                  "I recognize the importance of capability — not just tools",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <span className="text-accent-orange">{"□"}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      <button onClick={() => setShowMore(!showMore)} className="mt-4 text-xs text-accent-blue hover:underline">
        {showMore ? "Show less" : "Read full chapter highlights ↓"}
      </button>
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
      {section.id === "foundation" && <Chapter1DeepDive />}
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
                {SECTIONS.map((s) => {
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
                {SECTIONS.map((s) => (
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

              {SECTIONS.map((s) =>
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
