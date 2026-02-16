import React, { useRef, useState, useEffect } from 'react';
import { Camera, Video, Mic2, HardDrive, Tv, Presentation, Globe, Star, CheckCircle2, ArrowRight, Zap, Users, Radio } from 'lucide-react';
import { Card, CardContent, Button, FadeIn } from '../components/ui';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-24 min-h-screen bg-zinc-950">
      {/* Hero with Pattern */}
      <section className="relative px-4 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/20 via-zinc-950 to-zinc-950 pointer-events-none"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
            <FadeIn>
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-500 text-sm font-bold tracking-widest uppercase">
                    Comprehensive Media Solutions
                </div>
                <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight leading-tight">
                    Our Expertise. <br/> <span className="text-zinc-600">Your Vision.</span>
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
                    We combine technical precision with creative storytelling to deliver end-to-end production and management services.
                </p>
            </FadeIn>
        </div>
      </section>

      {/* Main Service A: Production */}
      <section className="px-4 py-24 max-w-7xl mx-auto border-t border-zinc-900">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div className="order-2 lg:order-1">
                 <FadeIn>
                    <div className="flex gap-4 mb-8">
                        <div className="p-3 bg-zinc-900 rounded-xl text-yellow-500 border border-zinc-800"><Video className="w-6 h-6" /></div>
                        <div className="p-3 bg-zinc-900 rounded-xl text-white border border-zinc-800"><Camera className="w-6 h-6" /></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Production Services <br/><span className="text-zinc-600">Video & Photo</span></h2>
                    <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
                        From concept to final cut, we deliver broadcast-quality content. Our fully equipped production house handles everything from TV commercials to corporate documentaries.
                    </p>
                    <div className="space-y-4">
                        {[
                            { title: "Video Production", desc: "TV Commercials, Documentaries, Corporate Profiles" },
                            { title: "Photography", desc: "Events, Professional Portraits, Product Shoots" },
                            { title: "Studio Facilities", desc: "Green Screen, Professional Lighting, High-end Audio" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-yellow-500/30 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white text-base">{item.title}</h4>
                                    <p className="text-sm text-zinc-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 </FadeIn>
             </div>
             <div className="order-1 lg:order-2">
                 <FadeIn delay={200} className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-zinc-800">
                        <img src="https://picsum.photos/id/1060/1200/900" alt="Production" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center gap-2 text-white/90 text-sm font-medium backdrop-blur-md bg-black/50 p-3 rounded-xl w-fit border border-white/10">
                                <Zap className="w-4 h-4 text-yellow-500" /> 4K Cinema Line Cameras
                            </div>
                        </div>
                    </div>
                 </FadeIn>
             </div>
          </div>
      </section>

      {/* Main Service B: Event Planner */}
      <section className="px-4 py-24 max-w-7xl mx-auto border-t border-zinc-900 bg-zinc-900/20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div className="order-1">
                 <FadeIn delay={200} className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-yellow-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-zinc-800">
                        <img src="https://picsum.photos/id/158/1200/900" alt="Event Planning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                         <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center gap-2 text-white/90 text-sm font-medium backdrop-blur-md bg-black/50 p-3 rounded-xl w-fit border border-white/10">
                                <Users className="w-4 h-4 text-yellow-500" /> Full Scale Management
                            </div>
                        </div>
                    </div>
                 </FadeIn>
             </div>
             <div className="order-2">
                 <FadeIn>
                    <div className="flex gap-4 mb-8">
                         <div className="p-3 bg-zinc-900 rounded-xl text-yellow-500 border border-zinc-800"><Mic2 className="w-6 h-6" /></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Event Planner <br/><span className="text-zinc-600">& Management</span></h2>
                    <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
                        We don't just organize events; we curate experiences. From intimate product launches to large-scale international forums, we handle the logistics so you can focus on the moment.
                    </p>
                    <div className="space-y-4">
                        {[
                            { title: "Corporate Events", desc: "Forums, Award Nights, Galas" },
                            { title: "Technical Logistics", desc: "Stage, Lighting, Sound System Setup" },
                            { title: "Specialized Programs", desc: "Concerts, CSR Activities, Exhibitions" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-yellow-500/30 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white text-base">{item.title}</h4>
                                    <p className="text-sm text-zinc-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 </FadeIn>
             </div>
          </div>
      </section>

      {/* Main Service C: Live Stream */}
      <section className="px-4 py-24 max-w-7xl mx-auto border-t border-zinc-900">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div className="order-2 lg:order-1">
                 <FadeIn>
                    <div className="flex gap-4 mb-8">
                         <div className="p-3 bg-zinc-900 rounded-xl text-yellow-500 border border-zinc-800"><Tv className="w-6 h-6" /></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Live Stream <br/><span className="text-zinc-600">& Broadcast</span></h2>
                    <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
                        Expand your reach beyond the venue. We provide professional multi-camera live streaming services compatible with all major social platforms.
                    </p>
                    <div className="space-y-4">
                        {[
                            { title: "Cross-Platform Streaming", desc: "Facebook Live, YouTube, Zoom simultaneously" },
                            { title: "Professional Mixing", desc: "Multi-cam switching, Overlay Graphics, Lower Thirds" },
                            { title: "Hybrid Events", desc: "Seamless integration of virtual and physical audiences" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-yellow-500/30 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white text-base">{item.title}</h4>
                                    <p className="text-sm text-zinc-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 </FadeIn>
             </div>
             <div className="order-1 lg:order-2">
                 <FadeIn delay={200} className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-zinc-800">
                        <img src="https://picsum.photos/id/1/1200/900" alt="Live Stream" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center gap-2 text-white/90 text-sm font-medium backdrop-blur-md bg-black/50 p-3 rounded-xl w-fit border border-white/10">
                                <Radio className="w-4 h-4 text-yellow-500" /> Real-time Broadcasting
                            </div>
                        </div>
                    </div>
                 </FadeIn>
             </div>
          </div>
      </section>

      {/* Secondary Services Grid */}
      <section className="py-24 bg-zinc-900 border-t border-zinc-800">
         <div className="max-w-7xl mx-auto px-4">
            <FadeIn className="mb-16 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-display font-bold mb-6 text-white">Strategic Growth Services</h2>
                <p className="text-zinc-400 text-lg">Beyond production, we offer the strategic tools to ensure your content reaches the right audience and drives results.</p>
            </FadeIn>
            
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { 
                        icon: Presentation, 
                        title: "Public Relations (PR)", 
                        desc: "Managing your public image through strategic media relations, press release distribution, and press conference coordination.",
                        features: ["Media Relations", "Press Conferences", "Crisis Management"]
                    },
                    { 
                        icon: Star, 
                        title: "Media Buying", 
                        desc: "Optimizing your advertising budget by securing the best placements across TV, radio, and digital platforms.",
                        features: ["Strategic Placement", "Budget Optimization", "Cross-channel Campaigns"]
                    },
                    { 
                        icon: Globe, 
                        title: "Digital Marketing", 
                        desc: "Data-driven digital strategies to complement your video content, ensuring maximum engagement and conversion.",
                        features: ["Social Media Management", "Content Strategy", "Performance Analytics"]
                    }
                ].map((service, i) => (
                    <FadeIn key={i} delay={i * 100} className="h-full">
                        <Card className="bg-zinc-950 border-zinc-800 h-full hover:border-yellow-500/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-900/10">
                            <CardContent className="p-8 flex flex-col h-full">
                                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300 border border-zinc-800 group-hover:border-yellow-500">
                                    <service.icon className="w-7 h-7 text-yellow-500 group-hover:text-black transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-display text-white">{service.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                                    {service.desc}
                                </p>
                                <ul className="space-y-3 pt-6 border-t border-zinc-900">
                                    {service.features.map((f, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-zinc-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </FadeIn>
                ))}
            </div>
            
            <FadeIn delay={400} className="mt-20 text-center">
                <div className="bg-yellow-500 rounded-3xl p-12 relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                     <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">Ready to elevate your brand?</h3>
                        <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto font-medium">Contact us today for a free consultation and quote for your next project.</p>
                        <Link to="/contact">
                            <Button size="lg" className="bg-black text-white hover:bg-zinc-800 font-bold px-12 h-14 rounded-full border-none shadow-xl hover:scale-105 transition-transform">
                                Get a Quote
                            </Button>
                        </Link>
                     </div>
                </div>
            </FadeIn>
         </div>
      </section>
    </div>
  );
}