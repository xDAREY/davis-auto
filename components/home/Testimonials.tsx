import { useState } from 'react';

interface Testimonial {
  id: string;
  text: string;
  author: string;
  title: string;
  initials: string;
  highlight: boolean;
  link: string;
}

export function Testimonials() {
  const [modalLink, setModalLink] = useState<string | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      text: 'I purchased a 2006 Hyundai Tucson on 5/8/23 from Davis House of Automotive. My experience with Mr. Davis was exceptionally outstanding. I got a great deal on a great vehicle. I was treated with the utmost respect and care. The sale went really well. The price was definitely within my price range. Mr. Davis was amazing in selling me a vehicle that not only was in my budget but he also up front and honest about the vehicle. He informed me about some minor issues that the vehicle had. I was able to get them taken care of at a minimum cost. I have recommended several of my family and friends to this company. He treated me as if I was family and I greatly appreciated that. I highly recommend this company if you are in need of a vehicle. A very very happy customer.',
      author: 'Gloria Breeland (GeeGee)',
      title: '8 reviews · 5 photos · Verified Google Review',
      initials: 'GB',
      highlight: true,
      link: 'https://share.google/KViu602ff0GQX67cZ',
    },
    {
      id: '2',
      text: 'I purchased A 2006 Lincoln Zephyr in Oct of 2024. I met Dee Davis through Facebook Marketplace. I met up with him. He was punctual, straight to the point, answer any of the questions I have pertaining to the car. He took care all my tax title, tag information. Give him the payment. And everything was History. I currently drive the car as of today. 12/2/2024. No mechanical issues. I wish there were more Salesman out here that Stands on Business. I totally recommend his services.',
      author: 'Putback Shawty',
      title: '7 reviews · 21 photos · Verified Google Review',
      initials: 'PS',
      highlight: false,
      link: 'https://share.google/iu0b4sgBL3mcKtlOd',
    },
    {
      id: '3',
      text: 'On 02/12/2024 I purchased a 2008 Jeep Grand Cherokee. I absolutely love my vehicle, everything that was told to me about the vehicle was true, meeting up and test driving was at ease, and all my interactions with Mr. Davis have been beyond wonderful. My jeep has been my pride and joy since I got it! Thank you so much!',
      author: 'Taylor Thrash',
      title: 'Local Guide · 8 reviews · 3 photos · Verified Google Review',
      initials: 'TT',
      highlight: false,
      link: 'https://share.google/uPWkpp2m1laLEGsXm',
    },
  ];

  const openReview = (url: string) => {
    // Try modal first
    setModalLink(url);

    // Optional fallback: open in new window if iframe blocked
    setTimeout(() => {
      const testIframe = document.createElement('iframe');
      testIframe.src = url;
      testIframe.onload = () => {};
      testIframe.onerror = () => {
        // iframe blocked, open new window
        window.open(url, '_blank', 'noopener,noreferrer');
        setModalLink(null);
      };
      document.body.appendChild(testIframe);
      document.body.removeChild(testIframe);
    }, 100);
  };

  return (
    <section
      id="testimonials"
      className="py-14 md:py-24"
      style={{ background: 'rgba(30,41,59,0.4)' }}
    >
      <div className="container-gutter max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-accent-gold" />
          <span className="text-[11px] tracking-[0.25em] uppercase text-accent-gold font-medium">
            Client Voices
          </span>
        </div>

        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-bold text-text-primary leading-tight mb-10 md:mb-14">
          Trusted by <em className="italic text-accent-gold">Buyers</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col p-6 md:p-8 transition-all duration-300 cursor-pointer"
              style={{
                background: t.highlight ? 'rgba(201,162,39,0.06)' : 'rgba(15,23,42,0.6)',
                border: `1px solid ${
                  t.highlight ? 'rgba(201,162,39,0.4)' : 'rgba(255,255,255,0.06)'
                }`,
              }}
              onClick={() => openReview(t.link)}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 text-accent-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[13px] text-text-muted leading-[1.9] flex-grow mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    background: 'rgba(201,162,39,0.12)',
                    border: '1px solid rgba(201,162,39,0.3)',
                  }}
                >
                  <span className="text-[11px] font-bold text-accent-gold">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-text-primary">
                    {t.author}
                  </p>
                  <p className="text-[11px] text-text-muted">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalLink && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setModalLink(null)}
        >
          <div
            className="bg-white w-[90%] md:w-[70%] h-[80%] p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black font-bold text-xl"
              onClick={() => setModalLink(null)}
            >
              ✕
            </button>
            <iframe
              src={modalLink}
              className="w-full h-full border-none"
              title="Google Review"
            />
          </div>
        </div>
      )}
    </section>
  );
}