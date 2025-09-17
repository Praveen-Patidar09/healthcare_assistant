import { useState } from "react";

export default function Appointment() {
  const [form, setForm] = useState({ name: "", phone: "", date: "" });
  const [done, setDone] = useState(false);

  function submit(e) {
    e.preventDefault();
    setTimeout(() => setDone(true), 600); // simulate backend
  }

  if (done) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-light-bg">
        <div className="max-w-md w-full bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-primary">
            Appointment Requested
          </h3>
          <p className="mt-3 text-slate-600">
            We have recorded your request. Our team will contact you shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-light-bg">
      <div className="max-w-md w-full bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-primary text-center">
          Book Appointment
        </h2>

        <form className="mt-5 space-y-4" onSubmit={submit}>
          <input
            required
            className="w-full border px-4 py-2 rounded focus:ring focus:ring-primary focus:outline-none"
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            required
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="w-full border px-4 py-2 rounded focus:ring focus:ring-primary focus:outline-none"
            placeholder="Phone number"
            value={form.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ""); // keep only digits
              setForm({ ...form, phone: value });
            }}
          />

          <input
            required
            type="date"
            className="w-full border px-4 py-2 rounded focus:ring focus:ring-primary focus:outline-none"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-90 transition"
          >
            Request Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
