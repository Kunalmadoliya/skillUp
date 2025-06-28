import {toast} from "react-toastify";
import axios from "../../api/api";




export const asynclogindetails = (users) => async (dispatch, getState) => {
  try {
    const {data} = await axios.get(
      `/users?email=${users.Email}&password=${users.Password}`
    );
    toast.success("Logged In!");
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {
    toast.error("wrong");
  }
};




export const asynclogoutdetails = (users) => async (dispatch, getState) => {
  try {
    toast.success("Logged Out!");
    localStorage.removeItem("user", ""); 
  } catch (error) {
    toast.error("wrong");
  }
};




export const asyncregisteruser = (users) => async (dispatchEvent, getState) => {
  try {
    const res = await axios.post("/users", users);
    console.log(res);
  } catch (error) {
    toast.error("wrong");
  }
};
