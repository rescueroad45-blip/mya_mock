import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { artists } from '../data/artists';
import { ArrowLeft, Facebook, Instagram, Youtube, Twitter, Video } from 'lucide-react';

const ArtistDetail = () => {
  const { id } = useParams();
  const artist = artists.find(a => a.id === id);

  if (!artist) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Artist Not Found</h2>
          <Link to="/artists" className="text-yellow-500 hover:underline">Back to Artists</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <img 
          src={artist.coverImage} 
          alt={artist.name} 
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/artists" className="inline-flex items-center gap-2 text-zinc-400 hover:text-yellow-500 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Artists
            </Link>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-4 uppercase tracking-tight text-white drop-shadow-lg">
              {artist.name}
            </h1>
            <p className="text-xl md:text-2xl text-yellow-500 font-medium uppercase tracking-widest mb-8">
              {artist.role}
            </p>
            
            <div className="flex gap-4">
              {artist.socials.facebook && (
                <a href={artist.socials.facebook} className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {artist.socials.instagram && (
                <a href={artist.socials.instagram} className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {artist.socials.youtube && (
                <a href={artist.socials.youtube} className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
              )}
              {artist.socials.tiktok && (
                <a href={artist.socials.tiktok} className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300">
                  <Video className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid md:grid-cols-3 gap-16">
        {/* Bio */}
        <div className="md:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-yellow-500 uppercase">Biography</h3>
            <p className="text-zinc-400 leading-relaxed text-lg">
              {artist.bio}
            </p>
            
            <div className="mt-12 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
              <h4 className="text-lg font-bold mb-4 text-white">Contact for Booking</h4>
              <p className="text-zinc-400 mb-2">For inquiries and collaborations:</p>
              <a href="mailto:booking@mycutfilm.com" className="text-yellow-500 hover:underline block mb-1">booking@mycutfilm.com</a>
              <a href="tel:+85512345678" className="text-white hover:text-yellow-500 block">+855 12 345 678</a>
            </div>
          </motion.div>
        </div>

        {/* Works / Filmography */}
        <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold mb-8 text-white uppercase flex items-center gap-3">
              <span className="w-8 h-1 bg-yellow-500 block"></span>
              Selected Works
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {artist.works.map((work, idx) => (
                <div key={idx} className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-colors duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">{work.title}</h4>
                      <span className="text-xs font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded">{work.year}</span>
                    </div>
                    <p className="text-zinc-500 text-sm uppercase tracking-wide">{work.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
