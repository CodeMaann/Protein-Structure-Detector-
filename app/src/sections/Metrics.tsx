import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Clock, Database, Award } from 'lucide-react';
import { metricsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  'Q3 Accuracy': Award,
  'Q8 Accuracy': TrendingUp,
  'SOV Score': Database,
  'Inference Time': Clock,
};

export function Metrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    // Title animation
    tl.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }
    );

    // Cards stagger animation
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.metric-card');
      tl.fromTo(
        cards,
        { y: 80, opacity: 0, rotateX: -15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'expo.out',
        },
        '-=0.4'
      );
    }

    // Animate numbers
    const counters = document.querySelectorAll('.metric-value');
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-value') || '0', 10);
      const isTime = counter.getAttribute('data-unit') === 's';
      
      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: isTime ? 0.1 : 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      tl.kill();
      triggersRef.current.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="metrics"
      className="relative min-h-screen w-full py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-h2 font-medium text-white mb-4"
          >
            {metricsConfig.title}
          </h2>
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto">
            {metricsConfig.subtitle}
          </p>
        </div>

        {/* Metrics Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ perspective: '1000px' }}
        >
          {metricsConfig.metrics.map((metric, index) => {
            const Icon = iconMap[metric.label] || Award;
            return (
              <div
                key={index}
                className="metric-card group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-highlight/50"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-lg bg-highlight/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-highlight" />
                  </div>
                </div>

                {/* Value */}
                <div className="relative mb-2">
                  <span
                    className="metric-value text-h1 font-medium text-white"
                    data-value={metric.value}
                    data-unit={metric.unit}
                  >
                    0
                  </span>
                  <span className="text-h3 font-light text-highlight ml-1">
                    {metric.unit}
                  </span>
                </div>

                {/* Label */}
                <div className="relative text-body font-medium text-white/80 mb-2">
                  {metric.label}
                </div>

                {/* Description */}
                <div className="relative text-body-sm text-white/50">
                  {metric.description}
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
                  <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-highlight/50 to-transparent transform translate-x-4 -translate-y-2" />
                  <div className="absolute top-0 right-0 h-px w-12 bg-gradient-to-l from-highlight/50 to-transparent transform translate-x-2 -translate-y-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="text-body-sm text-white/40 uppercase tracking-wider mb-2">
              Training Dataset
            </div>
            <div className="text-h4 font-medium text-white">6,133 Proteins</div>
            <div className="text-body-sm text-white/50 mt-1">
              CullPDB at 25% sequence identity
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="text-body-sm text-white/40 uppercase tracking-wider mb-2">
              Model Parameters
            </div>
            <div className="text-h4 font-medium text-white">2.4 Million</div>
            <div className="text-body-sm text-white/50 mt-1">
              CNN-BiLSTM with Attention
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="text-body-sm text-white/40 uppercase tracking-wider mb-2">
              Validation
            </div>
            <div className="text-h4 font-medium text-white">CB513 + CASP</div>
            <div className="text-body-sm text-white/50 mt-1">
              Industry-standard benchmarks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
