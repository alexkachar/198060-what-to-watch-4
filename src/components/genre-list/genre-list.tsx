import * as React from 'react';
interface Props {
  genres: string[];
  onGenreSelect: (genre: string) => void;
}

const GenreList = (props: Props) => {
  const {genres, onGenreSelect} = props;
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className="catalog__genres-item catalog__genres-item--active" key={genre}>
          <a className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onGenreSelect(genre);
          }}>
            {genre}
          </a>
        </li>
      ))}

    </ul>
  );
};

export default GenreList;
