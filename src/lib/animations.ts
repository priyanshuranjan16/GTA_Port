// Framer Motion animation variants for GTA-themed portfolio
import type { Variants, Transition } from "framer-motion";

type EasingType = [number, number, number, number] | "easeIn" | "easeOut" | "easeInOut" | "linear";

const easeOut: EasingType = "easeOut";
const easeInOut: EasingType = "easeInOut";

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeOut } as Transition,
    },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: easeOut } as Transition,
    },
};

export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: easeOut } as Transition,
    },
};

export const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: easeOut } as Transition,
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 },
    },
};

export const missionPassed: Variants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
        },
    },
};

export const glowPulse = {
    animate: {
        boxShadow: [
            "0 0 20px rgba(255, 107, 0, 0.3)",
            "0 0 40px rgba(255, 107, 0, 0.6)",
            "0 0 20px rgba(255, 107, 0, 0.3)",
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: easeInOut,
        },
    },
};

export const floatAnimation = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: easeInOut,
        },
    },
};

export const typewriter: Variants = {
    hidden: { width: 0 },
    visible: {
        width: "100%",
        transition: {
            duration: 2,
        },
    },
};

export const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: easeOut } as Transition,
    },
};
