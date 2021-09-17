import { useEffect,useState } from "react";
import { getUserDetails } from "./api-service";

const useUserDetail = (username) => {
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState([]);
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchUserDetail = async () => {
      setLoading(true);
      const { error, data } = await getUserDetails(username);
      setLoading(false);

      if (error) {
        return setError(error);
      }

      return setUserDetail(data);
    };

    fetchUserDetail();
  }, []);

  return { loading, userDetail, error};
};

export default useUserDetail;