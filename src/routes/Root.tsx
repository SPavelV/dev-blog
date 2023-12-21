export const Root = () => {
  return (
    <div className='root'>
      <aside className='aside'>
        <nav>
          <ul>
            <li>
              <a href='' className='nav-link'>
                Проекты
              </a>
            </li>
            <li>
              <a href='' className='nav-link'>
                Мысли
              </a>
            </li>
            <li>
              <a href='' className='nav-link'>
                Статьи
              </a>
            </li>
            <li>
              <a href='' className='nav-link'>
                Связаться
              </a>
            </li>
          </ul>
        </nav>

        <section className='search'>
          <input type='text' className='search' />
        </section>
      </aside>
      <div className='content'></div>
    </div>
  );
};
