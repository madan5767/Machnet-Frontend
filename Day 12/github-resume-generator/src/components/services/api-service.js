import axios from 'axios'
export const getUserDetails = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const data = await response.data;
      // console.log(data);
      return {
        data: data,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error:error.message || "Sorry, User ID Not found...Please enter a valid user ID",
      };
    }
  };