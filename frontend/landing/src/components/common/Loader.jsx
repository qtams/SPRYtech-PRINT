import { motion } from "motion/react";

export default function Loader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        flex
        h-full
        w-full
        flex-col
        items-center
        justify-center
      "
    >
      <div className="wrapper">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />

        <div className="shadow" />
        <div className="shadow" />
        <div className="shadow" />
      </div>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
        }}
        className="
          mt-10
          text-[10px]
          uppercase
          tracking-[0.45em]
          text-[#b8793e]
        "
      >
        Loading
      </motion.p>
    </motion.div>
  );
}
