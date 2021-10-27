import React from 'react'
import Image from 'next/image'
import logo from '../../../images/logo-sm.svg'

export type Props = {
  width?: number,
  height?: number,
  role?: 'img' | 'presentation'
}

const NbaLogo: React.FC<Props> = ({
  width = 80,
  height = 80,
  role = 'img',
}) => (
  <Image
    src={logo}
    alt={'NBA'}
    title={'NBA'}
    aria-label={'NBA'}
    role={role}
    width={width}
    height={height}
    priority
  />
)

export default NbaLogo
