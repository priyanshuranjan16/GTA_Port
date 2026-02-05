"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const socialLinks = [
        {
            name: "GitHub",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            href: personalInfo.github,
            color: "#FF6B00",
        },
        {
            name: "LinkedIn",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            href: personalInfo.linkedin,
            color: "#00CED1",
        },
        {
            name: "X",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
            href: personalInfo.twitter,
            color: "#FFD700",
        },
        {
            name: "LeetCode",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
            ),
            href: personalInfo.leetcode,
            color: "#FFA116",
        },
    ];

    return (
        <section id="contact" className="py-24 px-6 relative bg-[#0f0f1a]/50" ref={ref}>
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#FF6B00]/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white gta-text-shadow mb-4">
                        GAME <span className="text-[#FFD700]">OVER?</span>
                    </h2>
                    <p className="text-white/60 tracking-wide text-lg">
                        Let&apos;s start a new co-op mission together!
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Phone UI */}
                    <motion.div
                        variants={fadeInUp}
                        className="max-w-sm mx-auto"
                    >
                        {/* Phone Frame */}
                        <div className="bg-linear-to-b from-[#2a2a4a] to-[#1a1a2e] rounded-3xl p-6 border-4 border-[#3a3a5a] shadow-2xl">
                            {/* Phone Header */}
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-white/60 text-sm">Connected</span>
                                </div>
                                <span className="text-[#FFD700] text-sm">📱 CONTACTS</span>
                            </div>

                            {/* Contact Info */}
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-linear-to-br from-[#FF6B00] to-[#FFD700] flex items-center justify-center">
                                    <span className="text-3xl">🎮</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                                <p className="text-[#00CED1] text-sm">{personalInfo.tagline}</p>
                            </div>

                            {/* Quick Actions */}
                            <div className="space-y-3">
                                {socialLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center gap-4 p-3 rounded-lg bg-[#1a1a2e] hover:bg-[#2a2a4a] transition-colors group"
                                        style={{ borderLeft: `3px solid ${link.color}` }}
                                    >
                                        <div style={{ color: link.color }}>{link.icon}</div>
                                        <div className="flex-1">
                                            <span className="text-white font-medium">{link.name}</span>
                                        </div>
                                        <svg
                                            className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Phone Footer */}
                            <div className="mt-8 pt-4 border-t border-white/10 text-center">
                                <motion.a
                                    href={`mailto:${personalInfo.email}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B00] text-white font-bold rounded-lg glow-orange"
                                >
                                    <span>SEND AN EMAIL</span>
                                    <span>✉️</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
