import Link from 'next/link';

const features = [
  {
    title: 'Built on Base UI',
    description:
      'Accessible, unstyled primitives that handle complex interactions and keyboard navigation out of the box.',
  },
  {
    title: 'Tailwind CSS Styling',
    description:
      'Fully customizable with Tailwind CSS. Easily adapt components to match your design system.',
  },
  {
    title: 'TypeScript First',
    description:
      'Complete type definitions for all components, ensuring type safety and excellent IDE support.',
  },
  {
    title: '60+ Components',
    description:
      'A comprehensive collection of production-ready components for building modern web applications.',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">@kaotypr/ui</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          A collection of beautifully designed, accessible React components built
          with Radix UI and Tailwind CSS.
        </p>
        <div className="flex gap-4">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Documentation
          </Link>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
