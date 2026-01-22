"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const categories = ["Frontend", "Backend", "Tools"];

    const renderStars = (level: number) => {
        return (
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <motion.span
                        key={star}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: star * 0.05 }}
                        className={`text-lg ${star <= level
                                ? "text-[#FFD700] drop-shadow-[0_0_5px_rgba(255,215,0,0.8)]"
                                : "text-white/20"
                            }`}
                    >
                        ★
                    </motion.span>
                ))}
            </div>
        );
    };

    return (
        <section id="skills" className="py-24 px-6 relative" ref={ref}>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF6B00]/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00CED1]/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Title */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white gta-text-shadow mb-4">
                        SKILL <span className="text-[#FFD700]">TREE</span>
                    </h2>
                    <p className="text-white/60 tracking-wide">Abilities & Power Levels</p>
                </motion.div>

                {/* Skills Categories */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {categories.map((category) => (
                        <motion.div
                            key={category}
                            variants={staggerItem}
                            className="gta-card rounded-lg p-6"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                                <div
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${category === "Frontend"
                                            ? "bg-[#FF6B00]/20 text-[#FF6B00]"
                                            : category === "Backend"
                                                ? "bg-[#00CED1]/20 text-[#00CED1]"
                                                : "bg-[#FFD700]/20 text-[#FFD700]"
                                        }`}
                                >
                                    {category === "Frontend" && "🎨"}
                                    {category === "Backend" && "⚙️"}
                                    {category === "Tools" && "🛠️"}
                                </div>
                                <h3 className="text-xl font-bold text-white tracking-wide">
                                    {category.toUpperCase()}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-4">
                                {skills
                                    .filter((skill) => skill.category === category)
                                    .map((skill) => (
                                        <motion.div
                                            key={skill.name}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center justify-between group"
                                        >
                                            <span className="text-white/80 group-hover:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                            {renderStars(skill.level)}
                                        </motion.div>
                                    ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Wanted Level Legend */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-6 px-6 py-3 bg-[#1a1a2e]/50 rounded-full border border-white/10">
                        <span className="text-white/50 text-sm">WANTED LEVEL:</span>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((level) => (
                                <div key={level} className="flex items-center gap-1">
                                    <span className="text-[#FFD700]">{"★".repeat(level)}</span>
                                    <span className="text-white/40 text-xs">
                                        = {level === 1 ? "Beginner" : level === 2 ? "Learning" : level === 3 ? "Good" : level === 4 ? "Expert" : "Master"}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
