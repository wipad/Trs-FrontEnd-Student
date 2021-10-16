export const initState = {
      studentId: "59180030",
};

const userReducer = (state = initState, action) => {
      switch (action.type) {
            //Change character name
           
          
            case 'STUDENTID_CHANGE':
                  return {
                        ...state,
                        studentId: action.payload
                  }
           
            default:
                  return state
      }
}

export default userReducer;