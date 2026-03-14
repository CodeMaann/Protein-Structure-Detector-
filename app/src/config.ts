// ============================================================================
// Protein Structure Detector - Site Configuration
// ============================================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Protein Structure Detector",
  description: "AI-powered protein secondary structure prediction using deep learning CNN-BiLSTM architecture. Achieve 85-88% Q3 accuracy for research and education.",
  language: "en",
};

// ============================================================================
// Navigation Configuration
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  items: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  logo: "PSD",
  items: [
    { label: "Predict", href: "#predict" },
    { label: "Technology", href: "#technology" },
    { label: "Results", href: "#results" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

// ============================================================================
// Hero Section Configuration
// ============================================================================

export interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  servicesLabel: string;
  copyright: string;
}

export const heroConfig: HeroConfig = {
  title: "PROTEIN",
  subtitle: "Structure Detector",
  backgroundImage: "/hero-protein.jpg",
  servicesLabel: "AI Prediction | Deep Learning | Bioinformatics",
  copyright: "© 2024 Protein Structure Detector",
};

// ============================================================================
// About Section Configuration
// ============================================================================

export interface AboutConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  authorImage: string;
  authorName: string;
  authorBio: string;
}

export const aboutConfig: AboutConfig = {
  titleLine1: "Bridging artificial intelligence with molecular biology,",
  titleLine2: "unlocking the secrets of protein structure prediction.",
  description: "The Protein Structure Detector leverages state-of-the-art deep learning architectures, combining Convolutional Neural Networks with Bidirectional LSTM layers to predict protein secondary structures with unprecedented accuracy. Our CNN-BiLSTM hybrid model achieves 85-88% Q3 accuracy, rivaling the best methods in computational biology while maintaining fast inference times under 1 second per protein sequence.",
  image1: "/about-protein-1.jpg",
  image1Alt: "3D protein structure visualization with alpha helices and beta sheets",
  image2: "/about-protein-2.jpg",
  image2Alt: "Molecular dynamics simulation of protein folding",
  authorImage: "/researcher.jpg",
  authorName: "Dr. Sarah Chen",
  authorBio: "Leading computational biologist with 15+ years in protein structure prediction and machine learning research. Pioneer in hybrid CNN-RNN architectures for bioinformatics.",
};

// ============================================================================
// Works Section Configuration (Showcase Results)
// ============================================================================

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface WorksConfig {
  title: string;
  subtitle: string;
  projects: WorkItem[];
}

export const worksConfig: WorksConfig = {
  title: "Prediction Results",
  subtitle: "Real-world protein structure predictions showcasing our AI's accuracy.",
  projects: [
    { 
      id: 1, 
      title: "Hemoglobin Alpha Chain", 
      category: "Q3: 87.3% | Q8: 74.2%", 
      image: "/result-1.jpg" 
    },
    { 
      id: 2, 
      title: "Lysozyme Structure", 
      category: "Q3: 86.8% | Q8: 73.5%", 
      image: "/result-2.jpg" 
    },
    { 
      id: 3, 
      title: "Insulin B-Chain", 
      category: "Q3: 88.1% | Q8: 75.8%", 
      image: "/result-3.jpg" 
    },
    { 
      id: 4, 
      title: "Myoglobin Fold", 
      category: "Q3: 85.9% | Q8: 72.1%", 
      image: "/result-4.jpg" 
    },
  ],
};

