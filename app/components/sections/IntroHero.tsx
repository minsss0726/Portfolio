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
    <header className="mb-16 text-center sm:text-left md:mb-20">
      <h1
        className="min-h-[4.5rem] text-4xl font-semibold leading-tight tracking-tight sm:min-h-[5rem] md:min-h-[6rem] md:text-5xl"
        aria-label={FULL_TEXT}
      >
        {displayLength <= beforeLen ? (
          <>
            <span className="text-neutral-900 dark:text-neutral-100">
              {FULL_TEXT.slice(0, displayLength)}
            </span>
            {showCursor && (
              <span
                className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-neutral-900 dark:bg-neutral-100"
                aria-hidden
              />
            )}
          </>
        ) : displayLength < beforeLen + nameLen ? (
          <>
            <span className="text-neutral-900 dark:text-neutral-100">{BEFORE_NAME}</span>
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {NAME.slice(0, displayLength - beforeLen)}
            </span>
            {showCursor && (
              <span
                className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-neutral-900 dark:bg-neutral-100"
                aria-hidden
              />
            )}
          </>
        ) : (
          <>
            <span className="text-neutral-900 dark:text-neutral-100">{BEFORE_NAME}</span>
            <span className="font-semibold text-blue-600 dark:text-blue-400">{NAME}</span>
            <span className="text-neutral-900 dark:text-neutral-100">
              {AFTER_NAME.slice(0, displayLength - beforeLen - nameLen)}
            </span>
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
        <p className="mt-4 animate-fade-in-up leading-relaxed text-neutral-500 sm:mt-5 dark:text-neutral-400">
          안녕하세요, 방문해 주셔서 감사합니다.
        </p>
      )}
    </header>
  );
}
