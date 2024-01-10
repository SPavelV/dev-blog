import { SectionTitle, ThoughtCard } from '../';

interface Thoughts {
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
    <div className='thought-list'>
      <SectionTitle title='Мысли' link='/thoughts' />

      {!!mockData.length &&
        mockData.map(({ id, title }: Thoughts) => (
          <ThoughtCard title={title} key={id} link={`/${id}`} />
        ))}
    </div>
  );
};
