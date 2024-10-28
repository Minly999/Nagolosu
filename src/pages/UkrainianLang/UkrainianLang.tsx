import { Outlet, useNavigate, useMatch } from "react-router-dom";
import { RouteMenu, RouteMenuPropsType } from "../../components/RouteMenu";
import { RouteMenuContainer } from "../../components/RouteMenuContainer";

export const UkrainianLang = () => {
  const navigateTo = useNavigate();

  const isChild = useMatch("/ukrainianlang/:topic");

  const data:RouteMenuPropsType = {
    title: "Тести з Української мови",
    buttons: [
      {
        buttonTitle: "Наголоси",
        path: "nagolosu"
      }
    ]
  }

  return (
    <RouteMenuContainer>
      {isChild ? (
        <Outlet />
      ) : (
        <RouteMenu data={data} />
      )}
    </RouteMenuContainer>
  );
};
