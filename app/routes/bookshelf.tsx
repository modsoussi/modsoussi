import type { ReactNode } from "react";
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => ({
  title: "Bookshelf",
})

const BOOK_LIST = [
  'The Quran',
  'His Dark Materials',
  'Seveneves',
  'Creativity, Inc',
  'The Three-Body Trilogy',
  'Foundation',
  'Gödel, Escher, Bach',
  'Zero to One',
  'The Beginning of Infinity',
  'A Brief History of Time',
  'The Dream Machine',
  'La Fortune de Gaspard',
  'Build',
]

type BookshelfItemProps = {
  children: ReactNode | Array<ReactNode>,
}

const BookshelfItem = ({ children }: BookshelfItemProps) => (
  <li className="list-inside list-disc ml-2">
    {children}
  </li>
)

export default function Bookshelf() {
  return (
    <main>
      <p>
        I like to read, and I&apos;m deeply grateful to my parents for that. 
        I'm not going to list every single book I&apos;ve read as that would be meaningless. Instead, I&apos;m only including
        those that played a key role in shaping who I am and how I think.
      </p>
      <ul className="my-2">
        {BOOK_LIST.map((book, index) => (
          <BookshelfItem key={`book_${index}`}>{book}</BookshelfItem>
        ))}
      </ul>
    </main>
  );
}