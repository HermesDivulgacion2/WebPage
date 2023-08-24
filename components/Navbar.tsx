import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='fixed h-24 w-full top-0 backdrop-blur-md'>
      <ul className='w-full h-full flex flex-row items-center justify-evenly'>
        <li className='text-white font-bold pointer'>
          <Link href='#'>Inicio</Link>
        </li>
        <li className='text-white font-bold pointer'>
          <Link href='#'>Galeria</Link>
        </li>
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
