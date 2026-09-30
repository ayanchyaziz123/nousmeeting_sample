import { Search, Calendar, Users, Menu, FileAudio, LayoutDashboard, Settings, Bell, Mic } from "lucide-react";

const meetings = [
  { title: "Product Strategy Sync", meta: "Jan 15, 2026 • 45 min • 4 participants", status: "Completed" },
  { title: "Design Review", meta: "Jan 14, 2026 • 30 min • 3 participants", status: "Completed" },
  { title: "Weekly Team Standup", meta: "Jan 13, 2026 • 15 min • 6 participants", status: "Processing" },
  { title: "Customer Interview", meta: "Jan 12, 2026 • 60 min • 2 participants", status: "Completed" },
  { title: "Roadmap Planning", meta: "Jan 11, 2026 • 45 min • 5 participants", status: "Completed" },
];

const statusStyle = {
  Completed: "bg-green-100 text-green-700",
  Processing: "bg-amber-100 text-amber-700",
};

const sidebarItems = [
  { icon: LayoutDashboard, label: "Meetings" },
  { icon: Mic, label: "AI Assistant" },
  { icon: Calendar, label: "Calendar" },
  { icon: FileAudio, label: "Notetaker" },
  { icon: Menu, label: "Transcripts" },
  { icon: Users, label: "Team" },
  { icon: Settings, label: "Settings" },
];

export default function DashboardMock() {
  return (
    <div className="relative">
      {/* decorative blobs */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-fuchsia-200/50 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-200/50 rounded-full blur-3xl -z-10" />

      {/* Laptop frame */}
      <div className="rounded-2xl bg-gray-900 p-2.5 shadow-2xl shadow-indigo-950/20 ring-1 ring-black/5">
        <div className="bg-white rounded-lg overflow-hidden flex text-[10px]">
          {/* Sidebar */}
          <div className="w-24 bg-gray-50 border-r border-gray-100 py-3 px-2 hidden sm:block">
            <div className="flex items-center gap-1 px-1 mb-4">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-indigo-600 to-fuchsia-500" />
              <span className="font-bold text-gray-800 text-[9px]">nous meeting</span>
            </div>
            <div className="space-y-1">
              {sidebarItems.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md ${
                    i === 0 ? "bg-indigo-600 text-white" : "text-gray-500"
                  }`}
                >
                  <item.icon className="w-3 h-3" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="font-bold text-gray-900 text-xs">Welcome to Next Generation</p>
                <p className="text-gray-400">Your meetings, organized and searched</p>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="w-3 h-3 text-gray-400" />
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-600 to-fuchsia-500 flex items-center justify-center text-white text-[8px] font-bold">
                  AR
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1.5 flex-1 border border-gray-200 rounded-md px-2 py-1.5 text-gray-400">
                <Search className="w-3 h-3" />
                Search meetings, keywords, or participants
              </div>
              <div className="border border-gray-200 rounded-md px-2 py-1.5 text-gray-400">MM/DD/YYYY</div>
              <div className="border border-gray-200 rounded-md px-2 py-1.5 text-gray-400">MM/DD/YYYY</div>
            </div>

            <div className="space-y-1.5">
              {meetings.map((m) => (
                <div
                  key={m.title}
                  className="flex items-center justify-between border border-gray-100 rounded-md px-2.5 py-2"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{m.title}</p>
                    <p className="text-gray-400">{m.meta}</p>
                  </div>
                  <span className={`px-1.5 py-0.5 rounded font-medium ${statusStyle[m.status]}`}>
                    {m.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* laptop base */}
      <div className="h-2.5 mx-6 bg-gray-800 rounded-b-xl" />

      {/* Floating card: AI Summary */}
      <div className="hidden sm:block absolute -top-8 right-2 w-40 bg-white rounded-xl shadow-xl shadow-gray-900/10 border border-gray-100 p-3">
        <p className="text-[10px] font-semibold text-gray-800 mb-2">✨ AI Summary</p>
        <div className="space-y-1.5">
          <div className="h-1.5 bg-gray-100 rounded w-full" />
          <div className="h-1.5 bg-gray-100 rounded w-4/5" />
          <div className="h-1.5 bg-gray-100 rounded w-3/5" />
        </div>
        <div className="h-1.5 mt-2 bg-gradient-to-r from-indigo-600 to-fuchsia-500 rounded w-1/2" />
      </div>

      {/* Floating card: Key Insights */}
      <div className="hidden sm:block absolute top-24 -right-6 w-40 bg-white rounded-xl shadow-xl shadow-gray-900/10 border border-gray-100 p-3">
        <p className="text-[10px] font-semibold text-gray-800 mb-2">Key Insights</p>
        <ul className="space-y-1.5 text-[9px] text-gray-600">
          <li className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
            3 action items
          </li>
          <li className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">✓</span>
            2 decisions made
          </li>
          <li className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">!</span>
            1 follow-up needed
          </li>
        </ul>
      </div>

      {/* Floating card: Transcript */}
      <div className="hidden sm:block absolute -bottom-10 right-0 w-44 bg-white rounded-xl shadow-xl shadow-gray-900/10 border border-gray-100 p-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-semibold text-gray-800">Transcript</p>
          <span className="text-[9px] text-gray-400">00:12</span>
        </div>
        <div className="space-y-1.5">
          {["Speaker 1", "Speaker 2", "Speaker 3"].map((s, i) => (
            <div key={s} className="flex items-center gap-1.5">
              <div
                className={`w-3.5 h-3.5 rounded-full shrink-0 ${
                  ["bg-indigo-400", "bg-fuchsia-400", "bg-green-400"][i]
                }`}
              />
              <div className="h-1.5 bg-gray-100 rounded flex-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
