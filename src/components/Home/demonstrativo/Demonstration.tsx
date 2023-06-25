import Image from 'next/image';
import CopyDemonstrativo from './CopyDemonstration';
import CallActionDemonstration from './CallActionDemonstration';

export default function Demonstration() {
  return (
    <section className="bg-gradient-to-r  from-cyan-100 bg-cyan-50 pt-10">
      <div className="lg:flex xl:w-5/6 lg:w-11/12 mx-auto">
        <Image
          src="/assets/home/comparativo_img_CTA.png"
          alt="Imagem de um comparativo de quantos leads pode conseguir usando os serviços da Leadster"
          width={500}
          height={500}
          className="lg:w-2/5 mx-auto "
        />
        <div className="xl:ml-20 lg:ml-3 lg:pt-28">
          <CopyDemonstrativo />
          <CallActionDemonstration />
        </div>
      </div>
    </section>
  );
}
