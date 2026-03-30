import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Zap,
  Layers,
  Users,
  ChevronRight,
  Menu,
  X,
  ShoppingCart,
  Palette,
  Cloud
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      title: "Web Application Development",
      description: "Scalable, high-performance web applications built with modern stacks like React, Next.js, and Node.js.",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Mobile App Development",
      description: "Premium native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.",
      icon: <Smartphone className="w-6 h-6" />,
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "E-commerce Solutions",
      description: "Robust online stores with secure payments, inventory management, and seamless checkout flows.",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Custom Software Development",
      description: "Tailored enterprise solutions designed to automate workflows and solve complex business problems.",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-emerald-500/10 text-emerald-600"
    },
    {
      title: "UI/UX Design",
      description: "User-centric design that combines aesthetics with functionality to create intuitive digital products.",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-pink-500/10 text-pink-600"
    },
    {
      title: "Cloud & DevOps",
      description: "Secure cloud infrastructure and CI/CD pipelines to ensure your application is always available and scalable.",
      icon: <Cloud className="w-6 h-6" />,
      color: "bg-cyan-500/10 text-cyan-600"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you'd send this to a backend
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code2 className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">NexDev</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#process" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Process</a>
              <a href="#inquiry" className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">Start a Project</a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#services" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#process" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Process</a>
                <a href="#inquiry" className="block w-full py-3 bg-blue-600 text-white text-center rounded-xl font-medium" onClick={() => setIsMenuOpen(false)}>Start a Project</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
              Next-Gen Development Agency
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-[1.1]">
              We build software that <span className="text-blue-600">scales</span> with your vision.
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              NexDev transforms complex ideas into elegant digital solutions. From web platforms to mobile apps, we deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#inquiry" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group">
                Start your project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                View our services
              </a>
            </div>
          </motion.div>

          {/* Hero Image/Graphic Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-16 relative"
          >
            <div className="aspect-[16/9] max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tech/1200/800')] bg-cover bg-center mix-blend-overlay opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 w-full h-full">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 flex flex-col justify-end">
                        <div className="w-10 h-10 rounded-full bg-white/20 mb-4" />
                        <div className="h-4 w-3/4 bg-white/20 rounded mb-2" />
                        <div className="h-4 w-1/2 bg-white/20 rounded" />
                     </div>
                   ))}
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 hidden lg:block bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-medium">Performance</p>
                  <p className="text-sm font-bold">99+ Lighthouse</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We specialize in modern technologies to build robust, scalable, and user-centric digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6", service.color)}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to build something <span className="text-blue-400">extraordinary?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10">
                Tell us about your project. Whether it's a mobile app, a web platform, or custom software, we're here to help you succeed.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <CheckCircle2 className="text-blue-400" />, text: "Free initial consultation" },
                  { icon: <CheckCircle2 className="text-blue-400" />, text: "Detailed project roadmap" },
                  { icon: <CheckCircle2 className="text-blue-400" />, text: "Expert technical advice" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-slate-300 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <MessageSquare className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Average response time</p>
                    <p className="text-lg font-bold text-white">Under 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 text-slate-900 shadow-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Your Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Project Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Web App', 'Mobile App', 'Website', 'Other'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({...formData, projectType: type})}
                          className={cn(
                            "py-3 rounded-xl border text-sm font-medium transition-all",
                            formData.projectType === type 
                              ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-100" 
                              : "bg-white border-slate-200 text-slate-600 hover:border-blue-300"
                          )}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Tell us about your needs</label>
                    <textarea 
                      required
                      placeholder="Describe your project goals, features, and timeline..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                  >
                    Send Inquiry <ChevronRight className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-8">
                    Thank you for reaching out, {formData.name}. Our team will review your inquiry and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <Code2 className="text-white w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">NexDev</span>
            </div>
            
            <div className="flex gap-8 text-sm text-slate-500 font-medium">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>

            <p className="text-sm text-slate-400">
              © 2026 NexDev Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
