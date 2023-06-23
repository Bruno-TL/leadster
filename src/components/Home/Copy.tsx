import Image from 'next/image';
import { jakartaBold, jakartaRegular, jakartaExtraBold, jakartaLight } from '@/fonts/fonts';

export default function Copy() {
  return (
    <section className="bg-cyan-50 h-96 flex justify-center">
      <div className="my-auto w-2/5 flex flex-col items-center">
        <div className="border-2 border-sky-500 rounded-r-full rounded-tl-full px-1 w-44 text-center">
          <h3 className={`${jakartaBold.className} text-sky-500  m-1 text-xs`}>
            WEBINARS EXCLUSIVOS
          </h3>
        </div>

        <h2 className={`${jakartaRegular.className} m-1 text-4xl text-gray-900`}>
          Menos Conversinha,
        </h2>
        <div className="relative mb-5 border-2 border-transparent border-b-gray-300 w-full text-center">
          <h1 className={`${jakartaExtraBold.className} text-sky-500 text-7xl mb-5`}>
            Mais Conversão
          </h1>
          <Image
            src="/assets/home/asset-header.png"
            alt="Imagem referente a logo"
            width={50}
            height={50}
            className="absolute top-0 right-2"
          />
        </div>
        <div>
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
