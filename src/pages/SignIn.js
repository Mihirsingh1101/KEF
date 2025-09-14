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
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/5 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sign in</h2>
        {error && <div className="text-sm text-red-400 mb-2">{error}</div>}
        <input type="email" required placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full mb-3 p-3 rounded bg-white/10" />
        <input type="password" required placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full mb-3 p-3 rounded bg-white/10" />
        <button className="w-full py-2 rounded bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white font-semibold">Sign In</button>
        <button type="button" onClick={handleGoogle} className="w-full mt-3 py-2 rounded border">Sign in with Google</button>
        <p className="mt-4 text-sm">
          Don't have an account? <Link to="/signup" className="underline">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
