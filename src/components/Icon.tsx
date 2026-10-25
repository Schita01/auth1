const ICONS: Record<string, string> = {
  person: '<circle cx="12" cy="8" r="3"/><path d="M6 19c1.2-3 3.2-4.5 6-4.5s4.8 1.5 6 4.5"/>',
  you: '<circle cx="12" cy="8" r="3"/><path d="M6 19c1.2-3 3.2-4.5 6-4.5s4.8 1.5 6 4.5"/><path d="M17 4l2 2M19 4l-2 2"/>',
  want: '<path d="M8 11V6.5a1.5 1.5 0 0 1 3 0V11"/><path d="M11 10V5.5a1.5 1.5 0 0 1 3 0V11"/><path d="M14 10.5V7.5a1.5 1.5 0 0 1 3 0V14c0 3-2 5.5-5 5.5h-1c-2 0-3.2-.8-4.2-2L5 15"/>',
  more: '<path d="M12 5v14M5 12h14"/>',
  stop: '<path d="M8 4h8l4 4v8l-4 4H8l-4-4V8z"/>',
  go: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  help: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4v2M12 18v2M4 12h2M18 12h2"/>',
  eat: '<path d="M12 20c4-1 6-4 6-8-3 1-5 0-6-3-1 3-3 4-6 3 0 4 2 7 6 8z"/>',
  drink: '<path d="M8 4h8l-1 8a3 3 0 0 1-6 0zM12 15v5"/>',
  happy: '<circle cx="12" cy="12" r="8"/><path d="M8 10h.01M16 10h.01M8 14c1 2 2.4 3 4 3s3-1 4-3"/>',
  sad: '<circle cx="12" cy="12" r="8"/><path d="M8 10h.01M16 10h.01M8 16c1-2 2.4-3 4-3s3 1 4 3"/>',
  tired: '<circle cx="12" cy="12" r="8"/><path d="M7 10h3M14 10h3M9 15h6"/>',
  home: '<path d="M4 11 12 4l8 7v8H4z"/><path d="M10 19v-5h4v5"/>',
  play: '<circle cx="12" cy="12" r="7"/><path d="M12 5v2M12 17v2M5 12h2M17 12h2"/>',
  bathroom: '<path d="M6 21V5h8a4 4 0 0 1 4 4v12"/><circle cx="10" cy="12" r="1"/>',
  yes: '<path d="M5 12.5 10 17l9-10"/>',
  no: '<path d="M7 7l10 10M17 7 7 17"/>',
  please: '<path d="M12 4l1.6 4.2L18 10l-4.4 1.8L12 16l-1.6-4.2L6 10l4.4-1.8z"/>',
  finished: '<path d="M6 20V4h9l-1.5 4L15 12H6"/>',
  school: '<path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/>',
  outside: '<circle cx="12" cy="9" r="4"/><path d="M12 13v7M8 20h8"/>',
  shop: '<path d="M4 9h16l-1 11H5z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
  apple: '<path d="M12 7c-4 0-6 3-6 6s3 7 6 7 6-4 6-7-2-6-6-6z"/><path d="M12 7V4"/>',
  bread: '<path d="M5 11a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v8H5z"/>',
  milk: '<path d="M9 4h6v3l2 3v10H7V10l2-3z"/>',
  banana: '<path d="M5 8c2 7 7 11 14 10-2 3-9 3-13-1S4 9 5 8z"/>',
  heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
  pin: '<path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2"/>',
  plate: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  camera: '<path d="M4 8h4l2-2h4l2 2h4v11H4z"/><circle cx="12" cy="13" r="3"/>',
  speaker: '<path d="M4 10v4h4l5 4V6L8 10z"/><path d="M16 9c1.5 1.5 1.5 4.5 0 6M18.5 6.5c3 3 3 8 0 11"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  unlock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 7.5-2"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  folder: '<path d="M3 7h6l2 2h10v10H3z"/>',
  resize: '<path d="M4 9V4h5M20 15v5h-5M4 4l6 6M20 20l-6-6"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  pencil: '<path d="M4 20l4-1 10-10-3-3L5 16z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.2 2.2M16.2 16.2l2.2 2.2M5.6 18.4l2.2-2.2M16.2 7.8l2.2-2.2"/>',
  check: '<path d="M5 12.5 10 17l9-10"/>',
  ban: '<circle cx="12" cy="12" r="8"/><path d="M6.5 6.5l11 11"/>',
  pause: '<circle cx="12" cy="12" r="8"/><path d="M10 9v6M14 9v6"/>',
  globe: '<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.5 2.5 2.5 13.5 0 16M12 4c-2.5 2.5-2.5 13.5 0 16"/>',
  printer: '<path d="M7 9V4h10v5"/><rect x="4" y="9" width="16" height="7" rx="2"/><path d="M7 14h10v6H7z"/>',
  playVideo: '<path d="M9 7v10l8-5z"/>',
  arrowLeft: '<path d="M15 6l-6 6 6 6"/>',
  arrowRight: '<path d="M9 6l6 6-6 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  mail: '<rect x="4" y="6" width="16" height="12" rx="2"/><path d="M4 8l8 5 8-5"/>',
  apple_logo: '<path d="M15 4c-1 0-2.2.7-2.8 1.5-.6.7-1 1.8-.9 2.8 1.1.1 2.2-.6 2.8-1.4.6-.8 1-1.8.9-2.9zM16.5 12.5c0-2 1.6-2.9 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.5 2 2.5 2s1.4-.7 2.6-.7 1.5.7 2.6.7 1.7-1 2.4-2c.8-1.1 1.1-2.2 1.1-2.3 0 0-2.1-.8-2.1-3.1z"/>',
};

type Props = { name: string; size?: number; className?: string; strokeWidth?: number };

export function Icon({ name, size = 24, className, strokeWidth = 1.8 }: Props) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      dangerouslySetInnerHTML={{ __html: ICONS[name] ?? "" }}
    />
  );
}
