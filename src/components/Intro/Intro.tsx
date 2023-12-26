import avatar from '../../assets/images/avatar.jpg';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';
import classNames from 'classnames';

import './style.css';

export const Intro = () => {
  const isMain = useMatch('');

  return (
    <figure className={classNames('intro', { 'intro-in': !isMain })}>
      <img className='image' src={avatar} alt='Фоточка' />

      <figcaption>
        {isMain ? (
          <h1 className='title'>
            Привет, я Павел Соловьев фронтенд-разработчик из Ижевска
          </h1>
        ) : (
          <h1 className='title'>Павел Соловьев</h1>
        )}
        {isMain && (
          <>
            <p className='caption'>
              Прямо сейчас я только что запустил этот минимальный шаблон
              портфолио, который вы просматриваете. Я также работаю над
              собственными проектами, делюсь своими мыслями в блоге и
              документирую свое путешествие в Твиттере.
            </p>
            <Link to='contacts'>Свяжитесь со мной →</Link>
          </>
        )}
      </figcaption>
    </figure>
  );
};
