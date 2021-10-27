import React from 'react'
import { BiError } from 'react-icons/bi'
import style from './ErrorMessage.module.css'

export interface Props {
  message: string
}

const ErrorMessage: React.FC<Props> = ({ message }) => (
  <div className={style.error}>
    <BiError />
    <span>{message}</span>
  </div>
)

export default ErrorMessage
