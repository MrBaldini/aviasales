import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import * as actions from '../../store/actions';

import classes from './filter-transitions.module.scss';

const FilterTransitions = () => {
  const {
    transitionsAll,
    transitionsNone,
    transitionsOne,
    transitionsTwo,
    transitionsThree,
    visibilityTicketsDefault,
  } = actions;

  const dispatch = useDispatch();
  const checkBox = useSelector((state) => state.sorting.filterTransitions);
  const { btnAll, btnNone, btnOne, btnTwo, btnThree } = checkBox;

  function setCheckboxAll() {
    dispatch(visibilityTicketsDefault());
    dispatch(transitionsAll());
  }
  function setCheckboxNone() {
    dispatch(visibilityTicketsDefault());
    dispatch(transitionsNone());
  }
  function setCheckboxOne() {
    dispatch(visibilityTicketsDefault());
    dispatch(transitionsOne());
  }
  function setCheckboxTwo() {
    dispatch(visibilityTicketsDefault());
    dispatch(transitionsTwo());
  }
  function setCheckboxThree() {
    dispatch(visibilityTicketsDefault());
    dispatch(transitionsThree());
  }

  return (
    <aside className={classes.main__aside}>
      <span className={classes.aside__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <div className={cn(classes['aside__filter-all'], classes['filter-item'])}>
        <input
          className={cn(classes['filter-all__input'], classes['item-input'])}
          type="checkbox"
          name="filter-all"
          checked={btnAll.checked}
          onChange={setCheckboxAll}
        />
        <label
          className={cn(classes['filter-all__label'], classes['item-label'])}
          htmlFor="filter-all"
          onClick={setCheckboxAll}
        >
          Все
        </label>
      </div>
      <div className={cn(classes['aside__filter-off'], classes['filter-item'])}>
        <input
          className={cn(classes['filter-off__input'], classes['item-input'])}
          type="checkbox"
          name="filter-none"
          checked={btnNone.checked}
          onChange={setCheckboxNone}
        />
        <label
          className={cn(classes['filter-off__label'], classes['item-label'])}
          htmlFor="filter-none"
          onClick={setCheckboxNone}
        >
          Без пересадок
        </label>
      </div>
      <div className={cn(classes['aside__filter-one'], classes['filter-item'])}>
        <input
          className={cn(classes['filter-one__input'], classes['item-input'])}
          type="checkbox"
          name="filter-one"
          checked={btnOne.checked}
          onChange={setCheckboxOne}
        />
        <label
          className={cn(classes['filter-one__label'], classes['item-label'])}
          htmlFor="filter-none"
          onClick={setCheckboxOne}
        >
          1 пересадка
        </label>
      </div>
      <div className={cn(classes['aside__filter-two'], classes['filter-item'])}>
        <input
          className={cn(classes['filter-two__input'], classes['item-input'])}
          type="checkbox"
          name="filter-two"
          checked={btnTwo.checked}
          onChange={setCheckboxTwo}
        />
        <label
          className={cn(classes['filter-two__label'], classes['item-label'])}
          htmlFor="filter-two"
          onClick={setCheckboxTwo}
        >
          2 пересадки
        </label>
      </div>
      <div className={cn(classes['aside__filter-three'], classes['filter-item'])}>
        <input
          className={cn(classes['filter-three__input'], classes['item-input'])}
          type="checkbox"
          name="filter-three"
          checked={btnThree.checked}
          onChange={setCheckboxThree}
        />
        <label
          className={cn(classes['filter-three__label'], classes['item-label'])}
          htmlFor="filter-three"
          onClick={setCheckboxThree}
        >
          3 пересадки
        </label>
      </div>
    </aside>
  );
};

export default FilterTransitions;
