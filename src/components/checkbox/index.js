import cn from 'classnames';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/actions';
import { checkboxPropsExtractor } from '../../services/functions';

import classes from './checkbox.module.scss';

const Checkbox = ({ btnProps }) => {
  const {
    transitionsAll,
    transitionsNone,
    transitionsOne,
    transitionsTwo,
    transitionsThree,
    visibilityTicketsDefault,
  } = actions;
  const dispatch = useDispatch();
  const events = [
    function setCheckboxAll() {
      dispatch(visibilityTicketsDefault());
      dispatch(transitionsAll());
    },
    function setCheckboxNone() {
      dispatch(visibilityTicketsDefault());
      dispatch(transitionsNone());
    },
    function setCheckboxOne() {
      dispatch(visibilityTicketsDefault());
      dispatch(transitionsOne());
    },
    function setCheckboxTwo() {
      dispatch(visibilityTicketsDefault());
      dispatch(transitionsTwo());
    },
    function setCheckboxThree() {
      dispatch(visibilityTicketsDefault());
      dispatch(transitionsThree());
    },
  ];
  const props = checkboxPropsExtractor(btnProps, events);

  return (
    <>
      <input
        className={cn(classes[props.inputClassName], classes['item-input'])}
        type="checkbox"
        name={props.btnName}
        checked={btnProps.checked}
        onChange={props.event}
      />
      <label
        className={cn(classes[props.labelClassName], classes['item-label'])}
        htmlFor="filter-all"
        onClick={props.event}
      >
        {props.label}
      </label>
    </>
  );
};

export default Checkbox;
