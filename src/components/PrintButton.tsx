"use client";

import { Icon } from "./Icon";

export function PrintButton({ label }: { label: string }) {
  return (
    <button className="button" type="button" onClick={() => window.print()}>
      <Icon name="printer" size={20} />
      {label}
    </button>
  );
}
