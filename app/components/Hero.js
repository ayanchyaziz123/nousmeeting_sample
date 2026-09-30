import { Zap, CheckCircle2, Play } from "lucide-react";
import DashboardMock from "./DashboardMock";

const checks = ["No credit card required", "Early access", "Be the first to know"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Zap className="w-3.5 h-3.5" fill="currentColor" />
            AI-Powered Meeting Intelligence
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.05] mb-5">
            From Meetings to
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
              Meaningful Action
            </span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-md">
            Turn every meeting into transcripts, AI summaries, insights and actionable knowledge automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-indigo-600/25 hover:shadow-xl hover:shadow-indigo-600/30 hover:-translate-y-0.5 transition-all"
            >
              Pre-Register Free
              <span aria-hidden>&rarr;</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3.5 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              <Play className="w-4 h-4" fill="currentColor" />
              Watch Demo
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {checks.map((c) => (
              <div key={c} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" fill="#e0e7ff" />
                {c}
              </div>
            ))}
          </div>
        </div>

        <DashboardMock />
      </div>
    </section>
  );
}
