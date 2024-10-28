import { ReactNode } from "react"

export const RouteMenuContainer = ({children, bg}: {children: ReactNode, bg?: string}) => {
  return (
    <div className="bg-slate-400 w-[100%] min-h-screen flex flex-col items-center" style={bg ? {backgroundColor: bg} : {}}>
        { children }
    </div>

  )
}
