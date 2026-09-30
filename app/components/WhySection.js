import { Clock, FileText, Users, Check } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Meetings Waste Time",
    description: "Hours lost without clear outcomes.",
    fix: "Every meeting ends with a summary, decisions, and next steps.",
  },
  {
    icon: FileText,
    title: "Notes Get Lost",
    description: "No central, searchable memory.",
    fix: "Every conversation lands in one searchable workspace.",
  },
  {
    icon: Users,
    title: "Manual Follow-ups Fail",
    description: "Action items missed, no accountability.",
    fix: "Action items are captured and assigned automatically.",
  },
];

export default function WhySection() {
  return (
    <section className="relative pb-20">
      {/* Soft brand wash behind the cards */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-24 bottom-0 bg-gradient-to-b from-white via-indigo-50/60 to-white"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3">Why Nous Meeting</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            Meetings should create{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
              clarity
            </span>
            , not confusion.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Here is what usually goes wrong in meetings, and how Nous Meeting fixes it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-600/10"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-600 to-fuchsia-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-indigo-600/25">
                  <r.icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <span className="text-sm font-bold text-gray-200">0{i + 1}</span>
              </div>

              <h3 className="text-lg font-bold tracking-tight text-gray-900 mb-1.5">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{r.description}</p>

              <div className="mt-auto flex items-start gap-3 rounded-xl bg-indigo-50/70 p-4">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-500 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold text-indigo-600">With Nous: </span>
                  {r.fix}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
