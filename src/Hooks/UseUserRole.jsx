import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import axios from "axios";

const UseUserRole = () => {
  const { user, loading } = useAuth();
  const { data: userRole = '', isLoading: roleLoading } = useQuery({
    queryKey: ["user-role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/users/check-role/${user?.email}`
      );
      return res.data.role;
    },
  });
  return [userRole,roleLoading]
};

export default UseUserRole;
