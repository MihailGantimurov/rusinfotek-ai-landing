type LogoProps = {
  inverse?: boolean;
};

export function Logo({ inverse = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="РусИнфоТек">
      <span
        aria-hidden="true"
        className={`grid size-7 place-items-center border text-[10px] font-semibold tracking-[-0.04em] ${
          inverse
            ? 'border-white/24 text-turquoise'
            : 'border-oxford/20 text-oxford'
        }`}
      >
        TR
      </span>
      <span
        className={`text-[17px] font-semibold tracking-[-0.035em] ${
          inverse ? 'text-white' : 'text-oxford'
        }`}
      >
        РусИнфоТек
      </span>
    </span>
  );
}
