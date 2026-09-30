export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-fuchsia-600">
      <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Stop losing insights from your meetings
        </h2>
        <p className="text-indigo-100 max-w-xl mx-auto mb-9 leading-relaxed">
          Join early and be the first to experience smarter meetings with AI-powered insights, summaries, and
          automation.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-black/10 hover:bg-indigo-50 hover:-translate-y-0.5 transition-all"
        >
          Pre-register Free
          <span aria-hidden>&rarr;</span>
        </a>
        <p className="text-indigo-200 text-sm mt-4">Early access. Be among the first.</p>
      </div>
    </section>
  );
}
