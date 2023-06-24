import { jakartaBold, jakartaLight, jakartaMedium, jakartaRegular } from '@/fonts/fonts';

export default function CopyDemonstrativo() {
  return (
    <section>
      <div className="border-2 border-transparent border-b-gray-300 w-[35rem] mb-4">
        <h2 className={`${jakartaMedium.className} md:text-3xl text-gray-700`}>
          Pronto para triplicar sua
        </h2>
        <h2 className={`${jakartaBold.className} md:text-3xl`}>Geração de Leads ?</h2>
        <p className={`${jakartaRegular.className} mb-4 `}>
          Criação e ativação em <span className={`${jakartaBold.className} `}>4 minutos.</span>
        </p>
      </div>
    </section>
  );
}
