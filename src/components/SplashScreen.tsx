import { motion } from "framer-motion";
import type { SplashCopy } from "../data/i18n";

type SplashScreenProps = {
  copy: SplashCopy;
};

export function SplashScreen({ copy }: SplashScreenProps) {
  return (
    <motion.div
      role="status"
      aria-label={copy.ariaLabel}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 text-center text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl"
      >
        {copy.intro}
      </motion.h1>
    </motion.div>
  );
}
