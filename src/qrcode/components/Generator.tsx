import Options from "./Options";
import Output from "./Output";

const Generator = () => {
  return (
    <div className="grid grid-cols-12 w-full gap-6 ">
      <div className="col-span-12 md:col-span-6">
        <Options />
      </div>
      <div className="col-span-12 md:col-span-6">
        <Output />
      </div>
    </div>
  );
};

export default Generator;
