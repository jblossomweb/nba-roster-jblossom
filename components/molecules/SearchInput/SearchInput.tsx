import React, { useState } from 'react'
import clsx from 'clsx'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import style from './SearchInput.module.css'

export type Props = {
  value?: string,
  placeholder?: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
}

const SearchInput: React.FC<Props> = ({
  value = '',
  placeholder = 'Search',
  onChange,
}) => {
  // shadow state for internal UX
  const [state, setState] = useState({ value })

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setState({ value: event.target.value })
    onChange(event) // expose onChange api
  }

  const handleReset: React.MouseEventHandler<SVGElement> = () => {
    handleChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>)
  }

  const handleKeydown: React.KeyboardEventHandler<HTMLInputElement> =
    ({ key, target }) => {
      if (key === 'Escape') {
        handleReset({ target } as React.MouseEvent<SVGElement>)
      }
    }

  return (
    <div className={style.wrapper}>
      <BsSearch className={style.icon} />
      <input
        className={style.input}
        type="text"
        placeholder={placeholder}
        value={state.value}
        onChange={handleChange}
        onKeyDown={handleKeydown}
      />
      {!!state.value?.length && (
        <AiOutlineCloseCircle
          className={clsx(style.icon, style.close)}
          onClick={handleReset}
        />
      )}
    </div>
  )
}

export default SearchInput
