import Link from 'next/link';

const NotFound = () => (
  <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
    <p className="text-xs font-medium tracking-[0.28em] text-vermillion uppercase">
      404
    </p>
    <h1 className="font-display mt-4 text-display text-ink italic">
      Page not found
    </h1>
    <p className="mt-6 max-w-md text-lg text-ink-soft">
      That page doesn&apos;t exist. Head back home to read about Stephanie
      Fernandes.
    </p>
    <Link
      href="/"
      className="mt-8 inline-flex w-fit items-center bg-vermillion px-5 py-3 text-xs font-medium tracking-[0.16em] text-paper uppercase transition-colors hover:bg-vermillion-deep"
    >
      Back home
    </Link>
  </main>
);

export default NotFound;
