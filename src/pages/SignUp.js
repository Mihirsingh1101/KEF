// src/pages/SignUp.jsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
      // set display name
      await updateProfile(cred.user, { displayName: name });
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/5 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sign up</h2>
        {error && <div className="text-sm text-red-400 mb-2">{error}</div>}
        <input required placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} className="w-full mb-3 p-3 rounded bg-white/10" />
        <input required type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full mb-3 p-3 rounded bg-white/10" />
        <input required type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full mb-3 p-3 rounded bg-white/10" />
        <button className="w-full py-2 rounded bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white font-semibold">Create account</button>
        <p className="mt-4 text-sm">
          Already have an account? <Link to="/signin" className="underline">Sign in</Link>
        </p>
      </form>
    </div>
  );
}
