'use client';

import dataJson from '@/data/data.json';
import Thumb from './thumb';
import { useReducer, useState } from 'react';
import { jakartaMedium } from '@/fonts/fonts';

type StateType = {
  page1: boolean;
  page2: boolean;
  page3: boolean;
  page4: boolean;
};

type ActionType = {
  type: string;
};

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'page1':
      return {
        ...state,
        page1: true,
        page2: false,
        page3: false,
        page4: false,
      };
    case 'page2':
      return {
        ...state,
        page1: false,
        page2: true,
        page3: false,
        page4: false,
      };
    case 'page3':
      return {
        ...state,
        page1: false,
        page2: false,
        page3: true,
        page4: false,
      };
    case 'page4':
      return {
        ...state,
        page1: false,
        page2: false,
        page3: false,
        page4: true,
      };
    default:
      return state;
  }
}

export default function ThumbNails() {
  const initialState: StateType = { page1: true, page2: false, page3: false, page4: false };
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = dataJson;
  return (
    <section>
      <section className=" xl:w-4/5 lg:mx-auto md:mt-10 my-8 border border-transparent border-b-gray-400  pb-16 ">
        {state.page1 && <Thumb data={data} />}
        {state.page2 && <Thumb data={data} />}
        {state.page3 && <Thumb data={data} />}
        {state.page4 && <Thumb data={data} />}
      </section>
      <section className="xl:w-4/5 mx-auto flex justify-center items-center mb-8">
        <p className={`${jakartaMedium.className} mr-4 lg:text-lg `}>Página</p>
        <button
          className={`${jakartaMedium.className} mr-4 lg:text-lg w-10  ${
            state.page1
              ? 'border rounded-md p-2 border-sky-500 text-sky-500'
              : 'border-transparent p-2'
          }`}
          onClick={() => {
            dispatch({ type: 'page1' });
          }}
        >
          1
        </button>
        <button
          className={`${jakartaMedium.className} mr-4 lg:text-lg w-10  ${
            state.page2
              ? 'border rounded-md p-2 border-sky-500 text-sky-500'
              : 'border-transparent p-2'
          }`}
          onClick={() => {
            dispatch({ type: 'page2' });
          }}
        >
          2
        </button>
        <button
          className={`${jakartaMedium.className} mr-4 lg:text-lg w-10  ${
            state.page3
              ? 'border rounded-md p-2 border-sky-500 text-sky-500'
              : 'border-transparent p-2'
          }`}
          onClick={() => {
            dispatch({ type: 'page3' });
          }}
        >
          3
        </button>
        <button
          className={`${jakartaMedium.className} lg:text-lg w-10  ${
            state.page4
              ? 'border rounded-md p-2 border-sky-500 text-sky-500'
              : 'border-transparent p-2'
          }`}
          onClick={() => {
            dispatch({ type: 'page4' });
          }}
        >
          4
        </button>
      </section>
    </section>
  );
}
