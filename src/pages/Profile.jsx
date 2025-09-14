// src/pages/Profile.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

export default function Profile() {
  const { user, signOutUser } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="avatar"
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-gradient-to-r from-yellow-300 to-orange-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              {user.displayName?.[0]?.toUpperCase() ??
                user.email?.[0]?.toUpperCase()}
            </div>
          )}

          <h2 className="text-3xl font-bold">{user.displayName ?? "No display name"}</h2>
          <p className="text-lg opacity-90">{user.email}</p>
        </div>

        {/* Info Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-5 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Account Info</h3>
            <p><span className="font-medium">Email Verified:</span> {user.emailVerified ? "✅ Yes" : "❌ No"}</p>
          </div>

          <div className="bg-white/10 rounded-xl p-5 shadow-md">
            <h3 className="text-xl font-semibold mb-2">Downloads / Data</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your saved content</li>
              <li>Event registrations</li>
              <li>Certificates & achievements</li>
              <li>Past downloads</li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={signOutUser}
            className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
          >
            Sign Out
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
          >
            Edit Profile
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
