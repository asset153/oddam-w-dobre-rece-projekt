const initialState = {
  stepOneData: "",
  stepTwoData: "",
  stepThreeData: {
    location: "",
    whoDoYouWantHelps: "",
    optionalValueOrganization: "",
  },
  stepFourData: {
    street: "",
    city: "",
    postCode: "",
    phoneNumber: "",
    date: "",
    time: "",
    messFromDeliveryMan: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_STEP_ONE_DATA":
      return {
        ...state,
        stepOneData: action.payload,
      };
    case "SET_STEP_TWO_DATA":
      return {
        ...state,
        stepTwoData: action.payload,
      };
    case "SET_STEP_THREE_DATA":
      return {
        ...state,
        stepThreeData: action.payload,
      };
    case "SET_STEP_FOUR_DATA":
      return {
        ...state,
        stepFourData: action.payload,
      };
    default:
      throw new Error();
  }
}

export { reducer, initialState };
