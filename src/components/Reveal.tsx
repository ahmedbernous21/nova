import { useEffect, useRef, useState, type ReactNode } from "react";
import { prefersReducedMotion } from "../lib/motion";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const seen = () => {
      const rect = node.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.92 && rect.bottom > 48;
    };
    const show = () => setVisible(true);

    if (seen()) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) show();
      },
      { threshold: 0.08 },
    );
    observer.observe(node);
    const onScroll = () => {
      if (seen()) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal${visible ? " is-in" : ""}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
