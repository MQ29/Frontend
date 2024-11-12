// data/AppReducer.js
export default function AppReducer(state, action) {
    switch (action.type) {
      case "edit": {
        if (!action.item || action.item.id === undefined) {
          console.error("Action 'edit' is missing 'item' or 'item.id'");
          return state;
        }
        return state.map(item =>
          item.id === action.item.id ? { ...item, ...action.item } : item
        );
      }
  
      case "add": {
        if (!action.item) {
          console.error("Action 'add' is missing 'item'");
          return state;
        }
        return [...state, action.item];
      }
  
      case "delete": {
        if (action.id === undefined) {
          console.error("Action 'delete' is missing 'id'");
          return state;
        }
        return state.filter(item => item.id !== action.id);
      }
  
      case "rate": {
        if (action.id === undefined || action.rating === undefined) {
          console.error("Action 'rate' is missing 'id' or 'rating'");
          return state;
        }
        return state.map(item =>
          item.id === action.id ? { ...item, rating: action.rating } : item
        );
      }
  
      default:
        return state;
    }
  }
  