/**
 * Footer.jsx — Clean Netflix-style footer.
 */

import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-nf-darker border-t border-nf-gray/10 mt-16">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14">
        {/* Links row */}
        <div className="flex flex-wrap gap-6 sm:gap-8 mb-8">
          <a href={`mailto:${personalInfo.email}`} className="text-nf-text-muted text-sm hover:text-nf-white transition-colors">
            Email
          </a>
          <a href={`tel:${personalInfo.phone}`} className="text-nf-text-muted text-sm hover:text-nf-white transition-colors">
            Phone
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-nf-text-muted text-sm hover:text-nf-white transition-colors">
            LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-nf-text-muted text-sm hover:text-nf-white transition-colors">
            GitHub
          </a>
          <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="text-nf-text-muted text-sm hover:text-nf-white transition-colors">
            Resume
          </a>
        </div>

        {/* Copyright */}
        <div className="space-y-1.5">
          <p className="text-nf-text-muted text-xs">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React & TailwindCSS.
          </p>
          <p className="text-nf-text-muted/60 text-[11px]">
            Inspired by Netflix. This is a portfolio website, not affiliated with Netflix Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
