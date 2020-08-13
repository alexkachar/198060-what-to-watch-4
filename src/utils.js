export const extend = (a, b) => Object.assign({}, a, b);

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
