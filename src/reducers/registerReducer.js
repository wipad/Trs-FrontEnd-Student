export const initState = {
      firstName: "",
      lastName: "",
      studentId: "",
      birthday: "",
      age: "",
      gender: "",
      idCardNumber: "",
      email: "",
      phoneNumber: "",
      faculty: "",
      branch: "",
      studentClass: "",
      address: "",
      internshipName: "",
      internshipPosition: "",
      internshipAddress: "",
      caretakerName: "",
      caretakerEmail: "",
      caretakerPhoneNumber: "",
};

const registerReducer = (state = initState, action) => {
      switch (action.type) {
            //Change character name


            case 'FIRSTNAME_CHANGE':
                  return {
                        ...state,
                        firstName: action.payload
                  }
            case 'LASTNAME_CHANGE':
                  return {
                        ...state,
                        lastName: action.payload
                  }
            case 'STUDENTID_CHANGE':
                  return {
                        ...state,
                        studentId: action.payload
                  }
            case 'BIRTHDAY_CHANGE':
                  return {
                        ...state,
                        birthday: action.payload
                  }
            case 'AGE_CHANGE':
                  return {
                        ...state,
                        age: action.payload
                  }
            case 'GENDER_CHANGE':
                  return {
                        ...state,
                        gender: action.payload
                  }
            case 'IDCARDNUMBER_CHANGE':
                  return {
                        ...state,
                        idCardNumber: action.payload
                  }
            case 'EMAIL_CHANGE':
                  return {
                        ...state,
                        email: action.payload
                  }
            case 'PHONENUMBER_CHANGE':
                  return {
                        ...state,
                        phoneNumber: action.payload
                  }
            case 'FACULTY_CHANGE':
                  return {
                        ...state,
                        faculty: action.payload
                  }
            case 'BRANCH_CHANGE':
                  return {
                        ...state,
                        branch: action.payload
                  }
            case 'STUDENTCLASS_CHANGE':
                  return {
                        ...state,
                        studentClass: action.payload
                  }
            case 'ADDRESS_CHANGE':
                  return {
                        ...state,
                        address: action.payload
                  }
            case 'INTERNSHIPNAME_CHANGE':
                  return {
                        ...state,
                        internshipName: action.payload
                  }
            case 'INTERNSHIPPOSITION_CHANGE':
                  return {
                        ...state,
                        internshipPosition: action.payload
                  }
            case 'INTERNSHIPADDRESS_CHANGE':
                  return {
                        ...state,
                        internshipAddress: action.payload
                  }
            case 'CARETAKERNAME_CHANGE':
                  return {
                        ...state,
                        caretakerName: action.payload
                  }
            case 'CARETAKEREMAIL_CHANGE':
                  return {
                        ...state,
                        caretakerEmail: action.payload
                  }
            case 'CARETAKERPHONENUMBER_CHANGE':
                  return {
                        ...state,
                        caretakerPhoneNumber: action.payload
                  }
            default:
                  return state
      }
}

export default registerReducer;