import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import cn from 'classnames';

import FilterTransitions from '../filter-transitions';
import FilterTypes from '../filter-types';
import ShowMoreBtn from '../show-more-btn';
import TicketsList from '../tickets-list';

import classes from './app-main.module.scss';

const AppMain = () => {
  const loading = useSelector((state) => state.loaderDisplay.loading);
  const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;
  const spinner = loading ? <Spin className={classes.content__spinner} indicator={antIcon} /> : null;

  return (
    <div className={cn(classes.app__main)}>
      <FilterTransitions />
      <div className={cn(classes.main__content)}>
        <FilterTypes />
        {spinner}
        <TicketsList />
        <ShowMoreBtn />
      </div>
    </div>
  );
};

export default AppMain;
