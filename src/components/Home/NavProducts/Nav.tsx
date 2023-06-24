import Button from './Button';
import Orders from './Orders';

export default function Nav() {
  return (
    <section className=" xl:w-4/5 mx-auto md:mt-10 mt-8 border border-transparent border-b-gray-400 ">
      <div className="md:flex justify-between items-center md:mb-6 mb:3">
        <div className="flex flex-wrap justify-center items-center px-2 mx-2 md:py-0 md:w-1/2 lg:w-auto">
          <Button>Agências</Button>
          <Button>Chatbot</Button>
          <Button>Marketing Digital</Button>
          <Button>Geração de Leads</Button>
          <Button>Mídia Paga</Button>
        </div>
        <Orders />
      </div>
    </section>
  );
}
