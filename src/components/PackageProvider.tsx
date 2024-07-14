import React, { createContext, useContext, useState, ReactNode } from "react";

interface PackageContextType {
  packageName: string;
  setPackageName: (name: string) => void;
}

const PackageContext = createContext<PackageContextType | undefined>(undefined);

interface PackageProviderProps {
  children: ReactNode;
}

const PackageProvider: React.FC<PackageProviderProps> = ({ children }) => {
  const [packageName, setPackageName] = useState<string>("");

  return (
    <PackageContext.Provider value={{ packageName, setPackageName }}>
      {children}
    </PackageContext.Provider>
  );
};

const usePackage = () => {
  const context = useContext(PackageContext);
  if (!context) {
    throw new Error("usePackage must be used within a PackageProvider");
  }
  return context;
};

export { PackageProvider, usePackage };
