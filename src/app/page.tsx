"use client";

import { useState } from "react";

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

type Chapter = {
  number: number;
  title: string;
  summary: string;
  keyIdeas: string[];
  isFree: boolean;
};

type Section = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  color: string;
  iconBg: string;
  chapters: Chapter[];
  infographic?: string;
};

const SECTIONS: Section[] = [
  {
    id: "foundation",
    label: "Foundation",
    title: "Welcome to the AI Factory",
    subtitle: "The metaphor that makes AI accessible to every business leader",
    color: "from-blue-600 to-cyan-500",
    iconBg: "bg-blue-600/20 text-blue-400",
    infographic: "/infographics/ch1-welcome-to-the-ai-factory.png",
    chapters: [
      {
        number: 1,
        title: "Welcome to the AI Factory",
        isFree: true,
        summary:
          "Traces the evolution of industrial revolutions to reveal how AI is powering a fourth revolution \u2014 one that manufactures intelligence instead of physical goods. Introduces the AI Factory Formula: Data + Compute Power + Models = Intelligence (Tokens), and the three core layers: Infrastructure, Production, and Application.",
        keyIdeas: [
          "The Four Industrial Revolutions \u2014 from steam to intelligence",
          "AI Factory Formula: Data + Compute + Models \u2192 Tokens",
          "Three layers: Infrastructure, Production, Application",
          "Five Elements of GenAI Capability: Knowledge, Skills, Tools, Processes, Mindset",
          "From consumers to capability builders \u2014 why tools alone aren't enough",
          "Real-world example: How L'\u00d3r\u00e9al operates its own AI Factory",
        ],
      },
    ],
  },
  {
    id: "part1",
    label: "Part 1",
    title: "Production & Processes",
    subtitle:
      "The first floor \u2014 where finished digital outputs are produced on the assembly line",
    color: "from-emerald-600 to-teal-500",
    iconBg: "bg-emerald-600/20 text-emerald-400",
    infographic: "/infographics/ch2-the-outputs.png",
    chapters: [
      {
        number: 2,
        title: "The Outputs",
        isFree: true,
        summary:
          "Explores the intangible yet valuable digital outputs of the AI Factory \u2014 from actionable intelligence to 6 digital product types. Covers 10 common GenAI workplace applications and the rise of the intelligence economy powered by tech giants.",
        keyIdeas: [
          "From raw data to actionable intelligence",
          "10 common GenAI use cases in the workplace",
          "6 Digital Intelligence Products",
          "The rise of the intelligence economy",
          "How tech giants power the AI Factory ecosystem",
        ],
      },
      {
        number: 3,
        title: "The Workers",
        isFree: false,
        summary:
          "Meet the AI workforce \u2014 the mathematical algorithms (writers, painters, sculptors, composers) that produce tokens instead of bolts. Covers defining generative AI, tokens as inputs, and the manager's role in directing AI workers.",
        keyIdeas: [
          "Defining Generative AI and its workers",
          "Tokens as inputs and outputs",
          "The Transformer architecture explained",
          "Putting your AI workforce to work",
        ],
      },
      {
        number: 4,
        title: "The Blueprints",
        isFree: false,
        summary:
          "Every factory needs a blueprint. Introduces the five-stage Generative AI Maturity Profile Framework: Use, Create, Deploy, Govern, and Manage. Includes 10 essential business use cases and Capability Clusters.",
        keyIdeas: [
          "The GenAI Maturity Profile Framework",
          "10 essential business use cases",
          "Capability Clusters: where factory meets workplace",
          "Your AI Factory Blueprint in action",
        ],
      },
      {
        number: 5,
        title: "The Production Line",
        isFree: false,
        summary:
          "The heart of the factory \u2014 a systematic five-stage process: Data Collection, Preprocessing, Model Training, App Development & Evaluation, and Deployment & Maintenance.",
        keyIdeas: [
          "The five stages of AI production",
          "Building a data science department without coding",
          "Mid-sized business implementation example",
        ],
      },
      {
        number: 6,
        title: "The Instructions",
        isFree: false,
        summary:
          "Prompt engineering as the art of giving precise, actionable orders to your AI workforce. Covers three levels of prompting, Chain of Thought techniques, and multimodal methods.",
        keyIdeas: [
          "The 80:20 workforce reality of prompt engineering",
          "Three levels of prompt engineering on the factory floor",
          "Chain of Thought (CoT) prompting & variants",
          "Multimodal prompting methods",
        ],
      },
      {
        number: 7,
        title: "The Owners",
        isFree: false,
        summary:
          "From the DeepSeek moment to the open-source revolution. Covers choosing your factory setup: Closed, Open, or RAG? Understanding the AI app landscape and the responsibility of ownership.",
        keyIdeas: [
          "The DeepSeek moment \u2014 factory doors swing open",
          "Open source vs. proprietary: the new AI roadmap",
          "Core, Clone, and Combination apps",
          "Responsibility in the open era",
        ],
      },
    ],
  },
  {
    id: "part2",
    label: "Part 2",
    title: "Business Administration & Operations",
    subtitle:
      "The second floor \u2014 governance, ethics, collaboration, and human oversight",
    color: "from-violet-600 to-purple-500",
    iconBg: "bg-violet-600/20 text-violet-400",
    infographic: "/infographics/ch8-customization.png",
    chapters: [
      {
        number: 8,
        title: "Customization",
        isFree: true,
        summary:
          "Moving from passive consumers to intelligence creators. Introduces the four-step GenAI integration process and explains how RAG (Retrieval-Augmented Generation) works as the smart factory floor for custom intelligence.",
        keyIdeas: [
          "The plateau of general AI \u2014 why custom intelligence matters",
          "Four-step GenAI integration process",
          "How RAG works: the smart factory floor",
          "What makes custom intelligence possible",
        ],
      },
      {
        number: 9,
        title: "Workshopping",
        isFree: false,
        summary:
          "Every SME needs an AI Workshop \u2014 a focused, practical mini-factory. Introduces the five essential building blocks and the AI Workshop Lifecycle aligned with ISO 5338.",
        keyIdeas: [
          "The Gen AI Capability Framework",
          "Five essential building blocks",
          "AI Workshop Lifecycle (ISO 5338)",
          "Practical advice for digital transformation",
        ],
      },
      {
        number: 10,
        title: "Human-Machine Collaboration",
        isFree: false,
        summary:
          "The new division of labour between humans and AI as partners. Introduces the role of the Chief AI Officer (CAIO) as the master builder of the AI Factory.",
        keyIdeas: [
          "From task-taker to value creator",
          "The shifting workforce (2025 snapshot)",
          "The rise of the Chief AI Officer",
        ],
      },
      {
        number: 11,
        title: "Governance & Ethics",
        isFree: false,
        summary:
          "Building ethical assembly lines. Covers the EU AI Act, ISO 42001, the Six Principles of ethical AI, and the 3As and 3Is toolkit for responsible operation.",
        keyIdeas: [
          "The EU AI Act and risk levels",
          "ISO 42001: AI Management System",
          "Six Principles of ethical AI in action",
          "The 3As and 3Is practical toolkit",
        ],
      },
      {
        number: 12,
        title: "Accountability, Safety & Risks",
        isFree: false,
        summary:
          "Every AI product represents your brand. Covers defects in digital intelligence, model cards as \"nutrition labels,\" copyright protection, and building trustworthy AI products.",
        keyIdeas: [
          "Data protection and product liability",
          "Model Cards: the \"nutrition labels\" of AI",
          "Copyright and counterfeit intelligence",
          "Leadership accountability: you own what you ship",
        ],
      },
      {
        number: 13,
        title: "Intelligence Cost & Judgement",
        isFree: false,
        summary:
          "Balancing cheap, fast production with quality. Covers token economics, the quality paradox, hallucinations, automation bias, and why human oversight is the final checkpoint.",
        keyIdeas: [
          "Token economics: the new currency of intelligence",
          "LLM benchmarks vs. human IQ",
          "The quality paradox and judgment gap",
          "Human oversight as the final checkpoint",
        ],
      },
    ],
  },
  {
    id: "part3",
    label: "Part 3",
    title: "The Future",
    subtitle: "Autonomous agents, agentic AI, and building what comes next",
    color: "from-orange-500 to-amber-500",
    iconBg: "bg-orange-500/20 text-orange-400",
    chapters: [
      {
        number: 14,
        title: "The Age of Autonomous Agents",
        isFree: true,
        summary:
          "AI workers that don't need explicit instructions for every task. Covers the AI spectrum (ANI, AGI, ASI), the 7P considerations for deploying agents, and how to create business agents without coding.",
        keyIdeas: [
          "ANI, AGI, ASI \u2014 where agents fit on the spectrum",
          "Agentic AI: what's possible now",
          "7P considerations for deploying agents",
          "Creating business agents without coding",
          "Agency, autonomy, and new challenges",
        ],
      },
      {
        number: 15,
        title: "Call to Action: Building the Future of Intelligence",
        isFree: false,
        summary:
          "The leadership mandate for the intelligence economy. Recaps the AI Factory journey and the Capability Framework (Knowledge, Skills, Tools, Processes, Mindset) as a call to action for enterprise transformation.",
        keyIdeas: [
          "Recap of the AI Factory journey",
          "The leadership mandate",
          "Thriving in the intelligence economy",
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENTS                                                         */
/* ------------------------------------------------------------------ */

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-accent-blue">{"\u2699"}</span> The AI Factory
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-muted">
          <a href="#chapters" className="hover:text-foreground transition">
            Chapters
          </a>
          <a href="#endorsements" className="hover:text-foreground transition">
            Endorsements
          </a>
          <a href="#authors" className="hover:text-foreground transition">
            Authors
          </a>
          <a
            href="#get-book"
            className="rounded-full bg-accent-orange px-4 py-1.5 text-white font-medium hover:opacity-90 transition"
          >
            Get the Book
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-background to-background" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-orange/30 bg-accent-orange/10 px-3 py-1 text-xs text-accent-orange font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange"></span>
            </span>
            The AI Factory Series &mdash; AI-Blended Books for Business Leaders
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            The{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Factory
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-2 font-light">
            AI Capability Guide for SMEs
          </p>
          <p className="text-sm text-muted mb-8">
            By Kevin Shepherdson, Celine Chew &amp; Joaquin Jay Gonzalez III
          </p>
          <p className="text-base text-muted leading-relaxed mb-8 max-w-lg">
            Every company is now an intelligence manufacturer. This book gives
            SME leaders a practical framework to build, customize, and deploy
            their own AI Factory &mdash; no coding required.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#chapters"
              className="rounded-full bg-accent-blue px-6 py-3 text-white font-medium glow-blue hover:opacity-90 transition"
            >
              Preview Chapters
            </a>
            <a
              href="#get-book"
              className="rounded-full border border-border px-6 py-3 text-foreground font-medium hover:bg-surface transition"
            >
              Get Your Copy
            </a>
          </div>
        </div>

        <div
          className="flex justify-center animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/10 blur-2xl" />
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border/50 max-w-[340px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/book-cover.svg"
                alt="The AI Factory book cover"
                className="w-full"
                width={340}
                height={500}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent-orange text-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-center shadow-lg glow-orange">
              <span className="text-[10px] font-medium leading-tight">
                FREE
                <br />
                BONUS
                <br />
                INSIDE
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            {
              icon: "\ud83c\udfed",
              label: "The Factory Metaphor",
              desc: "Making AI tangible for business",
            },
            {
              icon: "\ud83d\udcca",
              label: "Two-Floor Model",
              desc: "Production + Operations",
            },
            {
              icon: "\ud83d\udee0\ufe0f",
              label: "5 Capability Elements",
              desc: "Knowledge, Skills, Tools, Processes, Mindset",
            },
            {
              icon: "\ud83e\udd16",
              label: "Agentic Future",
              desc: "Autonomous AI workers",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-surface/50 p-4 hover:bg-surface-hover transition"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-sm font-semibold mb-1">{item.label}</div>
              <div className="text-xs text-muted">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormulaSection() {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-bold mb-3">The AI Factory Formula</h2>
        <p className="text-muted mb-8">
          Just as traditional factories transform raw materials into goods, the
          AI Factory transforms data into intelligence.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-lg md:text-2xl font-mono">
          <span className="rounded-lg bg-blue-600/15 border border-blue-600/30 px-4 py-2 text-blue-400">
            Data
          </span>
          <span className="text-muted">+</span>
          <span className="rounded-lg bg-emerald-600/15 border border-emerald-600/30 px-4 py-2 text-emerald-400">
            Compute Power
          </span>
          <span className="text-muted">+</span>
          <span className="rounded-lg bg-violet-600/15 border border-violet-600/30 px-4 py-2 text-violet-400">
            Models
          </span>
          <span className="text-muted">=</span>
          <span className="rounded-lg bg-orange-500/15 border border-orange-500/30 px-4 py-2 text-orange-400">
            Intelligence (Tokens)
          </span>
        </div>
      </div>
    </section>
  );
}

function ChapterCard({
  chapter,
  sectionColor,
}: {
  chapter: Chapter;
  sectionColor: string;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!chapter.isFree) {
    return (
      <div className="relative rounded-xl border border-border bg-surface/30 p-5 overflow-hidden">
        <div className="gate-shimmer absolute inset-0 pointer-events-none" />
        <div className="relative flex items-start justify-between">
          <div>
            <span className="text-xs text-muted">
              Chapter {chapter.number}
            </span>
            <h4 className="font-semibold mt-0.5">{chapter.title}</h4>
            <p className="text-sm text-muted mt-2 line-clamp-2">
              {chapter.summary}
            </p>
          </div>
          <div className="ml-3 flex-shrink-0 rounded-full bg-border/50 p-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-muted"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-border/50">
          <a
            href="#get-book"
            className="text-xs text-accent-blue hover:underline"
          >
            Unlock full chapter &rarr; Get the book
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-surface/50 p-5 hover:bg-surface-hover transition">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted">
              Chapter {chapter.number}
            </span>
            <span
              className={`text-[10px] font-semibold rounded-full px-2 py-0.5 bg-gradient-to-r ${sectionColor} text-white`}
            >
              FREE PREVIEW
            </span>
          </div>
          <h4 className="font-semibold mt-0.5">{chapter.title}</h4>
        </div>
      </div>
      <p className="text-sm text-muted mt-2">{chapter.summary}</p>
      {expanded && (
        <div className="mt-3">
          <h5 className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">
            Key Ideas
          </h5>
          <ul className="space-y-1">
            {chapter.keyIdeas.map((idea) => (
              <li
                key={idea}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <span className="text-accent-blue mt-1">&bull;</span>
                {idea}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-xs text-accent-blue hover:underline"
      >
        {expanded ? "Show less" : "See key ideas \u2193"}
      </button>
    </div>
  );
}

function SectionBlock({ section }: { section: Section }) {
  const freeCount = section.chapters.filter((c) => c.isFree).length;
  const gatedCount = section.chapters.length - freeCount;

  return (
    <div id={section.id} className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`flex-shrink-0 rounded-xl w-12 h-12 flex items-center justify-center ${section.iconBg}`}
        >
          <span className="text-lg font-bold">
            {section.label.replace("Part ", "P")}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-bold">{section.title}</h3>
          <p className="text-sm text-muted">{section.subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4 text-xs text-muted">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          {freeCount} free chapter{freeCount > 1 ? "s" : ""}
        </span>
        {gatedCount > 0 && (
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-border" />
            {gatedCount} in full book
          </span>
        )}
        <span className="flex items-center gap-1">
          {section.chapters.length} total
        </span>
      </div>

      {section.infographic && (
        <div className="mb-4 rounded-xl border border-border overflow-hidden bg-surface/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={section.infographic}
            alt={`${section.title} infographic`}
            className="w-full"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      )}

      <div className="grid gap-3">
        {section.chapters.map((ch) => (
          <ChapterCard
            key={ch.number}
            chapter={ch}
            sectionColor={section.color}
          />
        ))}
      </div>
    </div>
  );
}

function Chapter1DeepDive() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-16 border-t border-border/50">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-semibold rounded-full px-3 py-1 bg-blue-600/20 text-blue-400">
            FULL CHAPTER PREVIEW
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-2">
          Chapter 1: Welcome to the AI Factory
        </h2>
        <p className="text-muted text-sm mb-8 italic">
          &ldquo;Every company is now fundamentally an intelligence
          manufacturer.&rdquo; &mdash; Jensen Huang, CEO of NVIDIA
        </p>

        <div className="space-y-6 text-[15px] leading-relaxed text-muted">
          <p>
            The book opens with a powerful premise: we are living through a
            fourth industrial revolution. While steam, electricity, and
            microchips powered the first three, this new era is fueled by{" "}
            <strong className="text-foreground">
              data, algorithms, and computing infrastructure
            </strong>
            .
          </p>

          <div className="rounded-xl border border-border bg-surface/50 p-6">
            <h4 className="text-foreground font-semibold mb-3">
              The Four Industrial Revolutions
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              {[
                {
                  era: "1st",
                  period: "1800s",
                  driver: "Steam & mechanization",
                },
                {
                  era: "2nd",
                  period: "Early 20th C.",
                  driver: "Electrification & assembly lines",
                },
                {
                  era: "3rd",
                  period: "Late 20th C.",
                  driver: "Microchips & Internet",
                },
                {
                  era: "4th",
                  period: "Now",
                  driver: "AI, data & algorithms",
                },
              ].map((r) => (
                <div key={r.era} className="rounded-lg bg-background p-3">
                  <div className="font-bold text-foreground text-sm">
                    {r.era} Revolution
                  </div>
                  <div className="text-muted mt-1">{r.period}</div>
                  <div className="mt-1">{r.driver}</div>
                </div>
              ))}
            </div>
          </div>

          <p>
            The authors introduce the{" "}
            <strong className="text-foreground">AI Factory metaphor</strong> as
            a way for non-technical leaders to understand how intelligence is
            manufactured at scale. Just as physical factories have furnaces,
            assembly lines, and distribution channels, the AI Factory has its
            own hidden machinery organized into three foundational layers.
          </p>

          <div className="rounded-xl border border-border bg-surface/50 p-6">
            <h4 className="text-foreground font-semibold mb-3">
              Three Layers of the AI Factory
            </h4>
            <div className="space-y-3">
              {[
                {
                  layer: "Infrastructure",
                  metaphor: "Plumbing & wiring",
                  desc: "Data centres, cloud platforms, GPUs, and electricity",
                  example: "Microsoft Azure, AWS, NVIDIA data centres",
                },
                {
                  layer: "Production",
                  metaphor: "Assembly line",
                  desc: "Training AI models on data, transforming raw inputs into intelligent systems",
                  example: "Training chatbots from customer transcripts",
                },
                {
                  layer: "Application",
                  metaphor: "Finished products",
                  desc: "Where AI outputs reach the real world through apps and workflows",
                  example: "ChatGPT, Midjourney, recommendation engines",
                },
              ].map((l) => (
                <div
                  key={l.layer}
                  className="flex items-start gap-3 rounded-lg bg-background p-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-blue/15 flex items-center justify-center text-accent-blue text-xs font-bold flex-shrink-0">
                    {l.layer[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {l.layer}{" "}
                      <span className="text-muted font-normal">
                        &mdash; {l.metaphor}
                      </span>
                    </div>
                    <div className="text-xs text-muted mt-0.5">{l.desc}</div>
                    <div className="text-xs text-blue-400 mt-0.5">
                      e.g. {l.example}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {showMore && (
            <>
              <p>
                The chapter then bridges the factory to the business by
                introducing the{" "}
                <strong className="text-foreground">
                  Five Elements of Generative AI Capability
                </strong>
                . The authors argue that tools alone are not enough &mdash;
                organizations need Knowledge, Skills, Tools &amp; Technology,
                Processes, and a Digital Transformation Mindset to truly benefit.
              </p>

              <div className="rounded-xl border border-border bg-surface/50 p-6">
                <h4 className="text-foreground font-semibold mb-3">
                  Five Elements of GenAI Capability
                </h4>
                <div className="grid gap-2">
                  {[
                    {
                      el: "Knowledge",
                      desc: "Institutional memory, documents, expertise \u2014 your raw material for AI",
                      risk: "Without it, you rely on generic outputs",
                    },
                    {
                      el: "Skills",
                      desc: "Your team\u2019s ability to prompt, supervise, validate, and apply AI",
                      risk: "Tools go underused or produce low-quality outputs",
                    },
                    {
                      el: "Tools & Technology",
                      desc: "AI models, APIs, software platforms",
                      risk: "Useless without the other elements",
                    },
                    {
                      el: "Processes",
                      desc: "Business systems and workflows where AI is embedded",
                      risk: "AI stays a side project, not tied to value",
                    },
                    {
                      el: "Mindset & Flexibility",
                      desc: "Willingness to experiment and rethink work",
                      risk: "Competitors move faster and seize advantage",
                    },
                  ].map((e) => (
                    <div
                      key={e.el}
                      className="flex items-start gap-3 rounded-lg bg-background p-3 text-xs"
                    >
                      <div className="font-semibold text-foreground w-28 flex-shrink-0">
                        {e.el}
                      </div>
                      <div className="text-muted flex-1">{e.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                The chapter closes with a self-check for readers to assess their
                readiness. The takeaway is clear: competitive advantage comes
                from designing how your company produces, packages, and applies
                intelligence.
              </p>

              <div className="rounded-xl border border-accent-orange/30 bg-accent-orange/5 p-5">
                <h4 className="text-accent-orange font-semibold mb-2 text-sm">
                  Chapter 1 Self-Check: Are You Ready?
                </h4>
                <ul className="text-xs text-muted space-y-1.5">
                  {[
                    "I understand how industrial progress led to the manufacture of intelligence",
                    "I understand the AI Factory metaphor and how it applies to business",
                    "I can explain the three layers (infrastructure, production, application)",
                    "I can identify at least one business process where digital intelligence could add value",
                    "I recognize the importance of capability \u2014 not just tools",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent-orange">{"\u25a1"}</span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-6 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-5 py-2 text-sm text-accent-blue hover:bg-accent-blue/20 transition"
        >
          {showMore ? "Show less" : "Read full chapter highlights \u2193"}
        </button>
      </div>
    </section>
  );
}

function EndorsementsSection() {
  return (
    <section id="endorsements" className="py-16 border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold text-center mb-2">
          What Leaders Are Saying
        </h2>
        <p className="text-center text-muted text-sm mb-10">
          Endorsed by leaders from NVIDIA, Google DeepMind, Singapore
          Parliament, and more
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ENDORSEMENTS.map((e) => (
            <div
              key={e.author}
              className="rounded-xl border border-border bg-surface/50 p-5 hover:bg-surface-hover transition"
            >
              <p className="text-sm text-muted leading-relaxed italic mb-4">
                &ldquo;{e.quote}&rdquo;
              </p>
              <div>
                <div className="text-sm font-semibold">{e.author}</div>
                <div className="text-xs text-muted">{e.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorsSection() {
  return (
    <section id="authors" className="py-16 border-t border-border/50">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold text-center mb-8">The Authors</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Kevin Shepherdson",
              role: "Founder, Strings Interactive",
              desc: "Pioneer of the AI Factory framework and the 3-tier AI capability model. Expert in AI education and digital transformation for SMEs across ASEAN.",
            },
            {
              name: "Celine Chew",
              role: "Learning Psychologist, Strings Interactive",
              desc: "L&D specialist bridging learning science with AI adoption. Designs human-centric approaches to technology integration in organizations.",
            },
            {
              name: "Joaquin Jay Gonzalez III",
              role: "Professor, Golden Gate University",
              desc: "Distinguished academic leader bringing governance, policy, and international perspectives to AI capability building for enterprises.",
            },
          ].map((a) => (
            <div
              key={a.name}
              className="rounded-xl border border-border bg-surface/50 p-5 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-600/20 mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-blue-400">
                {a.name[0]}
              </div>
              <h4 className="font-semibold">{a.name}</h4>
              <div className="text-xs text-accent-blue mb-2">{a.role}</div>
              <p className="text-xs text-muted">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      id="get-book"
      className="py-20 border-t border-border/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Start Building Your AI Factory
        </h2>
        <p className="text-muted mb-8 max-w-lg mx-auto">
          Get the complete guide with all 15 chapters, practical frameworks,
          case studies, self-assessments, and the AI Tool Builder bonus toolkit.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="mailto:info@straitsinteractive.com?subject=AI%20Factory%20Book%20Inquiry"
            className="rounded-full bg-accent-orange px-8 py-3 text-white font-medium glow-orange hover:opacity-90 transition text-lg"
          >
            Get Your Copy
          </a>
        </div>
        <p className="text-xs text-muted mt-4">
          Published by Straits Interactive &bull; Available across ASEAN
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
        <div>&copy; 2025 The AI Factory. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <span>
            A publication by{" "}
            <a
              href="https://straitsinteractive.com"
              className="text-accent-blue hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Straits Interactive
            </a>{" "}
            &amp;{" "}
            <a
              href="https://capabara.com"
              className="text-accent-blue hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Capabara
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FormulaSection />
      <Chapter1DeepDive />

      <section id="chapters" className="py-16 border-t border-border/50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-center mb-2">
            Explore the Book
          </h2>
          <p className="text-center text-muted text-sm mb-10">
            15 chapters across 3 parts. Preview one free chapter per section,
            then get the full book.
          </p>
          <div className="space-y-14">
            {SECTIONS.map((s) => (
              <SectionBlock key={s.id} section={s} />
            ))}
          </div>
        </div>
      </section>

      <EndorsementsSection />
      <AuthorsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
