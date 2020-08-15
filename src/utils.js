export const extend = (a, b) => Object.assign({}, a, b);

export const reduceGenresList = (genres) => genres.length >= 10 ? genres : genres.slice(0, 10);

export const getGenresList = (movies) => {
  const genres = [...new Set(movies.map((movie) => movie.genre))].sort();
  genres.unshift(`All genres`);
  return genres;
};

export const formatMovie = (movie) => (
  {
    id: movie.id,
    title: movie.name,
    genre: movie.genre,
    posterImage: movie.poster_image,
    previewImage: movie.preview_image,
    backgroundImage: movie.background_image,
    backgroundColor: movie.background_color,
    videoLink: movie.video_link,
    previewVideoLink: movie.preview_video_link,
    description: movie.description,
    rating: movie.rating,
    scoresCount: movie.scores_count,
    director: movie.director,
    starring: movie.starring,
    runTime: movie.run_time,
    released: movie.released,
    isFavorite: movie.is_favorite,
  }
);

export const formatMovies = (movies) => movies.map((movie) => formatMovie(movie));

export const filterMoviesByGenre = (movies, genre) => movies.filter((movie) => movie.genre === genre);

export const excludeMovieById = (movies, movieId) => movies.filter((movie) => movie.id !== movieId);

export const reduceMovies = (movies, limit) => movies.length <= 4 ? movies : reduceMovies.slice(0, limit);

export const getSimilarMovies = (movies, genre) => reduceMovies(filterMoviesByGenre(movies, genre), 4);
