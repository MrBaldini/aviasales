import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'antd';
import cn from 'classnames';

import { visibilityTickets } from '../../store/actions';

import classes from './show-more-btn.module.scss';

const ShowMoreBtn = () => {
  const dispatch = useDispatch();
  const isTicketsEmpty = useSelector((state) => state.visibilityTickets.empty);
  const renders = useSelector((state) => state.ticketsLoad.renders);

  function onShowMore() {
    dispatch(visibilityTickets());
  }

  if (isTicketsEmpty) {
    return <Alert description="Рейсов, подходящих под заданные фильтры, не найдено." type="info" />;
  }
  if (!renders) return null;

  return (
    <button className={cn(classes['content__show-more'])} onClick={onShowMore}>
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  );
};

export default ShowMoreBtn;
