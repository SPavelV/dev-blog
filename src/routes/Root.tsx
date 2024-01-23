import { Outlet } from 'react-router-dom';
import { Aside, Intro, ThoughtList, ProjectList } from '../components';

export const Root = () => {
  return (
    <div className='root'>
      <Aside />
      <div className='content'>
        <Intro />
        <ProjectList />
        <ThoughtList />
        <Outlet />
      </div>
    </div>
  );
};
