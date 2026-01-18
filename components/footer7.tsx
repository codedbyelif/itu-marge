import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

/* ===================== TYPES ===================== */

type FooterLogo = {
  url: string;
  src: string;
  alt: string;
  title: string;
};

type FooterLink = {
  name: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type SocialLink = {
  icon: React.ReactNode;
  href: string;
  label: string;
};

type Footer7Props = {
  logo?: FooterLogo;
  sections?: FooterSection[];
  description?: string;
  socialLinks?: SocialLink[];
  copyright?: string;
  legalLinks?: FooterLink[];
  className?: string;
};

/* ===================== DEFAULTS ===================== */

const defaultSections: FooterSection[] = [];

const defaultSocialLinks: SocialLink[] = [
  {
    icon: <FaInstagram className="size-5" />,
    href: "https://www.instagram.com/itumarge/",
    label: "Instagram",
  },
  {
    icon: <FaTwitter className="size-5" />,
    href: "https://x.com/itumarge",
    label: "Twitter",
  },
  {
    icon: <FaLinkedin className="size-5" />,
    href: "https://www.linkedin.com/company/itu-marge/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub className="size-5" />,
    href: "https://github.com/codedbyelif",
    label: "GitHub",
  },
];

const defaultLegalLinks: FooterLink[] = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

/* ===================== COMPONENT ===================== */

const Footer7 = ({
  logo = {
    url: "",
    src: "https://media.licdn.com/dms/image/v2/D4D0BAQGt7IWvclTA1A/company-logo_200_200/company-logo_200_200/0/1705259034788/itu_marge_logo?e=2147483647&v=beta&t=mWwvoFRfitsIqtmnx9AqOPlBlO1n7QYxqj4XeHzdphY",
    alt: "İTÜ MARGE Logo",
    title: "İTÜ MARGE",
  },
  sections = defaultSections,
  description = "Aşağıda sosyal medya hesaplarımız bulunmaktadır.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2026 EL'S. All rights reserved.",
  legalLinks = defaultLegalLinks,
  className,
}: Footer7Props) => {
  return (
    <section className={cn("py-6 border-t", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8"
                />
              </a>
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </div>

            <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>

            <ul className="flex items-center gap-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-primary">
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTIONS */}
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="hover:text-primary">
                      <a href={link.href} target="_blank" rel="noopener noreferrer">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col gap-4 border-t py-8 text-xs text-muted-foreground md:flex-row md:justify-between">
          <a href="https://els.network" target="_blank" rel="noopener noreferrer">{copyright}</a>
          <ul className="flex gap-4">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href} target="_blank" rel="noopener noreferrer">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Footer7 };
