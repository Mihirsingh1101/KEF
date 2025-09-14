// src/pages/SignUp.jsx
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, { displayName: name });
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignUp = async () => {
    setError("");
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google user:", result.user);
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
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-center mb-6">
          Create Your KEF Account
        </h2>

        {/* Error */}
        {error && (
          <div className="text-sm text-red-600 bg-red-100 p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* Inputs */}
        <input
          required
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-white/40 border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-white/40 border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded-lg bg-white/40 border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Call to Action (above button) */}
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-orange-200 via-yellow-100 to-red-100 text-center shadow-inner">
          <p className="text-lg font-semibold text-orange-800">
            Ready to become part of the movement?
          </p>
          <p className="text-sm text-red-700 mt-1">
            Students, artisans, entrepreneurs, researchers – register now and
            help script a new chapter in India’s sustainable economy.
          </p>
        </div>

        {/* Sign Up button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white font-semibold shadow-lg hover:scale-105 transform transition"
        >
          Create account
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-400" />
          <span className="px-2 text-gray-600 text-sm">OR</span>
          <hr className="flex-grow border-gray-400" />
        </div>

        {/* Google Sign Up */}
        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="w-full py-3 rounded-lg border border-orange-300 bg-white/30 text-orange-700 font-medium hover:bg-orange-100 transition flex items-center justify-center gap-2"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Switch to Signin */}
        <p className="mt-5 text-sm text-center">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="underline text-orange-700 hover:text-red-600 font-medium"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
