export function HeroVisual({ photo, photoAlt }: { photo: string | null; photoAlt: string }) {
  if (!photo) return null;

  return (
    <div className="hero-visual has-photo">
      <figure className="hero-device-frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-photo" src={photo} alt={photoAlt} width={427} height={556} fetchPriority="high" />
      </figure>
    </div>
  );
}
