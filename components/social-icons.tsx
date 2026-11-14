import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const iconClassName = 'h-4 w-4 fill-current';

export const MailIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={iconClassName}
    {...props}
  >
    <path d="M3 5.75A1.75 1.75 0 0 1 4.75 4h14.5A1.75 1.75 0 0 1 21 5.75v12.5A1.75 1.75 0 0 1 19.25 20H4.75A1.75 1.75 0 0 1 3 18.25Zm1.75-.25a.25.25 0 0 0-.25.25v.48l7.5 5.06 7.5-5.06v-.48a.25.25 0 0 0-.25-.25ZM19.5 8.12l-6.7 4.52a1.25 1.25 0 0 1-1.4 0L4.7 8.12v10.13c0 .14.11.25.25.25h14.5a.25.25 0 0 0 .25-.25Z" />
  </svg>
);

export const TwitterIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={iconClassName}
    {...props}
  >
    <path d="M19.05 8.55c.01.16.01.32.01.48 0 4.9-3.73 10.55-10.55 10.55A10.48 10.48 0 0 1 3 17.7a7.5 7.5 0 0 0 .88.05 7.43 7.43 0 0 0 4.6-1.58 3.71 3.71 0 0 1-3.46-2.57c.23.04.46.07.7.07.34 0 .67-.05.98-.13A3.7 3.7 0 0 1 3.72 9.7v-.05c.5.28 1.07.45 1.68.47a3.7 3.7 0 0 1-1.65-3.08c0-.68.18-1.31.5-1.86a10.52 10.52 0 0 0 7.63 3.87 3.7 3.7 0 0 1 6.3-3.37 7.3 7.3 0 0 0 2.35-.9 3.72 3.72 0 0 1-1.63 2.05 7.4 7.4 0 0 0 2.13-.58 7.96 7.96 0 0 1-1.85 1.92Z" />
  </svg>
);

export const GitHubIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={iconClassName}
    {...props}
  >
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.8a9.6 9.6 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

export const CodePenIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={iconClassName}
    {...props}
  >
    <path d="M21.6 8.1 12.85 2.4a1.5 1.5 0 0 0-1.7 0L2.4 8.1a1 1 0 0 0-.4.8v6.2a1 1 0 0 0 .4.8l8.75 5.7a1.5 1.5 0 0 0 1.7 0l8.75-5.7a1 1 0 0 0 .4-.8V8.9a1 1 0 0 0-.4-.8ZM12 4.5 18.3 8.6 15 10.7 12 8.8 9 10.7 5.7 8.6Zm-8 5.7 2.4 1.5L4 13.1Zm8 9.3-6.3-4.1L9 13.3l3 1.9 3-1.9 3.3 2.1Zm4.6-5.9L16 11.7l2.4-1.5 1.6 1Zm-1.8-2.2L12 12.8 9.2 11.1 12 9.4Zm-9.2 0L8 11.7 4.8 9.6Zm-.8 4.2 2.4-1.4 3.2 2-2.4 1.5Zm12.8 2.1-2.4-1.5 3.2-2 2.4 1.4Z" />
  </svg>
);

export const LinkedInIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={iconClassName}
    {...props}
  >
    <path d="M6.94 8.5H4.07V20h2.87V8.5ZM5.5 4A1.67 1.67 0 1 0 5.5 7.34 1.67 1.67 0 0 0 5.5 4ZM20 20h-2.86v-5.6c0-1.34 0-3.05-1.86-3.05s-2.15 1.45-2.15 2.95V20H10.26V8.5h2.75v1.57h.04a3 3 0 0 1 2.71-1.49c2.9 0 3.44 1.91 3.44 4.39Z" />
  </svg>
);

export const socialIcons = {
  Email: MailIcon,
  Twitter: TwitterIcon,
  GitHub: GitHubIcon,
  CodePen: CodePenIcon,
  LinkedIn: LinkedInIcon,
} as const;
