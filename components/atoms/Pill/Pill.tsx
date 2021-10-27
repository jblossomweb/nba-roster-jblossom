import React from 'react'
import clsx from 'clsx'
import Card from '../Card'
import css from './Pill.module.css'

export interface Props {
  children: React.ReactChild,
  width?: number,
  height?: number,
  className?: React.HTMLAttributes<HTMLElement>['className'],
  style?: React.CSSProperties,
}

const Pill: React.FC<Props> = ({
  children,
  width,
  height,
  className,
  style = {},
}) => (
  <Card
    className={clsx(css.pill, className)}
    width={width}
    height={height}
    style={style}
  >
    { children }
  </Card>
)

export default Pill
