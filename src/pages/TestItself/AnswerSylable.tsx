import React, { useEffect } from "react"
import { useShowAnswers } from "../contexts/ShowAnswersContext"

export const AnswerSylable = ({sylable}: {sylable: number}) => {
  
  const {showAnswers, setShowAnswers} = useShowAnswers()
  
    useEffect(() => {
        console.log(showAnswers)
    }, [showAnswers])

    return (
    <div className="ml-[10px] text-[35px] text font-medium" style={showAnswers ? {display: "block"} : {display: "none"}}>{sylable}-ий</div>
  )
}
