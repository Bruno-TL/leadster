import { jakartaSemiBold } from '@/fonts/fonts';
import Image from 'next/image';

interface typeData {
  id: number;
  url: string;
  title: string;
  img: string;
}

interface ThumbProps {
  data: typeData[];
}

export default function Thumb(props: ThumbProps) {
  const { data } = props;
  return (
    <div className="grid grid-cols-3 gap-4 lg:gap-16">
      {data.map((c) => (
        <div
          key={c.id}
          className="border border-transparent rounded-xl lg:shadow-2xl shadow-lg text-gray-700 hover:text-sky-600"
        >
          <div className="relative">
            <div className="w-full flex justify-center items-center h-full border border-transparent rounded-t-xl hover:z-10 bg-opacity-20 bg-sky-700 absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-20 h-20 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Image
              src={c.img}
              alt="thunbnail do vídeo sobre marketing"
              width={360}
              height={60}
              className="border border-transparent rounded-t-xl z-1  relative hover:static"
            />
          </div>

          <div className="p-6">
            <p className={`${jakartaSemiBold.className} `}>{c.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
