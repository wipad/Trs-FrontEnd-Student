export const initState = {
      isAuthenticated: false
};

const authReducer = (state = initState, action) => {
      switch (action.type) {
            //Change character name
            case 'AUTHENTICATED':
                  return {
                        ...state,
                        isAuthenticated: action.payload
                  }
            default:
                  return state
      }
}

export default authReducer;