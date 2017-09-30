const classReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE':
      state = action.payload;
      break;
    default:
      break;
  }

  return state;
};

export default classReducer;
