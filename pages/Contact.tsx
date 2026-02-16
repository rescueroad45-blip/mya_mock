import React, { useState } from 'react';
import { Button, Input, Textarea, Card, CardContent, FadeIn } from '../components/ui';
import { Mail, Phone, MapPin, Calendar, Clock, Video } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-background relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 right-0 w-full h-screen bg-gradient-to-bl from-yellow-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-16 relative z-10">
        {/* Info Side */}
        <div className="space-y-12">
            <FadeIn>
                <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Let's Discuss <br/>Your Project.</h1>
                <p className="text-zinc-400 text-xl font-light leading-relaxed">
                    Ready to bring your vision to life? Contact MYCUT FILM Co., Ltd. today. We strive for the best results.
                </p>
            </FadeIn>

            <div className="space-y-8">
                <FadeIn delay={100} className="flex items-start gap-5">
                    <div className="p-4 bg-zinc-900 rounded-2xl text-yellow-500 shadow-lg border border-zinc-800"><Phone className="w-6 h-6" /></div>
                    <div>
                        <h3 className="font-bold text-white text-lg mb-1 font-display">Call Us</h3>
                        <p className="text-zinc-400 text-lg">012 871 809 / 070 26 36 36</p>
                    </div>
                </FadeIn>
                <FadeIn delay={200} className="flex items-start gap-5">
                    <div className="p-4 bg-zinc-900 rounded-2xl text-yellow-500 shadow-lg border border-zinc-800"><Mail className="w-6 h-6" /></div>
                    <div>
                        <h3 className="font-bold text-white text-lg mb-1 font-display">Email Us</h3>
                        <p className="text-zinc-400 text-lg">mycutfilm.info@gmail.com</p>
                    </div>
                </FadeIn>
                <FadeIn delay={300} className="flex items-start gap-5">
                    <div className="p-4 bg-zinc-900 rounded-2xl text-yellow-500 shadow-lg border border-zinc-800"><MapPin className="w-6 h-6" /></div>
                    <div>
                        <h3 className="font-bold text-white text-lg mb-1 font-display">Location</h3>
                        <p className="text-zinc-400 text-lg">Phnom Penh, Cambodia</p>
                    </div>
                </FadeIn>
            </div>

            <FadeIn delay={400}>
                <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                    <CardContent className="p-8">
                        <h3 className="font-bold mb-4 flex items-center text-xl font-display"><Video className="w-5 h-5 mr-3 text-yellow-500" /> Why Choose Us?</h3>
                        <p className="text-yellow-500 font-bold text-sm mb-3 tracking-widest uppercase">"WE strive for the best!"</p>
                        <p className="text-zinc-400 leading-relaxed">
                            With over a decade of experience, we provide fully equipped production services, ensuring high-quality results for every client.
                        </p>
                    </CardContent>
                </Card>
            </FadeIn>
        </div>

        {/* Form Side */}
        <FadeIn delay={200} className="bg-zinc-900/40 p-8 md:p-10 rounded-3xl border border-zinc-800/50 backdrop-blur-md shadow-2xl">
            {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 min-h-[400px]">
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4 animate-bounce">
                        <Calendar className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold font-display">Inquiry Received!</h2>
                    <p className="text-zinc-400 text-lg max-w-sm">Thank you for reaching out to MYCUT FILM. We will be in touch shortly.</p>
                    <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-8 px-8 h-12">Send Another Message</Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-300 ml-1">Name</label>
                            <Input required placeholder="Your Name" className="bg-zinc-950 border-zinc-800 focus:border-yellow-500" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-300 ml-1">Company</label>
                            <Input placeholder="Company Name" className="bg-zinc-950 border-zinc-800 focus:border-yellow-500" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-zinc-300 ml-1">Email</label>
                        <Input required type="email" placeholder="email@example.com" className="bg-zinc-950 border-zinc-800 focus:border-yellow-500" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-zinc-300 ml-1">Phone</label>
                        <Input required type="tel" placeholder="012 345 678" className="bg-zinc-950 border-zinc-800 focus:border-yellow-500" />
                    </div>

                    <div className="space-y-2">
                         <label className="text-sm font-semibold text-zinc-300 ml-1">Service Interest</label>
                            <div className="relative">
                                <select className="flex h-12 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-yellow-500 transition-all appearance-none">
                                    <option>Production (Video/Photo)</option>
                                    <option>Event Management</option>
                                    <option>Live Stream</option>
                                    <option>PR Service</option>
                                    <option>Media Buying</option>
                                    <option>Digital Marketing</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">▼</div>
                            </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-zinc-300 ml-1">Message</label>
                        <Textarea required placeholder="Tell us about your project requirements..." className="bg-zinc-950 border-zinc-800 min-h-[150px] focus:border-yellow-500" />
                    </div>

                    <Button type="submit" className="w-full h-14 text-base bg-yellow-500 text-black hover:bg-yellow-400 font-bold rounded-xl shadow-lg hover:shadow-yellow-500/20 transition-all transform hover:-translate-y-1" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    </Button>
                </form>
            )}
        </FadeIn>
      </div>
    </div>
  );
}