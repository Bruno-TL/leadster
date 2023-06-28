'use client';

import { jakartaBold, jakartaMedium, jakartaSemiBold } from '@/fonts/fonts';
import Image from 'next/image';
import { useState } from 'react';
import Iframe from 'react-iframe';

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
  const [url, setUrl] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);

  const showVideo = (url: string) => {
    setUrl(url);
    setShow(true);
  };

  console.log(data[0].url);
  return (
    <div>
      <section className="grid grid-cols-3 gap-4 lg:gap-16">
        {data.map((c) => (
          <div onClick={() => showVideo(c.url)}>
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
          </div>
        ))}
      </section>
      {show && (
        <section className="fixed z-50 top-0 xl:-left-1 w-full h-full border bg-slate-500 bg-opacity-50  flex justify-center items-center">
          <div className="bg-white border-4 border-transparent rounded-xl border-t-sky-600 ">
            <section className="flex py-5">
              <div className="flex flex-col items-center justify-center w-11/12">
                <p className={`${jakartaBold.className}`}>
                  <span className={`${jakartaSemiBold.className} text-sky-500`}>Webinar: </span>
                  Como aumentar sua
                </p>
                <p className={`${jakartaBold.className}`}>Gerção de Leads feat. Traktor</p>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 hover:cursor-pointer border border-transparent hover:rounded-full hover:text-white hover:bg-sky-600"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </section>

            <Iframe
              url={url}
              width="560px"
              height="315px"
              id=""
              className=""
              display="block"
              position="relative"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            <section className="p-4">
              <div className="border border-transparent border-b-gray-400 mb-2">
                <h2 className={`${jakartaSemiBold.className} text-gray-800 pb-2`}>Descrição</h2>
              </div>
              <div className="mb-4">
                <p className={`${jakartaMedium.className} text-gray-600 w-[33rem]`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore quos earum
                  iure, culpa, sapiente blanditiis laboriosam recusandae sed labore consequatur
                  reiciendis voluptas commodi.
                </p>
              </div>
              <div className="border border-transparent border-b-gray-400 mb-3">
                <h2 className={`${jakartaSemiBold.className} text-gray-800 pb-2`}>Dowloads</h2>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="flex mr-2 bg-teal-200 text-teal-600 bg-opacity-75 h-8  w-40 border border-transparent rounded-md">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 bg-teal-300 text-teal-700 bg-opacity-50 p-1 m-0 border border-transparent rounded-l-md"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                  <button className={`${jakartaSemiBold.className} text-sm m-auto`}>
                    Spreadsheet.xls
                  </button>
                </div>
                <div className="flex mr-2 bg-blue-200 text-blue-600 bg-opacity-75 h-8  w-40 border border-transparent rounded-md">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 bg-blue-300 text-blue-700 bg-opacity-50 p-1 m-0 border border-transparent rounded-l-md"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                  <button className={`${jakartaSemiBold.className} text-sm m-auto`}>
                    Document.doc
                  </button>
                </div>
                <div className="flex mr-2 bg-yellow-200 text-yellow-600 bg-opacity-75 h-8  w-40 border border-transparent rounded-md">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 bg-yellow-300 text-yellow-700 bg-opacity-50 p-1 m-0 border border-transparent rounded-l-md"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                  <button className={`${jakartaSemiBold.className} text-sm m-auto`}>
                    Presentation.ppt
                  </button>
                </div>
              </div>
            </section>
          </div>
        </section>
      )}
    </div>
  );
}