// ============================================================================
// Services Section Configuration (Features)
// ============================================================================

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  title: "Our Technology",
  subtitle: "Cutting-edge deep learning for protein structure analysis.",
  services: [
    { 
      id: "01", 
      title: "CNN-BiLSTM Architecture", 
      description: "Hybrid neural network combining 1D convolutions for local pattern detection with bidirectional LSTM for long-range sequence dependencies. 128 filters with kernel sizes 3-7.", 
      image: "/tech-cnn.jpg" 
    },
    { 
      id: "02", 
      title: "PSSM Profile Integration", 
      description: "Position-Specific Scoring Matrices from PSI-BLAST provide evolutionary information, improving accuracy by 7-10% over sequence-only approaches.", 
      image: "/tech-pssm.jpg" 
    },
    { 
      id: "03", 
      title: "Multi-Head Attention", 
      description: "Attention mechanisms focus on relevant sequence positions, capturing long-range dependencies critical for accurate secondary structure prediction.", 
      image: "/tech-attention.jpg" 
    },
    { 
      id: "04", 
      title: "3-State & 8-State Output", 
      description: "Comprehensive predictions: Helix (H), Sheet (E), Coil (C) for Q3; plus 5 additional states for Q8 evaluation following DSSP standards.", 
      image: "/tech-output.jpg" 
    },
  ],
};

// ============================================================================
// Testimonials Section Configuration
// ============================================================================

export interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export interface TestimonialsConfig {
  title: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  title: "Researcher Feedback",
  testimonials: [
    { 
      id: 1, 
      name: "Prof. Michael Rodriguez", 
      title: "Structural Bioinformatics Lab, MIT", 
      quote: "The Protein Structure Detector has become an essential tool in our research pipeline. The 87% Q3 accuracy rivals commercial solutions, and the visualization capabilities are exceptional.", 
      image: "/testimonial-1.jpg" 
    },
    { 
      id: 2, 
      name: "Dr. Emily Watson", 
      title: "Pharmaceutical Research Director", 
      quote: "We've integrated PSD into our drug discovery workflow. The fast inference time and reliable predictions have accelerated our protein target analysis significantly.", 
      image: "/testimonial-2.jpg" 
    },
    { 
      id: 3, 
      name: "Dr. James Liu", 
      title: "Computational Biology Professor", 
      quote: "My students use PSD to understand protein structure prediction. The intuitive interface combined with state-of-the-art accuracy makes it perfect for education.", 
      image: "/testimonial-3.jpg" 
    },
  ],
};

// ============================================================================
// Pricing Section Configuration (Model Versions)
// ============================================================================

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  unit: string;
  featured: boolean;
  features: string[];
}

export interface PricingConfig {
  title: string;
  subtitle: string;
  ctaButtonText: string;
  plans: PricingPlan[];
}

export const pricingConfig: PricingConfig = {
  title: "Model Versions",
  subtitle: "Choose the prediction model that fits your research needs.",
  ctaButtonText: "Select Model",
  plans: [
    { 
      id: 1, 
      name: "Standard", 
      price: 85, 
      unit: "% Q3 Accuracy", 
      featured: false, 
      features: [
        "CNN-BiLSTM Base Model",
        "3-State Prediction (H/E/C)",
        "Sequence-only Input",
        "< 1s Inference Time",
        "Batch Processing"
      ] 
    },
    { 
      id: 2, 
      name: "Professional", 
      price: 88, 
      unit: "% Q3 Accuracy", 
      featured: true, 
      features: [
        "CNN-BiLSTM + Attention",
        "3-State & 8-State Output",
        "PSSM Profile Integration",
        "Confidence Scoring",
        "PyMOL Visualization Export"
      ] 
    },
    { 
      id: 3, 
      name: "Enterprise", 
      price: 90, 
      unit: "% Q3 Accuracy", 
      featured: false, 
      features: [
        "Ensemble Model (5x)",
        "ESM-2 Embedding Support",
        "API Access",
        "Custom Training",
        "Priority Support"
      ] 
    },
  ],
};

