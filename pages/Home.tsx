import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Video, Mic2, Tv, Presentation, Globe, Star } from 'lucide-react';
import { Button, Card, CardContent, FadeIn } from '../components/ui';

const heroImages = [
    "https://picsum.photos/id/1/2500/1600", // Tech/Production
    "https://picsum.photos/id/91/2500/1600", // Cinema
    "https://picsum.photos/id/158/2500/1600", // Event
    "https://picsum.photos/id/250/2500/1600"  // Camera
];

const clients = [
    "UNDP", "ADB", "IUCN", "Unilever", "Emirates", "CSX", "AMK Microfinance", "Knorr", "Sanofi", "Mong Reththy Group"
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        {/* Carousel Backgrounds */}
        {heroImages.map((img, index) => (
            <div 
                key={index}
                className={`absolute inset-0 bg-cover bg-center z-0 transition-all duration-[1500ms] ease-in-out ${index === currentSlide ? 'opacity-60 scale-105' : 'opacity-0 scale-100'}`}
                style={{ 
                    backgroundImage: `url("${img}")`,
                }}
            />
        ))}
        
        {/* Parallax Overlay */}
        <div 
            className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/30 z-0 pointer-events-none" 
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8">
            <FadeIn delay={0}>
                <div className="inline-block px-4 py-1.5 border border-yellow-500/30 rounded-full bg-black/40 backdrop-blur-sm mb-4">
                    <span className="text-yellow-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">WE strive for the best!</span>
                </div>
            </FadeIn>
            
            <FadeIn delay={200}>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-xl leading-[1.1]">
                    Cambodia's Leading<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Production House</span>
                </h1>
            </FadeIn>
            
            <FadeIn delay={400}>
                <p className="text-lg md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
                    Over 10 years of experience providing creative solutions in media, advertising, and event management.
                </p>
            </FadeIn>
            
            <FadeIn delay={600} className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
                <Link to="/contact">
                    <Button size="lg" className="h-16 px-10 text-lg bg-yellow-500 text-black hover:bg-yellow-400 font-bold border-none transition-all duration-300 shadow-[0_0_30px_rgba(234,179,8,0.2)] hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] hover:-translate-y-1">
                        Contact Us: 012 871 809
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
                <Link to="/portfolio">
                    <Button variant="outline" size="lg" className="h-16 px-10 text-lg border-white/20 hover:bg-white/10 text-white backdrop-blur-sm hover:-translate-y-1 transition-transform">
                        View Our Work
                    </Button>
                </Link>
            </FadeIn>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-4 md:px-8 bg-zinc-950 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-yellow-500/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn className="text-center mb-20 space-y-4">
                <h2 className="text-sm font-bold tracking-[0.2em] text-yellow-500 uppercase">What We Do</h2>
                <h3 className="font-display text-4xl md:text-6xl font-bold text-white">Creative Solutions</h3>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { icon: Video, title: "Production Services", desc: "TV Commercials, Documentaries, Corporate Videos, and Photography." },
                    { icon: Mic2, title: "Event Management", desc: "Corporate events, forums, product launches, and logistics." },
                    { icon: Tv, title: "Live Stream", desc: "Professional broadcasting, cross-platform streaming, and technical setup." },
                    { icon: Presentation, title: "PR Services", desc: "Media relations, press conferences, and public image management." },
                    { icon: Star, title: "Media Buying", desc: "Strategic placement to ensure your content reaches the right audience." },
                    { icon: Globe, title: "Digital Marketing", desc: "Complementing production with strategic online performance." }
                ].map((s, i) => (
                    <FadeIn key={i} delay={i * 100}>
                        <Card className="group bg-zinc-900/40 border-zinc-800 hover:border-yellow-500/50 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-yellow-900/10 h-full">
                            <CardContent className="p-8 space-y-6 flex flex-col h-full">
                                <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:scale-110">
                                    <s.icon className="h-8 w-8 text-yellow-500 group-hover:text-black transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-3 font-display">{s.title}</h4>
                                    <p className="text-zinc-400 leading-relaxed text-sm">{s.desc}</p>
                                </div>
                                <div className="mt-auto pt-4">
                                    <Link to="/services" className="inline-flex items-center text-sm font-bold text-white group-hover:text-yellow-500 transition-colors uppercase tracking-wider">
                                        Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-32 px-4 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
             <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Recent Projects</h2>
                    <p className="text-zinc-400 text-lg max-w-xl">Highlights from our corporate and government partnerships. We deliver excellence in every frame.</p>
                </div>
                <Link to="/portfolio">
                    <Button variant="ghost" className="hover:text-yellow-500 hover:bg-zinc-800/50 text-base">View All Work <ArrowRight className="ml-2 h-5 w-5" /></Button>
                </Link>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Sacombank", cat: "Product Launch", img: "https://picsum.photos/id/20/800/600" },
                    { title: "UNDP Event", cat: "Government/NGO", img: "https://picsum.photos/id/119/800/600" },
                    { title: "Dai-ichi Life", cat: "Award Night", img: "https://picsum.photos/id/180/800/600" },
                    { title: "BioGaia", cat: "Brand Activation", img: "https://picsum.photos/id/252/800/600" },
                    { title: "Urban Village", cat: "Real Estate", img: "https://picsum.photos/id/364/800/600" },
                    { title: "Community Cares", cat: "Concert", img: "https://picsum.photos/id/453/800/600" }
                ].map((item, i) => (
                    <FadeIn key={i} delay={i * 100}>
                        <div className="relative group rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] bg-zinc-800 shadow-lg">
                            <img 
                                src={item.img} 
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
                                <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2">{item.cat}</span>
                                <h3 className="text-2xl font-bold text-white font-display">{item.title}</h3>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 px-4 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
             <FadeIn className="text-center mb-16">
                 <h2 className="font-display text-3xl font-bold text-zinc-400">Trusted by Industry Leaders</h2>
             </FadeIn>
             <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12 opacity-50 hover:opacity-100 transition-opacity duration-500">
                 {clients.map((client, i) => (
                     <FadeIn key={i} delay={i * 50}>
                        <div className="text-xl md:text-3xl font-bold font-display text-zinc-600 hover:text-white transition-colors cursor-default select-none">
                            {client}
                        </div>
                     </FadeIn>
                 ))}
             </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
         <div className="absolute inset-0 bg-zinc-900 z-0">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-zinc-950 to-zinc-950 opacity-100"></div>
         </div>
         <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
             <FadeIn>
                <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight">Let's create something <span className="text-yellow-500">impactful.</span></h2>
                <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">Ready to elevate your brand visibility? Contact our team today.</p>
                <Link to="/contact">
                    <Button size="lg" className="h-16 px-12 text-lg rounded-full bg-yellow-500 text-black hover:bg-yellow-400 font-bold border-none shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:shadow-[0_0_60px_rgba(234,179,8,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                        Get in Touch
                    </Button>
                </Link>
             </FadeIn>
         </div>
      </section>
    </div>
  );
}