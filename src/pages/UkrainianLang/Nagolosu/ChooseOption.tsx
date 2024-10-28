import { useNavigate } from "react-router-dom";
import { alphabet } from "./Nagolosu";
import { useState } from "react";
import { useShowAnswers } from "../../contexts/ShowAnswersContext";

export const ChooseOption = ({rightAnswer, setRerender}: {rightAnswer: number, setRerender: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const navigateTo = useNavigate()

    const [option, setOption] = useState<number>();

    const [answer, setAnswer] = useState<boolean>(false)

    const [fail, setFail] = useState<boolean>(false)

    const {showAnswers, setShowAnswers} = useShowAnswers()


    document.addEventListener('keydown', function(event) {
      // Check which key was pressed
      switch(event.key) {
          case '1':
              iCantHandleCliiiiick(0)
              break;
          case '2':
              iCantHandleCliiiiick(1)
              break;
          case '3':
              iCantHandleCliiiiick(2)
              break;
          case '4':
              iCantHandleCliiiiick(3)
              break;
          default: 
              break;
          }
  });

  function iCantHandleCliiiiick(option: number) {
    setOption(option);
  }

  function checkAnswer(){
    setAnswer(true)
    setShowAnswers(true)
    console.log("answer changes")
    if(option !== rightAnswer){
        setFail(true)
    }
  }

  function resetChoosing(){
    setOption(NaN)
    setAnswer(false)
    setFail(false)
    setShowAnswers(false)
  }

  function nextQuestion(){
    setRerender(p => !p)
    resetChoosing()
  }

  return (
    <div className="flex">
        {alphabet.map((letter, letterIndex) => (
          <div onClick={() => !answer ? iCantHandleCliiiiick(letterIndex) : null} key={letterIndex} className="mr-[20px]">
            <div className="cursor-pointer text-[50px] font-bold text-center">{letter}</div>
            <div
              className="relative w-[60px] h-[60px] rounded-lg border-[4px] border-slate-800 cursor-pointer"
              style={answer && letterIndex == rightAnswer ? {backgroundColor: "green"} : (fail && option === letterIndex? {backgroundColor: "red"} : {})}
            >
              {option === letterIndex ? (
                <svg
                  className="absolute -top-[4px] -left-[4px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 60"
                  width="60"
                  height="60"
                >
                  <path
                    d="M10 30 L25 45 L50 15"
                    stroke="rgb(30 41 59)"
                    strokeWidth="5"
                    fill="none"
                  />
                </svg>
              ) : null}
            </div>
          </div>
        ))}
        <button onClick={() => {!answer ? checkAnswer() : nextQuestion()}} className="mt-[35px] ml-[40px] w-[500px] h-[100px] bg-slate-800 hover:bg-slate-900 text-slate-300 text-medium text-[45px] leading-[100px]">{answer ? "Наступне" : "Відповісти"}</button>
      </div>
  )
}
