"use client";

import { useState } from "react";

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      className="grid gap-4 rounded-[2rem] border-2 border-grill bg-white p-5 shadow-crisp sm:p-6"
      onSubmit={async (event) => {
        event.preventDefault();
        setSending(true);
        setError("");
        setSent(false);

        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());

        try {
          const response = await fetch("/api/booking", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });

          if (!response.ok) {
            throw new Error("Request failed");
          }

          form.reset();
          setSent(true);
        } catch {
          setError("Something went wrong. Please call or email Cheesedogs NC directly so we do not miss your event.");
        } finally {
          setSending(false);
        }
      }}
    >
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Name
          <input name="name" required className="focus-ring rounded-2xl border-2 border-grill/20 px-4 py-3" />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Email
          <input name="email" type="email" required className="focus-ring rounded-2xl border-2 border-grill/20 px-4 py-3" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Phone
          <input name="phone" type="tel" className="focus-ring rounded-2xl border-2 border-grill/20 px-4 py-3" />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Event Date
          <input name="eventDate" type="date" className="focus-ring rounded-2xl border-2 border-grill/20 px-4 py-3" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold">
        Event Location
        <input name="eventLocation" placeholder="City, venue, or neighborhood" className="focus-ring rounded-2xl border-2 border-grill/20 px-4 py-3" />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          Estimated Guest Count
          <input name="guestCount" type="number" min="1" className="focus-ring rounded-2xl border-2 border-grill/20 px-4 py-3" />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Event Type
          <select name="eventType" className="focus-ring rounded-2xl border-2 border-grill/20 px-4 py-3">
            <option>Wedding</option>
            <option>Neighborhood event</option>
            <option>Corporate event</option>
            <option>School event</option>
            <option>Brewery pop-up</option>
            <option>Private party</option>
            <option>Sports event</option>
            <option>Grand opening</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold">
        Message
        <textarea
          name="message"
          rows={compact ? 4 : 6}
          placeholder="Tell us about timing, setup, budget, menu needs, and anything else helpful."
          className="focus-ring rounded-2xl border-2 border-grill/20 px-4 py-3"
        />
      </label>
      <button
        type="submit"
        disabled={sending}
        className="focus-ring rounded-full border-2 border-grill bg-dogred px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-1 hover:shadow-button"
      >
        {sending ? "Sending Request..." : "Send Booking Request"}
      </button>
      {sent ? (
        <p className="rounded-2xl bg-cream px-4 py-3 text-sm font-bold text-grill" role="status">
          Thanks. Your request has been sent to Cheesedogs NC. We will follow up soon.
        </p>
      ) : null}
      {error ? (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-dogred" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
