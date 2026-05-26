import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Phone, Envelope, MapPin, CaretDown, List, X, IconContext } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useRef, useState } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import about from "@/assets/about.jpg";
import logo1 from "@/assets/logo (1).png";
import logoLight from "@/assets/logo-light.png";
import sectionGlobalMap from "@/assets/section-global-map_250822.png";

export const Route = createFileRoute("/")({ component: Index });

const nav = ["Company", "Projects", "Sustainability", "Services", "PR Center", "Support"];

const heroCards = [
  { title: "Project", desc: "Successfully executed more than 3,200 construction projects domestically and internationally" },
  { title: "Business", desc: "Your success in construction is our pleasure" },
  { title: "Sustainability", desc: "Creating customer value through best-in-class expertise and services" },
  { title: "Support", desc: "We will excel for our customers" },
];

const businesses = [
  { title: "Construction Project Management(PM)", desc: "Comprehensive management of schedule, cost, quality, and safety throughout the entire construction lifecycle." },
  { title: "Development Project", desc: "End-to-end development services from feasibility studies and financing to execution and operation." },
  { title: "CM at Risk", desc: "Delivering projects with a guaranteed maximum price while taking on the risk of construction performance." },
  { title: "Overseas business", desc: "Global construction management services backed by international expertise and local networks." },
  { title: "Supervision", desc: "Strict quality control and site supervision to ensure compliance with design and safety standards." },
  { title: "Redevelopment, Reconstruction, Remodeling", desc: "Revitalizing existing structures with modern designs, improved efficiency, and structural reinforcements." },
  { title: "Specialized Technology Services", desc: "Advanced technical solutions leveraging cutting-edge methodologies and specialized engineering." },
  { title: "Environmental business, Energy Consulting & Engineering", desc: "Sustainable solutions for environmental challenges and comprehensive energy consulting." },
  { title: "Energy & Infrastructure", desc: "Delivering large-scale energy facilities and critical infrastructure projects with precision." },
];

const projectCategories = [
  "Super High-rise Building", "Mixed-use and Retail", "Data Centers", "Logistics Centers", "Ports", "Semiconductor and Battery Plants", "Industrial Parks", "Commercial", "Education and R&D Facilities", "Medical Facilities", "Residential", "Urban Development", "City Development", "MICE", "Tourism, Leisure and Sports", "Remodeling", "Power Generation Facilities", "Renewable Energy", "Airports", "Displays, Electronics and Materials"
];

const newsList = [
  { title: "HanmiGlobal, Naver Cloud team up for global data center projects", date: "2024.05.20" },
  { title: "HanmiGlobal taps ex-Mastern CEO to lead asset arm", date: "2024.05.15" },
  { title: "HanmiGlobal’s Otak secures W45b US park research contract", date: "2024.05.10" },
  { title: "HanmiGlobal teams up with AtkinsRealis for US energy projects", date: "2024.05.05" },
];

const testimonials1 = [
  { name: "Michael Chen", initial: "M", role: "Global Corporation", quote: "HanmiGlobal's proactive management and technical expertise delivered our complex project ahead of schedule." },
  { name: "Sarah Jenkins", initial: "S", role: "Tech Industry", quote: "Their dedication to sustainable practices completely transformed our infrastructure approach." },
  { name: "David Alaba", initial: "D", role: "Logistics", quote: "The CM at Risk model they provided gave us total confidence in our budget and timeline." },
  { name: "Elena Rodriguez", initial: "E", role: "Retail Group", quote: "Exceptional quality control and supervision from start to finish. Highly recommended." },
];

const testimonials2 = [
  { name: "James Wilson", initial: "J", role: "Energy Sector", quote: "Outstanding engineering and consulting. They navigated the regulatory landscape perfectly." },
  { name: "Anita Desai", initial: "A", role: "Real Estate", quote: "Our redevelopment project was a massive success thanks to their specialized tech services." },
  { name: "Robert Fox", initial: "R", role: "Infrastructure", quote: "They brought international expertise that proved invaluable to our overseas expansion." },
  { name: "Lisa Wong", initial: "L", role: "Healthcare", quote: "Their focus on safety and precision is exactly what our medical facility project needed." },
];

