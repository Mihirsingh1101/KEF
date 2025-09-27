import React, { useEffect, useState } from "react";
import womanPotteryImage from "../assets/Womanclaypot.png";
import manPotteryImage from "../assets/Manpotmaking.png";

export default function Overview() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="overview" className="min-h-screen flex flex-col lg:flex-row">

      {/* Right Section */}
      <div className="flex-1 flex flex-col items-center justify-center bg-[#f9f5e9] p-8">
        {/* Images */}
        <div className="flex gap-6 mb-8 flex-wrap justify-center">
          <div
            className={`transform transition duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src={womanPotteryImage}
              alt="Woman making clay pot"
              className="w-48 h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition"
            />
          </div>
          <div
            className={`transform transition duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src={manPotteryImage}
              alt="Man making pottery"
              className="w-48 h-48 object-cover rounded-xl shadow-lg hover:scale-105 transition"
            />
          </div>
        </div>

        {/* Mission */}
        <div className="max-w-xl text-center">
          <h2 className="font-rye text-3xl text-[#5c4033] mb-2">Overview</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-6 rounded"></div>
          <p className="text-[#5c4033] font-zodiak text-lg leading-relaxed mb-4 text-justify">
            The Kullhad Economy Festival (KEF) is more than a festival — it is a
            movement for economic and cultural renewal. For decades, the world
            has been driven by an extractive and marketing-led consumerist model
            — fast food, fast fashion, fast construction to name a few — built
            for repeat sales rather than enduring value. This has created debt,
            resource exhaustion, and social alienation. KEF introduces an
            alternative: the Kullhad Economy. Drawing on Dharmic principles,
            ancient and Vedic techniques, and India’s grassroots wisdom, it
            champions production-driven economies that are decentralised,
            sustainable, and future-ready.
          </p>
          <p className="text-[#5c4033] font-zodiak text-lg leading-relaxed text-justify">
            Our mission is to revive the kullhad culture, support local artisans,
            and create awareness about eco-friendly alternatives to plastic
            containers. Join us in this journey of preserving heritage while
            building a sustainable future.
          </p>
        </div>
      </div>
    </section>
  );
}
