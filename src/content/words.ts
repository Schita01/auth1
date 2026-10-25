import type { Dict } from "./en";

export type WordId = keyof Dict["words"];
export type Tone = "person" | "action" | "social" | "place" | "feel";

export type Word = { id: WordId; icon: string; tone: Tone };

const CORE: Word[] = [
  { id: "I", icon: "person", tone: "person" },
  { id: "you", icon: "you", tone: "person" },
  { id: "want", icon: "want", tone: "action" },
  { id: "more", icon: "more", tone: "social" },
  { id: "stop", icon: "stop", tone: "social" },
  { id: "go", icon: "go", tone: "action" },
  { id: "help", icon: "help", tone: "action" },
  { id: "eat", icon: "eat", tone: "action" },
  { id: "drink", icon: "drink", tone: "action" },
  { id: "play", icon: "play", tone: "action" },
  { id: "happy", icon: "happy", tone: "feel" },
  { id: "sad", icon: "sad", tone: "feel" },
  { id: "home", icon: "home", tone: "place" },
  { id: "bathroom", icon: "bathroom", tone: "place" },
  { id: "yes", icon: "yes", tone: "social" },
  { id: "no", icon: "no", tone: "social" },
  { id: "please", icon: "please", tone: "social" },
  { id: "finished", icon: "finished", tone: "feel" },
];

const FOLDER_WORDS: Word[] = [
  { id: "apple", icon: "apple", tone: "action" },
  { id: "bread", icon: "bread", tone: "action" },
  { id: "milk", icon: "milk", tone: "action" },
  { id: "banana", icon: "banana", tone: "action" },
  { id: "tired", icon: "tired", tone: "feel" },
  { id: "school", icon: "school", tone: "place" },
  { id: "outside", icon: "outside", tone: "place" },
  { id: "shop", icon: "shop", tone: "place" },
];

export const ALL_WORDS: Word[] = (() => {
  const seen = new Set<string>();
  const list: Word[] = [];
  for (const w of [...CORE, ...FOLDER_WORDS]) {
    if (!seen.has(w.id)) {
      seen.add(w.id);
      list.push(w);
    }
  }
  return list;
})();
