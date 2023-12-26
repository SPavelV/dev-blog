import { NavLink } from 'react-router-dom';
import './style.css';

export const Aside = () => {
  return (
    <aside className='aside'>
      <nav>
        <ul className='list'>
          <li className='list-item'>
            <NavLink to='/' className='nav-link'>
              Главная
            </NavLink>
          </li>
          <li className='list-item'>
            <NavLink to='projects' className='nav-link'>
              Проекты
            </NavLink>
          </li>
          <li className='list-item'>
            <NavLink to='thoughts' className='nav-link'>
              Мысли
            </NavLink>
          </li>
          <li className='list-item'>
            <NavLink to='articles' className='nav-link'>
              Статьи
            </NavLink>
          </li>
          <li className='list-item'>
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
  );
};
