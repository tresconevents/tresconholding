"use client";

import Head from "next/head";
import { motion } from "framer-motion";

export function FooterBottom() {
  return (
    <>
      <div className="mt-12 pt-8 border-t border-[#00A5A3] font-manrope">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row text-sm text-[#F6FAFA] justify-between items-center space-y-4 sm:space-y-0"
        >
          <motion.p
            whileHover={{ scale: 1.1 }}
            className="hover:text-white transition-colors"
          >
            © 2024 TRESCON
          </motion.p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="hover:text-white transition-colors"
          >
            Code of Conduct
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="hover:text-white transition-colors"
          >
            General Terms & Conditions
          </motion.a>
        </motion.div>
      </div>
    </>
  );
}