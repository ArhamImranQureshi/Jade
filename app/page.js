import Link from "next/link";
import {
  SectionHead,
  CategoryTiles,
  HScrollReviews,
  LocationCards,
  JournalCards,
} from "@/components/Sections";
import SkinClubPlans from "@/components/SkinClubPlans";
import ConsultSection from "@/components/ConsultSection";
import { TESTIMONIALS } from "@/lib/data";
import HeroVideo from "@/components/HeroVideo";
import FullWidthVideo from "@/components/FullWidthVideo";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <HeroVideo />
        </div>
        <div className="hero-woman" aria-hidden="true">
          <img
            src="/img/hero-woman.webp"
            alt=""
            width="1100"
            height="934"
            fetchPriority="high"
          />
        </div>
        <div className="container">
          <div className="hero-in">
            <p className="eyebrow">Jade Orchid Aesthetics</p>
            <h1>Skin, considered differently.</h1>
            <p className="lead">
              Personalised aesthetics, advanced skincare and inside-out
              support—designed around you.
            </p>
            <p className="tag">Created by science; perfected by you.</p>
            <div className="btns">
              <Link href="/contact/" className="btn btn-dark">
                Book a consultation
              </Link>
              <Link href="/our-treatment/" className="btn btn-line">
                Explore treatments
              </Link>
            </div>
            <p className="proof">
              Qualified clinicians • Personalised plans • Leicester &amp;
              Wolverhampton
            </p>
          </div>
        </div>
      </section>

      <div className="partners" aria-label="Brands we work with">
        <div className="marquee">
          {[0, 1].map((n) => (
            <ul
              className="marquee-track"
              key={n}
              aria-hidden={n === 1 ? "true" : undefined}
            >
              <li>Dermalogica Pro</li>
              <li>Medik8</li>
              <li>Vitaran</li>
              <li>Profhilo</li>
              <li>SkinPen</li>
              <li>Teoxane</li>
            </ul>
          ))}
        </div>
      </div>

      <section className="statement">
        <div className="container">
          <p className="eyebrow">Created by science. Perfected by you.</p>
          <p className="statement-text" data-scrub>
            Healthy, confident skin is not created through quick fixes, trends,
            or over-treatment — but through clinical knowledge, personalised
            care, and treatments delivered at the right time for your skin.
          </p>
        </div>
      </section>

      <section className="section bg" id="treatments">
        <div className="container">
          <SectionHead
            eyebrow="Regenerative aesthetics • Skin health • Rejuvenation"
            title="Treatments"
          />
          <CategoryTiles />
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div className="split-img">
            <img
              src="/img/philosophy.jpg"
              alt="Open journal reading 'Healthy skin is intentional' beside a cup of tea"
            />
          </div>
          <div>
            <p className="eyebrow">Our Philosophy</p>
            <h2>Exceptional results come from understanding your skin.</h2>
            <p>
              At Jade Orchid Aesthetics, we believe exceptional results come
              from understanding your skin — not chasing trends.
            </p>
            <p>
              Combining science-led treatments, clinical expertise and
              personalised skincare, we look beyond what is visible on the
              surface. We consider your skin health, lifestyle, nutrition and
              homecare to support healthier skin from the inside out and outside
              in.
            </p>
            <p>
              Every recommendation forms part of a personalised journey, focused
              on healthy skin, natural-looking results and long-term maintenance
              — not quick fixes.
            </p>
            <div className="btns">
              <Link
                href="/inside-jade-orchid/#philosophy"
                className="btn btn-dark"
              >
                Discover Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HScrollReviews items={TESTIMONIALS} />

      <FullWidthVideo
        src="/video/fullwidth.mp4"
        poster="/img/fullwidth-poster.jpg"
      />

    <section className="section alt" id="skin-club">
  <div className="container">
    <div className="skin-club-grid">
      
      {/* Left Side: Skin Club Plans */}
      <div className="skin-club-left">
        <SkinClubPlans />
      </div>

      {/* Right Side: Heading + Sara Content */}
      <div className="skin-club-right">
        <div className="skin-club-head">
          <SectionHead
            eyebrow="Skin Club"
            title="Join Our Skin Club"
            sub="Professional skincare works best when it becomes part of a consistent routine — not just an occasional treatment."
          />
        </div>

        <div className="club-more">
          <p>
            The Jade Orchid Skin Club has been created for patients who want
            ongoing support, exclusive member benefits, priority access, and a
            more structured approach to long-term skin health and maintenance.
          </p>

          <p>
            Whether you are maintaining results, investing in skin rejuvenation,
            or simply wanting healthier-looking skin year-round, our memberships
            provide professional guidance, exclusive savings, and continued
            support throughout your skin journey.
          </p>

          {/* Benefits List */}
          <div className="club-benefits">
            <strong>Benefits:</strong>
            <ul>
              <li>Exclusive Member-Only Discounts</li>
              <li>Priority Booking Access</li>
              <li>Personalised Skincare Consultation</li>
              <li>Member-Only Events and Workshops</li>
              <li>Access to Premium Product Trials</li>
            </ul>
          </div>

          <p className="cadence">
            Invest in your skin consistently — and the results will follow.
          </p>

          <p>
            Join the Jade Orchid Skin Club for exclusive member pricing,
            professional guidance, and ongoing support designed around
            healthier, confident skin.
          </p>

          <Link href="/skin-club/" className="btn btn-line">
            Join Our Skin Club
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Skin Health Journal"
            title="Explore Insights"
            sub="Clinically-led guidance for healthier, more confident skin."
          />
        
          <JournalCards />
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container">
          <SectionHead eyebrow="Our Clinics" title="Jade Orchid Locations" />
           <div className="divider-main">
          <div className="divide">
          <hr />
          <img src="/img/orchid-black.png" alt="Divider" />
          <hr />
        </div>
        </div>
        <div className="paragraph">
        <p>Export Care Across Multiple Trusted Locations</p>
        </div>
          <LocationCards />
        </div>
      </section>

      <ConsultSection />
    </>
  );
}
