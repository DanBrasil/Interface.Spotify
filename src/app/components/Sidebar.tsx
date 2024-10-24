import { HomeIcon, Search, Library } from "lucide-react";


export function Sidebar() {
    return( <aside className="w-72 bg-zinc-950 p-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full">
          </div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full">
          </div>
          <div className="w-3 h-3 bg-green-500 rounded-full">
          </div>

        </div>
      <nav className="space-y-5 mt-6">
        <a href className="text-sm text-zinc-400"className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
        <HomeIcon/>
          Home
        </a>
        <a href=""className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Search/>
          Search
        </a>    
        <a href=""className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Library/>
          Your Library
        </a>
      </nav>
      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-4">
        <a href className="text-sm text-zinc-400 hover:text-zinc-100">funk hits</a>
        <a href className="text-sm text-zinc-400 hover:text-zinc-100">hip hop 2010</a>
        <a href className="text-sm text-zinc-400 hover:text-zinc-100">this is Racionais</a>
        <a href className="text-sm text-zinc-400 hover:text-zinc-100">Paredão explode</a>
        <a href className="text-sm text-zinc-400 hover:text-zinc-100">Pagodeira</a>
        <a href className="text-sm text-zinc-400 hover:text-zinc-100">Capoeira</a>
        <a href className="text-sm text-zinc-400 hover:text-zinc-100">Sertanejo</a>
        <a href className="text-sm text-zinc-400 hover:text-zinc-100">Sabadou</a>
        <a href className="text-sm text-zinc-400 hover:text-zinc-100">Acorda capoeira</a>
        <a href className="text-sm text-zinc-400 hover:text-zinc-100">This is Sant</a>
        <a href className="text-sm text-zinc-400 hover:text-zinc-100">Daily mix 1</a>
      </nav>
     
      </aside>
    )
}