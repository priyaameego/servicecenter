import { useState, useEffect, useRef } from 'react';

function CountUp({ end, duration = 2000 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = progress * (2 - progress);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={nodeRef}>
      {count >= 1000 ? count.toLocaleString() : count}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="bg-[#f0f0f0] relative">
      <div className="container-custom relative z-20">
        
        {/* Negative margin to pull it UP over the previous section's dark background */}
        <div className="flex flex-col md:flex-row max-w-[1400px] mx-auto bg-white shadow-xl -mt-16 md:-mt-24">
          
          {/* Left Block (Primary Color) */}
          <div className="bg-[var(--color-primary)] text-white p-12 md:p-20 md:w-[35%] flex flex-col justify-center items-center text-center">
            <span className="uppercase tracking-widest text-sm mb-3 font-light text-white/90">STATS</span>
            <h2 className="text-5xl md:text-6xl font-heading font-extrabold uppercase leading-tight drop-shadow-sm">
              WHAT<br />WE<br />DONE?
            </h2>
          </div>

          {/* Right Block (Stats) */}
          <div className="bg-white p-12 md:p-20 md:w-[65%] flex flex-col justify-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              
              {/* Stat 1 (Large) */}
              <div className="flex flex-col items-center text-center relative top-[-10px]">
                <div className="text-7xl md:text-[110px] font-light text-[#111111] leading-none tracking-tight">
                  <CountUp end={1500} />
                </div>
                <div className="text-4xl md:text-5xl font-light text-[var(--color-primary)] mt-3 mb-6">
                  +
                </div>
                <div className="text-sm font-light text-gray-500 uppercase tracking-widest">
                  CUSTOMERS
                </div>
              </div>

              <div className="flex flex-col gap-16">
                {/* Stat 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="text-6xl md:text-7xl font-light text-[#111111] leading-none mb-4">
                    <CountUp end={30} /><span className="text-4xl md:text-5xl text-[#111111] font-light ml-1">+</span>
                  </div>
                  <div className="text-sm font-light text-gray-500 uppercase tracking-widest">
                    TEAM
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="text-6xl md:text-7xl font-light text-[#111111] leading-none mb-4">
                    <CountUp end={10} /><span className="text-4xl md:text-5xl text-[var(--color-primary)] font-light ml-1">+</span>
                  </div>
                  <div className="text-sm font-light text-gray-500 uppercase tracking-widest">
                    SERVICES
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
