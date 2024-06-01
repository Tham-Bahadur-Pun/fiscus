import React, { useState, useMemo, ReactNode } from "react";

// Define the types for the user state and the context value
interface User {
  id: string | null;
  password: string | null;
}

interface AuthContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

// Define the initial state for the user
const INITIAL_STATE: User = {
  id: null,
  password: null,
};

// Create the AuthContext with the initial state
export const AuthContext = React.createContext<AuthContextType>({
  user: INITIAL_STATE,
  setUser: () => {},
});

// Define the props for the AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

// Define a provider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(INITIAL_STATE);

  // Memoize the context value to optimize performance
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};
