// router modules
import { Outlet } from "react-router-dom"
import { useMatch } from "react-router-dom"

// components
import { RouteMenuContainer } from "../../components/RouteMenuContainer"
import { RouteMenu, RouteMenuPropsType } from "../../components/RouteMenu"


export const History = () => {

  const isChild = useMatch("/history/:topic")

  const data:RouteMenuPropsType = {
    title: "Історія України",
    buttons: [
      {
        buttonTitle: "Перелік тем",
        path: "topics"
      },
      {
        buttonTitle: "Портрети",
        path: "portraits"
      },
      {
        buttonTitle: "Споруди",
        path: "buildings"
      },
      {
        buttonTitle: "Дати",
        path: "dates"
      },
       
    ]
  }

  return (
    <RouteMenuContainer bg="#2f1b25">
      {isChild ? (
        <Outlet />
      ) : (
        <RouteMenu data={data} titleColor="#f7dba7" />
      )}
    </RouteMenuContainer>
  )
}
