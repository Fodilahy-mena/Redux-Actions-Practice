import { AccordionActions } from '@material-ui/core';
import { combineReducers } from "redux";

// incomplete reducer function that checks an action prop type to detemine a counter number
function currentCount(state= 0, action){
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return state + 1
    case 'DECREASE_COUNTER':
      return state - 1
    default:
      return state;
  }
}

// incomplete reducer function that should check an action prop type to return an array of users
function users(state =[], action){
  switch (action.type) {
    case "SET_USER":
    return [...state, action.value]
    case "REMOVE_USER":
    return state.splice(0, state.length - 1)
    case 'GET_USERS':
			return action.value;
		default:
			return state;
  }
}

function currentCity(state="", action) {
  switch (action.type) {
    case "CURRENT_CITY":
      return action.value
    default:
      return state;
  }
}

function currentTemp(state=23, action){
  switch (action.type) {
    case "CURRENT_TEMP":
      return action.value + 1
    default:
      return state;
  }
}

function displayModal(state = false, action) {
	switch (action.type) {
		case 'TOGGLE_MODAL':
			return !state;
		default:
			return state;
	}
}

function toggleModal(state=false, action){
  switch (action.type) {
    case "TOGGLE_MODAL":
    return !state;
    default:
      return state
  }
    
}

function imageUrl(state="", action){
  switch (action.type) {
    case "IMAGE_URL":
      return action.value
    default:
      return state;
  }
}

function currentUserSort(state="first_name", action){
  switch (action.type) {
    case "CURRENT_USER_SORT":
      return action.value
    default:
      return state;
  }
}

function imageScale(state= 0, action){
  switch (action.type) {
    case "IMAGE_SCALE":
      return action.value
    default:
      return state;
  }
}

function searchText(state="", action){
  switch (action.type) {
    case "SEARCH_TEXT":
      return action.value
    default:
      return state;
  }
}

// complete reducer function that should check action prop type ""SET_SPECIAL_TEXT" to determine state value
function specialText(text="", action){
  switch (action.type) {
    case "SPECIAL_TEXT":
      return action.value
    default:
      return text;
  }
}



export default combineReducers({
  currentCount,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  displayModal,
  imageUrl,
  currentUserSort,
  imageScale,
  users,
});
