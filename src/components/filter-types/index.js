import classes from './filter-types.module.scss';

const FilterTypes = () => {
  return (
    <nav className={classes.content__nav}>
      <button className={`${classes['nav__cheap-btn']} ${classes['nav-btn']}`}>САМЫЙ ДЕШЕВЫЙ</button>
      <button className={`${classes['nav__fast-btn']} ${classes['nav-btn']}`}>САМЫЙ БЫСТРЫЙ</button>
      <button className={`${classes['nav__optimal-btn']} ${classes['nav-btn']}`}>ОПТИМАЛЬНЫЙ</button>
    </nav>
  );
};

export default FilterTypes;
