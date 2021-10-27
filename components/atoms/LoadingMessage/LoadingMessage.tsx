import React from 'react'
import { IoMdBasketball } from 'react-icons/io'
import style from './LoadingMessage.module.css'

export interface Props {
  message: string
}

const LoadingMessage: React.FC<Props> = ({ message }) => (
  <div className={style.loading}>
    <IoMdBasketball className={style.spinner}/>
    <span>{message}</span>
  </div>
)

export default LoadingMessage
