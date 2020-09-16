
const initialState = {
  items: [],
  item: {}
};

export const FETCH_POSTS = 'FETCH_POSTS';


export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
