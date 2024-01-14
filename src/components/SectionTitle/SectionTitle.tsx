import { Link } from 'react-router-dom';
import styles from './sectionTitle.module.css';

interface SectionTitleProps {
  title?: string;
  link?: string;
  linkText?: string;
}

export const SectionTitle = ({
  title,
  link,
  linkText = 'Читать все',
}: SectionTitleProps) => {
  if (!title && !link) return null;
  return (
    <div className={styles.sectionTitle}>
      <h2>{title}</h2>
      {link && linkText && <Link to={link}>{linkText}</Link>}
    </div>
  );
};
