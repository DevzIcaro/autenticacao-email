import { Navbar } from "@/components/navbar/navbar";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Precisará instalar react-icons

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-blue-500/30">
      <Navbar />

      <main className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)] overflow-hidden">
        
        {/* LADO ESQUERDO: Texto e Social */}
        <div className="flex flex-col justify-center px-8 lg:px-20 py-12 z-10 space-y-8">
          <div className="space-y-4">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm">
              Projeto Full-Stack
            </h2>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-none">
              MANFROTA <br />
              <span className="text-gray-500">TURBOREPO.</span>
            </h1>
            <p className="max-w-md text-gray-400 text-lg leading-relaxed">
              Sistema inteligente de gerenciamento de frotas e logística. 
              Otimizando processos com arquitetura modular e performance de ponta.
            </p>
          </div>

          {/* Botões de Redes Sociais */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
            >
              <FaGithub className="text-xl group-hover:text-blue-400" />
              <span className="font-medium">GitHub</span>
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600/10 border border-blue-500/20 rounded-xl hover:bg-blue-600/20 transition-all group"
            >
              <FaLinkedin className="text-xl text-blue-500 group-hover:text-blue-400" />
              <span className="font-medium text-blue-400">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* LADO DIREITO: Imagem com Corte Diagonal */}
        <div className="relative hidden lg:block">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"
            style={{ 
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' 
            }}
          />
          <div 
            className="absolute inset-0 bg-gray-900"
            style={{ 
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' 
            }}
          >
            {/* Espaço para sua imagem */}
            <div className="flex items-center justify-center h-full opacity-40">
                <span className="text-gray-700 text-2xl font-mono">[ Espaço para Screenshot/Mockup ]</span>
                {/* Exemplo de uso:
                <Image 
                  src="/dashboard-preview.png" 
                  alt="Preview do sistema" 
                  fill 
                  className="object-cover"
                /> 
                */}
            </div>
          </div>
        </div>

        {/* Elemento Decorativo de Fundo */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      </main>
    </div>
  );
}