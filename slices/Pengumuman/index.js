import React from 'react'
import { PrismicImage, PrismicRichText } from '@prismicio/react'

const Pengumuman = ({ slice }) => {
  const { gambar, lokasi, tanggal, jam, catatan } = slice.primary

  return (
    <section>
      <span className='title'>
        <PrismicRichText field={slice.primary.title} />
      </span>
      <span className='mt-[20px]'>
        <PrismicRichText field={slice.primary.description} />
      </span>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        <PrismicImage field={gambar} layout='responsive' />
        <div className='mx-2 text-left'>
          <h2 className='my-5'>
            <span className='mr-[18px] font-bold'>Lokasi</span>: {lokasi}
          </h2>
          <h2 className='my-5'>
            <span className='mr-[6px] font-bold'>Tanggal</span>: {tanggal}
          </h2>
          <h2 className='my-5'>
            <span className='mr-[35px] font-bold'>Jam</span>: {jam}
          </h2>
          <h2 className='my-5'>
            <span className='mr-[6px] font-bold'>Catatan</span>: {catatan}
          </h2>
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
