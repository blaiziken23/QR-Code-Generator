import GradientBg from "./qrcode/components/GradientBg";
import Headline from "./qrcode/components/Headline";
import Generator from "./qrcode/components/Generator";
import SvgEffects from "./qrcode/components/SvgEffects";

function App() {
  return (
    <div className="relative h-auto ">
      <SvgEffects />
      <GradientBg />
      <div className="relative z-10">
        <div className="container mx-auto p-6 flex justify-center">
          <div className="max-w-6xl w-full">
            <Headline />
            <Generator />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