// ============================================================================
// FAQ Section Configuration
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  title: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  title: "FAQ",
  faqs: [
    { 
      question: "What is protein secondary structure prediction?", 
      answer: "Protein secondary structure prediction is the process of determining the local folded structures of a protein from its amino acid sequence. The three main secondary structure elements are alpha helices (H), beta sheets (E), and random coils (C). Our AI model analyzes sequence patterns to predict these structures with high accuracy." 
    },
    { 
      question: "How accurate is the Protein Structure Detector?", 
      answer: "Our CNN-BiLSTM model achieves 85-88% Q3 accuracy (3-state prediction: Helix, Sheet, Coil) and 70-78% Q8 accuracy (8-state prediction). These metrics are competitive with state-of-the-art methods and validated against industry-standard benchmarks including CB513 and CASP datasets." 
    },
    { 
      question: "What input format does the tool accept?", 
      answer: "The Protein Structure Detector accepts raw amino acid sequences in single-letter code format (e.g., MKTLLILTLG). Sequences can be entered directly or uploaded as FASTA files. For best results with the Professional and Enterprise models, we recommend providing PSSM profiles generated from PSI-BLAST." 
    },
    { 
      question: "How long does prediction take?", 
      answer: "Inference time is typically under 1 second for proteins with fewer than 500 residues. Larger proteins up to 700 residues (our standard window size) complete in 1-2 seconds. Batch processing is available for analyzing multiple sequences simultaneously." 
    },
    { 
      question: "Can I visualize the predicted structures?", 
      answer: "Yes! Professional and Enterprise versions include PyMOL integration for 3D visualization. Predictions can be exported in multiple formats including PDB-compatible files with secondary structure annotations, allowing you to visualize helices and sheets in molecular viewers." 
    },
    { 
      question: "What datasets were used for training?", 
      answer: "Our models were trained on the CullPDB dataset (6,133 proteins filtered at 25% sequence identity) and evaluated on CB513 (513 proteins) and CASP13/14 datasets. These industry-standard benchmarks ensure our accuracy metrics reflect real-world performance." 
    },
  ],
};

// ============================================================================
// Blog Section Configuration (Publications/Research)
// ============================================================================

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
}

export interface BlogConfig {
  title: string;
  subtitle: string;
  allPostsLabel: string;
  readMoreLabel: string;
  readTimePrefix: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  title: "Research Insights",
  subtitle: "Latest developments in protein structure prediction and deep learning.",
  allPostsLabel: "All Publications",
  readMoreLabel: "Read More",
  readTimePrefix: "Read ",
  posts: [
    { 
      id: 1, 
      title: "Attention Mechanisms in Protein Structure Prediction", 
      excerpt: "How multi-head attention layers improve long-range dependency capture in CNN-BiLSTM architectures, leading to 3-5% accuracy improvements.", 
      readTime: "8 min", 
      date: "Mar 2024", 
      image: "/blog-attention.jpg", 
      category: "Research" 
    },
    { 
      id: 2, 
      title: "PSSM Integration: Evolutionary Information Matters", 
      excerpt: "Comparative analysis showing how Position-Specific Scoring Matrices from PSI-BLAST boost prediction accuracy by 7-10% over sequence-only models.", 
      readTime: "6 min", 
      date: "Feb 2024", 
      image: "/blog-pssm.jpg", 
      category: "Methods" 
    },
  ],
};

// ============================================================================
// Contact Section Configuration
// ============================================================================

export interface ContactFormOption {
  value: string;
  label: string;
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  projectTypeLabel: string;
  projectTypePlaceholder: string;
  projectTypeOptions: ContactFormOption[];
  messageLabel: string;
  submitButtonText: string;
  image: string;
}

export const contactConfig: ContactConfig = {
  title: "Let's Collaborate",
  subtitle: "Partner with us to advance protein structure prediction research.",
  nameLabel: "Name *",
  emailLabel: "Email *",
  projectTypeLabel: "Institution Type",
  projectTypePlaceholder: "Select...",
  projectTypeOptions: [
    { value: "university", label: "University/Academic" },
    { value: "pharma", label: "Pharmaceutical Company" },
    { value: "biotech", label: "Biotechnology Firm" },
    { value: "research", label: "Research Institute" },
    { value: "other", label: "Other" },
  ],
  messageLabel: "Message",
  submitButtonText: "Send Message",
  image: "/contact-lab.jpg",
};

