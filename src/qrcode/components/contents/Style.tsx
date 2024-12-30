import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQRCodeStore } from "@/qrcode/zustand";
import { ChangeEvent } from "react";

const Style = () => {
  const { onChange } = useQRCodeStore();
  const { marginSize, bgColor, fgColor } = useQRCodeStore().data;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    console.log(id, value);
    onChange({ [id]: value });
  };

  const InputColorItems = [
    {
      label: "Background Color",
      id: "bgColor",
      type: ["color", "text"],
      value: bgColor,
      onChange: handleChange,
    },
    {
      label: "Foreground Color",
      id: "fgColor",
      type: ["color", "text"],
      value: fgColor,
      onChange: handleChange,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3">
        <Label htmlFor="margin">Margin Size</Label>
        <Input
          type="number"
          min={0}
          value={marginSize}
          id="marginSize"
          onChange={handleChange}
          placeholder="Margin size"
        />
      </div>

      {InputColorItems.map((item, index) => (
        <div className="flex flex-col gap-3" key={index}>
          <Label htmlFor={item.id}>{item.label}</Label>
          <div className="flex gap-3">
            <Input
              type={item.type[0]}
              id={item.id}
              value={item.value}
              onChange={item.onChange}
              className="w-12"
            />
            <Input
              type={item.type[1]}
              value={item.value}
              onChange={item.onChange}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Style;
