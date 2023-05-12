import AnimatedLayout from './components/animated-layout';

export default function Template({
  // Templates must accept a children prop.
  // This will be populated with nested layouts, templates or pages
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <AnimatedLayout>
      <main className="pt-[56px]">
        <article className="mx-auto max-w-2xl px-8">{children}</article>
      </main>
    </AnimatedLayout>
  );
}
