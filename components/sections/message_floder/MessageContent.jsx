import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MessageContent = () => {
  return (
    <div className="relative w-[770px] h-[900px] bg-gradient-to-tr from-[#01373D] to-[#015153]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center gap-[5rem] z-40 max-w-[770px] h-[100%]"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-[50px] w-[59px] ml-[59px] items-center justify-start h-auto"
        >
          <Image
            src="/“.svg"
            alt="dot_image"
            className="w-[100%] h-[100%] object-cover"
            width={100}
            height={100}
          />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-[410px] flex items-center justify-center w-[100%] h-[300px]"
        >
          <p className="font-manrope text-white text-[18px] font-[400]">
            At Trescon Holdings, we believe in the power of innovation to
            transform industries and create sustainable value. Our commitment is
            to support visionary entrepreneurs and businesses that share our
            passion for driving meaningful change.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-[650px] h-[250px] absolute bottom-0 right-[100px]"
      >
        <Image
          src="/half_dot.png"
          alt="dot_image"
          className="w-full h-full object-cover"
          fill
        />
      </motion.div>
    </div>
  );
};

export default MessageContent;
