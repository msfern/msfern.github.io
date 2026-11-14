export const site = {
  name: 'Stephanie Fernandes',
  title: 'Stephanie Fernandes | Front End Developer',
  role: 'Front End Developer',
  location: 'Brazil',
  description:
    "I'm Stephanie, a design-minded front end developer always looking forward to learn from other developers and to create pixel perfect applications. I'm currently based in Brazil, but I am available to work remotely for companies all over the world.",
  url: 'https://msfern.dev',
  email: 'msfern.dev@gmail.com',
  resumeHref: '/resume/Stephanie_Fernandes-CV_en.pdf',
} as const;

export const socialLinks = [
  {
    label: 'Email',
    href: `mailto:${site.email}`,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/iztef',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/msfern',
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/msfern',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/stephanie-fernandes-30365233/',
  },
] as const;

export const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#education', label: 'Education' },
  { href: '/#languages', label: 'Languages' },
  { href: '/#notes', label: 'Notes' },
  { href: '/blog/', label: 'Blog' },
] as const;

export const jobs = [
  {
    company: 'ACCT',
    time: 'August 2021 - Present',
    role: 'Front End Developer',
    location: 'Atibaia, SP, Brazil (Remote)',
    current: true,
  },
  {
    company: 'Sambatech',
    time: 'February 2021 - August 2021',
    role: 'Front End Developer',
    location: 'Belo Horizonte, MG, Brazil (Remote)',
    current: false,
  },
  {
    company: 'Enext',
    time: 'October 2020 - February 2021',
    role: 'Front End Developer',
    location: 'São Paulo, SP, Brazil (Remote)',
    current: false,
  },
  {
    company: 'KTBYTE',
    time: 'January 2018 - April 2019',
    role: 'Front End Developer',
    location: 'Lexington, MA, USA (Remote)',
    current: false,
  },
  {
    company: 'Cuponomia',
    time: 'February 2018 - October 2018',
    role: 'Front End Developer',
    location: 'São Paulo, SP, Brazil (Remote)',
    current: false,
  },
  {
    company: 'Trílogo',
    time: 'September 2016 - January 2018',
    role: 'Front End Developer',
    location: 'Fortaleza, CE, Brazil',
    current: false,
  },
] as const;

export const skillCategories = [
  {
    label: 'Languages',
    skills: ['HTML', 'Javascript ES6+', 'Typescript', '(S)CSS', 'Less'],
  },
  {
    label: 'Frameworks/Libraries',
    skills: ['React', 'JQuery', 'Styled Components'],
  },
  {
    label: 'Tools',
    skills: ['Git & Github', 'Webpack', 'Netlify', 'Figma', 'Photoshop'],
  },
  {
    label: 'Design',
    skills: [
      'Sketching',
      'Wireframing',
      'Responsive Web Design',
      'UI Design',
    ],
  },
] as const;

export const education = [
  {
    name: 'Universidade de Fortaleza',
    time: 'August 2010 - June 2017',
    major: 'Bachelor of Computer Science',
    location: 'Fortaleza, CE, Brazil',
  },
  {
    name: 'Monash University',
    time: 'July 2014 - June 2015',
    major: 'Bachelor of Computer Science (Scholarship)',
    location: 'Melbourne, VIC, Australia',
  },
] as const;

export const languages = [
  { name: 'Portuguese', fluency: 'Native' },
  { name: 'English', fluency: 'Fluent' },
  { name: 'Spanish', fluency: 'Basic' },
  { name: 'Korean', fluency: 'Basic' },
] as const;
