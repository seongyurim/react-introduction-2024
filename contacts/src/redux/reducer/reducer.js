const initialState = {
  contactList: [],
  filteredList: [],
  keyword: ""
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case "ADD_CONTACT":
      const newContactList = [
        ...state.contactList,
        {
          id: payload.id,
          name: payload.name,
          phoneNumber: payload.phoneNumber,
          memo: payload.memo,
          profileImg: payload.profileImg
        },
      ];
      
      const updatedFilteredList = newContactList.filter((item) => item.name.includes(state.keyword));

      return {
        ...state,
        contactList: newContactList,
        filteredList: updatedFilteredList
      };

    case "DELETE_CONTACT":
      return {
        ...state,
        contactList: state.contactList.filter(item => item.id !== payload.id),
        filteredList: state.filteredList.filter(item => item.id !== payload.id)
      };

    case "SEARCH_BY_NAME":
      const filteredList = state.contactList.filter((item) => item.name.includes(payload.keyword));
      return {
        ...state,
        keyword: payload.keyword,
        filteredList
      };

    default:
      return { ...state };
  }
}

export default reducer;