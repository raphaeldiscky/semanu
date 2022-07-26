import * as prismicH from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

import { Bounded } from '../../components/Bounded'

const TextWithImage = ({ slice }) => {
  const image = slice.primary.image

  return slice.variation === 'leftImage' ? (
    <Bounded as='section' className='bg-white'>
      <div className='flex items-center justify-center -md:flex-col-reverse'>
        <div className='w-full md:mr-[16px] md:w-1/2 -md:mt-[32px]'>
          {prismicH.isFilled.image(image) && (
            <div className='bg-gray-100'>
              <PrismicNextImage field={image} layout='responsive' />
            </div>
          )}
        </div>
        <div className='w-full md:ml-[16px] md:w-1/2'>
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </Bounded>
  ) : (
    <Bounded as='section' className='bg-white'>
      <div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2'>
        <div>
          <PrismicRichText field={slice.primary.text} />
        </div>
        <div>
          {prismicH.isFilled.image(image) && (
            <div className='bg-gray-100'>
              <PrismicNextImage field={image} layout='responsive' />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  )
}

export default TextWithImage
