import React, { useState } from 'react';

import { useClickOutside } from '../../hooks';

import style from './Filter.module.css';

const Filter = ({
  label,
  options,
  onFilter,
}: {
  label: string;
  options: string[];
  onFilter: (region: string) => void;
}): JSX.Element => {
  const [selected, setSelected] = useState(label);
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));

  const handleSelectRegion = (region: string): void => {
    setSelected(region);
    setOpen(false);
    onFilter(region);
  };

  return (
    <div ref={ref} className={style.filterContainer}>
      <button
        className={style.filterTrigger}
        onClick={() => setOpen((p) => !p)}
      >
        {selected}
        <i className='fa-sharp fa-solid fa-angle-down'></i>
      </button>
      <div className={style.filterOptions} data-visible={open}>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelectRegion(option)}
            className={style.filterOption}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
