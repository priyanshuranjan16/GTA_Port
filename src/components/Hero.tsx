"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { personalInfo, stats } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const welcomeLines = [
    "Loading Player Profile...",
    "Initializing Developer Mode...",
    "Welcome to the Game.",
];

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const [currentLine, setCurrentLine] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [showMain, setShowMain] = useState(false);

    // Typewriter effect for welcome lines
    useEffect(() => {
        if (currentLine >= welcomeLines.length) {
            setTimeout(() => setShowMain(true), 500);
            return;
        }

        const line = welcomeLines[currentLine];
        let charIndex = 0;

        const typeInterval = setInterval(() => {
            if (charIndex <= line.length) {
                setDisplayText(line.slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    setCurrentLine(prev => prev + 1);
                    setDisplayText("");
                }, 800);
            }
        }, 50);

        return () => clearInterval(typeInterval);
    }, [currentLine]);

    return (
        <section
            id="home"
            ref={containerRef}
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Grid pattern with gradient */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 107, 0, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(0, 206, 209, 0.1) 0%, transparent 50%),
              linear-gradient(rgba(255, 107, 0, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 107, 0, 0.03) 1px, transparent 1px)
            `,
                        backgroundSize: "100% 100%, 100% 100%, 60px 60px, 60px 60px",
                    }}
                />

                {/* Floating geometric shapes */}
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-[10%] w-24 h-24 border-2 border-[#FF6B00]/20 rotate-45"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/3 right-[15%] w-40 h-40 border-2 border-[#00CED1]/20 rounded-full"
                />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[40%] right-[25%] w-20 h-20 border border-[#FFD700]/10"
                />
                <motion.div
                    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[20%] left-[20%] w-16 h-16 bg-gradient-to-br from-[#FF6B00]/5 to-transparent rotate-12"
                />

                {/* Glowing orbs */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] right-[10%] w-64 h-64 bg-[#FF6B00]/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[30%] left-[5%] w-48 h-48 bg-[#00CED1]/10 rounded-full blur-3xl"
                />
            </div>

            {/* Intro Animation */}
            {!showMain && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: showMain ? 0 : 1 }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-[#0f0f1a]"
                >
                    <div className="text-center">
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-[#FF6B00] text-xl md:text-2xl font-mono tracking-wider"
                        >
                            {displayText}
                            <span className="animate-pulse">_</span>
                        </motion.div>
                        <div className="mt-8 flex justify-center gap-2">
                            {welcomeLines.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index <= currentLine ? "bg-[#FF6B00]" : "bg-[#2a2a4a]"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}

            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20"
            >
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={showMain ? "visible" : "hidden"}
                >
                    {/* Pre-title with glitch effect */}
                    <motion.div
                        variants={fadeInUp}
                        className="mb-6"
                    >
                        <span className="inline-block px-4 py-2 border border-[#FF6B00]/30 text-[#00CED1] text-sm md:text-base tracking-[0.4em] uppercase font-medium rounded-sm bg-[#FF6B00]/5">
                            🎮 Level 99 Developer Detected
                        </span>
                    </motion.div>

                    {/* Main Title - Enhanced GTA Style */}
                    <motion.h1
                        variants={fadeInUp}
                        className="text-7xl md:text-8xl lg:text-[10rem] font-black mb-4 leading-[0.9] tracking-tighter"
                    >
                        <motion.span
                            className="text-[#FF6B00] gta-text-shadow block"
                            animate={{
                                textShadow: [
                                    "4px 4px 0 #000, 0 0 20px rgba(255, 107, 0, 0.5)",
                                    "4px 4px 0 #000, 0 0 40px rgba(255, 107, 0, 0.8)",
                                    "4px 4px 0 #000, 0 0 20px rgba(255, 107, 0, 0.5)",
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {personalInfo.name.split(" ")[0]}
                        </motion.span>
                        <span className="text-white gta-text-shadow">
                            {personalInfo.name.split(" ")[1]}
                        </span>
                    </motion.h1>

                    {/* Creative Tagline */}
                    <motion.div
                        variants={fadeInUp}
                        className="mb-8"
                    >
                        <p className="text-xl md:text-2xl text-white/60 tracking-wide mb-2">
                            {personalInfo.tagline}
                        </p>
                        <p className="text-lg md:text-xl text-[#FFD700] font-medium tracking-wider">
                            ⚡ Crafting Code & Conquering Games Since Day One ⚡
                        </p>
                    </motion.div>

                    {/* Animated Stats Bar */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
                    >
                        {[
                            { label: "MISSIONS", value: stats.projectsCompleted, icon: "🎯", color: "#FF6B00" },
                            { label: "ACHIEVEMENTS", value: stats.gamesPlayed, icon: "🏆", color: "#FFD700" },
                            { label: "POWER-UPS", value: stats.coffeeConsumed, icon: "☕", color: "#00CED1" },
                            { label: "ENEMIES DEFEATED", value: stats.bugsSquashed, icon: "🐛", color: "#FF6B00" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={showMain ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                                whileHover={{
                                    scale: 1.08,
                                    y: -8,
                                    boxShadow: `0 10px 30px ${stat.color}40`
                                }}
                                whileTap={{ scale: 0.95 }}
                                style={{ cursor: "pointer" }}
                                className="text-center px-5 py-4 bg-[#1a1a2e]/70 rounded-xl border border-white/5 hover:border-white/20 backdrop-blur-sm"
                            >
                                <motion.div
                                    className="text-2xl md:text-3xl font-bold"
                                    style={{ color: stat.color }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    {stat.icon} {stat.value}+
                                </motion.div>
                                <div className="text-[10px] text-white/40 tracking-[0.2em] mt-1">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons - Updated with Resume */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.a
                            href="#projects"
                            className="group px-8 py-4 bg-gradient-to-r from-[#FF6B00] to-[#ff8533] text-white font-bold tracking-wider rounded-sm relative overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <span>START MISSIONS</span>
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#ff8533] to-[#FF6B00]"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                        <motion.a
                            href="/resume.pdf"
                            download
                            className="group px-8 py-4 border-2 border-[#FFD700] text-[#FFD700] font-bold tracking-wider rounded-sm relative overflow-hidden bg-transparent hover:bg-[#FFD700]/10 transition-all flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 215, 0, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>DOWNLOAD RESUME</span>
                        </motion.a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={showMain ? { opacity: 1 } : {}}
                        transition={{ delay: 2 }}
                        className="mt-16"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="flex flex-col items-center gap-2 text-white/30"
                        >
                            <span className="text-xs tracking-[0.3em]">SCROLL TO EXPLORE</span>
                            <motion.div
                                animate={{ scaleY: [1, 1.5, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
                            >
                                <motion.div
                                    animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
