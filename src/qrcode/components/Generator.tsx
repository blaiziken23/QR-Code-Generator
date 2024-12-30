import Options from "./Options";
import Output from "./Output";

const Generator = () => {
  return (
    <div className="grid grid-cols-12 w-full">
      <div className="col-span-6">
        <Options />
      </div>
      <div className="col-span-6">
        <Output />
      </div>
    </div>
  );
};

export default Generator;
