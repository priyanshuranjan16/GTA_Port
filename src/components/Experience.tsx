"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="py-24 px-6 relative" ref={ref}>
            <div className="max-w-4xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white gta-text-shadow mb-4">
                        STORY <span className="text-[#00CED1]">MISSIONS</span>
                    </h2>
                    <p className="text-white/60 tracking-wide">Career Timeline & Quest Log</p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="relative"
                >
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#FF6B00] via-[#FFD700] to-[#00CED1] transform md:-translate-x-1/2" />

                    {experience.map((item, index) => (
                        <motion.div
                            key={item.id}
                            variants={staggerItem}
                            className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${item.type === "work"
                                        ? "bg-[#FF6B00] border-[#FF6B00]/50"
                                        : "bg-[#00CED1] border-[#00CED1]/50"
                                        }`}
                                >
                                    <span className="text-xl">
                                        {item.type === "work" ? "💼" : "🎓"}
                                    </span>
                                </motion.div>
                            </div>

                            {/* Content Card */}
                            <div
                                className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16 pl-16 md:pl-0" : "md:pl-16 pl-16"
                                    }`}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="gta-card rounded-lg p-6 relative"
                                >
                                    {/* Mission Marker */}
                                    <div className="absolute -top-3 right-4">
                                        <span
                                            className={`text-xs font-bold px-3 py-1 rounded ${item.type === "work"
                                                ? "bg-[#FF6B00] text-white"
                                                : "bg-[#00CED1] text-white"
                                                }`}
                                        >
                                            {item.type === "work" ? "MAIN MISSION" : "SIDE QUEST"}
                                        </span>
                                    </div>

                                    {/* Period */}
                                    <div className="text-[#FFD700] text-sm tracking-wider mb-2">
                                        {item.period}
                                    </div>

                                    {/* Title & Company */}
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#00CED1] text-sm mb-3">
                                        @ {item.company}
                                    </p>

                                    {/* Description */}
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Mission Status */}
                                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs text-green-500 tracking-wider">
                                            {item.period.includes("Present") ? "IN PROGRESS" : "COMPLETED"}
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
