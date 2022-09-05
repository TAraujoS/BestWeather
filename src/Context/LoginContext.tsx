import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeApi } from "../services";

export interface AuthContextData {
  user: IUser;
  userLogin: IUserResponse;
  userId: string | null;
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
  email: string;
  password: string;
  name: string;
  url: string;
  occupation: string;
  city: string;
  id: number;
}

export interface ILoginProps {
  email: string;
  password: string;
}

const AuthProvider = ({ children }: IAuthContext) => {
  const [userLogin, setUserLogin] = useState<IUserResponse>(
    {} as IUserResponse
  );
  const [user, setUser] = useState<IUser>({} as IUser);
  const navigate = useNavigate();
  const tokenUser = localStorage.getItem("@loginBWeather:token");
  const userId = localStorage.getItem("@loginBWeather:user");

  const signIn = (data: ILoginProps) => {
    fakeApi
      .post("/signin", data)
      .then((response) => {
        const { user, accessToken } = response.data;
        fakeApi.defaults.headers.common.Authorization = `Bearer ${tokenUser}`;
        localStorage.setItem("@loginBWeather:token", accessToken);
        localStorage.setItem("@loginBWeather:user", user.id);
        setUserLogin(user);
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => console.error("Esse é o problema!", error));
  };

  useEffect(() => {
    async function loadUser() {
      if (tokenUser) {
        try {
          fakeApi.defaults.headers.common.Authorization = `Bearer ${tokenUser}`;
          const { data } = await fakeApi.get(`/users/${userId}`);
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
    }
    loadUser();
  }, [tokenUser, userId]);

  const logout = () => {
    localStorage.clear();

    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ userLogin, signIn, user, logout, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
