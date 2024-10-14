import { useState } from "react";
import { createTest } from "./ChooseTopic";
import { ChooseOption } from "./ChooseOption";
import { AnswerSylable } from "./AnswerSylable";
import { ShowAnswersProvider } from "../contexts/ShowAnswersContext";

export const alphabet = ["А", "Б", "В", "Г"];

export const TestItself = () => {

  const [options, sylable] = createTest();

  const [rerender, setRerender] = useState<boolean>(false)


  let rightAnswer = 0

  options.forEach((option, optionIndex) => {if(option.right === true){rightAnswer = optionIndex}})

  return (
    <ShowAnswersProvider>
    <div className="mt-[10vh] mx-[auto]">
      <div className="mb-[20px] text-center font-bold text-[60px] text-slate-800">
        На {sylable}-ий склад падає наголос у слові
      </div>
      <div className="mb-[20px]">
        {options.map((option, optionIndex) => (
          <div key={optionIndex} className="flex mb-[5px] items-center">
            <div className="mr-[10px] text-[50px] font-bold w-[70px] h-[70px] bg-slate-900 text-slate-300 text-center leading-[70px]">
              {alphabet[optionIndex]}
            </div>
            <div className="flex items-center">
              <div className="pb-[10px] text-[45px] font-medium">
              {option.word}
              </div>
            
                <AnswerSylable sylable={option.sylable} />
         
              
            </div>
            
          </div>
        ))}
      </div>
      <ChooseOption rightAnswer={rightAnswer} setRerender={setRerender} />
   
      
      <div className="absolute top-0 left-0 text-slate-400">{rerender ? "." : ","}</div>
    </div>
    </ShowAnswersProvider>
  );
};
