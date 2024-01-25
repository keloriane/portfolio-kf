import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import About from "@/components/About";
import localFont from 'next/font/local';
import Services from "@/components/Services";
import Cursor from '@/components/common/Cursor';
import Contact from "@/components/Contact";
import Projects from '@/components/Projects';

// Font files can be colocated inside of `pages`
const satoshi = localFont({
  src: [
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
    {
      path: './../assets/fonts/Satoshi-Light.woff',
      weight: 'normal',
      style: 'normal'
    },
  ]
})

const clashDisplay = localFont({
  src: [
    {
      path: './../assets/fonts/ClashDisplay-Light.ttf',
      weight: 'normal',
      style: 'normal'
    },
    {
      path: './../assets/fonts/ClashDisplay-Semibold.woff',
      weight: 'bold',
      style: 'normal'
    }
  ]
})

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Cursor />
      <Nav />
      <Hero className={satoshi.className} />
      <Projects className={clashDisplay.className} />
      <Services clash={clashDisplay.className} satoshi={satoshi.className} />
      <About className={satoshi.className} />
      //FUN
      <Contact className={satoshi.className} />
    </main>
  );
}
