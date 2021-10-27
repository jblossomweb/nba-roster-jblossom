import React from 'react'
import clsx from 'clsx'
import css from './Card.module.css'

export interface Props {
  children: React.ReactChild,
  width?: number,
  height?: number,
  className?: React.HTMLAttributes<HTMLElement>['className'],
  style?: React.CSSProperties,
}

const Card: React.FC<Props> = ({
  children,
  width,
  height,
  className,
  style = {},
}) => (
  <div
    className={clsx(css.card, className)}
    style={{
      width: width ? `${width}px` : undefined,
      height: height ? `${height}px` : undefined,
      ...style,
    }}
  >
    { children }
  </div>
)

export default Card
