"use client";

import { ViewTransition } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="route-enter" exit="route-exit">
      <div className="route-shell">{children}</div>
    </ViewTransition>
  );
}
