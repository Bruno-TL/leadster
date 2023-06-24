import { jakartaMedium } from '@/fonts/fonts';

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className={`${jakartaMedium.className} py-1 px-3 border rounded-full md:border-black border-sky-500 md:text-black text-sky-500 hover:border-sky-500 hover:text-sky-500 mr-2 mt-2 xl:mt-0 text-sm lg:text-base`}
    >
      {children}
    </button>
  );
}
//  md lg xl
