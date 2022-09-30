import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../Contexts/LoginContext";

const useUserInfo = () => {
  const { user } = useContext(LoginContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user === null) return;
    setLoading(false);
  });
  return { user, loading };
};
export default useUserInfo;
