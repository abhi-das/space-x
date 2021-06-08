const host = "https://space-x-apiv.herokuapp.com";
const version = "v1";

export const apiEndPoints = {
  signIn: `${host}/${version}/signin`,
  currentUser: `${host}/${version}/currentuser`,
  launches: `${host}/${version}/launches`,

  // signIn: `http://localhost:8011/v1/signin`,
  // currentUser: `http://localhost:8011/v1/currentuser`,
  // launches: `http://localhost:8011/v1/launches`,
};
