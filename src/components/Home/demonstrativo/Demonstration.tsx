import Image from 'next/image';
import CopyDemonstrativo from './CopyDemonstration';
import CallActionDemonstration from './CallActionDemonstration';

export default function Demonstration() {
  return (
    <section className="bg-gradient-to-r md:flex from-cyan-100 bg-cyan-50">
      <Image
        src="/assets/home/comparativo_img_CTA.png"
        alt="Imagem de um comparativo de quantos leads pode conseguir usando os serviços da Leadster"
        width={500}
        height={500}
      />
      <div>
        <CopyDemonstrativo />
        <CallActionDemonstration />
      </div>
    </section>
  );
}
