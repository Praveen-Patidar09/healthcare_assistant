import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  function submit(e) {
    e.preventDefault();
    alert("Login simulated. Connect to backend later.");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-light-bg -mt-20">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary mb-6 text-center">
          Login
        </h1>
        <form className="space-y-4" onSubmit={submit}>
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-primary font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
