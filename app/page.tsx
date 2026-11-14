import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import {
  education,
  jobs,
  languages,
  site,
  skillCategories,
} from '@/lib/content';
import { formatPostDate, getPosts } from '@/lib/posts';

const HomePage = () => {
  const posts = getPosts();

  return (
    <main id="main" className="mx-auto max-w-6xl px-5 sm:px-8">
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="scroll-mt-28 grid gap-8 border-b border-rule py-16 lg:grid-cols-12 lg:items-end lg:gap-x-12 lg:gap-y-6 lg:py-24"
    >
      <p className="text-xs font-medium tracking-[0.28em] text-vermillion uppercase lg:col-span-7">
        {site.role}
      </p>
      <h1
        id="intro-heading"
        className="font-display text-display text-ink lg:col-span-7"
      >
        <span className="italic">Stephanie</span>
        <span className="mt-1 block">Fernandes</span>
      </h1>
      <div className="pb-4 lg:col-span-5 lg:col-start-8 lg:row-span-4 lg:row-start-1 lg:justify-self-end">
        <figure className="relative mx-auto w-64 sm:w-72 lg:mx-0 lg:w-80">
          <div
            aria-hidden="true"
            className="absolute top-4 left-4 h-full w-full bg-vermillion"
          />
          <Image
            src="/photo.png"
            alt="Stephanie Fernandes"
            width={298}
            height={296}
            priority
            className="relative z-10 w-full border border-ink bg-paper-deep object-cover"
          />
        </figure>
      </div>
      <p className="max-w-xl text-lg leading-8 text-ink-soft lg:col-span-7">
        Hey there! I&apos;m Stephanie, a design-minded{' '}
        <strong className="font-semibold text-ink">front end developer</strong>{' '}
        💻 always looking forward to learn from other developers and to create
        pixel perfect applications. I&apos;m currently{' '}
        <strong className="font-semibold text-ink">based in Brazil</strong> 🇧🇷, but
        I am available to work remotely for companies{' '}
        <strong className="font-semibold text-ink">all over the world</strong> 🚀.
      </p>
      <div className="flex flex-wrap items-center gap-4 lg:col-span-7">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center bg-vermillion px-5 py-3 text-xs font-medium tracking-[0.16em] text-paper uppercase transition-colors hover:bg-vermillion-deep"
        >
          Get in touch
        </a>
        <a
          href={site.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center border border-ink px-5 py-3 text-xs font-medium tracking-[0.16em] text-ink uppercase transition-colors hover:border-vermillion hover:text-vermillion"
        >
          View my Resume
        </a>
      </div>
    </section>

    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-28 py-16 lg:py-24"
    >
      <SectionHeading eyebrow="01" title="Work Experience" id="work-heading" />
      <ol className="divide-y divide-rule border-y border-rule">
        {jobs.map((job) => (
          <li
            key={`${job.company}-${job.time}`}
            className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
          >
            <p className="font-display text-sm tracking-wide text-dust tabular-nums sm:col-span-4">
              {job.time}
            </p>
            <div className="sm:col-span-8">
              <p className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-display text-2xl text-ink">
                  {job.company}
                </span>
                {job.current ? (
                  <span className="text-[0.65rem] font-medium tracking-[0.18em] text-vermillion uppercase">
                    Present
                  </span>
                ) : null}
              </p>
              <p className="mt-1 text-ink-soft">
                {job.role}
                <span className="text-dust"> @ {job.location}</span>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>

    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-28 py-16 lg:py-24"
    >
      <SectionHeading eyebrow="02" title="Skills" id="skills-heading" />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => (
          <div key={category.label}>
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-vermillion uppercase">
              {category.label}
            </p>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="border-b border-rule/80 pb-2 font-display text-xl text-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <div className="grid gap-16 border-t border-rule py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
      <section
        id="education"
        aria-labelledby="education-heading"
        className="scroll-mt-28"
      >
        <SectionHeading eyebrow="03" title="Education" id="education-heading" />
        <ul className="space-y-10">
          {education.map((school) => (
            <li key={school.name}>
              <p className="font-display text-2xl text-ink">{school.name}</p>
              <p className="mt-1 text-sm tracking-wide text-dust tabular-nums">
                {school.time}
              </p>
              <p className="mt-3 text-ink-soft">
                {school.major}
                <span className="text-dust"> @ {school.location}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="languages"
        aria-labelledby="languages-heading"
        className="scroll-mt-28"
      >
        <SectionHeading eyebrow="04" title="Languages" id="languages-heading" />
        <ul className="space-y-4">
          {languages.map((language) => (
            <li key={language.name} className="leader font-display text-2xl">
              <span className="text-ink">{language.name}</span>
              <span className="leader-rule" aria-hidden="true" />
              <span className="text-base tracking-[0.14em] text-olive uppercase">
                {language.fluency}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>

    <section
      id="notes"
      aria-labelledby="notes-heading"
      className="scroll-mt-28 border-t border-rule py-16 lg:py-24"
    >
      <SectionHeading
        eyebrow="05"
        title="Some Extra Tidbits"
        id="notes-heading"
      />
      <ol className="space-y-8">
        <li className="grid gap-4 sm:grid-cols-12">
          <span
            aria-hidden="true"
            className="font-display text-sm text-vermillion sm:col-span-1"
          >
            01
          </span>
          <p className="max-w-3xl text-lg leading-8 text-ink-soft sm:col-span-11">
            I co-authored the paper{' '}
            <a
              href="https://ieeexplore.ieee.org/document/8114447"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-vermillion decoration-1 underline-offset-4 hover:text-vermillion"
            >
              &quot;Interactive Musical Game with a Gesture-Controlled Virtual
              Puppet&quot;
            </a>
            , which was published at SVR 2017 and won{' '}
            <strong className="font-semibold text-ink">second place</strong> in
            the Application category.
            <span role="img" aria-label="Trophy">
              {' '}
              🏆
            </span>
          </p>
        </li>
        <li className="grid gap-4 sm:grid-cols-12">
          <span
            aria-hidden="true"
            className="font-display text-sm text-vermillion sm:col-span-1"
          >
            02
          </span>
          <p className="max-w-3xl text-lg leading-8 text-ink-soft sm:col-span-11">
            Back in 2014, I was granted a scholarship by the Brazilian government
            to study full-time at Monash University in{' '}
            <strong className="font-semibold text-ink">
              Melbourne, Australia
            </strong>
            , where I studied Game Development.{' '}
            <span role="img" aria-label="Kangaroo">
              🦘
            </span>
          </p>
        </li>
        <li className="grid gap-4 sm:grid-cols-12">
          <span
            aria-hidden="true"
            className="font-display text-sm text-vermillion sm:col-span-1"
          >
            03
          </span>
          <p className="max-w-3xl text-lg leading-8 text-ink-soft sm:col-span-11">
            At Monash University, I was a{' '}
            <a
              href="https://www.monash.edu/it/future-students/meet-our-students/stephanie-fernandes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-vermillion decoration-1 underline-offset-4 hover:text-vermillion"
            >
              volunteer assistant
            </a>{' '}
            at the SensiLab research lab, where I was responsible for the
            research and 3D modelling of the Banteay Srei temple for an{' '}
            <a
              href="https://sensilab.monash.edu/research/virtual-angkor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-vermillion decoration-1 underline-offset-4 hover:text-vermillion"
            >
              educational game based on Angkor Wat
            </a>
            .
            <span role="img" aria-label="Graduation cap">
              {' '}
              🎓
            </span>
          </p>
        </li>
        <li className="grid gap-4 sm:grid-cols-12">
          <span
            aria-hidden="true"
            className="font-display text-sm text-vermillion sm:col-span-1"
          >
            04
          </span>
          <p className="max-w-3xl text-lg leading-8 text-ink-soft sm:col-span-11">
            I&apos;ve done the{' '}
            <strong className="font-semibold text-ink">
              Camino de Santiago
            </strong>{' '}
            in 6 days in 2019.
            <span role="img" aria-label="Sweat droplets">
              💦
            </span>
          </p>
        </li>
        <li className="grid gap-4 sm:grid-cols-12">
          <span
            aria-hidden="true"
            className="font-display text-sm text-vermillion sm:col-span-1"
          >
            05
          </span>
          <p className="max-w-3xl text-lg leading-8 text-ink-soft sm:col-span-11">
            I&apos;ve voluntered at Hostel One in{' '}
            <strong className="font-semibold text-ink">Porto</strong> for 40 days
            during July/August 2019, making friends with people from{' '}
            <em>all over</em> the world and improving my communication skills!{' '}
            <span role="img" aria-label="World map">
              🗺️
            </span>
          </p>
        </li>
        <li className="grid gap-4 sm:grid-cols-12">
          <span
            aria-hidden="true"
            className="font-display text-sm text-vermillion sm:col-span-1"
          >
            06
          </span>
          <p className="max-w-3xl text-lg leading-8 text-ink-soft sm:col-span-11">
            I went to Sogang University in{' '}
            <strong className="font-semibold text-ink">
              Seoul, South Korea,
            </strong>{' '}
            for 3 months in 2019, where I learned and studied the Korean language
            as a full-time student :){' '}
            <span role="img" aria-label="South Korea flag">
              🇰🇷
            </span>
          </p>
        </li>
        <li className="grid gap-4 sm:grid-cols-12">
          <span
            aria-hidden="true"
            className="font-display text-sm text-vermillion sm:col-span-1"
          >
            07
          </span>
          <p className="max-w-3xl text-lg leading-8 text-ink-soft sm:col-span-11">
            My favourite country from all over the world is{' '}
            <strong className="font-semibold text-ink">Japan</strong>!{' '}
            <span role="img" aria-label="Japan flag">
              🇯🇵
            </span>
          </p>
        </li>
      </ol>
    </section>

    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="scroll-mt-28 border-t border-rule py-16 lg:py-24"
    >
      <SectionHeading eyebrow="06" title="From the notebook" id="blog-heading" />
      <ul className="divide-y divide-rule border-y border-rule">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
          >
            <p className="font-display text-sm tracking-wide text-dust tabular-nums sm:col-span-3">
              {formatPostDate(post.date)}
            </p>
            <div className="sm:col-span-9">
              <p className="flex flex-wrap items-baseline gap-x-3">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="font-display text-2xl text-ink transition-colors hover:text-vermillion"
                >
                  {post.title}
                </Link>
                {post.sample ? (
                  <span className="text-[0.65rem] font-medium tracking-[0.18em] text-vermillion uppercase">
                    Sample
                  </span>
                ) : null}
              </p>
              <p className="mt-2 max-w-2xl text-ink-soft">{post.excerpt}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <Link
          href="/blog/"
          className="text-xs font-medium tracking-[0.18em] text-ink uppercase transition-colors hover:text-vermillion"
        >
          All notes →
        </Link>
      </p>
    </section>
    </main>
  );
};

export default HomePage;