const projects = [
  { img: p1, title: "Riverbend Residences", tag: "Residential · 2024" },
  { img: p2, title: "Meridian Corporate Tower", tag: "Commercial · 2024" },
  { img: p3, title: "Northgate Logistics Hub", tag: "Industrial · 2023" },
  { img: p4, title: "Crestwood Overpass", tag: "Infrastructure · 2023" },
];

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 4000; // Slower duration
          const step = Math.max(Math.floor(duration / target), 16);
          const timer = setInterval(() => {
            start += Math.ceil(target / (duration / step));
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, step);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

function Index() {
  const v1 = useRef<HTMLVideoElement>(null);
  const v2 = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const refs = [v1, v2];
    const handle = (i: number) => () => {
      const next = (i + 1) % 2;
      setActive(next);
      const nv = refs[next].current;
      if (nv) { nv.currentTime = 0; nv.play().catch(() => {}); }
    };
    const a = v1.current, b = v2.current;
    const ha = handle(0), hb = handle(1);
    a?.addEventListener("ended", ha);
    b?.addEventListener("ended", hb);
    v1.current?.play().catch(() => {});
    return () => {
      a?.removeEventListener("ended", ha);
      b?.removeEventListener("ended", hb);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight - 80;
      setIsScrolled(scrollY > heroHeight);
      setIsBlurred(scrollY > 50 && scrollY <= heroHeight);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <IconContext.Provider value={{ weight: "duotone" }}>
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* NAV */}
      <header className="fixed top-4 inset-x-4 lg:inset-x-8 z-50">
        <div className={`max-w-[1600px] mx-auto px-4 h-[50px] md:h-[58px] flex items-stretch border transition-all duration-300 ${isScrolled ? "bg-white text-black border-neutral-200 shadow-sm" : isBlurred ? "bg-black/20 backdrop-blur-md text-white border-white/20 shadow-sm" : "bg-transparent text-white border-white"}`}>
          <a href="#" className={`flex items-center px-4 md:px-6 border-r transition-colors duration-300 ${isScrolled ? "border-neutral-200" : isBlurred ? "border-white/20" : "border-white"}`}>
            <img src={isScrolled ? logo1 : logoLight} alt="HanmiGlobal Logo" className="h-4 md:h-5 w-auto" />
          </a>
          <nav className={`hidden lg:flex items-center gap-6 px-6 text-[13px] font-medium border-l border-r transition-colors duration-300 ${isScrolled ? "border-neutral-200" : "border-white/30"} ml-auto`}>
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase().replace(/\s/g, "")}`} className="hover:opacity-60 transition">{n}</a>)}
          </nav>
          <div className="flex items-center gap-4 lg:gap-6 text-xs px-4 md:px-6 ml-auto lg:ml-0">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className={`hidden md:flex items-center gap-1 px-4 py-1.5 rounded-none text-[10px] font-bold tracking-widest border transition-colors duration-300 outline-none ${isScrolled ? "border-neutral-200 hover:bg-neutral-100" : "border-white/30 hover:bg-white/10"}`}>
                ENG <CaretDown weight="regular" className="size-3 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[80px] rounded-none shadow-xl border border-neutral-100 bg-white p-1">
                <DropdownMenuItem className="text-[10px] font-bold tracking-widest cursor-pointer rounded-none hover:bg-neutral-100 px-3 py-2">KOR</DropdownMenuItem>
                <DropdownMenuItem className="text-[10px] font-bold tracking-widest cursor-pointer rounded-none hover:bg-neutral-100 px-3 py-2">CHN</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#support" className="hidden md:inline-block bg-black text-white px-7 py-3 text-sm font-bold hover:bg-neutral-800 transition-colors">
              Contact Us
            </a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 opacity-80 hover:opacity-100 transition">
              {isMobileMenuOpen ? <X weight="regular" className="size-6" /> : <List weight="regular" className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-200 shadow-xl flex flex-col lg:hidden overflow-hidden transition-all duration-300 origin-top ${isMobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}>
          {nav.map((n) => (
            <a 
              key={n} 
              href={`#${n.toLowerCase().replace(/\s/g, "")}`} 
              className="text-sm font-bold tracking-widest text-black border-b border-neutral-100 px-6 py-4 hover:bg-neutral-50 transition-colors uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {n}
            </a>
          ))}
          <div className="p-6">
            <a href="#support" onClick={() => setIsMobileMenuOpen(false)} className="block w-full bg-black text-white px-7 py-4 text-sm font-bold tracking-widest text-center uppercase">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative h-screen min-h-[720px] overflow-hidden bg-black text-white">
        <video ref={v1} muted playsInline preload="auto" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${active === 0 ? "opacity-100" : "opacity-0"}`}>
          <source src="/hero-1.mp4" type="video/mp4" />
        </video>
        <video ref={v2} muted playsInline preload="auto" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${active === 1 ? "opacity-100" : "opacity-0"}`}>
          <source src="/hero-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />

        {/* hero content */}
        <div className="relative h-full w-full max-w-[1600px] mx-auto px-8 flex flex-col items-start justify-end pb-8 lg:pb-12">
          <div className="w-full">
            <h1 className="flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              <div className="w-3 h-3 lg:w-4 lg:h-4 bg-white shrink-0" />
              HanmiGlobal
            </h1>
            <p className="mt-2 max-w-2xl text-lg md:text-xl lg:text-2xl text-white/80 leading-snug">
              We bring specialized expertise backed by advanced <br className="hidden sm:block" />
              technology and proven strategies.
            </p>
            
            <div className="mt-8 md:mt-10 grid grid-cols-2 lg:grid-cols-4 max-w-[1200px] gap-0 border-l border-t border-white/20">
              {heroCards.map((c) => (
                <a key={c.title} href={`#${c.title.toLowerCase()}`} className="relative flex flex-col p-4 md:p-5 lg:p-6 border-r border-b border-white/20 hover:bg-green-500/20 hover:z-20 transition-all group min-h-[140px] md:min-h-0">
                  <h3 className="text-base md:text-lg font-bold tracking-tight">{c.title}</h3>
                  <p className="hidden md:block mt-2 mb-4 text-sm font-medium text-white/80 line-clamp-3 flex-grow">{c.desc}</p>
                  <div className="mt-auto flex items-center justify-center w-8 h-8 rounded-full border-2 border-white text-white group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section id="business" className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <div className="inline-block px-4 py-1.5 border border-black/20 text-xs font-bold uppercase tracking-widest text-black/60 mb-3">
                Business
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold leading-snug tracking-tight">
                Your success in construction<br />
                is our pleasure.
              </h3>
            </div>
            <p className="lg:col-span-5 lg:col-start-8 text-lg text-neutral-600 self-end">
              From program management to overseas delivery, we operate across the full spectrum of construction services — coordinating every discipline under one accountable team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-24 mt-24 w-full">
            {businesses.map((b, i) => (
              <a key={b.title} href="#" className={`group block w-full max-w-md mx-auto ${i % 2 !== 0 ? 'md:mt-40' : ''}`}>
                {/* Content (Text First) */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="text-sm font-bold text-neutral-400 mb-3 tracking-widest">0{i + 1}</div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-neutral-600 transition-colors pr-4">{b.title}</h3>
                    <p className="mt-4 text-neutral-500 font-medium pr-4 leading-relaxed">{b.desc}</p>
                  </div>
                  <ArrowUpRight weight="regular" className="size-6 md:size-8 text-neutral-400 shrink-0 group-hover:text-black group-hover:-translate-y-1 group-hover:translate-x-1 transition-all mt-1" />
                </div>
                {/* Image Placeholder (Image Last) */}
                <div className="aspect-[3/4] bg-neutral-100 relative overflow-hidden flex items-center justify-center border border-neutral-200 group-hover:bg-neutral-200 transition-colors">
                   <span className="text-neutral-400 text-sm font-medium">Image Space</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <div className="inline-block px-4 py-1.5 border border-neutral-300 text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6">
                Projects
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Selected work.</h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium border-b border-black pb-1">View all projects <ArrowUpRight className="size-4" /></a>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {projectCategories.map((cat) => (
              <span key={cat} className="px-4 py-2 border border-neutral-200 text-sm font-medium rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer">
                {cat}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((p) => (
              <a key={p.title} href="#" className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-neutral-200">
                  <img src={p.img} alt={p.title} width={1200} height={900} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                    <p className="text-sm text-neutral-500 mt-1">{p.tag}</p>
                  </div>
                  <ArrowUpRight className="size-6 text-neutral-400 group-hover:text-black transition" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL NETWORK */}
      <section id="globalnetwork" className="py-32 bg-black text-white">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-6">
              <div className="inline-block px-4 py-1.5 border-2 border-white/30 text-xs font-bold uppercase tracking-widest text-white mb-6">
                Global Network
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Building territories beyond Korea and around the world</h2>
            </div>
            <div className="lg:col-span-6 self-end text-white/70 text-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 pt-8 border-t border-white/20">
                <div><div className="text-4xl md:text-5xl font-bold text-white"><Counter target={40} />+</div><div className="text-xs text-white/50 mt-3 uppercase tracking-wider">Global Branches</div></div>
                <div><div className="text-4xl md:text-5xl font-bold text-white"><Counter target={2500} />+</div><div className="text-xs text-white/50 mt-3 uppercase tracking-wider">Professional Employees</div></div>
                <div><div className="text-4xl md:text-5xl font-bold text-white"><Counter target={60} />+</div><div className="text-xs text-white/50 mt-3 uppercase tracking-wider">Countries</div></div>
                <div><div className="text-4xl md:text-5xl font-bold text-white"><Counter target={3200} />+</div><div className="text-xs text-white/50 mt-3 uppercase tracking-wider">Projects</div></div>
                <div className="col-span-2 md:col-span-1"><div className="text-4xl md:text-5xl font-bold text-white"><Counter target={8} />th</div><div className="text-xs text-white/50 mt-3 uppercase tracking-wider">World Ranking (ENR 2025)</div></div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl bg-white/5 p-4 border border-white/10 mt-16">
            <div className="relative w-full">
              <img src={sectionGlobalMap} alt="Global map" className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-700" />
              
              {/* Blinking Korea HQ Marker */}
              <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full top-[29%] left-[22%] z-10" style={{marginLeft: '185px', boxShadow: '0 0 15px rgba(34,197,94,0.8)'}}>
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY */}
      {/* GROUP COMPANY */}
      <section id="groupcompany" className="pt-32 pb-16 bg-neutral-100">
        <div className="max-w-[1600px] mx-auto px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">Group Company</h2>
          <p className="text-neutral-600 text-lg mb-16">Introducing HanmiGlobal's Group Companies and Joint Ventures</p>
          
          <div className="flex flex-col w-full mb-8 border-l border-t border-neutral-200">
            {/* Row 1: 3 logos */}
            <div className="flex w-full">
              {[1,2,3].map((i) => (
                <a href="#" key={`r1-${i}`} className="group flex-1 h-24 md:h-32 bg-white border-r border-b border-neutral-200 flex items-center justify-center hover:bg-black transition-colors">
                  <img src={logo1} alt="HanmiGlobal" className="h-5 md:h-6 w-auto opacity-40 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all" />
                </a>
              ))}
            </div>
            {/* Row 2: 4 logos */}
            <div className="flex w-full">
              {[4,5,6,7].map((i) => (
                <a href="#" key={`r2-${i}`} className="group flex-1 h-24 md:h-32 bg-white border-r border-b border-neutral-200 flex items-center justify-center hover:bg-black transition-colors">
                  <img src={logo1} alt="HanmiGlobal" className="h-5 md:h-6 w-auto opacity-40 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all" />
                </a>
              ))}
            </div>
            {/* Row 3: 4 logos */}
            <div className="flex w-full">
              {[8,9,10,11].map((i) => (
                <a href="#" key={`r3-${i}`} className="group flex-1 h-24 md:h-32 bg-white border-r border-b border-neutral-200 flex items-center justify-center hover:bg-black transition-colors">
                  <img src={logo1} alt="HanmiGlobal" className="h-5 md:h-6 w-auto opacity-40 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* WHAT'S NEW */}
      <section id="news" className="py-32 bg-white border-t border-neutral-200">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6">News</p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">What's New</h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium border-b border-black pb-1 hover:text-green-600 hover:border-green-600 transition-colors">View all news <ArrowUpRight className="size-4" /></a>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8">
            {/* Main News Card */}
            <a href="#" className="group block relative overflow-hidden bg-neutral-900 aspect-[16/10] flex items-end">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="News Image" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              <div className="relative z-10 p-8 w-full">
                <p className="text-sm text-green-400 font-bold tracking-widest mb-3">{newsList[0].date}</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-green-300 transition-colors line-clamp-2">{newsList[0].title}</h3>
              </div>
            </a>
            
            {/* News List */}
            <div className="flex flex-col justify-center">
              {newsList.slice(1).map((newsItem, idx) => (
                <a key={idx} href="#" className="group block py-8 border-b border-neutral-200 last:border-b-0">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <p className="text-sm text-neutral-400 font-bold tracking-widest mb-3">{newsItem.date}</p>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-green-600 transition-colors line-clamp-2">{newsItem.title}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:border-green-600 group-hover:text-white transition-all mt-1">
                       <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-32 bg-neutral-100 overflow-hidden border-t border-neutral-200">
        <div className="max-w-[1600px] mx-auto px-8 mb-16">
          <div className="inline-block px-4 py-1.5 border border-neutral-300 text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">What our clients say</h2>
        </div>
        
        {/* Layer 1: Left moving */}
        <div className="flex w-max animate-marquee-left gap-6 mb-8 px-4 hover:[animation-play-state:paused]">
          {[...testimonials1, ...testimonials1, ...testimonials1, ...testimonials1].map((t, i) => (
            <div key={`t1-${i}`} className="w-[450px] p-8 border border-neutral-200 bg-white shrink-0">
              <p className="text-neutral-600 mb-6 font-medium leading-relaxed text-lg">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0 bg-neutral-100 text-neutral-800">{t.initial}</div>
                <div>
                  <h4 className="font-bold text-sm tracking-widest uppercase">{t.name}</h4>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Layer 2: Right moving */}
        <div className="flex w-max animate-marquee-right gap-6 px-4 hover:[animation-play-state:paused]">
          {[...testimonials2, ...testimonials2, ...testimonials2, ...testimonials2].map((t, i) => (
            <div key={`t2-${i}`} className="w-[450px] p-8 border border-neutral-200 bg-white shrink-0">
              <p className="text-neutral-600 mb-6 font-medium leading-relaxed text-lg">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold shrink-0 bg-neutral-100 text-neutral-800">{t.initial}</div>
                <div>
                  <h4 className="font-bold text-sm tracking-widest uppercase">{t.name}</h4>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORT / CONTACT */}
      <section id="support" className="pt-32 pb-32 bg-white border-t border-neutral-200">
        <div className="max-w-[1600px] mx-auto px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-block px-4 py-1.5 border border-neutral-300 text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6">
              Contact Us
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-10">We will excel for our customers.</h2>
            <ul className="space-y-6 text-neutral-700">
              <li className="flex items-start gap-4">
                <MapPin className="size-6 shrink-0 mt-1 text-black" />
                <span className="text-lg">9F City Airport Tower Building,<br />36, Teheran-ro 87-gil,<br />Gangnam-gu, Seoul, Korea</span>
              </li>
              <li className="flex items-center gap-4 text-lg"><Phone className="size-6 text-black" /> TEL : +82-2-3429-6300</li>
              <li className="flex items-center gap-4 text-lg"><Envelope className="size-6 text-black" /> FAX : +82-2-3429-6363</li>
            </ul>
          </div>
          <form className="space-y-4 bg-neutral-50 p-8 md:p-12 border border-neutral-200" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-neutral-600 uppercase mb-2 block">Category *</label>
                <Select>
                  <SelectTrigger className="w-full h-12 rounded-none border-neutral-300 bg-white outline-none focus:ring-0 focus:border-black">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="energy">Energy &amp; Infrastructure</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs font-bold text-neutral-600 uppercase mb-2 block">Name *</label>
                <Input placeholder="Your Name" className="rounded-none border-neutral-300 h-12 bg-white" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-neutral-600 uppercase mb-2 block">Email *</label>
                <Input placeholder="Your Email" type="email" className="rounded-none border-neutral-300 h-12 bg-white" />
              </div>
              <div>
                <label className="text-xs font-bold text-neutral-600 uppercase mb-2 block">Access Path *</label>
                <Select>
                  <SelectTrigger className="w-full h-12 rounded-none border-neutral-300 bg-white outline-none focus:ring-0 focus:border-black">
                    <SelectValue placeholder="Select Access Path" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="search">Search Engine</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-neutral-600 uppercase mb-2 block">Title *</label>
              <Input placeholder="Inquiry Title" className="rounded-none border-neutral-300 h-12 bg-white" />
            </div>
            <div>
              <label className="text-xs font-bold text-neutral-600 uppercase mb-2 block">Inquiry *</label>
              <Textarea placeholder="Please enter your inquiry..." rows={5} className="rounded-none border-neutral-300 bg-white" />
            </div>
            <div className="flex items-center gap-2 py-2">
              <input type="checkbox" id="security" className="size-4 rounded-none border-neutral-300" />
              <label htmlFor="security" className="text-sm text-neutral-600">I agree to the security and privacy policy *</label>
            </div>
            <Button className="w-full rounded-none bg-black hover:bg-neutral-800 text-white h-14 font-semibold text-lg mt-4">Submit</Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-16 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2 pr-8">
              <div className="flex items-center mb-4">
                <img src={logo1} alt="HanmiGlobal Logo" className="h-6 w-auto" />
              </div>
              <p className="text-sm text-white/60 max-w-sm leading-relaxed">Engineering structures that outlast generations — across commercial, residential, industrial and infrastructure projects.</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Explore</div>
              <ul className="space-y-2 text-sm text-white/80 font-medium">
                {nav.map((n) => <li key={n}><a href={`#${n.toLowerCase()}`} className="hover:text-white transition-colors">{n}</a></li>)}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Socials</div>
              <ul className="space-y-2 text-sm text-white/80 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">X (Twitter)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Contact</div>
              <ul className="space-y-2 text-sm text-white/80 font-medium">
                <li><a href="mailto:hello@hanmiglobal.example" className="hover:text-white transition-colors">hello@hanmiglobal.example</a></li>
                <li><a href="tel:5550142200" className="hover:text-white transition-colors">(555) 014-2200</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-8 border-t border-white/10 text-xs text-white/40 font-medium">
            <p>© {new Date().getFullYear()} HanmiGlobal (demo). All rights reserved.</p>
            <p>Educational reconstruction · Built by <a href="https://heritageisaac.xyz" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Heritage Isaac</a></p>
          </div>

          {/* The "Enlarged" Logo Section */}
          <div className="w-full border-t border-white/10 pt-12">
            <img src={logo1} alt="HanmiGlobal" className="w-full h-auto block" />
          </div>
        </div>
      </footer>
    </div>
    </IconContext.Provider>
  );
}
