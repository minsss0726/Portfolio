"use client";

import { useState, useEffect } from "react";

const FULL_TEXT =
  "AI의 발전에 맞춰 진화하고 공부하는 개발자 김민중입니다";
const NAME = "김민중";
const BEFORE_NAME = "AI의 발전에 맞춰 진화하고 공부하는 개발자 ";
const AFTER_NAME = "입니다";

export function IntroHero() {
  const [displayLength, setDisplayLength] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const isComplete = displayLength >= FULL_TEXT.length;

  useEffect(() => {
    if (displayLength >= FULL_TEXT.length) {
      const cursorOff = setTimeout(() => setShowCursor(false), 600);
      return () => clearTimeout(cursorOff);
    }
    const t = setTimeout(
      () => setDisplayLength((n) => n + 1),
      displayLength === 0 ? 400 : 80 + Math.random() * 40
    );
    return () => clearTimeout(t);
  }, [displayLength]);

  const beforeLen = BEFORE_NAME.length;
  const nameLen = NAME.length;

  return (
    <header className="mb-12 text-center sm:text-left">
      <h1
        className="min-h-[4.5rem] text-3xl font-bold leading-tight tracking-tight sm:min-h-[5rem] sm:text-4xl"
        aria-label={FULL_TEXT}
      >
        {displayLength <= beforeLen ? (
          <>
            {FULL_TEXT.slice(0, displayLength)}
            {showCursor && (
              <span
                className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-neutral-900 dark:bg-neutral-100"
                aria-hidden
              />
            )}
          </>
        ) : displayLength < beforeLen + nameLen ? (
          <>
            {BEFORE_NAME}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              {NAME.slice(0, displayLength - beforeLen)}
            </span>
            {showCursor && (
              <span
                className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-violet-500"
                aria-hidden
              />
            )}
          </>
        ) : (
          <>
            {BEFORE_NAME}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              {NAME}
            </span>
            {AFTER_NAME.slice(0, displayLength - beforeLen - nameLen)}
            {showCursor && displayLength < FULL_TEXT.length && (
              <span
                className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-neutral-900 dark:bg-neutral-100"
                aria-hidden
              />
            )}
          </>
        )}
      </h1>
      {isComplete && (
        <p className="mt-3 animate-fade-in-up text-neutral-500 dark:text-neutral-400 sm:mt-4">
          안녕하세요, 방문해 주셔서 감사합니다.
        </p>
      )}
    </header>
  );
}
