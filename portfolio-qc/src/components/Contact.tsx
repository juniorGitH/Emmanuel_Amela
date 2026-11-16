"use client";

import { FormEvent, useState } from "react";

export default function Contact({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      org: String(form.get("org") || ""),
      subject: String(form.get("subject") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Erreur d'envoi");
      }
      setStatus("ok");
      setMessage(data.message);
      event.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Erreur d'envoi");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Ouvert aux stages de recherche</h2>
          <p className="section-lead">
            Laboratoires, encadrants et équipes quantum : écrivez-moi pour un
            stage, une collaboration ou une discussion sur mon profil.
          </p>
          <p>
            Email direct :{" "}
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Nom
            <input name="name" required minLength={2} placeholder="Votre nom" />
          </label>
          <label>
            Email
            <input name="email" type="email" required placeholder="vous@labo.edu" />
          </label>
          <label>
            Organisation
            <input name="org" placeholder="Laboratoire / Université / Entreprise" />
          </label>
          <label>
            Sujet
            <input
              name="subject"
              required
              minLength={3}
              placeholder="Stage recherche quantum computing"
              defaultValue="Stage de recherche — informatique quantique"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              minLength={20}
              rows={6}
              placeholder="Décrivez le stage, le labo, les dates et le sujet de recherche…"
            />
          </label>
          <button className="btn" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Envoi…" : "Envoyer"}
          </button>
          {message ? (
            <p className={status === "ok" ? "form-ok" : "form-error"} role="status">
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
