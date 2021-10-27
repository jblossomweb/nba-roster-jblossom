import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import logo from '../../images/logo.svg'
import style from './MainTemplate.module.css'

export interface Props {
  children: React.ReactChild
}

const MainTemplate: React.FC<Props> = ({
  children,
}) => (
  <main role="main" className={style.main}>
    <div className={style.card}>
      <div className={style.header}>
        <div className={style.left}>
          <Link href="/" as="/" passHref>
            <a aria-label="Home" title="Home">
              <Image src={logo} alt={`NBA`} priority />
            </a>
          </Link>
          <Link href="/teams" as="/teams" passHref>
            <a aria-label="Teams" title="Teams">
              Teams
            </a>
          </Link>
        </div>
        <div className={style.right}>
          <Link href="/search" as="/search" passHref>
            <a aria-label="Search" title="Search">
              <BsSearch />
            </a>
          </Link>
        </div>
      </div>
      <div className={style.inner}>
        {children}
      </div>
    </div>
  </main>
)

export default MainTemplate
