import { motion } from "framer-motion";

const bubbleVariants = {
  animate: {
    y: [0, -40, 0],
    opacity: [0.3, 0.8, 0.3],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const BackgroundDesign = () => {
  return (
    <>
      {/* Radial Glow */}
      <div className="absolute w-[120vw] h-[120vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-[#0fffc1]/20 via-transparent to-transparent blur-[180px] opacity-25 z-0 pointer-events-none" />

      {/* Noise Layer */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light z-0 pointer-events-none" />

      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 15 }).map((_, i) => {
          const left = `${Math.random() * 100}%`;
          const delay = Math.random() * 4;
          const size = 20 + Math.random() * 40;
          return (
            <motion.div
              key={i}
              className="absolute bottom-0 bg-white rounded-full opacity-30"
              style={{
                width: size,
                height: size,
                left,
                background: `radial-gradient(circle, #00d9ff33 20%, transparent 70%)`,
              }}
              variants={bubbleVariants}
              initial="animate"
              animate="animate"
              transition={{ delay }}
            />
          );
        })}
      </div>
    </>
  );
};

export default BackgroundDesign;
