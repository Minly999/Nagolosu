import { Outlet, useNavigate, useMatch } from "react-router-dom";
import { RouteMenu, RouteMenuPropsType } from "../../components/RouteMenu";
import { RouteMenuContainer } from "../../components/RouteMenuContainer";

export const HomePage = () => {
  const navigateTo = useNavigate();

  const data:RouteMenuPropsType = {
    title: "Виберіть предмет",
    buttons: [
      {
        buttonTitle: "Українська мова",
        path: "ukrainianlang"
      },
      {
        buttonTitle: "Історія",
        path: "history"
      }
    ]
  }

  return (
    <RouteMenuContainer>
      <RouteMenu data={data} />
    </RouteMenuContainer>
  );
};
