import { useSelector } from 'react-redux';
import cn from 'classnames';

import Checkbox from '../checkbox';

import classes from './filter-transitions.module.scss';

const FilterTransitions = () => {
  const checkboxState = useSelector((state) => state.sorting.filterTransitions);
  const entries = Object.entries(checkboxState);

  const checkboxes = entries.map((el, i) => {
    const btnProps = el[1];
    const divClassName = btnProps.divClassName;

    return (
      <div key={i} className={cn(classes[divClassName], classes['filter-item'])}>
        <Checkbox btnProps={btnProps} />
      </div>
    );
  });

  return (
    <aside className={classes.main__aside}>
      <span className={classes.aside__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      {checkboxes}
    </aside>
  );
};

export default FilterTransitions;
