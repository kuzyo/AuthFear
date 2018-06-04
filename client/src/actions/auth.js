import ServerApi from "../api/ServerAPI";
export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";

export const signUp = data => dispatch => {
  const api = new ServerApi();

  dispatch({ type: AUTH_REQUEST });

  api
    .post("/signup", data)
    .then(response => console.log(response))
    .catch(e => console.log(e));
};

export const signIn = data => dispatch => {
  const api = new ServerApi();

  dispatch({ type: AUTH_REQUEST });

  api
    .post("/signin", data)
    .then(response => console.log(response))
    .catch(e => console.log(e));
};
