import {
  ArrowUpRight,
  CalendarCheck,
  Globe,
  Instagram,
  MapPin,
  Sparkles,
} from "lucide-react";

interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const links: LinkItem[] = [
  {
    id: "agendamento",
    title: "Agendar minha avaliação",
    description: "Fale com nossa equipe pelo WhatsApp",
    url: "https://wa.me/5561996263616?text=Ol%C3%A1%2C%20Lounge%20Odontologia!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.",
    icon: <CalendarCheck size={21} strokeWidth={1.8} />,
    featured: true,
  },
  {
    id: "tratamentos",
    title: "Conhecer os tratamentos",
    description: "Estética, implantes, ortodontia e mais",
    url: "https://www.loungeodontologia.com.br/",
    icon: <Sparkles size={21} strokeWidth={1.8} />,
  },
  {
    id: "localizacao",
    title: "Como chegar à clínica",
    description: "Estamos em Águas Claras, Brasília",
    url: "https://www.waze.com/pt-BR/live-map/directions/br/df/lounge-odontologia?navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJJ6XbFPIzWpMRdbWBOv3qR1o",
    icon: <MapPin size={21} strokeWidth={1.8} />,
  },
  {
    id: "instagram-lounge",
    title: "Instagram da Lounge",
    description: "Conheça a clínica, a equipe e nosso dia a dia",
    url: "https://instagram.com/loungeodontologia",
    icon: <Instagram size={21} strokeWidth={1.8} />,
  },
  {
    id: "instagram-murilo",
    title: "Instagram do Dr. Murilo",
    description: "Conteúdos e orientações sobre saúde bucal",
    url: "https://www.instagram.com/drmurilo.salas",
    icon: <Instagram size={21} strokeWidth={1.8} />,
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F8F6F1] px-5 py-9 text-[#1F4F4F] sm:py-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-28 -top-32 h-80 w-80 rounded-full bg-[#DCC9A8]/25 blur-3xl" />
        <div className="absolute -bottom-32 -left-28 h-80 w-80 rounded-full bg-[#4A7C7E]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] w-full max-w-md flex-col">
        <header className="animate-fade-in text-center">
          <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-[#C4A574]/35 bg-white/80 p-3 shadow-[0_12px_36px_rgba(31,79,79,0.08)] sm:h-32 sm:w-32">
            <img
              src="/logo.png"
              alt="Logo da Lounge Odontologia"
              className="h-full w-full object-contain"
              fetchPriority="high"
            />
          </div>

          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9B7A43]">
            Cuidado em cada detalhe
          </p>
          <h1
            className="text-3xl font-medium leading-tight tracking-[-0.04em] text-[#1F4F4F] sm:text-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Lounge Odontologia
          </h1>
          <p className="mt-3 text-sm font-medium tracking-wide text-[#4A7C7E]">
            Excelência em saúde bucal
          </p>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-[#687777]">
            Um atendimento personalizado para cuidar do seu sorriso com conforto,
            tecnologia e atenção aos detalhes.
          </p>
        </header>

        <section aria-label="Links da Lounge Odontologia" className="mt-8 space-y-3">
          {links.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${index * 70}ms` }}
              className={`group flex min-h-[76px] items-center gap-4 rounded-2xl border px-4 py-4 transition duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A574] focus-visible:ring-offset-2 animate-link-in ${
                link.featured
                  ? "border-[#1F4F4F] bg-[#1F4F4F] text-white shadow-[0_10px_24px_rgba(31,79,79,0.16)] hover:bg-[#173F3F]"
                  : "border-[#E8E2D7] bg-white/90 text-[#1F4F4F] shadow-[0_5px_18px_rgba(31,79,79,0.035)] hover:border-[#C4A574] hover:bg-white"
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                  link.featured
                    ? "bg-white/10 text-[#E4C995]"
                    : "bg-[#F3F0E8] text-[#4A7C7E] group-hover:bg-[#F1E8D7] group-hover:text-[#9B7A43]"
                }`}
              >
                {link.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold leading-5">{link.title}</span>
                <span
                  className={`mt-1 block text-xs leading-5 ${
                    link.featured ? "text-white/75" : "text-[#788483]"
                  }`}
                >
                  {link.description}
                </span>
              </span>
              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                className={`shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  link.featured ? "text-[#E4C995]" : "text-[#B49A6D]"
                }`}
              />
            </a>
          ))}
        </section>

        <div className="mt-7 flex items-center justify-center gap-2 text-xs text-[#7B8986]">
          <Globe size={14} strokeWidth={1.7} />
          <span>Águas Claras · Brasília, DF</span>
        </div>

        <footer className="mt-auto pt-9 text-center">
          <div className="mx-auto mb-4 h-px w-14 bg-[#C4A574]/70" />
          <p className="text-[11px] tracking-wide text-[#8B9490]">
            © {new Date().getFullYear()} Lounge Odontologia
          </p>
          <p className="mt-1 text-[10px] text-[#A18B67]">
            Um sorriso cuidado faz toda a diferença.
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes loungeFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes loungeLinkIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: loungeFadeIn 500ms ease-out both; }
        .animate-link-in { animation: loungeLinkIn 450ms ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in, .animate-link-in { animation: none !important; }
          a { transition: none !important; }
        }
      `}</style>
    </main>
  );
}
