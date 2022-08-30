import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeApi } from "../services";

interface AuthContextData {
  user: IUser[];
  userLogin: null;
  setUserLogin: React.Dispatch<React.SetStateAction<null>>;
  signIn: (props: ILoginProps) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export interface IAuthContext {
  children: ReactNode;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  occupation: string;
  city: string;
}

export interface IUserResponse {
  user: IUser[];
  token: string;
}

export interface ILoginProps {
  email: string;
  password: string;
}

const AuthProvider = ({ children }: IAuthContext) => {
  const [userLogin, setUserLogin] = useState(null);
  const [user, setUser] = useState<IUser[]>([{} as IUser]);
  const navigate = useNavigate();
  const tokenUser = localStorage.getItem("@loginBWeather:token");

  useEffect(() => {
    async function loadUser() {
      if (tokenUser) {
        try {
          fakeApi.defaults.headers.common.Authorization = `Bearer ${tokenUser}`;
          const { data } = await fakeApi.get("/signin");
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
    }
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = (data: ILoginProps) => {
    fakeApi
      .post("/signin", data)
      .then((response) => {
        const { user, accessToken } = response.data;
        console.log(response);
        fakeApi.defaults.headers.common.Authorization = `Bearer ${tokenUser}`;
        localStorage.setItem("@loginBWeather:token", accessToken);
        localStorage.setItem("@loginBWeather:user", user.id);
        setUserLogin(user);
        navigate("/Dashboard", { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const logout = () => {
    localStorage.clear();
    navigate("/Login");
  };

  return (
    <AuthContext.Provider
      value={{ userLogin, setUserLogin, signIn, user, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
