import Image from 'next/image';

export default function Headers() {
  return (
    <header className=" h-20 flex justify-center items-center">
      <div>
        <Image
          alt="Logo da empresa Leadster"
          src="/assets/headers/logo.png"
          width={150}
          height={150}
        />
      </div>
    </header>
  );
}
