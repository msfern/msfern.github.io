import { SocialList } from '@/components/social-list';
import { site } from '@/lib/content';

export const SiteFooter = () => (
  <footer className="border-t border-rule bg-paper-deep">
    <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:px-8 lg:flex-row lg:items-center">
      <p className="font-display text-lg text-ink">
        <span aria-hidden="true" className="mr-2 text-vermillion">
          {'</>'}
        </span>
        made with
        <span className="mx-1.5 text-vermillion" aria-label="love">
          ♥
        </span>
        by {site.name.toLowerCase()}
      </p>
      <SocialList className="flex items-center gap-1" />
    </div>
  </footer>
);
