"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DashboardMock } from "./dashboard-mock";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#tour", label: "Product" },
  { href: "#infrastructure", label: "Network" },
  { href: "#changelog", label: "Changelog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/[0.06] bg-[#09090b]/85 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          { }
          <img src="/brand/pixel-ping-logo-nav.png" alt="Pixel & Ping logo" className="h-7 w-7 rounded-md ring-1 ring-white/10" />
          <span className="text-[15px] font-semibold tracking-tight">Pixel &amp; Ping</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-[13.5px] text-zinc-400 transition-colors hover:bg-white/[0.05] hover:text-zinc-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#tour"
            className="hidden rounded-lg border border-white/[0.1] px-3.5 py-2 text-[13.5px] font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white sm:block"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="rounded-lg bg-[#ff5a1f] px-3.5 py-2 text-[13.5px] font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_8px_24px_-8px_rgba(255,90,31,0.6)] transition-colors hover:bg-[#ff6b35]"
          >
            Get started
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-zinc-300 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-[#0a0a0d]/95 px-5 py-3 backdrop-blur-xl md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-[14px] text-zinc-300 hover:bg-white/[0.05]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2 text-[13px] text-zinc-400">
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-[#ff8a5c]" fill="none">
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity="0.35" />
        <path d="M5 8.2 7.2 10.4 11 6.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
      {/* backdrop */}
      <div className="pp-grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-[#ff5a1f]/[0.09] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="#changelog"
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.04] py-1 pl-1 pr-3 text-[12.5px] text-zinc-400 transition-colors hover:border-white/20"
          >
            <span className="rounded-full bg-[#ff5a1f] px-2 py-0.5 text-[11px] font-semibold text-white">v2.4</span>
            IP Scanner 2.0 &amp; WireGuard profiles are live
            <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none">
              <path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <h1 className="mt-6 text-balance text-[40px] font-semibold leading-[1.06] tracking-[-0.03em] text-zinc-50 sm:text-[56px]">
            Your whole network.
            <br />
            <span className="text-zinc-400">One calm dashboard.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-[16px] leading-relaxed text-zinc-400">
            Pixel &amp; Ping brings servers, endpoints, users and live traffic together in a single surface —
            with health checks, clean-IP scanning and port-level visibility built in.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#tour"
              className="rounded-lg bg-[#ff5a1f] px-5 py-2.5 text-[14.5px] font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset,0_12px_32px_-8px_rgba(255,90,31,0.65)] transition-colors hover:bg-[#ff6b35]"
            >
              Open live demo
            </a>
            <a
              href="#features"
              className="rounded-lg border border-white/[0.12] bg-white/[0.03] px-5 py-2.5 text-[14.5px] font-medium text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
            >
              Explore features
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Check>Free for networks up to 25 endpoints</Check>
            <Check>No credit card required</Check>
          </div>
        </div>

        {/* dashboard */}
        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="pointer-events-none absolute -inset-x-8 -top-10 h-40 bg-gradient-to-b from-[#ff5a1f]/[0.12] to-transparent blur-2xl" />
          <div className="pp-fade-bottom relative max-h-[640px] overflow-hidden rounded-xl">
            <DashboardMock />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#09090b] to-transparent" />
        </div>
      </div>
    </section>
  );
}
