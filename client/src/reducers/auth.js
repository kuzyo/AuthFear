import { AUTH_SUCCESS, AUTH_REQUEST, AUTH_ERROR } from "../actions/auth"

const initialState = {
  isFetching: false,
  isError: false,
  authUser: null
}

const auth = (state = initialState, action) => {
  const { type, authUser } = action

  switch (type) {
    case AUTH_SUCCESS:
      return { ...state, authUser }
    default:
      return state;
  }
};

export default auth;
