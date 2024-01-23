import { SectionTitle, ThoughtCard } from '../';
import styles from './thoughtList.module.css';

interface Thought {
  id: number;
  title: string;
}

const mockData = [
  {
    id: 1,
    title: 'The Importance of UX in Website Design',
  },
  {
    id: 1,
    title: '5 Essential Web Design Tools You Need',
  },
  {
    id: 1,
    title: 'Responsive Web Design: Why It Matters',
  },
];

export const ThoughtList = () => {
  return (
    <div className={styles.thoughtList}>
      <SectionTitle title='Мысли' link='/thoughts' />

      {!!mockData.length && (
        <ul className={styles.list}>
          {mockData.map(({ id, title }: Thought) => (
            <li className={styles.item} key={id}>
              <ThoughtCard title={title} link={`/${id}`} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
