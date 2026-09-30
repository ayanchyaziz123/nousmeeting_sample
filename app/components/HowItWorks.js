import Image from "next/image";
import { Zap, Link2, Settings, ChevronRight, Play, FileVideo, FileText, Search, CheckSquare } from "lucide-react";

const steps = [
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Get started in minutes with our intuitive interface.",
    active: true,
  },
  {
    icon: Link2,
    title: "Seamless Integration",
    description: "Connect directly with your Zoom account.",
  },
  {
    icon: Settings,
    title: "Smart Features",
    description: "Automatic transcription and AI-powered summaries.",
  },
];

const badges = [
  { icon: FileVideo, label: "Transcribe", color: "text-green-600" },
  { icon: FileText, label: "Summarize", color: "text-indigo-600" },
  { icon: Search, label: "Find Insights", color: "text-amber-600" },
  { icon: CheckSquare, label: "Take Action", color: "text-fuchsia-500" },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50/80 py-20 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">See How It Works</h2>
          <p className="text-gray-500">Watch how Nous Meeting transforms your workflow step-by-step.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${
                  step.active
                    ? "bg-white border-indigo-200 shadow-md shadow-indigo-900/5"
                    : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm"
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 shrink-0" />
              </div>
            ))}
          </div>

          {/* Video mockup */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-indigo-950 aspect-video flex items-center justify-center shadow-xl shadow-indigo-900/10 ring-1 ring-black/5">
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/30 text-white text-xs px-3 py-1.5 rounded-full">
              <FileText className="w-3.5 h-3.5" />
              Complete Guide: Setting Up Your Organization in Nous Meeting
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image src="/nous-logo.webp" alt="Nous Meeting" width={220} height={86} className="h-16 w-auto" />
              <button className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                <Play className="w-6 h-6 text-indigo-600 ml-0.5" fill="currentColor" />
              </button>
            </div>

            <div className="hidden sm:flex flex-col gap-2.5 absolute right-4 top-1/2 -translate-y-1/2">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 bg-white text-gray-800 text-xs font-medium px-3 py-2 rounded-full shadow-md"
                >
                  <b.icon className={`w-3.5 h-3.5 ${b.color}`} />
                  {b.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
