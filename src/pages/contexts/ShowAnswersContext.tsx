//@ts-nocheck
import React, { createContext, useContext, useState } from 'react';

const ShowAnswersContext = createContext({
  showAnswers: false,
  setShowAnswers: (value) => {}, // Placeholder function, can be defined later
});

export const ShowAnswersProvider = ({ children }) => {
  const [showAnswers, setShowAnswers] = useState(false);
  
  return (
    <ShowAnswersContext.Provider value={{ showAnswers, setShowAnswers }}>
      {children}
    </ShowAnswersContext.Provider>
  );
};

export const useShowAnswers = () => {
  return useContext(ShowAnswersContext);
};
