import { GrObjectGroup } from "react-icons/gr";
import { Sun, Moon, LogIn } from "lucide-react"; // Sugestão de ícones modernos

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full flex flex-row justify-between items-center px-8 py-3 
                    bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/70 
                    backdrop-blur-lg border-b border-white/10 shadow-xl">

            {/* LADO ESQUERDO: Logo */}
            <div className="flex items-center gap-2 transition-transform hover:scale-105">
                <div className="flex flex-row">
                    <a href="/home" className="text-4xl flex flex-row text-white">
                        <GrObjectGroup />
                        <div className="flex items-center">
                            <span className="ml-3 hidden md:block text-white font-bold text-xl tracking-tight">INVENTÁRIO</span>

                        </div>
                    </a>
                </div>
            </div>

            {/* CENTRO: Div de Escrita (Slogan ou Links) */}
            <div className="hidden lg:flex items-center bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                <p className="text-gray-300 text-sm font-medium">
                    Gerenciamento de <span className="text-blue-400">Inventarios</span>
                </p>
            </div>

            {/* LADO DIREITO: Ações (Tema, Login, Cadastro) */}
            <div className="flex items-center gap-4">

                {/* Botão de Tema (Dark/Light) */}
                <button className="p-2 text-gray-300 hover:bg-white/10 rounded-lg transition-colors cursor-pointer" title="Alternar Tema">
                    <Sun size={20} className="block dark:hidden" />
                    <Moon size={20} className="hidden dark:block" />
                </button>

                <div className="h-6 w-[1px] bg-white/20 mx-1"></div> {/* Divisor */}

                {/* Login e Cadastro */}
                <div className="flex items-center gap-2">
                    <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Login
                    </button>

                    <button className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-500 
                             text-white text-sm font-bold rounded-full transition-all 
                             shadow-lg shadow-blue-500/20 active:scale-95">
                        Cadastrar
                    </button>
                </div>

            </div>
        </nav>
    );
}