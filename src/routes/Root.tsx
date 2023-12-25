import { Outlet, NavLink } from 'react-router-dom';

export const Root = () => {
  return (
    <div className='root'>
      <aside className='aside'>
        <nav>
          <ul>
            <li>
              <NavLink to='projects' className='nav-link'>
                Проекты
              </NavLink>
            </li>
            <li>
              <NavLink to='thoughts' className='nav-link'>
                Мысли
              </NavLink>
            </li>
            <li>
              <NavLink to='articles' className='nav-link'>
                Статьи
              </NavLink>
            </li>
            <li>
              <NavLink to='contacts' className='nav-link'>
                Связаться
              </NavLink>
            </li>
          </ul>
        </nav>

        <section className='search'>
          <input type='text' className='search' />
        </section>
      </aside>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
};
