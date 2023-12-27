import { Outlet } from 'react-router-dom';
import { Aside, Intro, Card } from '../components';

export const Root = () => {
  return (
    <div className='root'>
      <Aside />
      <div className='content'>
        <Intro />
        <Card
          title='Заголовок'
          link='/projects'
          linkText='ссылка на полное описание'
          description='Описание проекта. Описание проекта. Описание проекта. Описание проекта.'
          date='2023-12-27 22:18'
        />
        <Outlet />
      </div>
    </div>
  );
};
