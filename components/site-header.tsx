import Link from 'next/link';
import { SocialList } from '@/components/social-list';
import { navLinks, site } from '@/lib/content';

export const SiteHeader = () => (
  <header className="sticky top-0 z-40 border-b border-rule/80 bg-paper/90 backdrop-blur-md">
    <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
      <Link
        href="/"
        className="font-display text-xl tracking-tight text-ink whitespace-nowrap"
      >
        {site.name.toLowerCase()}
      </Link>
      <nav aria-label="Primary">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium tracking-[0.18em] text-ink-soft uppercase">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-vermillion"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <SocialList className="flex items-center lg:justify-end" />
    </div>
  </header>
);
