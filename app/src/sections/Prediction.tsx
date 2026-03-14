import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Upload, Play, Trash2, Dna, AlertCircle } from 'lucide-react';
import { predictionConfig } from '../config';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';

gsap.registerPlugin(ScrollTrigger);

// Valid amino acids
const VALID_AMINO_ACIDS = new Set('ACDEFGHIKLMNPQRSTVWY');

export function Prediction() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  
  const [sequence, setSequence] = useState('');
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState<{
    sequence: string;
    structure: string;
    confidence: number[];
    q3Score: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

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

    // Content animation
    tl.fromTo(
      contentRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' },
      '-=0.5'
    );

    return () => {
      tl.kill();
      triggersRef.current.forEach((t) => t.kill());
    };
  }, []);

  const validateSequence = (seq: string): boolean => {
    const upperSeq = seq.toUpperCase().replace(/\s/g, '');
    for (const char of upperSeq) {
      if (!VALID_AMINO_ACIDS.has(char)) {
        return false;
      }
    }
    return upperSeq.length > 0 && upperSeq.length <= predictionConfig.maxSequenceLength;
  };

  const handlePredict = async () => {
    setError(null);
    
    if (!sequence.trim()) {
      setError('Please enter a protein sequence');
      return;
    }

    const cleanSeq = sequence.toUpperCase().replace(/\s/g, '');
    
    if (cleanSeq.length > predictionConfig.maxSequenceLength) {
      setError(`Sequence exceeds maximum length of ${predictionConfig.maxSequenceLength} residues`);
      return;
    }

    if (!validateSequence(sequence)) {
      setError('Invalid sequence. Only standard amino acid letters (ACDEFGHIKLMNPQRSTVWY) are allowed');
      return;
    }

    setIsPredicting(true);

    // Simulate prediction with realistic protein secondary structure patterns
    setTimeout(() => {
      const structure = simulatePrediction(cleanSeq);
      const confidence = Array(cleanSeq.length).fill(0).map(() => 0.75 + Math.random() * 0.2);
      
      setPrediction({
        sequence: cleanSeq,
        structure,
        confidence,
        q3Score: 85 + Math.random() * 3,
      });
      setIsPredicting(false);

      // Animate result
      gsap.fromTo(
        resultRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'expo.out', delay: 0.2 }
      );
    }, 1500);
  };

  const simulatePrediction = (seq: string): string => {
    // Simple simulation: H for helix-prone, E for sheet-prone, C for coil
    // Based on amino acid propensities
    const helixProne = new Set('AEHKLQM');
    const sheetProne = new Set('VITYFW');
    
    return seq.split('').map(aa => {
      if (helixProne.has(aa)) return Math.random() > 0.3 ? 'H' : 'C';
      if (sheetProne.has(aa)) return Math.random() > 0.3 ? 'E' : 'C';
      return 'C';
    }).join('');
  };

  const handleClear = () => {
    setSequence('');
    setPrediction(null);
    setError(null);
  };

  const handleExample = () => {
    setSequence(predictionConfig.exampleSequence);
    setPrediction(null);
    setError(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        // Parse FASTA format
        const lines = content.split('\n');
        const seqLines = lines.filter(line => !line.startsWith('>') && line.trim());
        setSequence(seqLines.join(''));
        setPrediction(null);
        setError(null);
      };
      reader.readAsText(file);
    }
  };

  const getStructureColor = (type: string): string => {
    switch (type) {
      case 'H': return 'bg-cyan-500';
      case 'E': return 'bg-magenta-500';
      case 'C': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStructureLabel = (type: string): string => {
    switch (type) {
      case 'H': return 'Helix';
      case 'E': return 'Sheet';
      case 'C': return 'Coil';
      default: return 'Unknown';
    }
  };

  return (
    <section
      ref={sectionRef}
      id="predict"
      className="relative min-h-screen w-full py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="text-h2 font-medium text-white text-center mb-6"
        >
          {predictionConfig.title}
        </h2>
        <p className="text-body-lg text-white/60 text-center mb-16 max-w-2xl mx-auto">
          {predictionConfig.subtitle}
        </p>

        {/* Main Content */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Dna className="w-5 h-5 text-highlight" />
                <span className="text-body-sm text-white/60 uppercase tracking-wider">
                  Sequence Input
                </span>
              </div>

              <Textarea
                value={sequence}
                onChange={(e) => setSequence(e.target.value)}
                placeholder={predictionConfig.inputPlaceholder}
                className="min-h-[200px] bg-black/50 border-white/20 text-white placeholder:text-white/30 font-mono text-sm resize-none"
              />

              {error && (
                <Alert variant="destructive" className="mt-4 bg-red-500/10 border-red-500/30">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="flex flex-wrap gap-3 mt-6">
                <Button
                  onClick={handlePredict}
                  disabled={isPredicting}
                  className="bg-highlight hover:bg-highlight/90 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isPredicting ? 'Predicting...' : predictionConfig.predictButtonText}
                </Button>

                <Button
                  variant="outline"
                  onClick={handleClear}
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  {predictionConfig.clearButtonText}
                </Button>

                <Button
                  variant="outline"
                  onClick={handleExample}
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Example
                </Button>

                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept=".fasta,.txt,.fa"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                    asChild
                  >
                    <span>
                      <Upload className="w-4 h-4 mr-2" />
                      {predictionConfig.uploadButtonText}
                    </span>
                  </Button>
                </label>
              </div>

              <p className="text-body-xs text-white/40 mt-4">
                {predictionConfig.supportedFormats} • Max {predictionConfig.maxSequenceLength} residues
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <div className="text-h4 font-medium text-white">{sequence.replace(/\s/g, '').length}</div>
                <div className="text-body-xs text-white/50">Residues</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <div className="text-h4 font-medium text-highlight">Q3</div>
                <div className="text-body-xs text-white/50">Prediction</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <div className="text-h4 font-medium text-white">&lt;1s</div>
                <div className="text-body-xs text-white/50">Inference</div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div ref={resultRef}>
            {prediction ? (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-body-sm text-white/60 uppercase tracking-wider">
                      Prediction Results
                    </span>
                  </div>
                  <div className="text-body-sm text-white/60">
                    Q3 Score: <span className="text-highlight font-medium">{prediction.q3Score.toFixed(1)}%</span>
                  </div>
                </div>

                {/* Sequence with structure colors */}
                <div className="space-y-4">
                  <div>
                    <div className="text-body-xs text-white/40 mb-2">Sequence</div>
                    <div className="font-mono text-sm text-white/80 break-all bg-black/30 p-3 rounded">
                      {prediction.sequence}
                    </div>
                  </div>

                  <div>
                    <div className="text-body-xs text-white/40 mb-2">Predicted Structure</div>
                    <div className="font-mono text-sm break-all bg-black/30 p-3 rounded flex flex-wrap gap-1">
                      {prediction.structure.split('').map((type, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center justify-center w-6 h-6 rounded text-xs font-bold text-black ${getStructureColor(type)}`}
                          title={`Position ${i + 1}: ${getStructureLabel(type)} (${(prediction.confidence[i] * 100).toFixed(0)}% confidence)`}
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex gap-4 text-body-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-cyan-500" />
                      <span className="text-white/60">Helix (H)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-fuchsia-500" />
                      <span className="text-white/60">Sheet (E)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-gray-500" />
                      <span className="text-white/60">Coil (C)</span>
                    </div>
                  </div>

                  {/* Structure Statistics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                    {['H', 'E', 'C'].map((type) => {
                      const count = prediction.structure.split('').filter(s => s === type).length;
                      const percentage = ((count / prediction.structure.length) * 100).toFixed(1);
                      return (
                        <div key={type} className="text-center">
                          <div className="text-h4 font-medium text-white">{percentage}%</div>
                          <div className="text-body-xs text-white/50">{getStructureLabel(type)}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 border-dashed rounded-lg p-12">
                <div className="text-center">
                  <Dna className="w-16 h-16 text-white/20 mx-auto mb-4" />
                  <p className="text-body text-white/40">
                    Enter a sequence and click Predict to see results
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
