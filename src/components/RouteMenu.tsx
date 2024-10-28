import { useNavigate } from "react-router-dom";

export type RouteMenuPropsType = {
  title: string;
  buttons: {
    buttonTitle: string;
    path: string;
  }[];
};

export const RouteMenu = ({ data, titleColor }: {data : RouteMenuPropsType, titleColor?:string}) => {
  const navigateTo = useNavigate();

  return (
    <>
      <div className="mt-8 text-[50px] font-bold text-black w-full text-center" style={titleColor ? {color: titleColor} : {}}>
        {data.title}
        
      </div>
      <div className="flex w-full justify-evenly">
        {data.buttons.map((button, buttonIndex) => (
          <button
            onClick={() => {
              navigateTo(button.path);
            }}
            className="mt-[30vh] w-[20%] h-[10vh] bg-stone-600 text-white font-medium text-2xl rounded-xl"
            key={buttonIndex}
          >
            {button.buttonTitle}
          </button>
        ))}
      </div>
    </>
  );
};
