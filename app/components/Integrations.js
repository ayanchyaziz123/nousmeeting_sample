import { Video, ScreenShare, Users2, MessagesSquare, Workflow } from "lucide-react";

const integrations = [
  {
    icon: Video,
    title: "Zoom",
    description: "Automatically capture meetings from Zoom.",
    iconBg: "bg-blue-500",
  },
  {
    icon: ScreenShare,
    title: "Google Meet",
    description: "Capture and transcribe Google Meet sessions.",
    iconBg: "bg-green-500",
  },
  {
    icon: Users2,
    title: "Microsoft Teams",
    description: "Sync meetings and notes directly from Teams.",
    iconBg: "bg-indigo-500",
  },
  {
    icon: MessagesSquare,
    title: "Slack",
    description: "Route action items to the right channels.",
    iconBg: "bg-fuchsia-500",
  },
  {
    icon: Workflow,
    title: "Jira",
    description: "Turn action items into Jira tickets instantly.",
    iconBg: "bg-sky-500",
  },
];

export default function Integrations() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3">Integrations</h2>
        <p className="text-gray-500">Connect seamlessly with the tools you already use.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {integrations.map((item) => (
          <div
            key={item.title}
            className="border border-gray-100 rounded-2xl p-6 text-center bg-white hover:border-gray-200 hover:shadow-lg hover:shadow-gray-900/5 hover:-translate-y-0.5 transition-all"
          >
            <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 shadow-sm ${item.iconBg}`}>
              <item.icon className="w-6 h-6 text-white" strokeWidth={1.75} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
