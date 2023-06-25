import { jakartaSemiBold } from '@/fonts/fonts';
import Image from 'next/image';

export default function CallActionDemonstration() {
  return (
    <section className="xl:w-[35rem]">
      <div className="flex justify-center lg:justify-normal mb-3">
        <button
          className={`${jakartaSemiBold.className} border-2 mr-2 md:mr-8 md:text-lg  my-2 rounded-full bg-blue-600 hover:bg-white hover:text-blue-700 py-2 px-4 text-white hover:border-sky-700`}
        >
          VER DEMONSTRAÇÃO
        </button>
        <Image
          alt="Imagem referenciando o APP da RD station"
          src="/assets/home/selo_RD.png"
          width={150}
          height={100}
        />
      </div>
      <div className="md:flex md:mt-0 mt-4 ml-3 md:ml-0 md:justify-center lg:justify-normal items-center">
        <div className="flex mr-2 md:border-2 md:border-transparent md:border-r-gray-600">
          <Image
            alt="Imagem de um cartão riscado ao meio referenciando que não é necessario usá-lo"
            src="/assets/home/no-card-dark.webp"
            width={13}
            height={15}
            className="mr-2"
          />
          <p className="text-sm mr-2">Não é necessário Cartão de Crédito</p>
        </div>
        <div className="flex items-center">
          <Image
            alt="Image de níveis de satisfação com estrelas"
            src="/assets/home/rating.webp"
            width={60}
            height={0}
            className="h-4 mr-2"
          />
          <p>4.9/5 média de satisfação</p>
        </div>
      </div>
    </section>
  );
}
