"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { StoreBadges } from "./StoreBadges";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="get-app"
      className="relative overflow-hidden bg-navy-deep text-white"
    >
      {/* Aurora / radial glow background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-hero-radial" />
        <div
          className={`absolute -top-1/3 left-1/2 h-[70vw] w-[70vw] -translate-x-1/2 rounded-full bg-aurora opacity-[0.18] blur-3xl ${
            reduce ? "" : "animate-aurora-spin"
          }`}
        />
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(60% 60% at 50% 40%, black 30%, transparent 100%)",
          }}
        />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 py-24 sm:py-28 lg:grid-cols-2 lg:gap-8 lg:py-32">
          {/* Copy */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md">
              <Sparkles size={14} className="text-gold" />
              A product of Yenew Technologies Pvt Ltd
            </span>

            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Learn the markets.
              <br />
              <span className="text-gradient">Trade with a community.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Market Bell is an e-learning and trader community platform —
              expert-led courses, practice quizzes, certificates, live sessions,
              and a mentor marketplace. Connecting Minds, Creating Wealth.
            </p>

            <div className="mt-8">
              <StoreBadges tone="dark" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button href="/features" variant="onDark" size="lg">
                Explore features
              </Button>
              <span className="inline-flex items-center gap-2 text-sm text-white/60">
                <ShieldCheck size={16} className="text-emerald" />
                Secure payments via Razorpay
              </span>
            </div>
          </motion.div>

          {/* Floating phone mockup */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className={reduce ? "" : "animate-float"}>
              <PhoneMockup
                src="/screens/login.jpeg"
                alt="Market Bell app sign-in screen"
                priority
                width={300}
              />
            </div>
            <div className="absolute -bottom-6 -left-2 hidden sm:block">
              <div className={reduce ? "" : "animate-float"} style={{ animationDelay: "1.5s" }}>
                <PhoneMockup
                  src="/screens/profile.jpeg"
                  alt="Market Bell app profile screen"
                  width={190}
                  className="opacity-95"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* soft transition into light body */}
      <div className="h-16 bg-gradient-to-b from-transparent to-lightbg" />
    </section>
  );
}
