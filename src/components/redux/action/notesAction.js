export const fetchNotes = () => {
  return {
    type: 'FETCH_NOTES',
  };
};

export const addNotes = (obj) => {
  return {
    type: 'POST_NOTES',
    payload: obj,
  };
};

export const deleteNote = (id) => {
  return {
    type: 'DELETE_NOTES',
    payload: id,
  };
};
