import { useState, createContext, useContext, useEffect } from "react";
// import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvide = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, token: "" });

  useEffect(() => {
    try {
      const tokens = localStorage.getItem("tokens");
      const parsedUser = JSON.parse(localStorage.getItem("users"));
      console.log(`from the context ${parsedUser} and ${tokens}`);
      if (tokens && parsedUser) {
        console.log(`from Context ${parsedUser}`);
        setAuth({
          user: parsedUser,
          token: tokens,
        });
      }
    } catch (error) {
      console.error("Error parsing auth data:", error);
      localStorage.removeItem("tokens");
      // localStorage.removeItem("user");
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
