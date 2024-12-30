import { Checkbox } from "@/components/ui/checkbox";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { initialImageSettings, useQRCodeStore } from "@/qrcode/zustand";
import { CloudUpload, Paperclip } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

const Logo = () => {
  const { onChange } = useQRCodeStore();
  const { imageSettings } = useQRCodeStore().data;
  const [files, setFiles] = useState<File[] | null>(null);
  const [isCenter, setIsCenter] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    console.log(id, value);
    onChange({ [id]: value });
  };

  const sliderItems = [
    {
      label: "Opacity",
      id: "opacity",
      min: 0,
      max: 1,
      step: 0.1,
      value: imageSettings?.opacity,
      // onValueChange: (value) => update({ width: value, height: value }),
    },
    {
      label: "Logo Size",
      id: "size",
      min: 50,
      max: 150,
      step: 1,
      value: imageSettings?.height || imageSettings?.width,
      defaultValue: 50,
      // onValueChange: (value) => update({ width: value, height: value }),
    },
  ];

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };

  useEffect(() => {
    const file = files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          onChange({
            imageSettings: {
              ...initialImageSettings,
              src: e?.target?.result,
            },
          });
        }
      };

      reader.readAsDataURL(file);
    }
  }, [files, onChange]);

  // useEffect(() => {
  //   if (data.imageSettings?.src) {
  //     onChange({ imageSettings: { ...data.imageSettings, excavate: true } });
  //   } else {
  //     onChange({ imageSettings: { ...data.imageSettings, excavate: false } });
  //   }
  // }, [data.imageSettings?.src]);

  console.log(files);

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="logo">Logo</Label>
      <FileUploader
        value={files}
        onValueChange={setFiles}
        dropzoneOptions={dropZoneConfig}
        className="relative bg-transparent rounded-lg p-1"
      >
        <FileInput
          id="logo"
          className="outline-dashed outline-1 outline-slate-500"
        >
          <div className="flex items-center justify-center flex-col p-8 w-full ">
            <CloudUpload className="text-gray-500 w-10 h-10" />
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
              &nbsp; or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF
            </p>
          </div>
        </FileInput>
        <FileUploaderContent>
          {files &&
            files.length > 0 &&
            files.map((file, i) => (
              <FileUploaderItem key={i} index={i}>
                <Paperclip className="h-4 w-4 stroke-current" />
                <span>{file.name}</span>
              </FileUploaderItem>
            ))}
        </FileUploaderContent>
      </FileUploader>
      {imageSettings?.src && (
        <>
          {/* <Slider /> */}

          {/* {sliderItems.map((item, index) => (
            <div className="space-y-1" key={index}>
              <Label htmlFor={item.id}>{item.label}</Label>
              <Slider
                step={item.step}
                max={item?.max}
                min={item?.min}
                value={[item.value]}
                defaultValue={[item?.defaultValue]}
                onValueChange={(e) =>
                  onChange({
                    imageSettings: {
                      opacity: e[0],
                    },
                  })
                }
              />
            </div>
          ))} */}
          <div className="space-y-1 flex flex-col">
            <Label htmlFor="center">Center</Label>
            <Checkbox
              id="center"
              defaultChecked={true}
              onCheckedChange={() => setIsCenter(!isCenter)}
            />
          </div>
          {/* {!isCenter && (
            <>
              <div className="space-y-1">
                <Label htmlFor="center">X</Label>
                <Slider
                  step={1}
                  // value={[x]}
                  // max={[clientWidth - width]}
                  // onValueChange={(value) => update({ x: value })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="center">Y</Label>
                <Slider
                  step={1}
                  value={[y]}
                  max={[clientHeight]}
                  onValueChange={(value) => update({ y: value })}
                />
              </div>
            </>
          )} */}
          <div className="space-y-1 flex flex-col">
            <Label htmlFor="excavate">Excavate</Label>
            <Checkbox
              id="excavate"
              // onCheckedChange={(value) => update({ excavate: !value })}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Logo;
