"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimateOnScrollProps {
    children: ReactNode;
    animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out";
    delay?: number;
    duration?: number;
    className?: string;
}

export function AnimateOnScroll({
    children,
    animation = "fade-up",
    delay = 0,
    duration = 600,
    className = ""
}: AnimateOnScrollProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const animations = {
        "fade-up": {
            initial: "translate-y-10 opacity-0",
            animate: "translate-y-0 opacity-100",
        },
        "fade-down": {
            initial: "-translate-y-10 opacity-0",
            animate: "translate-y-0 opacity-100",
        },
        "fade-left": {
            initial: "translate-x-10 opacity-0",
            animate: "translate-x-0 opacity-100",
        },
        "fade-right": {
            initial: "-translate-x-10 opacity-0",
            animate: "translate-x-0 opacity-100",
        },
        "zoom-in": {
            initial: "scale-95 opacity-0",
            animate: "scale-100 opacity-100",
        },
        "zoom-out": {
            initial: "scale-105 opacity-0",
            animate: "scale-100 opacity-100",
        },
    };

    const { initial, animate } = animations[animation];

    return (
        <div
            ref={ref}
            className={`transition-all ${isVisible ? animate : initial} ${className}`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
            }}
        >
            {children}
        </div>
    );
}

interface StaggerChildrenProps {
    children: ReactNode[];
    staggerDelay?: number;
    animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out";
    className?: string;
}

export function StaggerChildren({
    children,
    staggerDelay = 100,
    animation = "fade-up",
    className = ""
}: StaggerChildrenProps) {
    return (
        <div className={className}>
            {children.map((child, index) => (
                <AnimateOnScroll
                    key={index}
                    animation={animation}
                    delay={index * staggerDelay}
                >
                    {child}
                </AnimateOnScroll>
            ))}
        </div>
    );
}
