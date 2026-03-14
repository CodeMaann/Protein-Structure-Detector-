import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, CheckCircle, Layers, Target } from 'lucide-react';
import { datasetConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  'CullPDB': Database,
  'CB513': CheckCircle,
  'CASP13/14': Target,
};

export function Datasets() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }
    );

    if (contentRef.current) {
      const items = contentRef.current.querySelectorAll('.dataset-item');
      tl.fromTo(
        items,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'expo.out',
        },
        '-=0.4'
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="datasets"
      className="relative min-h-screen w-full py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-h2 font-medium text-white mb-4"
          >
            {datasetConfig.title}
          </h2>
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto">
            {datasetConfig.subtitle}
          </p>
        </div>

        {/* Dataset Cards */}
        <div ref={contentRef} className="space-y-6">
          {datasetConfig.datasets.map((dataset, index) => {
            const Icon = iconMap[dataset.name] || Layers;
            return (
              <div
                key={index}
                className="dataset-item group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-highlight/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-highlight/30 transition-all duration-500">
                      <Icon className="w-8 h-8 text-highlight" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                      <h3 className="text-h4 font-medium text-white">
                        {dataset.name}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-highlight/20 text-highlight text-body-xs font-medium">
                        {dataset.purpose}
                      </span>
                    </div>
                    <p className="text-body text-white/60 mb-2">
                      {dataset.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-body-sm text-white/40">Size:</span>
                      <span className="text-body-sm text-white/80 font-medium">
                        {dataset.size}
                      </span>
                    </div>
                  </div>

                  {/* Decorative number */}
                  <div className="hidden md:flex flex-shrink-0 w-20 h-20 items-center justify-center">
                    <span className="text-h1 font-light text-white/10 group-hover:text-highlight/30 transition-colors duration-500">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Progress bar effect */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-highlight/50 to-transparent rounded-b-xl"
                  style={{
                    width: index === 0 ? '85%' : index === 1 ? '60%' : '40%',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Data Pipeline Visualization */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-xl p-8">
          <h3 className="text-h5 font-medium text-white mb-8 text-center">
            Data Processing Pipeline
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', label: 'Raw Data', desc: 'PDB Structures' },
              { step: '2', label: 'Filtering', desc: '25% Identity' },
              { step: '3', label: 'Features', desc: 'PSSM + Encoding' },
              { step: '4', label: 'Training', desc: 'CNN-BiLSTM' },
              { step: '5', label: 'Validation', desc: 'CB513/CASP' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white/10 border border-white/20 rounded-lg p-4 text-center hover:bg-white/15 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-highlight/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-body-sm font-medium text-highlight">
                      {item.step}
                    </span>
                  </div>
                  <div className="text-body-sm font-medium text-white mb-1">
                    {item.label}
                  </div>
                  <div className="text-body-xs text-white/50">
                    {item.desc}
                  </div>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
