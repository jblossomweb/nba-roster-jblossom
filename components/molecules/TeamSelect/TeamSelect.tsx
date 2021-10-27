import React, { useState } from 'react'
import clsx from 'clsx'
import { Listbox } from '@headlessui/react'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'

import type { Team } from '../../../models'
import NbaLogo from '../../atoms/NbaLogo'
import TeamLogo from '../../atoms/TeamLogo'
import style from './TeamSelect.module.css'

export type Props = {
  teams?: Team[],
  value?: string,
  disabled?: boolean,
  onChange: React.ChangeEventHandler<HTMLSelectElement>,
}

type TeamOption = Team | null

const TeamSelect: React.FC<Props> = ({
  teams = [],
  value = 'ALL',
  disabled = false,
  onChange,
}) => {
  const ctrl: TeamOption = (
    value === 'ALL' ? null : teams.find(t => t.ta === value) || null
  )
  const [selected, setSelected] = useState(ctrl)

  const handleSelect = (option: TeamOption) => {
    const value: string = option ? option.ta : 'ALL'
    const event = { target: { value } } as React.ChangeEvent<HTMLSelectElement>
    setSelected(option) // set shadow state
    onChange(event) // expose onChange api
  }

  const renderOption = (team: TeamOption) => (
    <Listbox.Option
      key={team ? team.ta : 'ALL'}
      value={team}
      className={({ active }) => clsx(
        active ? style.active : style.inactive,
        style.option
      )}
    >
      {({ selected, active }) => (
        <>
          <div className={style.centered}>
            <span className={style.logo}>
              {team ? (
                <TeamLogo team={team} width={24} height={24} />
              ) : (
                <NbaLogo width={12} height={24} />
              )}
            </span>
            <span
              className={clsx(
                selected ? 'font-semibold' : 'font-normal',
                style.optiontext
              )}>
              {team ? `${team.city} ${team.name}` : 'All Teams'}
            </span>
          </div>

          {selected && (
            <span
              className={clsx(
                active ? 'text-white' : 'text-indigo-600',
                style.inset,
              )}
            >
              <AiOutlineCheck className={style.check} aria-hidden="true" />
            </span>
          )}
        </>
      )}
    </Listbox.Option>
  )

  return (
    <div className={style.wrapper}>
      <Listbox value={selected} onChange={handleSelect} disabled={disabled}>
        <div className="mt-1 relative">
          <Listbox.Button className={style.button}>
            <span className={style.centered}>
              <span className={style.logo}>
                {selected ? (
                  <TeamLogo team={selected} width={24} height={24} />
                ) : (
                  <NbaLogo width={12} height={24} />
                )}
              </span>
              <span className={style.optiontext}>
                {selected ? `${selected.city} ${selected.name}` : 'All Teams'}
              </span>
            </span>
            <span className={style.dropdown}>
              <IoIosArrowDown className={style.arrow} aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Listbox.Options className={style.options}>
            {renderOption(null)}
            {teams.map(renderOption)}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}

export default TeamSelect
