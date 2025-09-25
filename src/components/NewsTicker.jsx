// src/components/NewsTicker.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // 🔹 your firebase config

const NewsTicker = () => {
  const [news, setNews] = useState([]);

  // 🔥 Fetch news from Firestore
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsRef = collection(
          db,
          "artifacts",
          "default-app-id",
          "public",
          "data",
          "newsItems"
        );
        const snap = await getDocs(newsRef);

        const items = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNews(items);
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };
    fetchNews();
  }, []);

  if (!news.length) return null; // nothing to show if no news

  return (
    <div
      className="fixed bottom-0 left-0 w-full z-50 overflow-hidden border-t border-orange-400/40"
      style={{
        background: "rgba(0,0,0,0.4)", // transparent glass effect
        backdropFilter: "blur(6px)",
      }}
    >
      <motion.div
        className="flex gap-12 whitespace-nowrap py-2 text-sm text-orange-200"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {news.map((item) => (
          <span key={item.id} className="flex items-center gap-2">
            📰 <strong>{item.title}</strong> — {item.text?.slice(0, 80)}...
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default NewsTicker;
