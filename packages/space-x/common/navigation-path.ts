const host = "https://space-x-apiv.herokuapp.com";
const version = "v1";
export const navigationPaths = {
  launch: "/launch",
  products: "/products",
  cart: "/cart",
  signin: "/signin",
  currentuser: "/currentuser",
  launches: "/launches",
};

export const apiEndPoints = {
  signIn: `${host}/${version}/${navigationPaths.signin}`,
  currentUser: `${host}/${version}/${navigationPaths.currentuser}`,
  launches: `${host}/${version}/${navigationPaths.launches}`,

  // signIn: `http://localhost:8011/v1/signin`,
  // currentUser: `http://localhost:8011/v1/currentuser`,
  // launches: `http://localhost:8011/v1/launches`,
};
