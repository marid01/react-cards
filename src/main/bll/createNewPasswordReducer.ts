type InitStateType = typeof initState;

const initState = {};

export const createNewPasswordReducer = (
  state = initState,
  action: any
): InitStateType => {
  switch (action.type) {
    default:
      return state;
  }
};
