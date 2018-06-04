import ServerApi from "../api/ServerAPI";
import accessTokenStorage from "../helpers/AccessTokenStorage"

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";

export const signUp = data => dispatch => {
  const Api = new ServerApi();

  dispatch({ type: AUTH_REQUEST });

  Api
    .post("/signup", data)
    .then(({ token }) => {
      dispatch({ type: AUTH_SUCCESS });

      accessTokenStorage.set(token)
    })
    .catch(e => {
      dispatch({ type: AUTH_ERROR });
      console.log(e);
    });
};

export const signIn = data => dispatch => {
  const Api = new ServerApi();

  dispatch({ type: AUTH_REQUEST });

  Api
    .post("/signin", data)
    .then(({ token }) => {
      dispatch({ type: AUTH_SUCCESS });

      accessTokenStorage.set(token)
    })
    .catch(e => {
      dispatch({ type: AUTH_ERROR });
      console.log(e);
    });
};
