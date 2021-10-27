import React from 'react'
import Image from 'next/image'
import logo from '../../../images/nextjs.svg'

export type Props = {
  width?: number,
  height?: number,
  role?: 'img' | 'presentation'
}

const NextLogo: React.FC<Props> = ({
  width = 80,
  height = 80,
  role = 'img',
}) => (
  <Image
    src={logo}
    alt={'Next.js'}
    title={'Next.js'}
    aria-label={'Next.js'}
    role={role}
    width={width}
    height={height}
    priority
  />
)

export default NextLogo
