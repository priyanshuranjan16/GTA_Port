"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/lib/data";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [completedMission, setCompletedMission] = useState<number | null>(null);

    const handleMissionComplete = (id: number) => {
        setCompletedMission(id);
        setTimeout(() => setCompletedMission(null), 2000);
    };

    return (
        <section id="projects" className="py-24 px-6 relative" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0f0f1a]/50 to-transparent" />

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
                        🎯 MISSION BRIEFING
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-black text-white gta-text-shadow mb-4">
                        MISSION <span className="text-[#FF6B00]">LOG</span>
                    </h2>
                    <p className="text-white/50 tracking-wide max-w-lg mx-auto">
                        Completed heists and side quests that earned major respect.
                    </p>
                </motion.div>

                {/* Mission Complete Notification */}
                {completedMission && (
                    <motion.div
                        initial={{ y: -100, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        className="fixed top-1/3 left-1/2 -translate-x-1/2 z-50 text-center"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 0.5 }}
                            className="bg-black/90 px-12 py-8 rounded-lg border-2 border-[#FFD700]"
                        >
                            <h3 className="text-4xl md:text-5xl font-black text-[#FFD700] gta-text-shadow mb-2">
                                MISSION PASSED!
                            </h3>
                            <p className="text-xl text-white">
                                RESPECT +{projects.find(p => p.id === completedMission)?.respect}
                            </p>
                        </motion.div>
                    </motion.div>
                )}

                {/* Projects Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={staggerItem}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => handleMissionComplete(project.id)}
                            className="gta-card rounded-2xl overflow-hidden group relative cursor-pointer"
                        >
                            {/* Project Number Badge */}
                            <div className="absolute top-4 left-4 z-20">
                                <div className="w-10 h-10 bg-[#FF6B00] rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>

                            {/* Project Image/Thumbnail */}
                            <div className="h-52 bg-gradient-to-br from-[#2a2a4a] to-[#1a1a2e] relative overflow-hidden">
                                {/* Pattern overlay */}
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,107,0,0.5) 1px, transparent 0)`,
                                        backgroundSize: "20px 20px",
                                    }}
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.span
                                        className="text-7xl opacity-20 group-hover:opacity-40 transition-opacity"
                                        animate={hoveredId === project.id ? { scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] } : {}}
                                        transition={{ duration: 0.5 }}
                                    >
                                        🎯
                                    </motion.span>
                                </div>

                                {/* Hover Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={hoveredId === project.id ? { opacity: 1 } : { opacity: 0 }}
                                    className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col items-center justify-center p-6"
                                >
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={hoveredId === project.id ? { y: 0, opacity: 1 } : {}}
                                        transition={{ delay: 0.1 }}
                                        className="text-center"
                                    >
                                        <span className="text-3xl font-black text-[#FFD700] gta-text-shadow block mb-2">
                                            CLICK TO COMPLETE
                                        </span>
                                        <span className="text-lg text-white/80">
                                            +{project.respect} RESPECT
                                        </span>
                                    </motion.div>
                                </motion.div>

                                {/* Respect Badge */}
                                <div className="absolute top-4 right-4">
                                    <motion.div
                                        animate={hoveredId === project.id ? { scale: [1, 1.2, 1] } : {}}
                                        className="px-3 py-1 bg-[#FFD700]/20 border border-[#FFD700]/50 rounded-full"
                                    >
                                        <span className="text-[#FFD700] text-sm font-bold">+{project.respect} RP</span>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B00] transition-colors mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-white/50 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((tech) => (
                                        <motion.span
                                            key={tech}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="text-xs px-3 py-1.5 bg-[#1a1a2e] text-[#00CED1] rounded-full border border-[#00CED1]/20 hover:border-[#00CED1]/50 transition-colors"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex-1 py-3 text-center text-sm font-bold text-white bg-[#2a2a4a] rounded-lg hover:bg-[#3a3a5a] transition-all flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        CODE
                                    </motion.a>
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex-1 py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-[#FF6B00] to-[#ff8533] rounded-lg hover:from-[#ff8533] hover:to-[#FF6B00] transition-all flex items-center justify-center gap-2"
                                    >
                                        <span>PLAY</span>
                                        <motion.span
                                            animate={{ x: [0, 3, 0] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        >
                                            →
                                        </motion.span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* More Projects CTA */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mt-16"
                >
                    <motion.a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 215, 0, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#FFD700] text-[#FFD700] font-bold tracking-wider rounded-lg hover:bg-[#FFD700]/10 transition-all"
                    >
                        <span>VIEW ALL MISSIONS</span>
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
