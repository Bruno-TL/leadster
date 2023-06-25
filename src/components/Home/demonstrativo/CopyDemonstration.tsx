import { jakartaBold, jakartaLight, jakartaMedium, jakartaRegular } from '@/fonts/fonts';

export default function CopyDemonstrativo() {
  return (
    <section>
      <div className=" md:flex lg:block md:flex-col items-center border-2 border-transparent border-b-gray-300 xl:w-[35rem] lg:w-[33rem] mb-4">
        <h2 className={`${jakartaMedium.className} text-3xl text-gray-700 ml-2 md:ml-2`}>
          Pronto para triplicar sua
        </h2>
        <h2 className={`${jakartaBold.className} text-3xl ml-2 md:ml-2`}>Geração de Leads ?</h2>
        <p className={`${jakartaRegular.className} mb-4 ml-2 md:ml-2`}>
          Criação e ativação em <span className={`${jakartaBold.className} `}>4 minutos.</span>
        </p>
      </div>
    </section>
  );
}
