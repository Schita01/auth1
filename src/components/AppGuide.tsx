import type { CSSProperties } from "react";
import type { Dict } from "@/content";

const SPOTS = [
  { id: "message", side: "left", x: "16.5%", y: "24.7%" },
  { id: "clear", side: "right", x: "85%", y: "24.7%" },
  { id: "speak", side: "left", x: "12%", y: "42.7%" },
  { id: "folders", side: "left", x: "12%", y: "64.6%" },
  { id: "more", side: "right", x: "84.3%", y: "69.5%" },
  { id: "boards", side: "bottom", x: "24.5%", y: "76.8%" },
  { id: "keyboard", side: "bottom", x: "42%", y: "76.8%" },
  { id: "home", side: "bottom", x: "57.2%", y: "76.8%" },
  { id: "edit", side: "bottom", x: "75.5%", y: "76.8%" },
] as const;

type NoteId = (typeof SPOTS)[number]["id"];

function spotStyle(spot: (typeof SPOTS)[number]): CSSProperties {
  return { "--x": spot.x, "--y": spot.y } as CSSProperties;
}

export function AppGuide({
  t,
  photo,
  photoAlt,
}: {
  t: Dict["tour"];
  photo: string;
  photoAlt: string;
}) {
  return (
    <figure className="app-guide">
      <div className="guide-device">
        <div className="guide-shot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt={photoAlt} width={1024} height={1024} />
          <ol className="guide-markers" aria-hidden="true">
            {SPOTS.map((spot, i) => (
              <li key={spot.id} className="guide-marker" style={spotStyle(spot)}>
                <span className="guide-pin">{i + 1}</span>
              </li>
            ))}
          </ol>
        </div>
        <ol className="guide-notes">
          {SPOTS.map((spot, i) => (
            <li
              key={spot.id}
              className={`guide-note guide-note--${spot.side}`}
              style={spotStyle(spot)}
            >
              <span className="guide-pin" aria-hidden="true">
                {i + 1}
              </span>
              <span className="guide-stem" aria-hidden="true" />
              <span className="guide-text">{t.notes[spot.id as NoteId]}</span>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
