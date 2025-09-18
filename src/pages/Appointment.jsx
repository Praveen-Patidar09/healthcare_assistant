import { useState } from "react";

export default function Appointment() {
  const [form, setForm] = useState({ name: "", phone: "", date: "",reason:" " });
  const [done, setDone] = useState(false);

  function submit(e) {
    e.preventDefault();
    setTimeout(() => setDone(true), 600); // simulate backend
  }

  if (done) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-light-bg">
        <div className="w-full max-w-md p-6 text-center bg-white shadow-md rounded-xl">
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
    <div className="flex items-center justify-center min-h-screen bg-light-bg">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-xl">
        <h2 className="text-2xl font-semibold text-center text-primary">
          Book Appointment
        </h2>

        <form className="mt-5 space-y-4" onSubmit={submit}>
          <input
            required
            className="w-full px-4 py-2 border rounded focus:ring focus:ring-primary focus:outline-none"
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            required
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="w-full px-4 py-2 border rounded focus:ring focus:ring-primary focus:outline-none"
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
            className="w-full px-4 py-2 border rounded focus:ring focus:ring-primary focus:outline-none"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
         <input 
         required
         type="text"
         className="w-full px-4 py-2 border rounded focus:ring focus:ring-primary focus:outline-none"
          placeholder="Reason for Appointment"
          value={form.value}
          onChange={(e) => setForm({ ...form, value: e.target.value })}
         
         />

          <button
            type="submit"
            className="w-full py-2 text-white transition rounded bg-primary hover:bg-opacity-90"
          >
            Request Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
