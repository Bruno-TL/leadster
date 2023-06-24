import Image from 'next/image';

export default function CallActionDemonstration() {
  return (
    <section className="md:w-[35rem]">
      <div className="flex">
        <button className="border rounded-full bg-blue-600">VER DEMONSTRAÇÃO</button>
        <Image
          alt="Imagem referenciando o APP da RD station"
          src="/assets/home/selo_RD.png"
          width={100}
          height={100}
        />
      </div>
      <div className="flex">
        <div className="flex">
          <Image
            alt="Imagem de um cartão riscado ao meio referenciando que não é necessario usá-lo"
            src="/assets/home/no-card-dark.webp"
            width={15}
            height={15}
          />
          <p>Não é necessário Cartão de Crédito</p>
        </div>
        <div className="flex">
          <Image
            alt="Image de níveis de satisfação com estrelas"
            src="/assets/home/rating.webp"
            width={70}
            height={70}
          />
          <p>4.9/5 média de satisfação</p>
        </div>
      </div>
    </section>
  );
}
