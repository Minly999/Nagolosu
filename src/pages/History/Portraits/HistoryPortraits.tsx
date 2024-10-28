// data
import { portraitsArray } from "./Data"

// components
import { Cards } from "../../../components/Cards"


export const HistoryPortraits = () => {
  return (
    <div className="max-w-[90vw] min-h-screen w-full flex justify-center items-center">
        <Cards data={portraitsArray} />
    </div>
  )
}
