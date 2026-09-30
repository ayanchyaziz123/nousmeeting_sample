import { Mic, LayoutGrid, Calendar, BarChart3, UploadCloud, Globe } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "AI Note Taker",
    description: "Captures notes, action items, and key decisions automatically as your meeting unfolds.",
  },
  {
    icon: LayoutGrid,
    title: "Interactive Dashboard",
    description: "A single, searchable workspace to organize and track every meeting your team runs.",
  },
  {
    icon: Calendar,
    title: "Personalized Calendar",
    description: "Meetings and schedules stay in sync with your workflow, without the manual upkeep.",
  },
  {
    icon: BarChart3,
    title: "Speaker Sentiment Analysis",
    description: "Surfaces tone, engagement, and intent so you can read the room, not just the transcript.",
  },
  {
    icon: UploadCloud,
    title: "Import Audio & Transcribe",
    description: "Upload any recording and get an accurate, structured transcript in minutes.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Built for global teams, with support for multiple languages out of the box.",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3">Platform</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
          Everything Your Meetings Need
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          A complete toolkit for capturing, understanding, and acting on every conversation your team has.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative overflow-hidden border border-gray-100 rounded-2xl p-7 text-left bg-white hover:border-gray-200 hover:shadow-lg hover:shadow-gray-900/5 hover:-translate-y-0.5 transition-all"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
              <f.icon className="w-5 h-5 text-indigo-600" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-bold tracking-tight text-gray-900 mb-2">{f.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
