import { push } from "connected-react-router";

export const signIn = () => (dispatch) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      dispatch(push("/book"));
    }, 3000)
  );
};

export const requestBooks = (query) => ({
  type: "REQUEST_BOOKS",
  query,
});
