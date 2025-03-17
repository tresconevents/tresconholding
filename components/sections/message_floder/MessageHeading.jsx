import React from "react";
import { motion } from "framer-motion";

const MessageHeading = () => {
  return (
    <div className="relative px-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[16px] font-manrope font-[400] absolute top-[30px] left-[30px] pb-4 z-20 w-[100%] text-white border-b-[1px] border-b-[#00A5A3]"
      >
        Message from Chairman
      </motion.h1>
    </div>
  );
};

export default MessageHeading;