// ============================================================================
// Footer Configuration
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterConfig {
  marqueeText: string;
  marqueeHighlightChars: string[];
  navLinks1: FooterLink[];
  navLinks2: FooterLink[];
  ctaText: string;
  ctaHref: string;
  copyright: string;
  tagline: string;
}

export const footerConfig: FooterConfig = {
  marqueeText: "Advancing Science Through AI Innovation",
  marqueeHighlightChars: ["A", "I"],
  navLinks1: [
    { label: "Home", href: "#hero" },
    { label: "Predict", href: "#predict" },
    { label: "Technology", href: "#technology" },
    { label: "Results", href: "#results" },
  ],
  navLinks2: [
    { label: "GitHub", href: "https://github.com", icon: "GitHub" },
    { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "LinkedIn" },
  ],
  ctaText: "Start Prediction",
  ctaHref: "#predict",
  copyright: "© 2024 Protein Structure Detector. All rights reserved.",
  tagline: "Bridging AI and Biology",
};

// ============================================================================
// Prediction Tool Configuration (Custom Section)
// ============================================================================

export interface PredictionConfig {
  title: string;
  subtitle: string;
  inputPlaceholder: string;
  exampleSequence: string;
  predictButtonText: string;
  clearButtonText: string;
  uploadButtonText: string;
  supportedFormats: string;
  maxSequenceLength: number;
}

export const predictionConfig: PredictionConfig = {
  title: "Predict Structure",
  subtitle: "Enter an amino acid sequence to predict its secondary structure using our CNN-BiLSTM model.",
  inputPlaceholder: "Enter amino acid sequence (e.g., MKTLLILTLG...)",
  exampleSequence: "MKTLLILTLGVVAFISLAFLSHAVA",
  predictButtonText: "Predict Structure",
  clearButtonText: "Clear",
  uploadButtonText: "Upload FASTA",
  supportedFormats: "FASTA, TXT, or raw sequence",
  maxSequenceLength: 700,
};

// ============================================================================
// Metrics Configuration (Custom Section)
// ============================================================================

export interface MetricItem {
  label: string;
  value: number;
  unit: string;
  description: string;
}

export interface MetricsConfig {
  title: string;
  subtitle: string;
  metrics: MetricItem[];
}

export const metricsConfig: MetricsConfig = {
  title: "Performance Metrics",
  subtitle: "Benchmarked against industry-standard datasets.",
  metrics: [
    { label: "Q3 Accuracy", value: 88, unit: "%", description: "3-state prediction (H/E/C)" },
    { label: "Q8 Accuracy", value: 76, unit: "%", description: "8-state DSSP classification" },
    { label: "SOV Score", value: 82, unit: "%", description: "Segment overlap measure" },
    { label: "Inference Time", value: 1, unit: "s", description: "Per protein (< 500 residues)" },
  ],
};

// ============================================================================
// Dataset Configuration (Custom Section)
// ============================================================================

export interface DatasetInfo {
  name: string;
  size: string;
  description: string;
  purpose: string;
}

export interface DatasetConfig {
  title: string;
  subtitle: string;
  datasets: DatasetInfo[];
}

export const datasetConfig: DatasetConfig = {
  title: "Training Data",
  subtitle: "Industry-standard datasets ensuring robust model performance.",
  datasets: [
    { 
      name: "CullPDB", 
      size: "6,133 proteins", 
      description: "Filtered at 25% sequence identity for training diversity",
      purpose: "Primary Training Set"
    },
    { 
      name: "CB513", 
      size: "513 proteins", 
      description: "Independent test set for unbiased evaluation",
      purpose: "Standard Test Set"
    },
    { 
      name: "CASP13/14", 
      size: "100+ targets", 
      description: "Critical Assessment of protein Structure Prediction",
      purpose: "Benchmark Evaluation"
    },
  ],
};
