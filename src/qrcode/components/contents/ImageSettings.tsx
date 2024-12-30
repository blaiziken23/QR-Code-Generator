import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ChangeEvent, useEffect, useState } from "react";
import { initialImageSettings, useQRCodeStore } from "@/qrcode/zustand";

const ImageSettings = () => {
  const { onChange } = useQRCodeStore();
  const { imageSettings } = useQRCodeStore().data;

  const [isCenter, setIsCenter] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    console.log(id, value);
    onChange({ imageSettings: { ...initialImageSettings, [id]: value } });
  };

  useEffect(() => {
    if (!isCenter) {
      onChange({ imageSettings: { ...initialImageSettings, x: 0, y: 0 } });
    } else {
      onChange({
        imageSettings: { ...initialImageSettings, x: undefined, y: undefined },
      });
    }
  }, [isCenter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3">
        <Label htmlFor="opacity">Opacity</Label>
        <Slider
          id="opacity"
          step={0.05}
          max={1}
          min={0}
          defaultValue={[imageSettings?.opacity || 0]}
          value={[imageSettings?.opacity || 0]}
          onValueChange={(e) =>
            onChange({ imageSettings: { ...initialImageSettings, opacity: e[0] } })
          }
        />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="opacity">Logo Size</Label>
        <Slider
          id="height"
          step={1}
          max={150}
          min={50}
          defaultValue={[imageSettings?.opacity || 50]}
          value={[imageSettings?.height || initialImageSettings?.width || 50]}
          onValueChange={(e) =>
            onChange({
              imageSettings: { ...initialImageSettings, height: e[0], width: e[0] },
            })
          }
        />
      </div>
      {!isCenter && (
        <>
          <div className="flex flex-col gap-3">
            <Label htmlFor="x">X</Label>
            <Input
              type="number"
              id="x"
              placeholder="X axis"
              value={imageSettings?.x}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="x">Y</Label>
            <Input
              type="number"
              id="y"
              placeholder="Y axis"
              value={imageSettings?.y}
              onChange={handleChange}
            />
          </div>
        </>
      )}
      <div className="flex gap-4">
        <div className="flex flex-col gap-3 justify-center">
          <Label htmlFor="excavate">Excavate</Label>
          <Checkbox
            id="excavate"
            onCheckedChange={(value) =>
              onChange({
                imageSettings: { ...initialImageSettings, excavate: !value },
              })
            }
          />
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <Label htmlFor="excavate">Center</Label>
          <Checkbox
            id="center"
            defaultChecked={true}
            onCheckedChange={() => setIsCenter(!isCenter)}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSettings;
