import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { artists } from '../data/artists';
import { ArrowRight } from 'lucide-react';

const Artists = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white uppercase tracking-tight">
            Our <span className="text-yellow-500">Artists</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Meet the talented individuals who bring our stories to life. From visionary directors to captivating performers, our roster represents the best in the industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/artists/${artist.id}`} className="group block relative overflow-hidden rounded-2xl aspect-[3/4] bg-zinc-900">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-display font-bold text-white mb-1">{artist.name}</h3>
                  <p className="text-yellow-500 font-medium text-sm uppercase tracking-wider mb-4">{artist.role}</p>
                  
                  <div className="flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    View Profile <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
