import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, ExternalLink } from 'lucide-react';
import flowersAndYou from '../../img/songs/flowersAndYou.jpeg';
import gumnaam from '../../img/songs/gumnaam.jpeg';

const songs = [
  {
    title: 'Flowers & You',
    artists: 'ABBY BANGAR × ZiKKR',
    role: 'Produced by ZiKKR',
    genre: 'Punjabi Pop',
    cover: flowersAndYou,
    bg: 'from-rose-950 via-[#1a0d12] to-navy',
    accent: '#d4a96a',
    platforms: {
      spotify: 'https://open.spotify.com/artist/3cmuxy1d4dLjlqjR1WlPs7',
      youtube: null,
    }
  },
  {
    title: 'Gumnaam',
    artists: 'HARVY SIDHU × ZiKKR',
    role: 'Produced by ZiKKR',
    genre: 'Punjabi',
    cover: gumnaam,
    bg: 'from-sky-950 via-[#0d1626] to-navy',
    accent: '#38bdf8',
    platforms: {
      spotify: 'https://open.spotify.com/artist/3cmuxy1d4dLjlqjR1WlPs7',
      youtube: null,
    }
  },
];

const MusicPage = () => {
  return (
    <div className="min-h-screen bg-navy text-white">

      {/* Top Bar */}
      <div className="px-6 md:px-12 py-5 flex justify-between items-center border-b border-lightest-navy sticky top-0 bg-navy/95 backdrop-blur-md z-50">
        <Link to="/" className="flex items-center gap-2 text-slate hover:text-teal transition-colors text-sm font-mono uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <a
          href="https://open.spotify.com/artist/3cmuxy1d4dLjlqjR1WlPs7"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-slate hover:text-teal transition-colors text-sm font-mono uppercase tracking-widest"
        >
          <Music size={14} /> ZiKKR on Spotify
        </a>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="px-6 md:px-16 lg:px-24 pt-20 pb-12 max-w-[1600px] mx-auto"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-teal mb-4">/ Discography</p>
        <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-lightest-slate leading-none mb-4">
          ZiKKR
        </h1>
        <p className="text-slate text-lg md:text-xl max-w-xl font-light">
          Punjabi music production. Every track tells a story — crafted with code by night, and beats by soul.
        </p>
      </motion.div>

      <div className="border-t border-lightest-navy" />

      {/* Songs */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 py-16 flex flex-col gap-0">
        {songs.map((song, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className={`group relative flex flex-col md:flex-row gap-0 border-b border-lightest-navy overflow-hidden`}
          >
            {/* Cover Art */}
            <div className="relative md:w-[380px] lg:w-[480px] flex-shrink-0 overflow-hidden">
              <motion.img
                src={song.cover}
                alt={song.title}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/80 hidden md:block" />
            </div>

            {/* Info */}
            <div className={`flex-1 flex flex-col justify-center px-8 md:px-12 py-10 bg-gradient-to-br ${song.bg}`}>
              <span className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: song.accent }}>
                0{i + 1} / {String(songs.length).padStart(2, '0')}
              </span>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-white mb-3 leading-none">
                {song.title}
              </h2>

              <p className="text-lg md:text-xl font-mono mb-2 text-slate">{song.artists}</p>
              <p className="text-sm font-light text-slate/70 mb-1 uppercase tracking-widest">{song.role}</p>
              <p className="text-sm font-mono text-slate/50 uppercase tracking-widest mb-8">{song.genre}</p>

              {/* Platform buttons */}
              <div className="flex flex-wrap gap-4">
                {song.platforms.spotify && (
                  <a
                    href={song.platforms.spotify}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border font-mono text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-300 hover:-translate-y-1"
                    style={{ borderColor: song.accent, color: song.accent }}
                  >
                    <SpotifyIcon size={14} /> Listen on Spotify
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer brand */}
      <div className="border-t border-lightest-navy py-12 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-slate/50">
          © {new Date().getFullYear()} ZiKKR — All Rights Reserved
        </p>
      </div>

    </div>
  );
};

const SpotifyIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

export default MusicPage;
