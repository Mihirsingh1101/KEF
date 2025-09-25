// src/components/NewsTicker.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const NewsTicker = () => {
  const [news, setNews] = useState([]);

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

  if (!news.length) return null;

  return (
    <div
      className="fixed left-0 w-full z-40 overflow-hidden border-b border-orange-400/40"
      style={{
        top: "64px", // 👈 adjust to match your navbar height
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(6px)",
      }}
    >
      <motion.div
        className="flex gap-12 whitespace-nowrap py-2 text-sm text-orange-200"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {news.map((item) =>
          item.link ? (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              📰 <strong>{item.title}</strong> — {item.text?.slice(0, 80)}...
            </a>
          ) : (
            <span key={item.id} className="flex items-center gap-2">
              📰 <strong>{item.title}</strong> — {item.text?.slice(0, 80)}...
            </span>
          )
        )}
      </motion.div>
    </div>
  );
};

export default NewsTicker;
