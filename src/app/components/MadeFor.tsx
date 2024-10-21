import {HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, Repeat, SkipForward, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2} from 'lucide-react';
import Image from 'next/image';

export function MadeFor() {
    return(
    
   
        <div className="grid grid-cols-8 gap-4 mt-4">
          <a href='#' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/castelos.png" className= "w-full"width= {104} height= {104} alt="Capa do álbum Castelos e Ruinas"/>
          <strong className="font-semibold"> Daily mix 1</strong>
          <span className="text-sm text-zinc-400">BK,El Lif Beatz, JXNV$</span>
          </a>
          <a href='#' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/castelos.png" className= "w-full"width= {104} height= {104} alt="Capa do álbum Castelos e Ruinas"/>
          <strong className="font-semibold"> Daily mix 1</strong>
          <span className="text-sm text-zinc-400">BK,El Lif Beatz, JXNV$</span>
          </a>
          <a href='#' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/castelos.png" className= "w-full"width= {104} height= {104} alt="Capa do álbum Castelos e Ruinas"/>
          <strong className="font-semibold"> Daily mix 1</strong>
          <span className="text-sm text-zinc-400">BK,El Lif Beatz, JXNV$</span>
          </a>
          <a href='#' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/castelos.png" className= "w-full"width= {104} height= {104} alt="Capa do álbum Castelos e Ruinas"/>
          <strong className="font-semibold"> Daily mix 1</strong>
          <span className="text-sm text-zinc-400">BK,El Lif Beatz, JXNV$</span>
          </a>
          <a href='#' className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/castelos.png" className= "w-full"width= {104} height= {104} alt="Capa do álbum Castelos e Ruinas"/>
          <strong className="font-semibold"> Daily mix 1</strong>
          <span className="text-sm text-zinc-400">BK,El Lif Beatz, JXNV$</span>
          </a>

        </div>

    )
}