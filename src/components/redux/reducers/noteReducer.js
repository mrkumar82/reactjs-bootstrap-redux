const initialState = {
  data: [
    {
      id: new Date().toString(),
      title: 'This is my first title',
      description: 'This is my first description',
      color: '#eee',
      date: new Date().toString(),
    },
  ],
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NOTES':
      return state;
    case 'POST_NOTES':
      return { ...state, data: [...state.data, action.payload] };
    case 'DELETE_NOTES':
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
