import {toast} from "react-toastify";
import axios from "../../api/api";
import {loaduser} from "../reducers/UserSlice"
import removeuser from "../reducers/UserSlice"

export const asynccurrentuser = () =>async(dispatch ,getState) =>{
  try {
    const users = JSON.parse(localStorage.getItem("user"))
    if (users) dispatch(loaduser(users))
   
    
  } catch (error) {
    toast.error("Not Logged in ")
  }
}

export const asynclogindetails = (users) => async (dispatch, getState) => {
  try {
    const {data} = await axios.get(
      `/users?email=${users.email}&password=${users.password}`
    );
    toast.success("Logged In!");
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {
   
  }
};



export const asynclogoutdetails = (users) => async (dispatch, getState) => {
  try {
    toast.success("Logged Out!");
    localStorage.removeItem("user"); 
    dispatch(removeuser())
  } catch (error) {
   
  }
};




export const asyncregisteruser = (users) => async (dispatchEvent, getState) => {
  try {
    const res = await axios.post("/users", users);
    console.log(res);
  } catch (error) {
    
  }
};
