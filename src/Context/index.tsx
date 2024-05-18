import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [value, setValue] = useState({
    clothingCurrentValue: 2000,
    beautyCurrentValue: 2000,
    fitnessCurrentValue: 2000,
    foodCurrentValue: 2000,
    housingCurrentValue: 2000,
    otherCurrentValue: 2000  
  });

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
