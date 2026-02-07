import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Zap,
  Shield,
  Cpu,
  Menu,
  X,
  Smartphone,
  BarChart3,
  Workflow,
  ChevronRight,
  Send
} from 'lucide-react';

const AvantiWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Manejo del scroll para la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Componente del Logo Vectorial (Recreación basada en la imagen)
  const AvantiLogo = ({ className = "h-10" }) => (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 80" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* La "A" Dinámica */}
        <path d="M20 70 L45 10 L65 10 L50 45 L70 45 L40 70 L55 35 L35 35 Z" fill="url(#blueGradient)" transform="skewX(-10)" />
        {/* El "Pixel" Satelital */}
        <rect x="75" y="10" width="12" height="12" rx="1" fill="#00CCFF" className="animate-pulse" />
        <defs>
          <linearGradient id="blueGradient" x1="20" y1="70" x2="65" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0055FF" />
            <stop offset="1" stopColor="#00CCFF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col justify-center">
        <span className="font-extrabold text-white tracking-widest leading-none text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>AVANTI</span>
        <span className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] leading-none mt-1">DIGITAL TECH</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-slate-200 font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-[#0A0F1C]">

      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0F1C]/90 backdrop-blur-md shadow-lg border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <AvantiLogo className="h-10 md:h-12" />

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Inicio</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Soluciones</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">Manifiesto</a>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white px-6 py-2 rounded-full font-bold text-xs tracking-wider transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,204,255,0.3)]">
              INICIAR PROYECTO
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0A0F1C] border-b border-slate-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
            <a href="#home" className="text-lg font-medium hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a>
            <a href="#services" className="text-lg font-medium hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>Soluciones</a>
            <a href="#about" className="text-lg font-medium hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>Manifiesto</a>
            <button className="bg-blue-600 text-white py-3 rounded-lg font-bold">INICIAR PROYECTO</button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent skew-x-[-20deg] pointer-events-none"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800/50">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Inteligencia que se adapta</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              ARQUITECTOS DE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">ACELERACIÓN</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Transformamos la burocracia en algoritmos. Desarrollamos ecosistemas digitales resilientes que no solo operan, sino que evolucionan contigo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-white text-[#0A0F1C] px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-cyan-50 hover:scale-105 transition-all flex items-center justify-center gap-2">
                AGENDAR DIAGNÓSTICO
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full font-bold text-sm tracking-wide border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors text-white">
                VER PORTAFOLIO
              </button>
            </div>
          </div>

          {/* Hero Visual - Abstract Tech */}
          <div className="relative h-[400px] w-full hidden md:flex items-center justify-center animate-in zoom-in duration-1000 delay-200">
            {/* Representación abstracta del "Nodo y la Flecha" */}
            <div className="relative w-64 h-64 border border-slate-700/50 rounded-2xl transform rotate-45 backdrop-blur-sm bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
              <div className="absolute inset-0 border border-cyan-500/30 rounded-2xl animate-pulse"></div>
              <div className="w-32 h-32 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-xl shadow-[0_0_50px_rgba(6,182,212,0.5)] flex items-center justify-center">
                <Zap className="w-16 h-16 text-white fill-white" />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 bg-[#0A0F1C] p-4 rounded-xl border border-slate-700 shadow-xl animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Workflow className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Eficiencia</div>
                    <div className="text-sm font-bold text-white">+400%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-[#050810] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Nuestras <span className="text-cyan-500">Soluciones</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Tecnología diseñada para la velocidad y la resistencia.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: App Factory */}
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-slate-700 to-slate-900 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
              <div className="bg-[#0B1120] h-full rounded-xl p-8 relative overflow-hidden">
                <div className="w-14 h-14 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-colors">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Agile App Factory</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Desarrollo de aplicaciones operativas a medida (Logística, RRHH, Ventas) en tiempo récord. De la idea a la instalación en semanas.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-xs text-slate-300 gap-2"><div className="w-1 h-1 bg-cyan-400 rounded-full"></div>Flash Custom Apps</li>
                  <li className="flex items-center text-xs text-slate-300 gap-2"><div className="w-1 h-1 bg-cyan-400 rounded-full"></div>MVP Express</li>
                  <li className="flex items-center text-xs text-slate-300 gap-2"><div className="w-1 h-1 bg-cyan-400 rounded-full"></div>Multiplataforma</li>
                </ul>
                <a href="#" className="text-cyan-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">Saber más <ArrowRight className="w-4 h-4" /></a>
              </div>
            </div>

            {/* Card 2: AI Core */}
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-slate-700 to-slate-900 hover:from-purple-500 hover:to-pink-600 transition-all duration-300 transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-cyan-500 text-[#0A0F1C] text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg z-10">CORE</div>
              <div className="bg-[#0B1120] h-full rounded-xl p-8 relative overflow-hidden">
                <div className="w-14 h-14 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:text-white group-hover:bg-purple-500 transition-colors">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI Business Core</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Cerebros digitales para tu empresa. Algoritmos que predicen fallos y agentes autónomos que cierran ventas 24/7.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-xs text-slate-300 gap-2"><div className="w-1 h-1 bg-purple-400 rounded-full"></div>Predictive Ops</li>
                  <li className="flex items-center text-xs text-slate-300 gap-2"><div className="w-1 h-1 bg-purple-400 rounded-full"></div>Agentes Autónomos</li>
                  <li className="flex items-center text-xs text-slate-300 gap-2"><div className="w-1 h-1 bg-purple-400 rounded-full"></div>Smart Dashboards</li>
                </ul>
                <a href="#" className="text-purple-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">Saber más <ArrowRight className="w-4 h-4" /></a>
              </div>
            </div>

            {/* Card 3: Hyper Automation */}
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-slate-700 to-slate-900 hover:from-green-500 hover:to-emerald-600 transition-all duration-300">
              <div className="bg-[#0B1120] h-full rounded-xl p-8 relative overflow-hidden">
                <div className="w-14 h-14 bg-green-900/30 rounded-lg flex items-center justify-center mb-6 text-green-400 group-hover:text-white group-hover:bg-green-500 transition-colors">
                  <Workflow className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Hyper-Automation</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Eliminamos el error humano. Conectamos tu CRM, correo y Excel para que los datos viajen solos y seguros.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-xs text-slate-300 gap-2"><div className="w-1 h-1 bg-green-400 rounded-full"></div>Workflow Design</li>
                  <li className="flex items-center text-xs text-slate-300 gap-2"><div className="w-1 h-1 bg-green-400 rounded-full"></div>Sistemas Resilientes</li>
                  <li className="flex items-center text-xs text-slate-300 gap-2"><div className="w-1 h-1 bg-green-400 rounded-full"></div>Auto-Healing</li>
                </ul>
                <a href="#" className="text-green-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">Saber más <ArrowRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT / VALUES SECTION --- */}
      <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h4 className="text-cyan-400 font-bold tracking-wider text-sm mb-2">MANIFIESTO AVANTI</h4>
            <h2 className="text-4xl font-black text-white mb-6">NO ES SOLO CÓDIGO. <br />ES RESILIENCIA.</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              En Avanti, creemos en la tecnología que aguanta el golpe y sigue funcionando. Nuestra misión es dotar a tu empresa de superpoderes digitales, permitiendo que tu equipo se enfoque en la estrategia mientras nuestros agentes de IA se encargan de la ejecución.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <Zap className="text-cyan-400 mb-2" />
                <h5 className="font-bold text-white">Velocity</h5>
                <p className="text-xs text-slate-500 mt-1">Velocidad con dirección precisa.</p>
              </div>
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <Shield className="text-cyan-400 mb-2" />
                <h5 className="font-bold text-white">Resiliencia</h5>
                <p className="text-xs text-slate-500 mt-1">Estructuras que soportan crisis.</p>
              </div>
            </div>
          </div>

          {/* SECCIÓN HUMANIZADA CON IMAGEN */}
          <div className="md:w-1/2 relative h-[500px] w-full flex items-center justify-center">

            {/* Imagen del Humano Joven Sonriente (Background) */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-slate-700/50 group">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Equipo Avanti"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-700 filter grayscale group-hover:grayscale-0 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent"></div>
            </div>

            {/* Stats Display (Floating Card) */}
            <div className="absolute -bottom-6 -left-6 md:left-6 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-8 rounded-3xl shadow-2xl w-[90%] md:w-[85%] z-20 animate-in slide-in-from-bottom duration-1000 delay-300">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-800">
                <div>
                  <p className="text-4xl font-black text-white">98%</p>
                  <p className="text-sm text-slate-500">Automatización de tareas</p>
                </div>
                <div className="bg-blue-900/20 p-2 rounded-lg">
                  <BarChart3 className="text-blue-500 w-8 h-8" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Velocidad de Respuesta</span>
                  <span className="text-cyan-400 font-bold">0.4s</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="w-[95%] h-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>
                </div>

                <div className="flex justify-between text-sm mt-4">
                  <span className="text-slate-300">Reducción de Costos</span>
                  <span className="text-cyan-400 font-bold">45%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="w-[80%] h-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>
                </div>
              </div>
            </div>

            {/* Decorative element behind */}
            <div className="absolute top-10 -right-10 w-full h-full bg-blue-900/10 rounded-3xl -z-10 transform rotate-6 border border-slate-800/30"></div>
          </div>
        </div>
      </section>

      {/* --- CONTACT CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900 to-[#0A0F1C] border border-blue-800 rounded-3xl p-12 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="relative z-10 md:w-2/3">
            <h2 className="text-3xl font-bold text-white mb-4">¿Listo para evolucionar?</h2>
            <p className="text-slate-300 mb-8 max-w-lg">
              Agenda una sesión de diagnóstico de 15 minutos. Sin costo, sin compromiso, solo estrategia pura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Tu correo empresarial" className="bg-slate-950/50 border border-slate-700 text-white px-6 py-3 rounded-full focus:outline-none focus:border-cyan-500 w-full md:w-auto" />
              <button className="bg-cyan-500 hover:bg-cyan-400 text-[#0A0F1C] px-8 py-3 rounded-full font-bold transition-colors flex items-center justify-center gap-2">
                SOLICITAR ACCESO <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="relative z-10 md:w-1/3 flex justify-center">
            <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
              <ChevronRight className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#050810] border-t border-slate-900 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <AvantiLogo className="h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />

          <div className="text-center">
            <p className="text-slate-500 text-sm">
              © 2026 Avanti Digital Tech. Todos los derechos reservados.
            </p>
            <p className="text-slate-600 text-xs mt-2">
              Avanti Digital Tech es una marca comercial propiedad de Wilson Andrés Arango Valencia
            </p>
          </div>

          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default AvantiWebsite;
