import { Link } from 'react-router-dom';
import './style.css';

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
    <section className='thought-card'>
      <h3 className='title'>{title}</h3>
      <Link to={link}>{linkText} →</Link>
    </section>
  );
};
