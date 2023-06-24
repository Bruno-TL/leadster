import Image from 'next/image';
import { jakartaBold, jakartaRegular, jakartaExtraBold, jakartaLight } from '@/fonts/fonts';

export default function Copy() {
  return (
    <section className="bg-cyan-50 h-96 flex justify-center">
      <div className="my-auto  flex flex-col items-center ">
        <div className="border-2 border-sky-500 rounded-r-full rounded-tl-full px-1 w-44 text-center mb-2">
          <h3 className={`${jakartaBold.className} text-sky-500  m-1 text-xs`}>
            WEBINARS EXCLUSIVOS
          </h3>
        </div>

        <h2 className={`${jakartaRegular.className} m-1 text-2xl text-gray-900 md:text-4xl  `}>
          Menos Conversinha,
        </h2>
        <div className="relative mb-5 border-2 border-transparent border-b-gray-300 w-80 text-center md:w-full">
          <h1 className={`${jakartaExtraBold.className} text-sky-500 mb-5 text-4xl md:text-7xl`}>
            Mais Conversão
          </h1>
          <Image
            src="/assets/home/asset-header.png"
            alt="Imagem referente a logo"
            width={50}
            height={50}
            className="absolute -top-2 -right-0.5 md:top-0 md:right-0"
          />
        </div>
        <div className="text-center w-2/3 md:w-full">
          <p className={`${jakartaRegular.className}`}>
            Conheça as estratégias que{' '}
            <span className={`${jakartaBold.className}`}>mudaram o jogo</span> e como aplicá-las no
            seu negócio
          </p>
        </div>
      </div>
    </section>
  );
}
