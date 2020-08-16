export const API_BASE = `https://4.react.pages.academy/wtw`;

export const AppRoutes = {
  MAIN: `/`,
  MOVIE: `/film/:id`
};

export const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const ResponseCodes = {
  UNAUTHORIZED: 401,
  SUCCESS: 200
};

export const RECOMENDED_MOVIES_LIMIT = 4;

export const MovieTabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const tabs = [
  `Overview`,
  `Details`,
  `Reviews`
];

export const INITIAL_MOVIES_LIMIT = 8;

export const MOVIES_LIMIT_ADD_STEP = 8;

export const LoginErrorMesseges = {
  EMAIL: `Please enter a valid email address`,
  PASSWORD: `Sorry, the password is too short`,
  LOGIN_FAILED: `We can’t recognize this email and password combination. Please try again.`
};
