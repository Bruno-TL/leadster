import Image from 'next/image';
import Copy from '@/components/Home/Copy';
import Nav from '@/components/Home/NavProducts/Nav';
import Demonstration from '@/components/Home/demonstrativo/Demonstration';
import Videos from '@/components/Home/videos/thumbnails';

export default function Home() {
  return (
    <main>
      <Copy />
      <Nav />
      <Videos />
      <Demonstration />
    </main>
  );
}
