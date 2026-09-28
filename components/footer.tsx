import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="mx-6 sm:mx-20 xl:mx-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
        {/* Brand & Summary */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/tooth.png" alt="Logo" width={50} height={50} />
            <h3 className="title">
              <span className="text-blue-500">Che</span>rish
            </h3>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Delivering modern, pain-free dental healthcare with state-of-the-art
            technology and personalized care across Nepal.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2 text-sm text-slate-400">
            <li>
              <Link
                href="#services"
                className="hover:text-blue-400 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#testimonials"
                className="hover:text-blue-400 transition-colors"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-blue-400 transition-colors"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Our Treatments
          </h4>
          <ul className="flex flex-col gap-2 text-sm text-slate-400">
            <li>Family Dentistry</li>
            <li>Digital Radiography</li>
            <li>Teeth Whitening</li>
            <li>Orthodontics & Implants</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span>Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-blue-500 shrink-0" />
              <span>+977 1-4XXXXXX</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-blue-500 shrink-0" />
              <span>info@cherishnepal.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mx-6 sm:mx-20 xl:mx-40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} Cherish Nepal. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="#privacy"
            className="hover:text-slate-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#terms"
            className="hover:text-slate-400 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
