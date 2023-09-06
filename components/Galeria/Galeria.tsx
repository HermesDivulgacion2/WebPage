'use client';
import React from 'react';
import Image from 'next/image';
import HermesImage from '../../assets/images/Hermes_image_1.jpg';
import { Gallery } from 'next-gallery';
const images = [
  { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16/9 },
  { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16/9 },
  { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16/9 },
  { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16/9 },
  { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16/9 },
  { src: "https://picsum.photos/id/1016/1920/1080/", aspect_ratio: 16/9 },
  { src: "https://picsum.photos/id/1019/1920/1080/", aspect_ratio: 16/9 },
  { src: "https://picsum.photos/id/1020/1920/1080/", aspect_ratio: 16/9 },

]
const widths = [ 500, 1000, 1600,1600 ]
const ratios = [ 2.2, 4, 6, 8 ]
export default function Galeria() {
  return (
    <section
      id='Galeria'
      className='w-full flex flex-row gap-5 justify-center p-10 items-center '
    > 
      <div className='w-full flex flex-col gap-2  mb-10'>
        <h1 className='text-6xl text-start font-bold'>Galeria</h1>
        <p>Estos son solo algunos de los eventos que hemos llevado a cabo</p>
        <button className='rounded-md w-full font-bold text-lg py-2 bg-blue-600 text-white mt-4'>
          Ver más
        </button>
      </div>
      <div className='w-full' >
        <Gallery {...{images, widths, ratios}} />
      </div>
    </section>

  );
}
