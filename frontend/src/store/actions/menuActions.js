import { SET_MENU, SET_CATEGORIES } from './types';
import axios from 'axios';
const baseUrl = 'backend url';

export const setMenu = (menu) => {
  return {
    type: SET_MENU,
    payload: menu
  }
}

export const setCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    payload: categories
  }
}

export const getAllMenu = () => {
  return (dispatch, getState) => {
    return axios.get("http://13.250.3.84:5000/admin/menu")
      .then( response  => {
      dispatch(setMenu(response.data));
      console.log(response.data);
    });
  };
}

export const getFilteredMenu = (filter)=>{
  return (dispatch, filter)=>{
    return axios.get("http://13.250.3.84:5000/admin/menu")
    .then(({ response })=>{
      const filtered_response = response.filter(menu_item=>menu_item.item_category.origin===filter.currentType);
      dispatch(setMenu(filtered_response));
    });
  }
}

export const getFoodCategory = () => {
  return (dispatch, getState) => {
    axios({
      method: 'get',
      url: `${baseUrl}/category`
    })
    .then(({ data }) => {
      dispatch(setCategories(data));
      console.log('Successfully get all categories');
    })
    .catch(err => {
      console.log('Failed', err);
    })
  }
}