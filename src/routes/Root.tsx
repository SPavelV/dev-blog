import { Outlet } from 'react-router-dom';
import { Aside, Intro } from '../components';

export const Root = () => {
  return (
    <div className='root'>
      <Aside />
      <div className='content'>
        <Intro />
        <Outlet />
      </div>
    </div>
  );
};
