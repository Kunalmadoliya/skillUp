import { toast } from "react-toastify";
import axios from "../../api/api";

export const asyncregisteruser = (users) => async (dispatchEvent, getState) => {
  try {
    const res = await axios.post("/users", users);
    console.log(res);
    
  } catch (error) {
    toast.error("wrong")
  }
};
