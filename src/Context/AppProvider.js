import React, {useState, createContext} from 'react';

export const AppContext = createContext({});
export const AppProvider = ({children}) => {
  const [isOnline, setisOnline] = useState(false);

  return (
    <AppContext.Provider
      style="red"
      value={{
        isOnline,
        setisOnline,
      }}>
      {children}
    </AppContext.Provider>
  );
};
