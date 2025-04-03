"use client";
import { ParticleCanvas } from "@/hooks/particle";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      <ParticleCanvas />
      <div className="max-w-7xl mx-auto px-6 pt-24 lg:pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* For mobile - Image at the top */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="lg:hidden w-full relative mb-0 lg:mb-12"
          >
            <div className="relative w-[60%] mx-auto aspect-square group">
              {/* Animated Border */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1.01 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="absolute inset-0 rounded-full
                bg-gradient-to-r from-primary/30
                via-secondary/30 to-tertiary/30
                opacity-50"
              />

              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full aspect-square 
                rounded-full overflow-hidden
                border border-white/10 bg-surface 
                backdrop-blur-sm"
              >
                <Image
                  src="/PFP.jpg"
                  alt="Avatar"
                  fill
                  className="object-cover scale-100 
                  transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t
                  from-black/60 to-transparent"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text content - now below image on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group lg:w-1/2 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r
                from-primary via-secondary to-tertiary 
                bg-clip-text text-transparent mb-6"
            >
              Vasu
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-primary via-secondary
                to-tertiary bg-clip-text text-transparent"
              >
                Sharma
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-xl text-content/80 mb-8"
            >
              Weaving Neural Networks and React Frameworks into Powerful
              Solutions that Bridge Innovation and Purpose
            </motion.p>

            <Link href="/resume2.pdf" target="_blank">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="lg:mt-10 relative overflow-hidden px-8 py-4 rounded-full bg-surface border
              border-white/10 hover:border-primary/30 transition-all group mx-auto lg:mx-0"
              >
                <span className="text-content group-hover:text-primary transition-colors">
                  Download Resume
                </span>

                <div
                  className="absolute inset-0 bg-gradient-to-r 
                from-primary/10 to-tertiary/10 opacity-0
                group-hover:opacity-100 transition-opacity"
                />
              </motion.button>
            </Link>
          </motion.div>

          {/* Image Card - hidden on mobile, shown on lg */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:block lg:w-1/2 relative"
            style={{ y }}
          >
            <div className="relative w-[80%] mx-auto aspect-square group">
              {/* Animated Border */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1.01 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="absolute inset-0 rounded-full
                bg-gradient-to-r from-primary/30
                via-secondary/30 to-tertiary/30
                opacity-50"
              />

              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full aspect-square 
                rounded-full overflow-hidden
                border border-white/10 bg-surface 
                backdrop-blur-sm"
              >
                <Image
                  src="/PFP.jpg"
                  alt="Avatar"
                  fill
                  className="object-cover scale-100 
                  transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t
                  from-black/60 to-transparent"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}