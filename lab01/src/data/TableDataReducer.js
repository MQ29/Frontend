export default function TableDataReducer(state, action) {
    switch (action.type) {
      case "sort_ascending":
        return [...state].sort((a, b) => a.comments.length - b.comments.length);
      case "sort_descending":
        return [...state].sort((a, b) => b.comments.length - a.comments.length);
      case "reset":
        return action.initialData; 
      default:
        return state;
    }
  }
  