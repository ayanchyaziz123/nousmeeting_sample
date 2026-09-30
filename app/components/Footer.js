import Image from "next/image";
import { LinkedinIcon, InstagramIcon, FacebookIcon, YoutubeIcon } from "./SocialIcons";

const columns = [
  {
    title: "Product",
    links: ["Features", "Help Center", "FAQ"],
  },
  {
    title: "Company",
    links: ["About Us", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Use"],
  },
];

const socials = [
  { icon: LinkedinIcon, label: "LinkedIn" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: YoutubeIcon, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <Image src="/nous-logo.webp" alt="Nous Meeting" width={140} height={42} className="h-9 w-auto mb-3" />
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            AI-powered transcription, summaries, and meeting insights that turn conversations into action.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-bold text-gray-900 mb-4 text-sm tracking-wide uppercase text-xs">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-bold text-gray-900 mb-4 text-xs tracking-wide uppercase">Socials</h4>
          <ul className="space-y-2.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a href="#" className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                  <s.icon className="w-4 h-4" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-400">
        © 2026 Nous Meeting. All rights reserved. A product of{" "}
        <span className="font-medium text-gray-600">Next Generation Innovation L.L.C.</span>
      </div>
    </footer>
  );
}
