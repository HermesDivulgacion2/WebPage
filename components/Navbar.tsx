import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/Logo.png'

export default function Navbar() {
  return (
    <nav className='fixed h-24 w-full grid grid-cols-3 top-0 backdrop-blur-md'>
      <ul className='z-20 w-full h-full col-start-1 flex flex-row items-center justify-evenly'>
        <li className='text-white font-bold pointer'>
          <Link href='#'>Inicio</Link>
        </li>
        <li className='text-white font-bold pointer'>
          <Link href='#galeria'>Galeria</Link>
        </li>
        </ul>
        <div className='z-10 absolute inset-0 flex w-screen justify-center h-fit py-6 items-center'>
          <Image height={140} width={140} className='shadow-lg rounded-full bg-[#294B92]' src={Logo} alt='Logo'/>
          {/* <div className=' w-64 h-64 rounded-full bg-white' >a</div> */}
        </div>
        <ul className='z-20 w-full h-full col-start-3 flex flex-row items-center justify-evenly'>
        <li className='text-white font-bold pointer'>
          <Link href='#'>Conocenos</Link>
        </li>
        <li className='text-white font-bold pointer'>
          <Link href='#'>Formulario de contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
