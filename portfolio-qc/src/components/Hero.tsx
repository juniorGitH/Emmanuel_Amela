"use client";

import Image from "next/image";

type HeroProps = {
  name: string;
  title: string;
  headline: string;
  seeking: string;
};

export default function Hero({ name, title, headline, seeking }: HeroProps) {
  return (
    <section id="home" className="hero">
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/jr2.jpg"
          alt=""
          fill
          priority
          className="hero-image"
          sizes="100vw"
        />
        <div className="hero-veil" />
      </div>

      <div className="container hero-content reveal">
        <p className="eyebrow">Stage recherche · Quantum Computing</p>
        <h1>{name}</h1>
        <p className="hero-title">{title}</p>
        <p className="hero-lead">{headline}</p>
        <p className="hero-seeking">{seeking}</p>

        <div className="hero-actions">
          <a className="btn" href="#contact">
            Proposer un stage / collab
          </a>
          <a className="btn btn-ghost" href="#research">
            Axes de recherche
          </a>
        </div>
      </div>
    </section>
  );
}
