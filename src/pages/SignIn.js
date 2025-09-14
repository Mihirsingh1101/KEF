// src/pages/SignIn.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 p-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-orange-200"
      >
        {/* Call to Action */}
        <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-orange-200 via-yellow-100 to-red-100 text-center shadow-inner">
          <p className="text-lg font-semibold text-orange-800">
            Ready to become part of the movement?
          </p>
          <p className="text-sm text-red-700 mt-1">
            Students, artisans, entrepreneurs, researchers – register now and
            help script a new chapter in India’s sustainable economy.
          </p>
        </div>
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-center mb-6">
          Sign in to KEF
        </h2>

        {/* Error Message */}
        {error && (
          <div className="text-sm text-red-600 bg-red-100 p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* Inputs */}
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-white/40 border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded-lg bg-white/40 border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white font-semibold shadow-lg hover:scale-105 transform transition"
        >
          Sign In
        </button>

        {/* Google Button */}
        <button
          type="button"
          onClick={handleGoogle}
          className="w-full mt-4 py-3 rounded-lg border border-orange-300 bg-white/30 text-orange-700 font-medium hover:bg-orange-100 transition"
        >
          Sign in with Google
        </button>

        {/* Switch to Signup */}
        <p className="mt-5 text-sm text-center">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="underline text-orange-700 hover:text-red-600 font-medium"
          >
            Sign up
          </Link>
        </p>

      </form>
    </div>
  );
}
