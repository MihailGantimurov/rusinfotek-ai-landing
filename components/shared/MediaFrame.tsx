import type { ReactNode } from 'react';

type MediaAsset =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; src: string; poster?: string; title: string }
  | { kind: 'content'; node: ReactNode; label: string };

type MediaFrameProps = {
  asset?: MediaAsset;
  className?: string;
  label: string;
  palette?: string;
};

export function MediaFrame({
  asset,
  className = '',
  label,
  palette = 'from-[#142d51] via-[#485c96] to-[#9ca6ca]',
}: MediaFrameProps) {
  return (
    <figure className={`relative isolate overflow-hidden bg-linear-to-br ${palette} ${className}`}>
      {asset?.kind === 'image' ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="absolute inset-0 size-full object-cover" src={asset.src} alt={asset.alt} />
      ) : null}
      {asset?.kind === 'video' ? (
        <video className="absolute inset-0 size-full object-cover" src={asset.src} poster={asset.poster} aria-label={asset.title} muted playsInline />
      ) : null}
      {asset?.kind === 'content' ? asset.node : null}

      {!asset ? (
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute -right-[12%] -top-[14%] size-[62%] rounded-full bg-white/18 blur-[48px]" />
          <div className="absolute -bottom-[24%] -left-[8%] size-[58%] rounded-full bg-[#0a1730]/34 blur-[48px]" />
          <div className="absolute inset-[8%] rounded-[20px] border border-white/14 bg-[linear-gradient(140deg,rgba(255,255,255,.12),rgba(255,255,255,.025))] shadow-[inset_0_1px_rgba(255,255,255,.15)] backdrop-blur-[12px]" />
          <div className="absolute left-[12%] right-[12%] top-[28%] h-px bg-linear-to-r from-transparent via-white/36 to-transparent" />
        </div>
      ) : null}

      <figcaption className="absolute bottom-5 left-5 right-5 z-10 border-t border-white/16 pt-3 text-[12px] leading-relaxed text-white/62">
        {label}
      </figcaption>
    </figure>
  );
}
