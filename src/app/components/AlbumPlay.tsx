import {HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, Repeat, SkipForward, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2} from 'lucide-react';
import Image from 'next/image';

export function AlbumPlay() {
    return(<div className="grid grid-cols-3 gap-6">
        <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
        <Image src="/castelos.png"width= {104} height= {104} alt="Capa do álbum Castelos e Ruinas"/>
        <strong>Castelos e ruinas</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play fill="bg-black"/>
        </button>
        </a>
        <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
        <Image src="/castelos.png"width= {104} height= {104} alt="Capa do álbum Castelos e Ruinas"/>
        <strong>Castelos e ruinas</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play fill="bg-black"/>
        </button>
        </a>
        <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
        <Image src="/castelos.png"width= {104} height= {104} alt="Capa do álbum Castelos e Ruinas"/>
        <strong>Castelos e ruinas</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play fill="bg-black"/>
        </button>
        </a>
        <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
        <Image src="/castelos.png"width= {104} height= {104} alt="Capa do álbum Castelos e Ruinas"/>
        <strong>Castelos e ruinas</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play fill="bg-black"/>
        </button>
        </a>
        <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
        <Image src="/castelos.png"width= {104} height= {104} alt="Capa do álbum Castelos e Ruinas"/>
        <strong>Castelos e ruinas</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play fill="bg-black"/>
        </button>
        </a>
        <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
        <Image src="/castelos.png"width= {104} height= {104} alt="Capa do álbum Castelos e Ruinas"/>
        <strong>Castelos e ruinas</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play fill="bg-black"/>
        </button>
        </a>
        </div>)
}