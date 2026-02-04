"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, stats } from "@/lib/data";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 px-6 relative" ref={ref}>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#00CED1]/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="inline-block px-4 py-1 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-full text-[#FF6B00] text-sm tracking-wider mb-4"
                    >
                        CHARACTER SELECT
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-black text-white gta-text-shadow mb-4">
                        PLAYER <span className="text-[#FF6B00]">STATS</span>
                    </h2>
                    <p className="text-white/50 tracking-wide max-w-lg mx-auto">
                        Every hero has a backstory. Here&apos;s where my journey began.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Character Card */}
                    <motion.div
                        variants={slideInLeft}
                        className="relative"
                    >
                        <div className="gta-card rounded-2xl p-8 relative overflow-hidden">
                            {/* Glowing border effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-[#FF6B00]/20 to-transparent opacity-50" />

                            {/* Wanted Stars - Animated */}
                            <div className="absolute top-4 right-4 flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <motion.span
                                        key={star}
                                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                                        transition={{ delay: 0.5 + star * 0.15, type: "spring", stiffness: 200 }}
                                        className="text-xl"
                                    >
                                        ⭐
                                    </motion.span>
                                ))}
                            </div>

                            {/* Profile Avatar with glow */}
                            <div className="relative w-36 h-36 mx-auto mb-6">
                                <motion.div
                                    animate={{
                                        boxShadow: [
                                            "0 0 30px rgba(255, 107, 0, 0.3)",
                                            "0 0 50px rgba(255, 107, 0, 0.5)",
                                            "0 0 30px rgba(255, 107, 0, 0.3)",
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-full h-full rounded-full bg-linear-to-br from-[#FF6B00] via-[#FFD700] to-[#FF6B00] flex items-center justify-center"
                                >
                                    <span className="text-6xl">🎮</span>
                                </motion.div>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-2 border-dashed border-[#FF6B00]/30 rounded-full"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-center text-white mb-2 tracking-wide">
                                {personalInfo.name}
                            </h3>
                            <p className="text-[#00CED1] text-center mb-6 tracking-widest text-sm uppercase">
                                {personalInfo.tagline}
                            </p>
                            <p className="text-white/60 text-center leading-relaxed">
                                {personalInfo.bio}
                            </p>

                            {/* Location Tag */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center gap-3"
                            >
                                <span className="text-[#FF6B00] text-xl">📍</span>
                                <span className="text-white/50 tracking-wide">{personalInfo.location}</span>
                                <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                                    Available for hire
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div variants={slideInRight} className="space-y-6">
                        {/* Main Stat Bars */}
                        <div className="space-y-5">
                            {[
                                { name: "CODING POWER", value: 90, color: "#FF6B00", icon: "💻" },
                                { name: "GAMING SKILL", value: 95, color: "#FFD700", icon: "🎮" },
                                { name: "PROBLEM SOLVING", value: 85, color: "#00CED1", icon: "🧠" },
                                { name: "CREATIVITY", value: 88, color: "#FF6B00", icon: "🎨" },
                                { name: "TEAM SYNERGY", value: 82, color: "#FFD700", icon: "🤝" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.name}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex justify-between mb-2 items-center">
                                        <span className="text-white/80 text-sm tracking-wider font-medium flex items-center gap-2">
                                            <span className="text-lg">{stat.icon}</span>
                                            {stat.name}
                                        </span>
                                        <span className="text-white/40 text-sm font-mono">{stat.value}/100</span>
                                    </div>
                                    <div className="h-3 bg-[#1a1a2e] rounded-full overflow-hidden relative">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${stat.value}%` } : {}}
                                            transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                                            className="h-full rounded-full relative overflow-hidden"
                                            style={{
                                                background: `linear-gradient(90deg, ${stat.color}aa, ${stat.color})`,
                                            }}
                                        >
                                            <motion.div
                                                animate={{ x: ["0%", "100%"] }}
                                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                                                style={{ width: "50%" }}
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {[
                                { icon: "🎯", label: "Projects", value: stats.projectsCompleted, suffix: "+" },
                                { icon: "🏆", label: "Games Mastered", value: stats.gamesPlayed, suffix: "+" },
                                { icon: "☕", label: "Coffee Consumed", value: stats.coffeeConsumed, suffix: " cups" },
                                { icon: "🐛", label: "Bugs Eliminated", value: stats.bugsSquashed, suffix: "+" },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="gta-card p-5 rounded-xl text-center group cursor-default"
                                >
                                    <motion.span
                                        className="text-3xl block mb-2"
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                    >
                                        {item.icon}
                                    </motion.span>
                                    <span className="text-2xl font-bold text-[#FFD700] block">
                                        {item.value}{item.suffix}
                                    </span>
                                    <span className="text-xs text-white/40 tracking-wider mt-1 block">
                                        {item.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
