import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/love.png'

export type Props = {
  width?: number,
  height?: number,
  role?: 'img' | 'presentation'
}

const NbaLove: React.FC<Props> = ({
  width = 300,
  height = 240,
  role = 'img',
}) => (
  <Image
    src={logo}
    alt={'I Love This Game!'}
    title={'I Love This Game!'}
    aria-label={'I Love This Game!'}
    role={role}
    width={width}
    height={height}
    priority
  />
)

export default NbaLove
