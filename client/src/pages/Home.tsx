import { useState, useEffect } from "react";
import { Globe,  MapPin, Phone } from "lucide-react";


interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  borderColor: string;
  iconColor: string;
  target?: string;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links: LinkItem[] = [
    {
      id: "website",
      title: "Conheça Nosso Site",
      description: "Visite nossa página completa com todos os serviços",
      url: "https://www.loungeodontologia.com.br/",
      icon: <Globe size={20} strokeWidth={1.5} />,
      borderColor: "border-[#C4A574]",
      iconColor: "text-[#C4A574]",
      target: "_blank"
    },
    {
      id: "agendamento",
      title: "Agende Sua Avaliação",
      description: "Marque sua consulta com o Dr. Murilo",
      url: "https://wa.me/5561996263616?text=Olá%20Lounge%20Odontologia%2C%20gostaria%20de%20agendar%20uma%20consulta",
      icon: <Phone size={20} strokeWidth={1.5} />,
      borderColor: "border-[#C4A574]",
      iconColor: "text-green-300",
      target: "_blank"
    },
    {
      id: "instagram-murilo",
      title: "Instagram Dr. Murilo Salas",
      description: "Acompanhe casos de sucesso e dicas de saúde bucal",
      url: "https://www.instagram.com/dr.murilosalas",
      icon: <div className="w-5 h-5 flex items-center justify-center">@
      </div>,
      borderColor: "border-[#C4A574]",
      iconColor: "text-pink-300",
      target: "_blank"
    },
    {
      id: "instagram-lounge",
      title: "Instagram Lounge Odontologia",
      description: "Conheça nossa clínica e equipe",
      url: "https://instagram.com/loungeodontologia",
      icon: <div className="w-5 h-5 flex items-center justify-center">@
      </div>,
      borderColor: "border-[#C4A574]",
      iconColor: "text-orange-300",
      target: "_blank"
    },
    {
      id: "tiktok",
      title: "TikTok Dr. Murilo Salas",
      description: "Vídeos educativos sobre odontologia",
      url: "https://www.tiktok.com/@drmurilosalas",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>,
      borderColor: "border-[#C4A574]",
      iconColor: "text-cyan-300",
      target: "_blank"
    },
    {
      id: "localizacao",
      title: "Localização",
      description: "Visite nossa clínica em Águas Claras",
      url: "https://www.waze.com/pt-BR/live-map/directions/br/df/lounge-odontologia?navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJJ6XbFPIzWpMRdbWBOv3qR1o",
      icon: <MapPin size={20} strokeWidth={1.5} />,
      borderColor: "border-[#C4A574]",
      iconColor: "text-red-300",
      target: "_blank"
    },
    
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-linear-to-br from-[#1F4F4F] via-[#0f2f2f] to-[#1a3a52]">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#C4A574] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#4A7C7E] rounded-full blur-3xl animate-pulse " style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="w-30 h-30 rounded-4xl flex items-center justify-center shadow-2xl shadow-[#C4A574]">
                <img src="/logo.png" alt="Lounge Odontologia Logo" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                Lounge Odontologia
              </h1>
              <p className="text-lg text-[#C4A574] font-semibold">
                Excelência em Saúde Bucal
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
              Transformamos sorrisos e vidas com atendimento personalizado, tecnologia de ponta e profissionais altamente qualificados. Conheça nossa clínica em Águas Claras.
            </p>
          </div>

          {/* Links Grid */}
          <div className="space-y-3 animate-fade-in-delay   ">
            {links.map((link, index) => (
              <a
                key={link.id}
                href={link.url}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                style={{
                  animation: `slideUp 1s ease-out ${index * 0.1}s both`
                }}
                className="group block"
              >
                <div
                  style={{
                    transition: 'transform 1000ms cubic-bezier(0.4,0,0.2,1), box-shadow 1000ms cubic-bezier(0.4,0,0.2,1)'
                  }}
                  className={`p-0.5 rounded-xl hover:shadow-2xl hover:scale-105 active:scale-95 border ${link.borderColor}`}>
                  <div className="bg-gray-900 rounded-[10px] p-4 flex items-center gap-4 transition-colors duration-700 group-hover:bg-gray-800">
                    <div className={`p-3 rounded-lg shrink-0 transition-transform duration-1000 group-hover:scale-110 flex items-center justify-center`}>
                      <span className={`${link.iconColor}`}>
                        {link.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-sm md:text-base truncate">
                        {link.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-400 truncate">
                        {link.description}
                      </p>
                    </div>
                    <div className="text-[#C4A574] opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex-shrink-0">
                      →
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center space-y-4 pt-8 border-t border-gray-700">
            <p className="text-xs md:text-sm text-gray-400">
              © 2026 Lounge Odontologia. Todos os direitos reservados.
            </p>
            <p className="text-xs text-[#C4A574] font-semibold">
              Desenvolvido por Salas Tech Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.6s ease-out 0.2s both;
        }

        /* Transição suave para links */
        .group a {
          --tw-duration: 1000ms;
        }

        .group a > div {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-property: transform, box-shadow;
          transition-duration: 1000ms;
        }

        /* Responsividade para diferentes tamanhos */
        @media (max-width: 640px) {
          h1 {
            font-size: 2rem;
          }
        }

        /* Otimização para Instagram Stories (1080x1920) */
        @media (max-width: 540px) and (min-aspect-ratio: 9/16) {
          .max-w-md {
            max-width: 100%;
            padding: 1rem;
          }
        }

        /* Suporte a tema escuro (já é dark por padrão) */
        @media (prefers-color-scheme: light) {
          body {
            background: linear-gradient(135deg, #1F4F4F 0%, #0f2f2f 50%, #1a3a52 100%);
          }
        }

        /* Otimização para performance */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
