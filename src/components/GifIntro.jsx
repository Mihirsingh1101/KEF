import React from "react";
import { motion } from "framer-motion";
import introGif from "./front.gif";

const GifIntro = () => {
  return (
    <motion.div
      className="gif-intro-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 3, ease: "easeInOut" } }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black", // keeps background dark if gif doesn't cover fully
        zIndex: 9999,
      }}
    >
      <img
        src={introGif}
        alt="Havan ceremony intro"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // ensures the gif fills the screen without distortion
        }}
      />
    </motion.div>
  );
};

export default GifIntro;
