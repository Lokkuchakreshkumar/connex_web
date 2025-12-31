import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Download, Wifi, Shield, Battery,
    ChevronDown, Smartphone, Settings,
    Zap, Lock, User, ExternalLink
} from 'lucide-react';

// Smooth stagger animation config
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
};

// Wave Link Component
const WaveLink = ({ href, text, type = 'emerald' }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex text-lg items-center gap-1 font-bold hover:opacity-80 transition-opacity whitespace-nowrap underline decoration-2 underline-offset-4 ${type === 'emerald' ? 'decoration-emerald-500' : 'decoration-rose-500'}`}
        >
            <span>
                {text.split('').map((char, index) => (
                    <span
                        key={index}
                        className="wave-char"
                        style={{
                            animation: `${type === 'emerald' ? 'wave-emerald' : 'wave-rose'} 3s infinite ease-in-out`,
                            animationDelay: `${index * 0.15}s`
                        }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </span>
            <ExternalLink className={`w-5 h-5 ${type === 'emerald' ? 'text-emerald-400' : 'text-rose-400'}`} />
        </a>
    );
};

function App() {
    const [hoveredFeature, setHoveredFeature] = useState(null);
    const [downloadUnlocked, setDownloadUnlocked] = useState(false);

    const features = [
        {
            icon: <Wifi className="w-6 h-6" />,
            title: "Auto Wi-Fi Login",
            desc: "Automatically detects captive portals and logs you in without any manual intervention.",
            color: "emerald"
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: "Background Service",
            desc: "Runs silently in the background. No need to open the app after initial setup.",
            color: "teal"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Secure Storage",
            desc: "Credentials encrypted and stored locally on your device. Your data stays private.",
            color: "cyan"
        },
        {
            icon: <Battery className="w-6 h-6" />,
            title: "Battery Optimized",
            desc: "Uses minimal resources with smart detection only when connecting to networks.",
            color: "green"
        }
    ];

    const steps = [
        { num: "01", title: "Download & Install", desc: "Get the APK and install it on your Android device" },
        { num: "02", title: "Add Credentials", desc: "Enter your captive portal username and password" },
        { num: "03", title: "Forget About It", desc: "Connex handles everything automatically from now on" }
    ];

    const faqs = [
        {
            question: "Who the hell created Connex?",
            answer: (
                <div className="space-y-2">
                    <p>
                        Connex was designed and architected by <WaveLink href="https://chakresh.vercel.app" text="Chakresh" type="emerald" />.
                    </p>
                    <p>
                        AI was used to write the Kotlin code in full, while the ideas, system architecture, network logic, feature flow, and behavior were defined separately and then implemented through AI.
                    </p>
                </div>
            ),
            type: "creator",
            icon: <User className="w-5 h-5 text-emerald-400" />
        },
        {
            question: "How to download Connex?",
            answer: (
                <div className="space-y-2">
                    <p>Connex is not available on the Play Store.</p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-gray-400">
                        <li>Join the official Telegram group.</li>
                        <li>Download the Connex APK.</li>
                        <li>Install it manually on your Android device.</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-500">If you face any issues: Visit Chakresh’s portfolio, scroll to the bottom, and submit feedback there.</p>
                </div>
            ),
            type: "normal"
        },
        {
            question: "How to use Connex?",
            answer: (
                <>
                    <p className="mb-3">Connex automates captive-portal Wi-Fi logins.</p>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-400">
                        <div className="flex items-center gap-2"><span>•</span> Automatic supported Wi-Fi detection</div>
                        <div className="flex items-center gap-2"><span>•</span> Stored credential login</div>
                        <div className="flex items-center gap-2"><span>•</span> Multiple account profiles</div>
                        <div className="flex items-center gap-2"><span>•</span> Polling-based session monitoring</div>
                        <div className="flex items-center gap-2"><span>•</span> Automatic account switching</div>
                        <div className="flex items-center gap-2"><span>•</span> Manual connect mode</div>
                    </div>
                </>
            ),
            type: "normal"
        },
        {
            question: "How to go Stealth Mode",
            answer: (
                <div className="space-y-3">
                    <p><strong>Process:</strong></p>
                    <ol className="list-decimal list-inside space-y-1 ml-2 text-gray-400">
                        <li>Add your primary account credentials.</li>
                        <li>Click Add to create multiple additional profiles.</li>
                    </ol>
                    <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                        <p className="italic text-purple-200/80">
                            When one account hits the Wi-Fi provider’s usage or session limit,
                            Connex automatically switches to the next account.
                            This continues for any number of added accounts, without user interaction.
                        </p>
                    </div>
                    <p className="font-semibold text-purple-400">That behavior is what Stealth Mode means.</p>
                </div>
            ),
            type: "stealth",
            icon: <Zap className="w-5 h-5 text-purple-400" />
        },
        {
            question: "What is Polling?",
            answer: (
                <p>
                    Polling means Connex periodically checks the network and session status.
                    It keeps asking: <span className="text-emerald-400">"Is the session still active?"</span> or <span className="text-emerald-400">"Has authentication expired?"</span>
                    If not, Connex re-authenticates automatically.
                </p>
            ),
            type: "normal"
        },
        {
            question: "What is Manual Connect Mode?",
            answer: (
                <>
                    <p className="mb-3">Manual Connect Mode lets the user trigger login manually.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">No background retries</span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">One login attempt</span>
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">Full user control</span>
                    </div>
                </>
            ),
            type: "normal"
        },
        {
            question: "Why is Connex not open-source?",
            answer: (
                <div className="space-y-3">
                    <p>
                        Connex automates captive-portal logins and account switching.
                        If the source code were public, it could be easily copied, modified, and abused at scale.
                    </p>
                    <div className="pl-4 border-l-2 border-rose-500/30">
                        <p className="text-sm text-gray-400 italic mb-1">Example:</p>
                        <p>An open-source fork could remove limits or safeguards and be mass-used to bypass Wi-Fi provider restrictions. That would quickly get Connex blocked or shut down.</p>
                    </div>
                    <p className="font-medium text-rose-200">
                        In short: Connex is closed-source to prevent misuse, protect responsible usage, and keep the app functional long-term.
                    </p>
                </div>
            ),
            type: "warning",
            icon: <Lock className="w-5 h-5 text-rose-400" />
        }
    ];

    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };



    return (
        <div className="min-h-screen w-full bg-[#0a0a0a] text-white font-sans overflow-x-hidden">

            {/* Static background gradient - optimized for mobile */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]" />
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src="/connex-icon.png" alt="Connex" className="w-10 h-10 rounded-xl" />
                        <span className="text-xl font-bold tracking-tight">Connex</span>
                    </div>

                    <a
                        href="#download"
                        className="px-5 py-2.5 rounded-full bg-emerald-500 text-sm font-semibold hover:bg-emerald-600 transition-colors"
                    >
                        Download
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative z-10 min-h-screen flex items-center pt-20">
                <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
                        >
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-sm text-emerald-400 font-medium">Android Only • v1.0.0</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
                        >
                            Never Touch{' '}
                            <span className="text-emerald-500">Captive Portals</span>{' '}
                            Again
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
                        >
                            Connex automatically detects and logs into Wi-Fi captive portals.
                            Set it up once, and never deal with login pages again.
                        </motion.p>

                        {/* CTA Button with hover effect */}
                        <motion.div variants={fadeInUp} className="mb-10">
                            <motion.a
                                href="#download"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 text-lg font-semibold hover:bg-emerald-600 transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                <span>Download APK</span>
                            </motion.a>
                        </motion.div>

                        {/* Stats with count-up effect */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex gap-8 justify-center lg:justify-start text-center lg:text-left"
                        >
                            {[
                                { value: "<10MB", label: "Lightweight" },
                                { value: "0", label: "Ads" },
                                { value: "Free", label: "Forever" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + i * 0.1 }}
                                >
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right - Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Glow effect behind phone */}
                            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent blur-3xl scale-150 -z-10" />

                            {/* Phone Frame */}
                            <div className="relative w-[280px] sm:w-[300px]">
                                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl shadow-black/50 border border-white/10">
                                    {/* Screen */}
                                    <div className="bg-black rounded-[2rem] overflow-hidden">
                                        <img
                                            src="/app-screenshot.jpg"
                                            alt="Connex App"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <span className="text-xs">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-4 h-4" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Download Section - Moved to Top */}
            <section id="download" className="relative z-10 py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 border border-emerald-500/20 p-8 sm:p-12 text-center">

                        {/* Icon */}
                        <img
                            src="/connex-icon.png"
                            alt="Connex"
                            className="w-20 h-20 mx-auto mb-6 rounded-2xl"
                        />

                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Download Connex
                        </h2>

                        <p className="text-gray-400 max-w-md mx-auto mb-8">
                            Free to use. No ads, no trackers, no subscriptions. Just seamless WiFi connectivity.
                        </p>

                        {/* Step 1: Join Telegram */}
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 mb-3">Step 1: Join our community to unlock download</p>
                            <button
                                onClick={() => {
                                    window.open('https://t.me/+PH-r_FNrnw1jYTQ1', '_blank');
                                    setDownloadUnlocked(true);
                                }}
                                className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold transition-colors ${downloadUnlocked
                                    ? 'bg-emerald-600 text-white cursor-default'
                                    : 'bg-[#0088cc] text-white hover:bg-[#0077b5] cursor-pointer'
                                    }`}
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                </svg>
                                {downloadUnlocked ? 'Joined ✓' : 'Join Telegram Group'}
                            </button>
                        </div>

                        {/* Step 2: Download Button - Only visible after joining */}
                        {downloadUnlocked ? (
                            <div>
                                <p className="text-sm text-emerald-400 mb-3">Step 2: Download unlocked!</p>
                                <a
                                    href="https://github.com/Lokkuchakreshkumar/connex_web/releases/download/v1.4.15/Connex.apk
"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    <Download className="w-5 h-5" />
                                    Download APK
                                    <span className="px-2 py-1 rounded-lg bg-black/10 text-xs">v1.0.0</span>
                                </a>
                            </div>
                        ) : (
                            <div>
                                <p className="text-sm text-gray-600 mb-3">Step 2: Download (locked)</p>
                                <div className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-800 text-gray-500 font-semibold cursor-not-allowed">
                                    <Download className="w-5 h-5" />
                                    Download APK
                                    <span className="px-2 py-1 rounded-lg bg-white/5 text-xs">🔒</span>
                                </div>
                            </div>
                        )}

                        {/* Requirements */}
                        <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                                <Smartphone className="w-4 h-4" />
                                Android 8.0+
                            </span>
                            <span>•</span>
                            <span>&lt;10MB</span>
                            <span>•</span>
                            <span>No root required</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative z-10 py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Features that make life easier
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Designed for students, professionals, and anyone tired of repetitive captive portal logins.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                onMouseEnter={() => setHoveredFeature(index)}
                                onMouseLeave={() => setHoveredFeature(null)}
                                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 cursor-pointer overflow-hidden"
                            >
                                {/* Hover gradient */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />

                                {/* Animated border on hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl"
                                    style={{
                                        border: '1px solid transparent',
                                        background: hoveredFeature === index
                                            ? 'linear-gradient(#0a0a0a, #0a0a0a) padding-box, linear-gradient(135deg, rgba(16, 185, 129, 0.5), transparent, rgba(20, 184, 166, 0.5)) border-box'
                                            : 'none'
                                    }}
                                    initial={false}
                                    animate={{ opacity: hoveredFeature === index ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                />

                                <div className="relative z-10">
                                    <motion.div
                                        className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-500"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="relative z-10 py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            How it works
                        </h2>
                        <p className="text-gray-500">Three simple steps to WiFi freedom</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-colors duration-300"
                            >
                                {/* Step number with gradient */}
                                <motion.div
                                    className="text-6xl font-bold mb-4 bg-gradient-to-br from-emerald-500/30 to-transparent bg-clip-text text-transparent"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {step.num}
                                </motion.div>
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500">{step.desc}</p>

                                {/* Connector line (except last) */}
                                {index < 2 && (
                                    <motion.div
                                        className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-emerald-500/50 to-transparent"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + index * 0.2 }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download Section */}


            {/* FAQ Section */}
            <section className="relative z-10 py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-500">Everything you need to know about Connex</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaqIndex === index;

                            // Dynamic styles based on type
                            let containerClass = "bg-white/[0.02] border-white/5 hover:bg-white/[0.04]";
                            let titleClass = "text-white";

                            if (faq.type === 'creator') {
                                containerClass = "bg-emerald-500/5 border-emerald-500/20 hover:bg-emerald-500/10";
                                titleClass = "text-emerald-400";
                            } else if (faq.type === 'stealth') {
                                containerClass = "bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30 hover:from-purple-900/30 hover:to-blue-900/30";
                                titleClass = "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400";
                            } else if (faq.type === 'warning') {
                                containerClass = "bg-rose-500/5 border-rose-500/20 hover:bg-rose-500/10";
                                titleClass = "text-rose-400";
                            }

                            return (
                                <motion.div
                                    key={index}
                                    initial={false}
                                    animate={{ backgroundColor: isOpen ? "rgba(255,255,255,0.05)" : undefined }}
                                    className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${containerClass}`}
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                    >
                                        <span className={`text-lg font-semibold flex items-center gap-3 ${titleClass}`}>
                                            {faq.icon && <span>{faq.icon}</span>}
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className={`p-2 rounded-full ${isOpen ? 'bg-white/10' : 'bg-transparent'}`}
                                        >
                                            <ChevronDown className={`w-5 h-5 ${faq.type === 'stealth' ? 'text-purple-400' : 'text-gray-400'}`} />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 py-8 px-6 border-t border-white/5">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <img src="/connex-icon.png" alt="Connex" className="w-8 h-8 rounded-lg" />
                        <span className="font-semibold">Connex</span>
                    </motion.div>
                    <motion.span
                        className="text-lg text-gray-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        v1.0.0 • Made with love by <WaveLink href="https://chakresh.vercel.app" text="Chakresh" type="rose" />
                    </motion.span>
                </div>
            </footer>
        </div>
    );
}

export default App;
