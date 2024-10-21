import {HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, Repeat, SkipForward, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2} from 'lucide-react';
import Image from 'next/image';
import { Sidebar } from './components/sidebar';
import { Footer } from './components/footer';
import { AlbumPlay } from './components/AlbumPlay';
import { MadeFor } from './components/MadeFor';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className= "flex flex-1 ">
        <Sidebar/>

        <main className= "flex-1 p-6">
         <div className="flex items-center gap-4">
          <button className=" rounded-full bg-black/40 p-1">
            <ChevronLeft/>
          </button>
          <button className=" rounded-full bg-black/40 p-1 ">
            <ChevronRight/>
          </button>
         </div>
         <h1 className="font-semibold text-4xl mt-10">
            Good Afternoon </h1>
    
            <AlbumPlay/>

            <h1 className="font-semibold text-3xl mt-10">
            Made for Danilo Brasil</h1>

            <MadeFor/>        
     </main>

    
        </div>

        <Footer/>
    
    </div> 
    );
}