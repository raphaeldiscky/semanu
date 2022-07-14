import React from 'react'
import { PrismicImage, PrismicRichText } from '@prismicio/react'

const Pengumuman = ({ slice }) => {
  const { gambar, lokasi, tanggal, jam, catatan } = slice.primary

  return (
    <section className='w-[80%]'>
      <span className='title'>
        <PrismicRichText field={slice.primary.title} />
      </span>
      <div className='my-[20px]'>
        <PrismicRichText field={slice.primary.description} />
      </div>
      <div className='grid grid-cols-1'>
        <PrismicImage field={gambar} layout='responsive' />
        <div className='mx-2 text-left'>
          {lokasi && (
            <h2 className='my-5'>
              <span className='mr-[18px] font-bold'>Lokasi</span>: {lokasi}
            </h2>
          )}
          {tanggal && (
            <h2 className='my-5'>
              <span className='mr-[6px] font-bold'>Tanggal</span>: {tanggal}
            </h2>
          )}
          {jam && (
            <h2 className='my-5'>
              <span className='mr-[35px] font-bold'>Jam</span>: {jam}
            </h2>
          )}
          {catatan && (
            <h2 className='my-5'>
              <span className='mr-[6px] font-bold'>Catatan</span>: {catatan}
            </h2>
          )}
        </div>
      </div>
      <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
      `}</style>
    </section>
  )
}

export default Pengumuman
