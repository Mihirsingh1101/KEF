import { useState, useEffect } from "react";
import HavanIntro from "./HavanIntro";
import { motion } from "framer-motion";
import MaaKaliImage from "./kali.png";

function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowIntro(false), 6000); // 6 sec intro
  }, []);

  return (
    <>
      {showIntro ? (
        <HavanIntro />
      ) : (
        <div>
          {/* Maa Kali Animation */}
          <motion.img
            src={MaaKaliImage}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="mx-auto mt-10"
          />

          {/* Main Website Content */}
          <div className="p-6 text-center">
            <h1>Welcome to My Website</h1>
            <p>All content will appear here...</p>
          </div>
        </div>
      )}
    </>
  );
}
