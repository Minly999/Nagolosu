import { Outlet, useNavigate, useMatch } from "react-router-dom";

export const Test = () => {
  const navigateTo = useNavigate();

  const isChild = useMatch("/test");

  return (
    <div className="bg-slate-400 w-[100%] h-screen flex flex-col items-center">
      {isChild ? (
        <Outlet />
      ) : (
        <>
          <div className="mt-8 text-2xl font-bold text-black w-full text-center">
            Its a test
          </div>
          <button
            onClick={() => {
              navigateTo("/test");
            }}
            className="mt-[30vh] w-[20%] h-[10vh] bg-stone-600 text-white font-medium text-lg"
          >
            Start
          </button>
        </>
      )}
    </div>
  );
};
