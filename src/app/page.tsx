import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import About from "@/components/About";
import localFont from 'next/font/local';
import Services from "@/components/Services";
import Cursor from '@/components/common/Cursor';
import Contact from "@/components/Contact";
 
// Font files can be colocated inside of `pages`
const satoshi = localFont({ src: [
    {
      path: './../assets/fonts/Satoshi-Bold.ttf',
      weight: 'bold',
      style: 'normal'
    },
    {
      path: './../assets/fonts/Satoshi-Medium.ttf',
      weight: 'normal',
      style: 'normal'
    },
] })

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Cursor />
      <Nav />
      <Hero className={satoshi.className} />
      {/* Projects */}
      <About className={satoshi.className} />
      <Services className={satoshi.className} />
      //FUN
      <Contact className={satoshi.className} />
    </main>
  );
}
