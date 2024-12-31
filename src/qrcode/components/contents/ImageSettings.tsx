import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ChangeEvent, useEffect, useState } from "react";
import { useQRCodeStore } from "@/qrcode/zustand";

const ImageSettings = () => {
  const { updateQRImageSettings, QRImageSettings } = useQRCodeStore();
  const [isCenter, setIsCenter] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    updateQRImageSettings({ ...QRImageSettings, [id]: value });
  };

  useEffect(() => {
    if (!isCenter) {
      updateQRImageSettings({ ...QRImageSettings, x: 0, y: 0 });
    } else {
      updateQRImageSettings({ ...QRImageSettings, x: undefined, y: undefined });
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
          defaultValue={[QRImageSettings?.opacity || 0]}
          value={[QRImageSettings?.opacity || 0]}
          onValueChange={(e) =>
            updateQRImageSettings({ ...QRImageSettings, opacity: e[0] })
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
          defaultValue={[QRImageSettings?.opacity || 50]}
          value={[QRImageSettings?.height || QRImageSettings?.width || 50]}
          onValueChange={(e) =>
            updateQRImageSettings({
              ...QRImageSettings,
              height: e[0],
              width: e[0],
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
              value={QRImageSettings?.x}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="x">Y</Label>
            <Input
              type="number"
              id="y"
              placeholder="Y axis"
              value={QRImageSettings?.y}
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
            defaultChecked={QRImageSettings.excavate}
            onCheckedChange={(value) =>
              updateQRImageSettings({
                ...QRImageSettings,
                excavate: !value,
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
