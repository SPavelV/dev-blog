import { Link } from 'react-router-dom';
import './style.css';

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
    <div className='section-title'>
      <h3>{title}</h3>
      {link && linkText && <Link to={link}>{linkText}</Link>}
    </div>
  );
};
