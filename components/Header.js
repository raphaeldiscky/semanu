import { PrismicLink, PrismicText } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { Bounded } from './Bounded'
import { useState } from 'react'
import Hamburger from './Hamburger'

export const Header = ({ navigation, settings }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Bounded as='header' yPadding='sm'>
      <div className='flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none'>
        <PrismicLink href='/' className='text-xl font-semibold tracking-tight'>
          <PrismicText field={settings.data.siteTitle} />
        </PrismicLink>
        <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <nav className='hidden lg:block'>
          <ul className='flex flex-wrap gap-6 md:gap-10'>
            {navigation.data?.links.map((item) => (
              <li
                key={prismicH.asText(item.label)}
                className='font-semibold tracking-tight text-slate-800'
              >
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isMenuOpen && (
        <nav className='mt-5 block lg:hidden'>
          <ul>
            {navigation.data?.links.map((item) => (
              <li
                key={prismicH.asText(item.label)}
                className='mb-4 text-center font-semibold tracking-tight text-slate-800'
              >
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </Bounded>
  )
}
