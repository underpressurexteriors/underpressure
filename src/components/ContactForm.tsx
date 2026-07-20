"use client";

import { useState } from "react";
import { business } from "@/lib/business";
import { services } from "@/lib/services";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const phone = data.get("phone");
    const address = data.get("address");
    const service = data.get("service");
    const message = data.get("message");

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Property Address / City: ${address}`,
      `Service Needed: ${service}`,
      "",
      `Details:`,
      `${message}`,
    ].join("\n");

    const subject = encodeURIComponent(`Free Quote Request - ${name}`);
    const mailBody = encodeURIComponent(body);
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${mailBody}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-data text-xs uppercase tracking-wide text-steel">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            className="mt-2 w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink focus:border-orange focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-data text-xs uppercase tracking-wide text-steel">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            className="mt-2 w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink focus:border-orange focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="text-data text-xs uppercase tracking-wide text-steel">
          Property Address or City
        </label>
        <input
          id="address"
          name="address"
          required
          type="text"
          placeholder="e.g. Zebulon, NC"
          className="mt-2 w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink focus:border-orange focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="service" className="text-data text-xs uppercase tracking-wide text-steel">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="mt-2 w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink focus:border-orange focus:outline-none"
        >
          <option value="Not sure yet">Not sure yet</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-data text-xs uppercase tracking-wide text-steel">
          Tell us about the job
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink focus:border-orange focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="text-display w-full rounded-sm bg-orange px-6 py-4 text-sm text-white hover:bg-orange-dark sm:w-auto"
      >
        Send Quote Request
      </button>

      {submitted && (
        <p className="text-sm text-navy">
          Your email app should be opening now with your request pre-filled -
          just hit send. If it didn&apos;t open, email us directly at{" "}
          <a href={`mailto:${business.email}`} className="font-semibold underline">
            {business.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
