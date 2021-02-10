// function that returns an action type and a text value

export function increaseCounter(){
  return {
    type: 'INCREASE_COUNTER',
  }
}

export function decreaseCounter(){
  return {
    type: 'DECREASE_COUNTER',
  }
}

export function specialText(specialText){
  return {
    type: "SPECIAL_TEXT",
    value: specialText
  }
}

export function currentCity(currentCity){
  return {
    type: "CURRENT_CITY",
    value: currentCity
  }
}

export function searchText(searchText){
  return {
    type: "SEARCH_TEXT",
    value: searchText
  }
}

export function currentTemp(temp){
  return {
    type: "CURRENT_TEMP",
    value: temp
  }
}

export function toggleModal() {
	return {
		type: 'TOGGLE_MODAL',
	};
}


export function imageUrl(imageUrl){
  return {
    type: "IMAGE_URL",
    value: imageUrl
  }
}

export function currentUserSort(currentUserSort){
  return {
    type: "CURRENT_USER_SORT",
    value: currentUserSort
  }
}

export function imageScale(imageScale){
  return {
    type: "IMAGE_SCALE",
    value: imageScale
  }
}

export function setUser(users){
  return {
    type: "SET_USER",
    value: users
  }
}

export function removeUser(users){
  return {
    type: "REMOVE_USER",
    value: users
  }
}

export function getUsers() {
	return async (dispatch) => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
		const users = await response.json();
		dispatch({
			type: 'GET_USERS',
			value: users,
		});
	};
}
