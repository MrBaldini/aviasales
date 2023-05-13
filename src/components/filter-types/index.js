import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import * as actions from '../../store/actions';

import classes from './filter-types.module.scss';

const FilterTypes = () => {
  const dispatch = useDispatch();
  const { cheap, fast, visibilityTicketsDefault } = actions;
  const { btnCheap, btnFast } = useSelector((state) => state.sorting.filterTypeTickets);

  function setCheapFilter() {
    dispatch(visibilityTicketsDefault());
    dispatch(cheap());
  }
  function setFastFilter() {
    dispatch(visibilityTicketsDefault());
    dispatch(fast());
  }

  return (
    <nav className={classes.content__nav}>
      <button className={cn(classes['nav__cheap-btn'], classes['nav-btn'], classes[btnCheap])} onClick={setCheapFilter}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className={cn(classes['nav__fast-btn'], classes['nav-btn'], classes[btnFast])} onClick={setFastFilter}>
        САМЫЙ БЫСТРЫЙ
      </button>
    </nav>
  );
};

export default FilterTypes;
