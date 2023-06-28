import Navs from './Navs';
import Orders from './Orders';

export default function Nav() {
  return (
    <section className=" xl:w-4/5 mx-auto md:mt-10 mt-8 border border-transparent border-b-gray-400 ">
      <div className="md:flex justify-between items-center md:mb-6 mb:3">
        <Navs />
        <Orders />
      </div>
    </section>
  );
}
