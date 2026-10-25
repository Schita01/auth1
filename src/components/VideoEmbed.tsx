"use client";

import { useState } from "react";
import { Icon } from "./Icon";

type Props = { youtubeId: string; poster: string | null; playLabel: string; title: string };

export function VideoEmbed({ youtubeId, poster, playLabel, title }: Props) {
  const [playing, setPlaying] = useState(false);
  const thumb = poster ?? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

  if (playing) {
    return (
      <div className="video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button className="video-frame video-poster" type="button" onClick={() => setPlaying(true)} aria-label={playLabel}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={thumb} alt="" loading="lazy" />
      <span className="video-play">
        <Icon name="playVideo" size={34} strokeWidth={2.2} />
      </span>
      <span className="video-label">{playLabel}</span>
    </button>
  );
}
