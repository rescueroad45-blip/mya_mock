import React from 'react';
import { Target, Lightbulb, History } from 'lucide-react';
import { FadeIn } from '../components/ui';

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
       {/* Hero / Story */}
       <section className="px-4 py-20 max-w-7xl mx-auto">
           <div className="grid md:grid-cols-2 gap-16 items-center">
               <FadeIn className="relative">
                   <img src="https://picsum.photos/id/338/600/800" alt="Production Team" className="rounded-2xl shadow-2xl w-full max-w-md mx-auto md:mx-0 object-cover aspect-[3/4]" />
                   <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-yellow-500/10 -z-10 rounded-2xl hidden md:block border border-yellow-500/20 pattern-dots"></div>
               </FadeIn>
               <div className="space-y-10">
                   <FadeIn delay={100} className="space-y-6">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-yellow-500 uppercase flex items-center gap-2">
                             <History className="w-4 h-4" /> Our History
                        </h2>
                        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">A Decade of <br/>Excellence.</h1>
                        <p className="text-zinc-400 text-lg leading-relaxed font-light">
                            Founded in 2010, <strong>MYCUT FILM Co., Ltd.</strong> has established itself as one of Cambodia's premier media and advertising service providers. We are a "Fully Production House" operating with a qualified team and over a decade of hands-on experience in the industry.
                        </p>
                   </FadeIn>
                   
                   <div className="grid gap-6">
                        <FadeIn delay={200} className="bg-zinc-900/50 p-8 rounded-2xl border-l-4 border-yellow-500">
                             <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3 font-display"><Target className="w-6 h-6 text-yellow-500" /> Our Mission</h3>
                             <p className="text-zinc-400 leading-relaxed">To offer creative solutions in media and advertising-related products to clients across diverse market sectors, ensuring growth and visibility.</p>
                        </FadeIn>
                        <FadeIn delay={300} className="bg-zinc-900/50 p-8 rounded-2xl border-l-4 border-zinc-500">
                             <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3 font-display"><Lightbulb className="w-6 h-6 text-white" /> Our Vision</h3>
                             <p className="text-zinc-400 leading-relaxed">To become the leading media and advertising organization by delivering qualified services ranging from media production to professional live streaming, creating positive results and impacts for our diversified clients.</p>
                        </FadeIn>
                   </div>
               </div>
           </div>
       </section>

       {/* Stats */}
       <section className="py-24 bg-zinc-900 mt-12 border-y border-zinc-800">
           <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <FadeIn delay={0}>
                    <div className="text-5xl md:text-6xl font-bold text-yellow-500 mb-3 font-display">2010</div>
                    <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Established</div>
                </FadeIn>
                <FadeIn delay={100}>
                    <div className="text-5xl md:text-6xl font-bold text-white mb-3 font-display">10+</div>
                    <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Years Experience</div>
                </FadeIn>
                <FadeIn delay={200}>
                    <div className="text-5xl md:text-6xl font-bold text-yellow-500 mb-3 font-display">500+</div>
                    <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Events Managed</div>
                </FadeIn>
                <FadeIn delay={300}>
                    <div className="text-5xl md:text-6xl font-bold text-white mb-3 font-display">50+</div>
                    <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Corporate Clients</div>
                </FadeIn>
           </div>
       </section>

       {/* Team Image */}
       <section className="py-24 max-w-7xl mx-auto px-4">
           <FadeIn>
               <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">The Team Behind The Magic</h2>
               <div className="rounded-3xl overflow-hidden aspect-[21/9] relative group shadow-2xl">
                    <img src="https://picsum.photos/id/433/1600/900" alt="Team at Work" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
               </div>
           </FadeIn>
       </section>
    </div>
  );
}