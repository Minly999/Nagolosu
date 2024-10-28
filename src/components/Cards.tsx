// npm modules
import { useState, useEffect } from "react"
import React from "react"

// data
import { portraitsArrayType } from "../pages/History/Portraits/Data"

export type CardsPropsType = {
  data: portraitsArrayType
}

export const Cards = ({data} : CardsPropsType) => {

  const [portraitCount, setPortraitCount] = useState<number>()

  const [showNext, setShowNext] = useState<boolean>(false)
  const [showCurrent, setShowCurrent] = useState<boolean>(false)
  const [noClick, setNoClick] = useState<boolean>(false)
  const [nextPortraitCount, setNextPortraitCount] = useState<number>()
  const [clickDeprecayed, setClickDeprecayed] = useState<boolean>(false)

  const [front, setFront] = useState<boolean>(true)

  useEffect(() => {
    console.log(portraitCount)
    console.log(data[portraitCount ? portraitCount : 20].img)
  }, [portraitCount])
  

  function nextCard(e: React.MouseEvent<HTMLDivElement>){
    setNoClick(false)
    setClickDeprecayed(true)
    const element = e.target as HTMLDivElement
    element.style.transitionDuration = "600ms"
    element.style.marginLeft = "30vw"
    element.style.width = "1px"
    element.style.borderWidth = "0px"
    element.style.height = "30vw"
    element.style.top = "-60px"
    setTimeout(() => {
      setPortraitCount(p => (p ?? -1) + 1);
      element.style.marginLeft = "30vw"
    element.style.width = "15vw"
    element.style.borderWidth = "15px"
    element.style.height = "22vw"
    element.style.top = "-15px"
    setShowCurrent(true)
    
    }, 500); 
    setTimeout(() => {
      element.style.transitionDuration = "1ms"
      element.style.marginLeft = "0"
      setNextPortraitCount(p => (p ?? -1) + 1);
      setNoClick(true)
      setShowCurrent(false)
      setShowNext(true)
      setClickDeprecayed(false)
      setFront(true)
    }, 1100)
  }

  function flipCard(e: React.MouseEvent<HTMLDivElement>){
   
    const target = e.currentTarget as HTMLDivElement
    console.log(target)
    target.style.marginLeft = "37vw"
    target.style.width = "1px"
    target.style.borderWidth = "1px"
    target.style.height = "28vw"
    target.style.marginTop = "-2vw"
    setTimeout(() => {
       target.style.marginLeft = "30vw"
    target.style.width = "15vw"
    target.style.borderWidth = "15px"
    target.style.height = "22vw"
    target.style.marginTop = "0vw"
    setFront(p=>!p)
    }, 600);
 }

  return (
    <div className="w-[50%]">
      <div className="box-content relative bg-cafeNoir w-[15vw] h-[22vw] rounded-2xl border-[15px] border-redwood ">
        <div onClick={!clickDeprecayed ? nextCard : () => {}} className="z-20 box-content absolute bg-cafeNoir w-[15vw] h-[22vw] -top-[15px] -left-[15px] rounded-2xl border-[15px] border-redwood cursor-pointer transition-all duration-[600ms]"> {/* @ts-ignore */}
          <img src={(portraitCount !== undefined) && !noClick ? data[portraitCount].img : null} alt={portraitCount ? data[portraitCount].description : null} className="w-full h-full" style={showCurrent ? {display: "block"} : {display:"none"}}/>
        </div>
        <div onClick={e => { e.stopPropagation(); flipCard(e)}} className="z-10 ml-[30vw] box-content absolute bg-cafeNoir w-[15vw] h-[22vw] -top-[15px] -left-[15px] rounded-2xl border-[15px] border-redwood cursor-pointer transition-all duration-[600ms] overflow-hidden" style={showNext ? {display: "block"} : {display: "none"}}> 
          {front ? 
          <img src={(nextPortraitCount !== undefined) ? data[nextPortraitCount].img : undefined} alt={nextPortraitCount ? data[nextPortraitCount].description : undefined} className="w-full h-full" style={showNext ? {display: "block"} : {display:"none"}}/>
          : <div className="text-cadetGray text-2xl font-normal text-center flex flex-col justify-center h-full">{nextPortraitCount !== undefined ? <><div className="mb-[2vw]">
              {data[nextPortraitCount].name}
          </div>
          <div className="">{data[nextPortraitCount].description}</div>
          </> : null}</div>
          }
          </div>
      </div>
    </div>
  )
}
