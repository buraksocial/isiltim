import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Music, Stars, Sun, Gift, Gamepad2 } from 'lucide-react';
import SparkleCursor from './components/SparkleCursor';
import FloatingFlowers from './components/FloatingFlowers';
import FallingPetals from './components/FallingPetals';
import InteractiveText from './components/InteractiveText';
import { RoseIcon } from './components/Icons';
import { Memory } from './types';

// Data - Updated for Valorant Theme
const memories: Memory[] = [
  { id: 1, imageUrl: "images/WhatsApp%20Image%202026-01-09%20at%2022.49.06.jpeg", caption: "Beraber saklambaçlar oynadık..." },
  { id: 2, imageUrl: "images/WhatsApp%20Image%202026-01-09%20at%2022.49.07%20(2).jpeg", caption: "Kimsenin bilmediği yerlerde..." },
  { id: 3, imageUrl: "images/WhatsApp%20Image%202026-01-09%20at%2022.49.09%20(2).jpeg", caption: "Yayınlarımı izledin... Çok kötü oynamama rağmen..." },
  { id: 4, imageUrl: "images/WhatsApp%20Image%202026-01-09%20at%2022.49.10.jpeg", caption: "Mermiler kafama değil, kalbime geldi 💘" },
];

const reasons = [
  "Bana kattığın huzur için...",
  "Gözlerindeki o eşsiz ışıltı için...",
  "En zor anımda bile gülümsetebildiğin için...",
  "Sadece 'sen' olduğun için..."
];

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const handleSurpriseClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div ref={scrollRef} className="relative min-h-screen bg-gradient-to-b from-romantic-50 via-romantic-100 to-romantic-200 text-gray-800 font-sans selection:bg-romantic-200 selection:text-romantic-500 overflow-hidden">
      <SparkleCursor />
      <FallingPetals />

      {/* Background Music Simulation UI */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`p-4 rounded-full shadow-lg transition-all duration-500 flex items-center gap-2 ${isPlaying ? 'bg-romantic-400 text-white rotate-180' : 'bg-white text-romantic-400'}`}
        >
          <Music className={`w-6 h-6 ${isPlaying ? 'animate-pulse' : ''}`} />
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <FloatingFlowers />

        <motion.div
          style={{ opacity, scale }}
          className="z-10 text-center px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
            className="mb-6 relative inline-block"
          >
            <RoseIcon className="w-24 h-24 text-romantic-400 mx-auto animate-float" />
            <motion.div
              animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-2"
            >
              <Stars className="w-8 h-8 text-gold-400" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-6xl md:text-8xl font-script text-romantic-500 mb-4 drop-shadow-sm"
          >
            <InteractiveText text="Işıltım" />
          </motion.h1>

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-2xl md:text-3xl font-serif text-romantic-400 italic"
          >
            Benim Güzel Işılsu'm
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-12 animate-bounce text-romantic-400"
          >
            <p className="text-sm tracking-widest uppercase">Aşağı Kaydır</p>
            <span className="block text-2xl mt-2">↓</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Love Note Section */}
      <section className="relative py-24 px-4 max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-white"
        >
          <Heart className="w-12 h-12 text-romantic-300 mx-auto mb-6" fill="currentColor" />
          <h3 className="text-3xl font-serif text-center text-romantic-500 mb-8">
            <InteractiveText text="Sana Olan Hislerim" />
          </h3>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-serif text-center italic">
            "Hayatın karmaşası içinde seninle tanışmak, karanlık bir odada bir mum yakmak gibiydi.
            Adın gibi ışıl ışıl, kalbin gibi sıcacık bir dünya kurdun bana.
            Her gülüşünde yeniden doğuyorum, her bakışında kendimi buluyorum.
            Sen benim sadece aşık olduğum kadın değil, ruhumun en güzel yansıması, Işıltım'sın."
          </p>
        </motion.div>
      </section>

      {/* Reasons Grid */}
      <section className="py-20 px-4 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-serif text-center text-romantic-500 mb-12">
            <InteractiveText text="Neden Sen?" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10, backgroundColor: '#fff0f3' }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-romantic-200 transition-colors text-center flex flex-col items-center justify-center min-h-[200px]"
              >
                <Sun className="w-8 h-8 text-gold-400 mb-4" />
                <p className="font-serif text-lg text-gray-700">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valorant Photo Gallery */}
      <section className="py-20 bg-white/50 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-16 text-romantic-500">
            <Gamepad2 className="w-8 h-8 md:w-10 md:h-10" />
            <h3 className="text-3xl md:text-4xl font-script text-center">
              <InteractiveText text="Valorant Anılarımız" />
            </h3>
            <Gamepad2 className="w-8 h-8 md:w-10 md:h-10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`group relative bg-white p-3 rounded-xl shadow-xl hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="overflow-hidden rounded-lg border-2 border-romantic-100">
                  {/* Aspect Video for ScreenShots */}
                  <div className="aspect-video w-full bg-gray-200 relative">
                    <img
                      src={memory.imageUrl}
                      alt={memory.caption}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <span className="text-white font-bold tracking-wide">Valorant ♡ Işıltım</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="font-script text-2xl text-romantic-400">{memory.caption}</p>
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-romantic-100 rounded-full flex items-center justify-center shadow-md z-20">
                  <Heart className="w-5 h-5 text-romantic-500" fill="currentColor" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Surprise Section */}
      <section className="py-32 flex flex-col items-center justify-center text-center px-4 relative z-10">
        <h3 className="text-3xl font-serif text-romantic-500 mb-8">
          <InteractiveText text="Son Bir Şey..." />
        </h3>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSurpriseClick}
          className="bg-gradient-to-r from-romantic-300 to-romantic-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl flex items-center gap-3 hover:shadow-2xl transition-shadow"
        >
          <Gift className="w-6 h-6" />
          Sürprizi Patlat
        </motion.button>

        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: 0,
                  scale: 1,
                  x: (Math.random() - 0.5) * 600,
                  y: (Math.random() - 0.5) * 600,
                  rotate: Math.random() * 360
                }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute"
              >
                <RoseIcon className={`w-${Math.random() > 0.5 ? '8' : '12'} h-${Math.random() > 0.5 ? '8' : '12'} text-romantic-${Math.random() > 0.5 ? '300' : '400'}`} />
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-romantic-500 text-romantic-100 py-8 text-center relative z-10">
        <p className="font-serif">Seni Çok Seviyorum Işıltım</p>
        <div className="mt-2 flex justify-center gap-2">
          <Heart className="w-4 h-4" fill="currentColor" />
          <Heart className="w-4 h-4" fill="currentColor" />
          <Heart className="w-4 h-4" fill="currentColor" />
        </div>
      </footer>
    </div>
  );
};

export default App;