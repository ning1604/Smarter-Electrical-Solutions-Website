import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}

const services = [
  { label: "Home Automation", href: "/services?tab=automation" },
  { label: "Electrical Installation", href: "/services?tab=electrical" },
  { label: "Intercoms, Locks & Cameras", href: "/services?tab=security" },
  { label: "Multi Room Audio", href: "/services?tab=audio" },
  { label: "Home Theatre", href: "/services?tab=theatre" },
  { label: "Wifi & Networking", href: "/services?tab=networking" },
  { label: "EV Charger Installation", href: "/services?tab=electrical" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
  { label: "Book A Consultation", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/logos/logo-white.png"
                alt=""
                width={44}
                height={44}
                style={{ height: "44px", width: "auto" }}
              />
              <Image
                src="/logos/logo-name-transparent.png"
                alt={BUSINESS.name}
                width={220}
                height={60}
                style={{ height: "30px", width: "auto" }}
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Making electrical and technology solutions easy for homes and
              businesses across {BUSINESS.city}. No hidden costs. No surprises
              at the end.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-2.5 text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <Phone size={16} />
                {BUSINESS.phonePretty}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2.5 text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <Mail size={16} />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-2.5 text-zinc-300">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {BUSINESS.address}
              </div>
              <a
                href="https://www.facebook.com/smarterelecsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <FacebookIcon size={16} />
                Follow us on Facebook
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + CTA column */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Hours
            </h3>
            <div className="flex flex-col gap-2 text-sm text-zinc-400 mb-6">
              <div className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="text-zinc-300">7:30 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-zinc-300">7:30 AM – 5:00 PM</span>
              </div>
              <div className="mt-2 pt-2 border-t border-white/10">
                <span className="text-zinc-400 italic">By appointment only</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-amber-500 hover:bg-amber-400 text-navy-950 font-semibold rounded-lg transition-colors text-sm"
            >
              Book A Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
