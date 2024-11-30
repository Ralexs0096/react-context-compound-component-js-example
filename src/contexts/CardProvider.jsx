import { createContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  // logic
  const [cardData, setCardData] = useState({
    title: '',
    body: '',
    buttonLabelOne: '',
    buttonLabelTwo: ''
  });

  return (
    <CardContext.Provider
      value={{
        cardData,
        setCardData
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
