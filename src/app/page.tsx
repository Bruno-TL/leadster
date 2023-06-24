import Image from 'next/image';
import Copy from '@/components/Home/Copy';
import Nav from '@/components/Home/NavProducts/Nav';
import Demonstration from '@/components/Home/demonstrativo/Demonstration';

export default function Home() {
  return (
    <main>
      <Copy />
      <Nav />
      {/* <PRoduto */}
      <Demonstration />
    </main>
  );
}
