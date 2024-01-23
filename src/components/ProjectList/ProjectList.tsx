import { SectionTitle, Card } from '..';
import styles from './projectList.module.css';

interface Link {
  href: string;
  text?: string;
}

interface Project {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  link: Link;
}

const mockData = [
  {
    id: 1,
    date: '2023-12-12',
    title: 'minilio',
    subtitle: 'A minimal portfolio template built on Framer',
    link: {
      href: 'https://some-link.ru',
      text: 'buy this template',
    },
  },
  {
    id: 2,
    date: '2023-12-12',
    title: 'minilio',
    subtitle: 'A minimal portfolio template built on Framer',
    link: {
      href: 'https://staredown.netlify.app',
      text: 'staredown.netlify.app',
    },
  },
  {
    id: 3,
    date: '2020-10-03',
    title: '88pixels',
    subtitle: 'A collection of cross-platform website templates.',
    link: {
      href: 'https://88pixels.framer.website.ru',
      text: '88pixels.framer.website',
    },
  },
];

export const ProjectList = () => {
  return (
    <div className={styles.projectList}>
      <SectionTitle title='Проекты' link='/projects' />

      {!!mockData.length && (
        <ul className={styles.list}>
          {mockData.map(({ id, date, title, subtitle, link }: Project) => (
            <li className={styles.item} key={id}>
              <Card
                date={date}
                title={title}
                subtitle={subtitle}
                link={link.href}
                linkText={link.text}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
