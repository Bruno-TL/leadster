import { jakartaBold, jakartaLight, jakartaRegular, jakartaSemiBold } from '@/fonts/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <section className="xl:w-5/6 lg:w-11/12 mx-auto">
        <section className="my-10 flex flex-col items-center">
          <Image
            src="/assets/headers/logo.png"
            alt="Logo da empresa Leadster"
            width={210}
            height={100}
            className="mb-2"
          />
          <p className={`${jakartaLight.className} text-xs text-gray-500`}>
            Transformando visitantes em clientes.
          </p>
        </section>
        <section className="flex flex-wrap mb-16 justify-center w-full ">
          <div className="w-64">
            <h2 className={`${jakartaBold.className} text-gray-900 mb-6`}>Links Principais</h2>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2`}>Home</p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2`}>Ferramenta</p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2`}>Preços</p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2`}>Contato</p>
          </div>
          <div className="w-64 mr-8">
            <h2 className={`${jakartaBold.className} text-gray-900 mb-6`}>Cases </h2>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2`}>Geração de Leads B2B</p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2`}>
              Geração de Leads em Software
            </p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2`}>
              Geração de Leads em Imobiliária
            </p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2`}>Cases de Sucesso</p>
          </div>
          <div className="w-64">
            <h2 className={`${jakartaBold.className} text-gray-900 mb-6`}>Materias </h2>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2`}>Blog</p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2`}>
              Parceria com Agências
            </p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2`}>
              Guia Definitivo do Marketing
            </p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2`}>Materiais Gratuitos</p>
          </div>
          <div className="w-64">
            <h2 className={`${jakartaBold.className} text-gray-900 mb-6`}>Siga a Leadster </h2>
            <div className="flex mb-4">
              <div className="mr-4 w-10 h-10 border rounded-full bg-cyan-50 hover:bg-sky-200 flex justify-center items-center">
                <Link href="https://www.linkedin.com/company/leadster-platform/">
                  <Image
                    alt="Imagem da logo do LinkedIn"
                    src="/assets/footer/linkedin1.png"
                    width={15}
                    height={10}
                  />
                </Link>
              </div>
              <div className="mr-4 w-10 h-10 border rounded-full bg-cyan-50 hover:bg-sky-200 flex justify-center items-center">
                <Link href="https://www.facebook.com/leadsterplatform">
                  <Image
                    alt="Imagem da logo do facebook"
                    src="/assets/footer/face1.png"
                    width={15}
                    height={10}
                  />
                </Link>
              </div>
              <div className="mr-4 w-10 h-10 border rounded-full bg-cyan-50 hover:bg-sky-200 flex justify-center items-center">
                <Link href="https://www.instagram.com/leadster.com.br/">
                  <Image
                    alt="Imagem da logo do Instagram"
                    src="/assets/footer/insta1.png"
                    width={15}
                    height={10}
                  />
                </Link>
              </div>
            </div>
            <p className={`${jakartaRegular.className} text-gray-900 mb-2`}>
              E-mail:
              <span className={`${jakartaRegular.className} text-gray-500 mb-2`}>
                contato@leadster.com.br
              </span>
            </p>
            <p className={`${jakartaRegular.className} text-gray-900 mb-2`}>
              Telefone:
              <span className={`${jakartaRegular.className} text-gray-500 mb-2`}>
                (41) 98828-9851
              </span>
            </p>
          </div>
        </section>
      </section>
      <section className="border-2 border-transparent border-t-gray-300 ">oi</section>
    </footer>
  );
}
