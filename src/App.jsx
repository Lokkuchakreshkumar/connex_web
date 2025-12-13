
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Lock, Monitor, ArrowRight, Command, Terminal } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { FaLinux } from "react-icons/fa";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isStruck, setIsStruck] = useState(false);

  // Callback when lightning strikes
  const handleStrike = useCallback(() => {
    console.log('Lightning strike! Setting isStruck to true');
    setIsStruck(true);
    setTimeout(() => {
      console.log('5 seconds passed, setting isStruck to false');
      setIsStruck(false);
    }, 5000); // Keep text red for 5 seconds
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white font-sans selection:bg-red-500/30 flex flex-col items-center relative overflow-hidden">


      {/* Subtle Background Gradients - Reverted to Red/Orange */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      {/* Realistic Lightning Canvas Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        <RealisticLightning onStrike={handleStrike} />
      </div>

      <div className="fixed top-6 right-6 z-50">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D91223] animate-pulse"></div>
          <span className="leading-none">v1.0.0</span>
        </div>
      </div>

      <main className="relative z-10 w-full max-w-3xl px-6 pt-32 pb-20 flex flex-col items-center text-center">




        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 relative"
        >
          <div className="relative inline-block">
            <motion.h1
              className={cn(
                "text-5xl md:text-7xl font-bold tracking-tight mb-6 transition-all duration-800 ease-in-out",
                isStruck ? "text-[#D91223] drop-shadow-[0_0_35px_rgba(217,18,35,0.8)]" : "text-white drop-shadow-sm"
              )}
            >
              Connex
            </motion.h1>
          </div>

          <p className="text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
            The ultimate automation tool for captive portals. <br className="hidden md:block" />
            Connect instantly without the interruption.
          </p>
        </motion.div>

        {/* Command Palette Style Downloads */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-xl bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/50"
        >
          {/* List Items */}
          <div className="p-2 flex flex-col gap-1">
            <DownloadItem
              href="https://github.com/Lokkuchakreshkumar/connex/releases/download/win/connex-win.exe"
              icon={<WindowsIcon />}
              label="Download for Windows"
              subLabel="x64 / ARM64"
              isActive={activeIndex === 0}
              onMouseEnter={() => setActiveIndex(0)}
              onMouseLeave={() => setActiveIndex(null)}
            />
            <DownloadItem
              href="https://github.com/Lokkuchakreshkumar/connex/releases/download/macos/connex-macos"
              icon={<AppleIcon />}
              label="Download for macOS"
              subLabel="Universal"
              isActive={activeIndex === 1}
              onMouseEnter={() => setActiveIndex(1)}
              onMouseLeave={() => setActiveIndex(null)}
            />
            <DownloadItem
              href="https://github.com/Lokkuchakreshkumar/connex/releases/download/linux/connex-linux"
              icon={<FaLinux />}
              label="Download for Linux"
              subLabel=".deb / .rpm"
              isActive={activeIndex === 2}
              onMouseEnter={() => setActiveIndex(2)}
              onMouseLeave={() => setActiveIndex(null)}
            />
          </div>

          {/* Footer of Palette */}
          <div className="px-4 py-2 bg-white/5 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-medium uppercase tracking-wider">
            <span>Select to download</span>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1"><Command className="w-3 h-3" /> Open</span>
              <span className="flex items-center gap-1"><ArrowRight className="w-3 h-3" /> Select</span>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full">
          <Feature
            icon={<Zap className="w-5 h-5 text-[#D91223]" />}
            title="Auto-Login"
            desc="Detects captive portals and logs you in instantly."
            delay={0.4}
          />
          <Feature
            icon={<Lock className="w-5 h-5 text-[#D91223]" />}
            title="Secure Vault"
            desc="Credentials are encrypted and stored locally."
            delay={0.5}
          />
          <Feature
            icon={<Monitor className="w-5 h-5 text-[#D91223]" />}
            title="Cross Platform"
            desc="Works seamlessly on Windows, macOS, and Linux."
            delay={0.6}
          />
        </div>

      </main>
    </div>
  );
}

// --- Realistic Lightning Component ---
function RealisticLightning({ onStrike }) {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (canvasRef.current) {
        const { innerWidth, innerHeight } = window;
        setDimensions({ width: innerWidth, height: innerHeight });
        canvasRef.current.width = innerWidth;
        canvasRef.current.height = innerHeight;
      }
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lightningBolts = [];
    let lastStrikeTime = 0;
    const STRIKE_INTERVAL = 10000; // Strike every 10 seconds (5s active + 5s wait)

    // Lightning Bolt Class
    class Bolt {
      constructor(x, y, targetX, targetY) {
        this.segments = [];
        this.opacity = 1;
        this.life = 0;
        this.maxLife = 15 + Math.random() * 10; // Slightly faster strike

        this.generateSegments(x, y, targetX, targetY, 200);
      }

      generateSegments(x1, y1, x2, y2, displace) {
        if (displace < 2) {
          this.segments.push({ x1, y1, x2, y2 });
          return;
        }

        let midX = (x1 + x2) / 2;
        let midY = (y1 + y2) / 2;

        // Offset perpendicular to the line
        midX += (Math.random() - 0.5) * displace;
        midY += (Math.random() - 0.5) * displace;

        this.generateSegments(x1, y1, midX, midY, displace / 2);
        this.generateSegments(midX, midY, x2, y2, displace / 2);
      }

      draw(ctx) {
        ctx.beginPath();
        for (let s of this.segments) {
          ctx.moveTo(s.x1, s.y1);
          ctx.lineTo(s.x2, s.y2);
        }

        // Main Bolt Color: #D91223 (RGB: 217, 18, 35)
        ctx.strokeStyle = `rgba(217, 18, 35, ${this.opacity})`;
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 30;
        ctx.shadowColor = "rgba(217, 18, 35, 0.9)";
        ctx.stroke();

        // Inner Core (White/Pinkish for intensity)
        ctx.strokeStyle = `rgba(255, 200, 200, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 5;
        ctx.stroke();
      }

      update() {
        this.life++;
        // Rapid flicker
        this.opacity = Math.random() > 0.4 ? 1 : 0.2;

        // Fade out at the end
        if (this.life > this.maxLife - 5) {
          this.opacity = (this.maxLife - this.life) / 5;
        }

        return this.life < this.maxLife;
      }
    }

    const loop = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Randomly spawn lightning
      if (timestamp - lastStrikeTime > STRIKE_INTERVAL) {
        // Target the "Connex" header area
        const targetX = canvas.width / 2;
        const targetY = 220;

        // Start from top, random X
        const startX = targetX + (Math.random() - 0.5) * 600;

        // Spawn multiple branches for "really good" effect
        lightningBolts.push(new Bolt(startX, -50, targetX, targetY));
        if (Math.random() > 0.5) {
          lightningBolts.push(new Bolt(startX, -50, targetX + (Math.random() - 0.5) * 100, targetY + 50));
        }

        lastStrikeTime = timestamp;

        // Trigger the text effect
        onStrike();
      }

      // Update and draw bolts
      lightningBolts = lightningBolts.filter(bolt => {
        const alive = bolt.update();
        if (alive) bolt.draw(ctx);
        return alive;
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [onStrike]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

function DownloadItem({ icon, label, subLabel, isActive, href, onMouseEnter, onMouseLeave }) {
  return (
    <a
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "group flex items-center gap-3 w-full px-3 py-3 rounded-lg text-left transition-all duration-200 outline-none",
        isActive ? "bg-red-500/10" : "hover:bg-white/5"
      )}
    >
      <div className={cn(
        "w-8 h-8 flex items-center justify-center rounded-md transition-colors",
        isActive ? "bg-red-500 text-white" : "bg-white/10 text-gray-400 group-hover:text-white"
      )}>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className={cn("text-sm font-medium", isActive ? "text-red-100" : "text-gray-200")}>{label}</span>
        <span className="text-xs text-gray-500">{subLabel}</span>
      </div>
      {isActive && (
        <motion.div
          layoutId="active-indicator"
          className="ml-auto text-red-500"
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      )}
    </a>
  );
}

function Feature({ icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-left"
    >
      <div className="mb-4 p-2 bg-white/5 rounded-lg w-fit">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

// Normalized Icons (24x24 ViewBox)
const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 3.44L10.98 2v9.39h-11V3.44zm12.06-1.6L24 0v11.39h-11.94V1.84zM0 12.55h10.98v9.28L0 20.44v-7.89zm12.06 0H24V24l-11.94-1.66V12.55z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.55-.67.92-1.56.81-2.43-.8.03-1.72.53-2.27 1.18-.49.57-.92 1.53-.81 2.35.88.07 1.78-.42 2.27-1.1" />
  </svg>
);

const LinuxIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 20.52c4.13 0 5.16-1.67 5.16-1.67.22-1.55.05-2.52.05-2.52 1.55-.42 1.6-2.22 1.6-2.22-.05-2.92-2.1-4.65-2.1-4.65-.57-3.55-2.42-7.4-4.7-7.4-2.28 0-4.13 3.85-4.7 7.4 0 0-2.05 1.73-2.1 4.65 0 0 .05 1.8 1.6 2.22 0 0-.17.97.05 2.52 0 0 1.03 1.67 5.16 1.67zM7.5 13.5c0-1.65.9-3 2-3s2 1.35 2 3c0 1.65-.9 3-2 3s-2-1.35-2-3zm7 0c0-1.65.9-3 2-3s2 1.35 2 3c0 1.65-.9 3-2 3s-2-1.35-2-3z" />
  </svg>
);

export default App;

