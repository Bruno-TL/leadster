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
        <section className="grid  lg:mx-0 gap-4 grid-cols-1 md:grid-cols-2 lg:flex lg:grid-cols-none mb-16 justify-around lg:justify-center w-full ">
          <div className="w-40 xl:w-64 pl-10 lg:pl-0">
            <h2 className={`${jakartaBold.className} text-gray-900 mb-6`}>Links Principais</h2>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2 text-sm xl:text-base`}>
              Home
            </p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2 text-sm xl:text-base`}>
              Ferramenta
            </p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2 text-sm xl:text-base`}>
              Preços
            </p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2 text-sm xl:text-base`}>
              Contato
            </p>
          </div>
          <div className="w-60 xl:w-64 xl:mr-8 pl-10 lg:pl-0">
            <h2 className={`${jakartaBold.className} text-gray-900 mb-6`}>Cases </h2>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2 text-sm xl:text-base`}>
              Geração de Leads B2B
            </p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2 text-sm xl:text-base`}>
              Geração de Leads em Software
            </p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2 text-sm xl:text-base`}>
              Geração de Leads em Imobiliária
            </p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2 text-sm xl:text-base`}>
              Cases de Sucesso
            </p>
          </div>
          <div className="w-56 xl:w-64 pl-10 lg:pl-0">
            <h2 className={`${jakartaBold.className} text-gray-900 mb-6`}>Materias </h2>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2 text-sm xl:text-base`}>
              Blog
            </p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2 text-sm xl:text-base`}>
              Parceria com Agências
            </p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2 text-sm xl:text-base`}>
              Guia Definitivo do Marketing
            </p>
            <p className={`${jakartaRegular.className} text-gray-500 mb-2 text-sm xl:text-base`}>
              Materiais Gratuitos
            </p>
          </div>
          <div className="w-64 pl-10 lg:pl-0 ">
            <h2 className={`${jakartaBold.className} text-gray-900 mb-6`}>Siga a Leadster </h2>
            <div className="flex mb-4 ">
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
            <p className={`${jakartaRegular.className} text-gray-900 mb-2 text-sm xl:text-base`}>
              E-mail:
              <span
                className={`${jakartaRegular.className} text-gray-500 mb-2 text-xs md:text-base`}
              >
                contato@leadster.com.br
              </span>
            </p>
            <p className={`${jakartaRegular.className} text-gray-900 mb-2 text-sm xl:text-base`}>
              Telefone:
              <span
                className={`${jakartaRegular.className} text-gray-500 mb-2 text-sm xl:text-base`}
              >
                (41) 98828-9851
              </span>
            </p>
          </div>
        </section>
      </section>
      <section className="border-2 border-transparent border-t-gray-300 mb-4">
        <div className="xl:w-5/6 lg:w-11/12 mx-auto lg:flex justify-around mt-4">
          <div className="flex items-center">
            <p
              className={`${jakartaSemiBold.className} text-xs text-gray-400 border-2 border-transparent border-r-gray-400 mr-2 pr-2`}
            >
              Copyright &copy; 2015 - {new Date(Date.now()).getFullYear()} Todos os direitos
              reservados
            </p>
            <Link
              href="https://leadster.com.br/"
              className={`${jakartaSemiBold.className} text-xs text-sky-500 hover:text-sky-700`}
            >
              Leadster
            </Link>
          </div>
          <div className="flex items-center">
            <p
              className={`${jakartaSemiBold.className} text-xs text-gray-400 border-2 border-transparent border-r-gray-400 mr-2 pr-2`}
            >
              Rua José Loureiro, 464 - Curitiba PR - CEP: 80010-000
            </p>
            <p className={`${jakartaSemiBold.className} text-xs text-gray-400 `}>Termos de uso</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
