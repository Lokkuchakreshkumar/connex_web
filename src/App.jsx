import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Download, Wifi, Shield, Battery,
    ChevronDown, Smartphone, Settings, ArrowRight
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

const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
};

function App() {
    const [hoveredFeature, setHoveredFeature] = useState(null);
    const { scrollYProgress } = useScroll();
    const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

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

    return (
        <div className="min-h-screen w-full bg-[#0a0a0a] text-white font-sans overflow-x-hidden">

            {/* Animated background gradient that responds to scroll */}
            <div className="fixed inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            {/* Header with scroll-based background */}
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
                style={{
                    backgroundColor: `rgba(10, 10, 10, ${headerOpacity})`,
                    backdropFilter: 'blur(12px)',
                    borderColor: `rgba(255, 255, 255, 0.05)`
                }}
            >
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src="/connex-icon.png" alt="Connex" className="w-10 h-10 rounded-xl" />
                        <span className="text-xl font-bold tracking-tight">Connex</span>
                    </motion.div>

                    <motion.a
                        href="#download"
                        className="group relative px-5 py-2.5 rounded-full bg-emerald-500 text-sm font-semibold overflow-hidden"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10">Download</span>
                        <motion.div
                            className="absolute inset-0 bg-emerald-400"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.a>
                </div>
            </motion.header>

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
                            <motion.div
                                className="w-2 h-2 rounded-full bg-emerald-500"
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
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
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 text-lg font-semibold relative overflow-hidden"
                                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Download className="w-5 h-5 relative z-10" />
                                <span className="relative z-10">Download APK</span>
                                <motion.div
                                    className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </motion.div>
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
            <section id="download" className="relative z-10 py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 border border-emerald-500/20 p-8 sm:p-12 text-center"
                    >
                        {/* Animated gradient border */}
                        <motion.div
                            className="absolute inset-0 rounded-3xl opacity-50"
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.3), transparent)',
                                backgroundSize: '200% 100%'
                            }}
                            animate={{
                                backgroundPosition: ['200% 0', '-200% 0']
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Icon */}
                        <motion.img
                            src="/connex-icon.png"
                            alt="Connex"
                            className="w-20 h-20 mx-auto mb-6 rounded-2xl"
                            whileHover={{ scale: 1.05, rotate: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />

                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Download Connex
                        </motion.h2>

                        <motion.p
                            className="text-gray-400 max-w-md mx-auto mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Free to use. No ads, no trackers, no subscriptions. Just seamless WiFi connectivity.
                        </motion.p>

                        {/* Download Button */}
                        <motion.a
                            href="https://cdn.jsdelivr.net/gh/Lokkuchakreshkumar/connex_web@master/app-debug.apk"
                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold relative overflow-hidden"
                            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(255, 255, 255, 0.2)" }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Download className="w-5 h-5" />
                            Download APK
                            <span className="px-2 py-1 rounded-lg bg-black/10 text-xs">v1.0.0</span>
                        </motion.a>

                        {/* Requirements */}
                        <motion.div
                            className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-gray-500"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className="flex items-center gap-2">
                                <Smartphone className="w-4 h-4" />
                                Android 8.0+
                            </span>
                            <span>•</span>
                            <span>&lt;10MB</span>
                            <span>•</span>
                            <span>No root required</span>
                        </motion.div>
                    </motion.div>
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
                        className="text-sm text-gray-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        v1.0.0 • Made for hassle-free WiFi
                    </motion.span>
                </div>
            </footer>
        </div>
    );
}

export default App;
