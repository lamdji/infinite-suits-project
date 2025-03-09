'use client';

import { createContext, useContext, useState, ReactNode, useMemo } from "react";

interface User {
  id: number;
  email: string;
  prenom: string;
  nom: string;
  adresse: string;
  code_postal: string;
  ville: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Utilisation de useMemo pour stabiliser la valeur
  const contextValue = useMemo(() => ({ user, setUser }), [user]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
