import React, { useState } from 'react';
import { Project } from '../types';
import { Button, FadeIn } from '../components/ui';
import { X, Calendar, MapPin, Camera, ArrowRight } from 'lucide-react';

const categories = ['All', 'Corporate', 'Events', 'Product Launch', 'Government/NGO'];

// Mock Data based on MYCUT FILM Case Studies
const projects: Project[] = [
    {
        id: '1',
        title: 'Cambodia Federal Entrepreneurship Forum 2023',
        category: 'Government/NGO',
        date: '2023',
        coverImage: 'https://picsum.photos/id/20/800/600',
        images: ['https://picsum.photos/id/20/1200/800', 'https://picsum.photos/id/26/1200/800'],
        description: 'Provided full event coverage and media support for this major national forum connecting entrepreneurs across the country.'
    },
    {
        id: '2',
        title: 'Dai-ichi Life Agency Stars Award Night',
        category: 'Corporate',
        date: '2023',
        coverImage: 'https://picsum.photos/id/180/800/600',
        images: ['https://picsum.photos/id/180/1200/800', 'https://picsum.photos/id/182/1200/800'],
        description: 'Managed the "Game Changers" event coverage, capturing the excitement and prestige of the awards night.'
    },
    {
        id: '3',
        title: 'Sacombank Product Launch',
        category: 'Product Launch',
        date: '2022',
        coverImage: 'https://picsum.photos/id/250/800/600',
        images: ['https://picsum.photos/id/250/1200/800', 'https://picsum.photos/id/251/1200/800'],
        description: 'Full video and photography production for the launching event of new banking products.'
    },
    {
        id: '4',
        title: 'BioGaia Instant Photo Event',
        category: 'Events',
        date: '2023',
        coverImage: 'https://picsum.photos/id/338/800/600',
        images: ['https://picsum.photos/id/338/1200/800', 'https://picsum.photos/id/349/1200/800'],
        description: 'Managed an engaging "Instant Photo" activation to boost brand interaction during the event.'
    },
    {
        id: '5',
        title: 'Zuellig Pharma Opening',
        category: 'Corporate',
        date: '2022',
        coverImage: 'https://picsum.photos/id/400/800/600',
        images: ['https://picsum.photos/id/400/1200/800'],
        description: 'Covered the official opening ceremony of their new facility.'
    },
    {
        id: '6',
        title: 'Sanofi Seminar',
        category: 'Corporate',
        date: '2023',
        coverImage: 'https://picsum.photos/id/450/800/600',
        images: ['https://picsum.photos/id/450/1200/800'],
        description: 'Covered the "Oral Agents Fact Checking" seminar.'
    }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn className="text-center mb-16 space-y-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold">Recent Work</h1>
          <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto">
            A showcase of our collaborations with leading organizations and brands in Cambodia.
          </p>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 tracking-wide ${
                activeCategory === cat 
                  ? 'bg-yellow-500 text-black shadow-lg scale-105' 
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 100}>
                <div 
                    className="group relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 aspect-[4/3] shadow-lg hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500"
                    onClick={() => setSelectedProject(project)}
                >
                <img 
                    src={project.coverImage} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-yellow-500 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mb-2 font-display translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 leading-snug">{project.title}</h3>
                    <div className="flex items-center justify-between border-t border-zinc-700 pt-4 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                        <p className="text-zinc-400 text-xs flex items-center gap-2 font-medium"><Calendar className="w-3 h-3" /> {project.date}</p>
                        <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                </div>
                </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Project Detail Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/98 backdrop-blur-xl p-0 md:p-6 animate-in fade-in duration-300">
           
           {/* Close Button */}
           <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-[70] p-3 bg-zinc-900 hover:bg-yellow-500 text-white hover:text-black rounded-full transition-colors border border-zinc-800"
            >
                <X className="w-6 h-6" />
            </button>
            
            <div className="w-full max-w-7xl h-full md:h-[90vh] bg-zinc-950 md:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative border border-zinc-900">
                
                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar h-full">
                    {/* Header Image for Mobile / Top Section */}
                    <div className="w-full h-[40vh] md:h-[55vh] relative">
                         <img src={selectedProject.images[0]} alt="Hero" className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                         <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full max-w-4xl">
                            <span className="inline-block px-4 py-1.5 bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                                {selectedProject.category}
                            </span>
                            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">{selectedProject.title}</h2>
                            <div className="flex flex-wrap items-center gap-6 text-zinc-300 text-sm font-medium">
                                <span className="flex items-center gap-2 bg-zinc-900/50 backdrop-blur-md px-3 py-1 rounded-lg"><Calendar className="w-4 h-4 text-yellow-500" /> {selectedProject.date}</span>
                                <span className="flex items-center gap-2 bg-zinc-900/50 backdrop-blur-md px-3 py-1 rounded-lg"><MapPin className="w-4 h-4 text-yellow-500" /> Phnom Penh, Cambodia</span>
                            </div>
                         </div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-12 p-6 md:p-12">
                        {/* Sidebar Info */}
                        <div className="md:col-span-4 space-y-8 sticky top-0 h-fit">
                            <div className="prose prose-invert prose-lg">
                                <h3 className="text-2xl font-bold text-white mb-4 font-display">The Project</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {selectedProject.description}
                                </p>
                            </div>
                            
                            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                                <h4 className="text-white font-bold mb-6 flex items-center gap-3"><Camera className="w-5 h-5 text-yellow-500" /> Services Provided</h4>
                                <ul className="text-sm text-zinc-400 space-y-4">
                                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>Event Coverage</li>
                                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>Media Production</li>
                                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>Logistics Management</li>
                                </ul>
                            </div>

                            <Button className="w-full h-14 bg-white text-black hover:bg-yellow-500 hover:text-black transition-all shadow-lg text-base" onClick={() => window.location.href='/contact'}>
                                Contact Us for Similar Project
                            </Button>
                        </div>

                        {/* Gallery Grid */}
                        <div className="md:col-span-8 space-y-8">
                            <h3 className="text-2xl font-bold text-white font-display">Highlights</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {selectedProject.images.map((img, idx) => (
                                    <div key={idx} className={`rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-md ${idx === 0 ? 'sm:col-span-2 aspect-video' : 'aspect-[4/5]'}`}>
                                        <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}