import { motion } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: smoothEase }}
      role="status"
      aria-label="Memuat halaman"
    >
      <motion.h1
        className="px-6 text-center text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl"
        initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: smoothEase }}
      >
        Kenalkan, Edward.
      </motion.h1>
    </motion.div>
  );
}
