'use client';
import { jakartaBold, jakartaMedium, jakartaRegular, jakartaSemiBold } from '@/fonts/fonts';
import { useState } from 'react';

export default function Orders() {
  const [orders, setOrders] = useState('Data de Publicação');
  const [visible, setVisible] = useState(false);

  const changeOrders = (type: string) => {
    setOrders(type);
    setVisible(false);
  };

  return (
    <div className="flex items-center justify-center mt-4 md:mt-0 relative">
      <p className={`${jakartaBold.className} mr-2`}>Ordenar por</p>
      <button
        className={`${jakartaMedium.className} flex justify-between items-center py-1 px-3 border rounded-lg border-black hover:border-sky-500 hover:text-sky-500 mr-4 w-52 `}
        onClick={() => setVisible(!visible)}
      >
        {orders}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="animate-bounce w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {visible && (
        <div className="lg:transition lg:duration-700 lg:hover:scale-100 lg:scale-75 block absolute top-9 md:right-8 right-20 w-44 bg-white  border-2 rounded-md hover:border-sky-300 border-black">
          <ul>
            <li
              onClick={() => changeOrders('Nome')}
              className={`${jakartaSemiBold.className}  p-2 hover:bg-sky-100 hover:text-sky-500`}
            >
              Nome
            </li>
            <li
              onClick={() => changeOrders('Agências')}
              className={`${jakartaSemiBold.className}  p-2 hover:bg-sky-100 hover:text-sky-500`}
            >
              Agências
            </li>
            <li
              onClick={() => changeOrders('Data de Publicação')}
              className={`${jakartaSemiBold.className}  p-2 hover:bg-sky-100 hover:text-sky-500`}
            >
              Data de Publicação
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
