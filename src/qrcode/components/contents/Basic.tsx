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

const Basic = () => {
  return (
    <div className="space-y-6">
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="text">Input URL or Texts</Label>
        <Input type="text" id="text" placeholder="URL / Texts" />
      </div>
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="size">Size</Label>
        <Input type="number" id="size" placeholder="Size" />
      </div>
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="error">Error Correction Level</Label>
        <Select>
          <SelectTrigger id="error" className="">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Basic;
