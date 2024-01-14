import { Link } from 'react-router-dom';
import styles from './thoughtCard.module.css';

interface ThoughtCardProps {
  title: string;
  link: string;
  linkText?: string;
}

export const ThoughtCard = ({
  title,
  link,
  linkText = 'Читать',
}: ThoughtCardProps) => {
  return (
    <section className={styles.thoughtCard}>
      <h3 className={styles.title}>{title}</h3>
      <Link to={link}>{linkText} →</Link>
    </section>
  );
};
