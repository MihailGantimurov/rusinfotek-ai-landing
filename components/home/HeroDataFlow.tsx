'use client';

import styles from './Hero.module.css';

const nodes = [
  { x: 24, y: 80, label: 'INPUT / 01' },
  { x: 190, y: 148, label: 'ANALYSIS / 02' },
  { x: 100, y: 262, label: 'ROUTING / 03' },
  { x: 295, y: 345, label: 'EXECUTION / 04' },
  { x: 365, y: 462, label: 'OUTPUT / 05' },
];

export function HeroDataFlow({ paused }: { paused: boolean }) {
  return (
    <svg aria-hidden="true" className={styles.flowSvg} viewBox="0 0 460 520" fill="none" data-paused={paused}>
      {nodes.slice(0, -1).map((node, index) => {
        const next = nodes[index + 1];
        const path = `M ${node.x} ${node.y} H ${next.x} V ${next.y}`;
        return (
          <g key={node.label} className={index > 1 ? styles.desktopFlow : undefined}>
            <path d={path} stroke="rgba(190,205,243,.23)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <path className={styles.signal} d={path} pathLength="1" stroke="#aebeff" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeDasharray=".025 .975" style={{ animationDelay: `${2.2 + index * 1.1}s` }} />
          </g>
        );
      })}
      {nodes.map((node, index) => (
        <g key={node.label} className={index > 2 ? styles.desktopFlow : undefined}>
          <rect x={node.x - 2} y={node.y - 2} width="4" height="4" fill="#c4d1ee" fillOpacity=".55" />
          <text x={node.x + 10} y={node.y - 11} fill="rgba(216,226,248,.48)" fontSize="9" letterSpacing=".5">{node.label}</text>
        </g>
      ))}
    </svg>
  );
}
