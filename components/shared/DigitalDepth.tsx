import { cn } from '@/lib/utils';

type DigitalDepthProps = {
  className?: string;
  variant?: 'hero' | 'sales' | 'logistics' | 'production' | 'documents';
};

const variants = {
  hero: {
    bloom: 'bg-[#7784eb]/58',
    sheet: 'from-white/26 via-[#91a2ff]/12 to-transparent',
    core: 'from-[#c1cdff]/45 via-[#7f8cef]/20 to-[#172b68]/30',
  },
  sales: {
    bloom: 'bg-[#8c79de]/48',
    sheet: 'from-white/26 via-[#c4adff]/14 to-transparent',
    core: 'from-[#e2dbff]/42 via-[#9b8ad7]/18 to-[#26366f]/28',
  },
  logistics: {
    bloom: 'bg-[#6fa9d6]/46',
    sheet: 'from-white/24 via-[#9dd4ec]/14 to-transparent',
    core: 'from-[#cbeeff]/42 via-[#77add5]/18 to-[#173c6e]/28',
  },
  production: {
    bloom: 'bg-[#8c9bbc]/40',
    sheet: 'from-white/24 via-[#cbd0df]/14 to-transparent',
    core: 'from-[#e1e6ee]/42 via-[#98a6c2]/18 to-[#263b5c]/28',
  },
  documents: {
    bloom: 'bg-[#b08bcb]/42',
    sheet: 'from-white/25 via-[#e0b7e6]/14 to-transparent',
    core: 'from-[#f1dcff]/42 via-[#c49bd5]/18 to-[#443362]/26',
  },
};

export function DigitalDepth({ className, variant = 'hero' }: DigitalDepthProps) {
  const style = variants[variant];

  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div className={cn('cinematic-light absolute -right-[18%] top-[2%] size-[72%] rounded-full blur-[55px]', style.bloom)} />
      <div className="absolute inset-[15%_8%_8%_29%] rounded-[44%] border border-white/20 bg-white/[0.035] backdrop-blur-[2px]" />
      <div className={cn('cinematic-drift absolute -right-[4%] top-[17%] h-[52%] w-[63%] rounded-[46%_54%_44%_56%] bg-linear-to-br shadow-[0_35px_100px_rgba(1,9,30,.26)] backdrop-blur-md', style.core)} />
      <div className={cn('absolute right-[14%] top-[12%] h-[63%] w-[35%] rotate-[13deg] rounded-[2rem] border border-white/22 bg-linear-to-b shadow-[0_24px_80px_rgba(7,19,50,.16)] backdrop-blur-xl', style.sheet)} />
      <div className="absolute bottom-[13%] right-[12%] h-[26%] w-[34%] rounded-[50%] bg-[#c5d1ff]/18 blur-2xl" />
    </div>
  );
}
