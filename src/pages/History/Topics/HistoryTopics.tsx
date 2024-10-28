// data
import { topics } from "./Data"

export const HistoryTopics = () => {
  return (
    <div className="max-w-[80vw] w-full flex justify-center bg-darkPurple">
        <div className="w-full flex flex-col text-[40px] leading-[80px] text-peachYellow font-medium">
        {topics.map((topic, topicIndex) => (
            <div className="">{topic}</div>
        ))}
        </div>
    </div>
  )
}
