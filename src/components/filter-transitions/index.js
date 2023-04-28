import classes from './filter-transitions.module.scss';

const FilterTransitions = () => {
  return (
    <aside className={classes.main__aside}>
      <span className={classes.aside__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <div className={`${classes['aside__filter-all']} ${classes['filter-item']}`}>
        <input className={`${classes['filter-all__input']} ${classes['item-input']}`} type="checkbox" name="all" />
        <label className={`${classes['filter-all__label']} ${classes['item-label']}`} htmlFor="all">
          Все
        </label>
      </div>
      <div className={`${classes['aside__filter-off']} ${classes['filter-item']}`}>
        <input className={`${classes['filter-off__input']} ${classes['item-input']}`} type="checkbox" name="off" />
        <label className={`${classes['filter-off__label']} ${classes['item-label']}`} htmlFor="off">
          Без пересадок
        </label>
      </div>
      <div className={`${classes['aside__filter-one']} ${classes['filter-item']}`}>
        <input className={`${classes['filter-one__input']} ${classes['item-input']}`} type="checkbox" name="one" />
        <label className={`${classes['filter-one__label']} ${classes['item-label']}`} htmlFor="one">
          1 пересадка
        </label>
      </div>
      <div className={`${classes['aside__filter-two']} ${classes['filter-item']}`}>
        <input className={`${classes['filter-two__input']} ${classes['item-input']}`} type="checkbox" name="two" />
        <label className={`${classes['filter-two__label']} ${classes['item-label']}`} htmlFor="two">
          2 пересадки
        </label>
      </div>
      <div className={`${classes['aside__filter-three']} ${classes['filter-item']}`}>
        <input className={`${classes['filter-three__input']} ${classes['item-input']}`} type="checkbox" name="three" />
        <label className={`${classes['filter-three__label']} ${classes['item-label']}`} htmlFor="three">
          3 пересадки
        </label>
      </div>
    </aside>
  );
};

export default FilterTransitions;
