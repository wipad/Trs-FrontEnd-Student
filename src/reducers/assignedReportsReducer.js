export const initState = {
      array: []
};

const assignedReportsReducer = (state = initState, action) => {
      switch (action.type) {
            //Change character name
            case 'ASSIGNEDREPORTS_CHANGE':
                  return {
                        ...state,
                        array: action.payload
                  }
            default:
                  return state
      }
}

export default assignedReportsReducer;