import React, {useState, createContext} from 'react';

export const AppContext = createContext({});
export const AppProvider = (props) => {
  // console.log('props', props);
  return (
    <AppContext.Provider style="red" value={{...props?.value}}>
      {props?.children}
    </AppContext.Provider>
  );
};
