import { Link } from 'react-router-dom';
import styles from './card.module.css';
import dayjs from 'dayjs';

interface CardProps {
  title: string;
  date: string;
  link: string;
  linkText: string;
  description?: string;
}

export const Card = ({
  title,
  date = '2023-12-27 19:18',
  link,
  linkText,
  description,
}: CardProps) => {
  return (
    <section className={styles.card}>
      <div className={styles.head}>
        <h3 className={styles.title}>{title}</h3>
        <time className={styles.date} dateTime={date}>
          {dayjs(date).format('YYYY')}
        </time>
      </div>
      <p className={styles.description}>{description}</p>
      <Link to={link}>{linkText && linkText} →</Link>
    </section>
  );
};
