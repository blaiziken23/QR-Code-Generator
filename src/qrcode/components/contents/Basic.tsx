import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QRProps } from "@/qrcode/types";
import { errorCorrectionLevel } from "@/qrcode/utils/constants";
import { useQRCodeStore } from "@/qrcode/zustand";
import { ChangeEvent } from "react";

const Basic = () => {
  const { onChange } = useQRCodeStore();
  const { size, value, level } = useQRCodeStore().data;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    onChange({ [id]: value });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3">
        <Label htmlFor="value">Input URL or Texts</Label>
        <Input
          type="text"
          id="value"
          value={value}
          placeholder="URL / Texts"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="size">Size</Label>
        <Input
          type="number"
          id="size"
          placeholder="Size"
          value={size}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="error">Error Correction Level</Label>
        <Select
          defaultValue={level}
          onValueChange={(e) => onChange({ level: e as QRProps["level"] })}
        >
          <SelectTrigger className="">
            <SelectValue placeholder="Select a level" />
          </SelectTrigger>
          <SelectContent id="level" onChange={(e) => console.log(e)}>
            <SelectGroup>
              <SelectLabel>Error Correction level</SelectLabel>
              {errorCorrectionLevel.map((data, i) => (
                <SelectItem value={data.value} key={i}>
                  {data.desc}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Basic;
