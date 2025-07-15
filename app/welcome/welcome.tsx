import FG_logo from "./FG_Body.png";
import FG_logo_lite from "./FG_Body_lite.png";
import { Slider } from "./slider";

export function Welcome() {
  return (
    <main
      className="flex items-center justify-center pt-16 pb-4 "
      style={{ backgroundColor: "#F6F2EC", height: "100vh" }}
    >
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={FG_logo_lite}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            {/* <img
              src={FG_logo}
              alt="React Router"
              className="hidden w-full dark:block"
            /> */}
          </div>
        </header>
      </div>
      <Slider />
    </main>
  );
}
