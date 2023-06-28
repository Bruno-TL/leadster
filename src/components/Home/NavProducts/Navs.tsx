'use client';
import { jakartaMedium } from '@/fonts/fonts';
import { useReducer } from 'react';

type StateType = {
  agencia: boolean;
  chat: boolean;
  mkt: boolean;
  leads: boolean;
  midia: boolean;
};

type ActionType = {
  type: string;
};

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'agencia':
      return { ...state, agencia: true, chat: false, mkt: false, leads: false, midia: false };
    case 'chat':
      return { ...state, agencia: false, chat: true, mkt: false, leads: false, midia: false };
    case 'mkt':
      return { ...state, agencia: false, chat: false, mkt: true, leads: false, midia: false };
    case 'leads':
      return { ...state, agencia: false, chat: false, mkt: false, leads: true, midia: false };
    case 'midia':
      return { ...state, agencia: false, chat: false, mkt: false, leads: false, midia: true };
    default:
      return state;
  }
}

export default function Navs() {
  const initialState: StateType = {
    agencia: false,
    chat: false,
    mkt: false,
    leads: false,
    midia: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-wrap justify-center items-center px-2 mx-2 md:py-0 md:w-1/2 lg:w-auto">
      <button
        className={`${jakartaMedium.className} ${
          state.agencia
            ? 'bg-blue-500 text-white md:border-blue-500 hover:border-sky-500 '
            : 'md:text-black md:border-black hover:border-sky-500 hover:text-sky-500'
        } py-1 px-3 border rounded-full  border-sky-500 cursor-default  text-sky-500 mr-2 mt-2 xl:mt-0 text-sm lg:text-base`}
        onClick={() => {
          dispatch({ type: 'agencia' });
        }}
      >
        Agências
      </button>
      <button
        className={`${jakartaMedium.className} ${
          state.chat
            ? 'bg-blue-500 text-white md:border-blue-500 hover:border-sky-500 '
            : 'md:text-black md:border-black hover:border-sky-500 hover:text-sky-500'
        } py-1 px-3 border rounded-full  border-sky-500 cursor-default  text-sky-500 mr-2 mt-2 xl:mt-0 text-sm lg:text-base`}
        onClick={() => {
          dispatch({ type: 'chat' });
        }}
      >
        Chatbot
      </button>
      <button
        className={`${jakartaMedium.className} ${
          state.mkt
            ? 'bg-blue-500 text-white md:border-blue-500 hover:border-sky-500 '
            : 'md:text-black md:border-black hover:border-sky-500 hover:text-sky-500'
        } py-1 px-3 border rounded-full  border-sky-500 cursor-default  text-sky-500 mr-2 mt-2 xl:mt-0 text-sm lg:text-base`}
        onClick={() => {
          dispatch({ type: 'mkt' });
        }}
      >
        Marketing Digital
      </button>
      <button
        className={`${jakartaMedium.className} ${
          state.leads
            ? 'bg-blue-500 text-white md:border-blue-500 hover:border-sky-500 '
            : 'md:text-black md:border-black hover:border-sky-500 hover:text-sky-500'
        } py-1 px-3 border rounded-full  border-sky-500 cursor-default  text-sky-500 mr-2 mt-2 xl:mt-0 text-sm lg:text-base`}
        onClick={() => {
          dispatch({ type: 'leads' });
        }}
      >
        Geração de Leads
      </button>
      <button
        className={`${jakartaMedium.className} ${
          state.midia
            ? 'bg-blue-500 text-white md:border-blue-500 hover:border-sky-500 '
            : 'md:text-black md:border-black hover:border-sky-500 hover:text-sky-500'
        } py-1 px-3 border rounded-full  border-sky-500 cursor-default  text-sky-500 mr-2 mt-2 xl:mt-0 text-sm lg:text-base`}
        onClick={() => {
          dispatch({ type: 'midia' });
        }}
      >
        Mídia Paga
      </button>
    </div>
  );
}
