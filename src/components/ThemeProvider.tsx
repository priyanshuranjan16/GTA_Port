"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeContextType {
    secretTheme: boolean;
    toggleSecretTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    secretTheme: false,
    toggleSecretTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

const KONAMI_CODE = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "KeyB", "KeyA"
];

// Confetti particle component
function Particle({ index }: { index: number }) {
    const colors = ["#FF1493", "#00FFFF", "#FFD700", "#FF6B00", "#00FF00", "#FF00FF"];
    const randomColor = colors[index % colors.length];
    const randomX = Math.random() * 100;
    const randomDelay = Math.random() * 0.5;
    const randomDuration = 2 + Math.random() * 2;
    const randomSize = 8 + Math.random() * 12;

    return (
        <motion.div
            initial={{
                x: `${randomX}vw`,
                y: -20,
                rotate: 0,
                scale: 1,
                opacity: 1
            }}
            animate={{
                y: "110vh",
                rotate: 720 + Math.random() * 360,
                scale: [1, 1.2, 0.8, 1],
                opacity: [1, 1, 0.8, 0]
            }}
            transition={{
                duration: randomDuration,
                delay: randomDelay,
                ease: "easeIn"
            }}
            style={{
                position: "fixed",
                width: randomSize,
                height: randomSize,
                backgroundColor: randomColor,
                borderRadius: Math.random() > 0.5 ? "50%" : "2px",
                zIndex: 9999,
                pointerEvents: "none",
                boxShadow: `0 0 10px ${randomColor}`,
            }}
        />
    );
}

// Epic notification component
function CheatNotification({ show, onComplete }: { show: boolean; onComplete: () => void }) {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(onComplete, 4000);
            return () => clearTimeout(timer);
        }
    }, [show, onComplete]);

    return (
        <AnimatePresence>
            {show && (
                <>
                    {/* Screen flash */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-9998 bg-white pointer-events-none"
                    />

                    {/* Confetti explosion */}
                    {Array.from({ length: 50 }).map((_, i) => (
                        <Particle key={i} index={i} />
                    ))}

                    {/* Main notification */}
                    <motion.div
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{
                            scale: [0, 1.2, 1],
                            rotate: [10, -5, 0],
                        }}
                        exit={{ scale: 0, opacity: 0, y: -100 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10000 pointer-events-none"
                    >
                        <motion.div
                            animate={{
                                boxShadow: [
                                    "0 0 30px rgba(255, 20, 147, 0.5)",
                                    "0 0 60px rgba(0, 255, 255, 0.8)",
                                    "0 0 30px rgba(255, 20, 147, 0.5)",
                                ]
                            }}
                            transition={{ duration: 0.5, repeat: 3 }}
                            className="px-8 py-6 bg-linear-to-r from-[#FF1493] via-[#9400D3] to-[#00FFFF] rounded-xl text-center"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 0.3, repeat: 5 }}
                                className="text-4xl md:text-5xl font-black text-white mb-2"
                                style={{ textShadow: "3px 3px 0 #000, -1px -1px 0 #000" }}
                            >
                                🎮 CHEAT ACTIVATED! 🎮
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-xl text-white/90 font-bold"
                            >
                                Vice City Theme Unlocked 🌴
                            </motion.div>
                            <motion.div
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 3.5, ease: "linear", delay: 0.5 }}
                                className="h-1 bg-white/50 mt-4 rounded-full"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Screen shake effect via CSS */}
                    <style jsx global>{`
                        @keyframes screenShake {
                            0%, 100% { transform: translate(0, 0) rotate(0); }
                            10% { transform: translate(-5px, -5px) rotate(-0.5deg); }
                            20% { transform: translate(5px, -5px) rotate(0.5deg); }
                            30% { transform: translate(-5px, 5px) rotate(-0.5deg); }
                            40% { transform: translate(5px, 5px) rotate(0.5deg); }
                            50% { transform: translate(-3px, -3px) rotate(-0.3deg); }
                            60% { transform: translate(3px, -3px) rotate(0.3deg); }
                            70% { transform: translate(-3px, 3px) rotate(-0.3deg); }
                            80% { transform: translate(3px, 3px) rotate(0.3deg); }
                            90% { transform: translate(-1px, -1px) rotate(0); }
                        }
                        body {
                            animation: screenShake 0.5s ease-in-out;
                        }
                    `}</style>
                </>
            )}
        </AnimatePresence>
    );
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [secretTheme, setSecretTheme] = useState(false);
    const [keySequence, setKeySequence] = useState<string[]>([]);
    const [showNotification, setShowNotification] = useState(false);

    const THEME_DURATION = 10000; // 10 seconds before auto-reset

    const activateSecretTheme = () => {
        setSecretTheme(true);
        setShowNotification(true);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const newSequence = [...keySequence, e.code].slice(-KONAMI_CODE.length);
            setKeySequence(newSequence);

            if (newSequence.join(",") === KONAMI_CODE.join(",")) {
                activateSecretTheme();
                setKeySequence([]);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [keySequence]);

    // Auto-reset theme after duration
    useEffect(() => {
        if (secretTheme) {
            const resetTimer = setTimeout(() => {
                setSecretTheme(false);
            }, THEME_DURATION);
            return () => clearTimeout(resetTimer);
        }
    }, [secretTheme]);

    useEffect(() => {
        if (secretTheme) {
            document.documentElement.classList.add("vice-city-theme");
        } else {
            document.documentElement.classList.remove("vice-city-theme");
        }
    }, [secretTheme]);

    return (
        <ThemeContext.Provider value={{ secretTheme, toggleSecretTheme: activateSecretTheme }}>
            <CheatNotification
                show={showNotification}
                onComplete={() => setShowNotification(false)}
            />
            {children}
        </ThemeContext.Provider>
    );
}
