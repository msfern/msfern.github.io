import { socialIcons } from '@/components/social-icons';
import { socialLinks } from '@/lib/content';

type SocialListProps = {
  className?: string;
};

export const SocialList = ({ className }: SocialListProps) => (
  <ul className={className}>
    {socialLinks.map((link) => {
      const Icon = socialIcons[link.label];
      const isExternal = link.href.startsWith('http');

      return (
        <li key={link.label}>
          <a
            href={link.href}
            className="inline-flex h-9 w-9 items-center justify-center text-ink-soft transition-colors hover:text-vermillion focus-visible:text-vermillion sm:h-10 sm:w-10"
            {...(isExternal
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            <Icon />
            <span className="sr-only">{link.label}</span>
          </a>
        </li>
      );
    })}
  </ul>
);
