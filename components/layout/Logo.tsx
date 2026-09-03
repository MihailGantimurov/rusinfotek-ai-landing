type LogoProps = {
  inverse?: boolean;
};

export function Logo({ inverse = false }: LogoProps) {
  return (
    <span className="inline-flex items-baseline gap-1.5" aria-label="РусИнфоТек">
      <span
        className={`text-[18px] font-semibold tracking-[-0.055em] ${
          inverse ? 'text-white' : 'text-oxford'
        }`}
      >
        РусИнфоТек
      </span>
      <span className={`text-[8px] font-bold tracking-[0.02em] ${inverse ? 'text-white/45' : 'text-oxford/38'}`} aria-hidden="true">TR</span>
    </span>
  );
}
