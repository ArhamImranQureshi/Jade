"use client"; // Agar aap Next.js App Router use kar rahe hain to yeh zaroori hai
import Link from "next/link";
import {
  CATEGORIES,
  TESTIMONIALS,
  LOCATIONS,
  CONCERNS,
  JOURNAL,
} from "@/lib/data";

import { useState, useEffect } from "react";

export function SectionHead({
  eyebrow,
  title,
  sub,
  center = true,
  as: Tag = "h2",
}) {
  return (
    <div className={"sec-head" + (center ? " center" : "")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag
        style={
          Tag === "h1" ? { fontSize: "clamp(2.4rem,5vw,3.6rem)" } : undefined
        }
      >
        {title}
      </Tag>
      {sub && <p className="sub">{sub}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  em,
  children,
  img,
  actions,
  className = "",
}) {
  return (
    <section
      className={"page-hero " + className}
      style={img ? { "--hero-img": `url(${img})` } : undefined}
    >
      <div className="container">
        <div className="page-hero-in">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>
            {title}
            {em && (
              <>
                {" "}
                <em>{em}</em>
              </>
            )}
          </h1>
          <div className="page-hero-copy">{children}</div>
          {actions}
        </div>
      </div>
    </section>
  );
}

export function CategoryTiles() {
  return (
    <div className="tiles">
      {CATEGORIES.map((c) => (
        <Link
          key={c.slug}
          href={`/our-treatment/#${c.slug}`}
          className="tile"
          style={{ "--img": `url(${c.img})` }}
        >
          <div className="tile-bg" />
          <div className="tile-base">
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
          <div className="tile-hover">
            <h3>{c.title}</h3>
            <p>{c.hover}</p>
            <span className="tile-more">Learn more →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function TestimonialCards({ items = TESTIMONIALS }) {
  return (
    <div className="reviews">
      {items.map((t) => (
        <figure key={t.name} className="review">
          <div className="stars" aria-label="5 out of 5 stars">
            ★★★★★
          </div>
          <blockquote>“{t.text}”</blockquote>
          <figcaption>
            <strong>{t.name}</strong>
            <span>{t.treatment}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function HScrollReviews({ items = TESTIMONIALS }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Screen size ke hisab se cards adjust karna (Mobile pe 1, Tablet pe 2, Desktop pe 3)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play (Har 4 second baad slide change hogi)
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, maxIndex]);

  return (
    <section className="section white carousel-section">
      <div className="container">
        <SectionHead
          eyebrow="Testimonials"
          title="What Our Clients Say"
          sub="Real experiences. Real journeys. Real results."
        />
        <div className="divider-main">
          <div className="divide">
          <hr />
          <img src="/img/orchid-black.png" alt="Divider" />
          <hr />
        </div>
        </div>
        
        <div className="paragraph">
        <p>At Jade Orchid Aesthetics, we believe healthy skin is built through personalised care, evidence-based treatments and realistic expectations. </p>
        <p>Every skin journey is different, and we are proud to support our clients through each stage of their treatment, whether they are seeking rejuvenation, skin confidence, wellbeing support or specialist cancer care therapies.</p>
        <p>The comments below reflect the experiences of clients who have trusted us with their skin health and wellbeing.</p>
        </div>
        {/* Slider Wrapper */}
        <div className="slider-wrapper">
          <button
            onClick={prevSlide}
            className="slider-btn prev"
            aria-label="Previous"
          >
            &#10094;
          </button>

          <div className="slider-viewport">
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {items.map((t) => (
                <div
                  key={t.name}
                  className="slider-slide"
                  style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                >
                  <figure className="review">
                    <div>
                      <div className="stars" aria-label="5 out of 5 stars">
                        ★★★★★
                      </div>

                      {/* Text ke upar Quotes */}
                      <div
                        style={{
                          fontSize: "100px",
                          lineHeight: "0.5",
                          fontFamily: "Georgia, serif",
                          marginTop: "1.35rem",
                          color: "#F3E6E1",
                          display: "block",
                        }}
                      >
                        “
                      </div>

                      <blockquote style={{ margin: "0.25rem 0 1rem 0" }}>
                        {t.text}
                      </blockquote>
                    </div>

                    {/* Name se bilkul upar line */}
                    <div>
                      <hr
                        style={{
                          border: "none",
                          borderTop: "3px solid #F3E6E1",
                          margin: "0 0 0.75rem 0",
                          width: "50%",
                        }}
                      />
                      <figcaption>
                        <strong>{t.name}</strong>
                        <span>{t.treatment}</span>
                      </figcaption>
                    </div>
                    <div className="review-bottom-badge">
    <img src={"/img/orchid.png"}/>
  </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="slider-btn next"
            aria-label="Next"
          >
            &#10095;
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="slider-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`dot ${currentIndex === idx ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="center-btn" style={{ marginTop: "2rem" }}>
          <Link href="/testimonials/" className="btn btn-line">
            Read all reviews
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LocationCards({ withImg = true }) {
  return (
   <div className="locs">
  {LOCATIONS.map((l) => (
    <article key={l.name} className="loc">
      {withImg && <img src={l.img} alt={l.name} loading="lazy" />}
      
      {/* Badge ko wrapper ke andar rakha hai taake positioning perfect ho */}
      <div className="loc-badge-wrapper">
        <span className="loc-badge"><img src="/img/location.png" alt="location"/></span>
      </div>
      <p className="eyebrow">{l.area}</p>
      <div className="loc-body">
        <h3>{l.name}</h3>
        <div className="divide">
          <hr />
          <img src="/img/orchid-black.png" alt="Divider" />
          <hr />
        </div>
        <address>
          {l.lines.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </address>
        <a
          className="btn btn-line"
          href={l.map}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions
        </a>
      </div>
    </article>
  ))}
</div>
  );
}

export function ConcernGrid() {
  return (
    <div className="concerns">
      {CONCERNS.map((c) => (
        <Link key={c.t} href={`/our-treatment/#${c.to}`} className="concern">
          <img src={c.img} alt="" loading="lazy" />
          <div className="concern-body">
            <h3>{c.t}</h3>
            <p>{c.d}</p>
            <span aria-hidden="true">→</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function JournalCards() {
  return (
    <div className="journal">
      {JOURNAL.map((j) => (
        <Link
          key={j.slug}
          href={`/skin-health-journal/${j.slug}/`}
          className="j-card"
        >
          <img src={j.img} alt="" loading="lazy" />
          <div className="j-body">
            <h3>{j.t}</h3>
          <div className="divide">
          <hr />
          <img src="/img/orchid-black.png" alt="Divider" />
          <hr />
        </div>
        
            <p>{j.d}</p>
            <span className="btn btn-dark">Learn more →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Ready to begin your own skin and wellbeing journey?",
  text = "Whether you're looking to improve your skin health, explore aesthetic treatments or simply take time to focus on your wellbeing, we're here to help.",
  label = "Book a Consultation",
  href = "/contact/",
}) {
  return (
    <section className="cta-band">
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link href={href} className="btn btn-light">
          {label}
        </Link>
      </div>
    </section>
  );
}
