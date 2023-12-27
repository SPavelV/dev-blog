import { Link } from 'react-router-dom';
import './style.css';
import dayjs from 'dayjs';

interface CardProps {
  title: string;
  date: string;
  link: string;
  linkText?: string;
  description?: string;
}

export const Card = ({
  title,
  date = '2023-12-27 19:18',
  link,
  linkText = 'Подробнее',
  description,
}: CardProps) => {
  return (
    <section className='card'>
      <div className='head'>
        <h2>{title}</h2>
        <time className='date' dateTime={date}>{dayjs(date).format('YYYY')}</time>
      </div>
      <p className='description'>{description}</p>
      <Link to={link}>{linkText} →</Link>
    </section>
  );
};
