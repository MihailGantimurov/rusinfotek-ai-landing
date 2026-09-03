import Link from 'next/link';

type RoutePlaceholderProps = {
  title: string;
};

export function RoutePlaceholder({ title }: RoutePlaceholderProps) {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-5 text-foreground">
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-[-.04em] sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-white/50">Страница подготовлена для дальнейшей разработки.</p>
        <Link className="mt-8 inline-flex border border-primary/50 px-5 py-3 text-sm text-primary" href="/">Вернуться на главную</Link>
      </div>
    </main>
  );
}
