import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload";
import { Label } from "@/components/ui/label";
import { initialImageSettings, useQRCodeStore } from "@/qrcode/zustand";
import { CloudUpload, Paperclip } from "lucide-react";
import { useEffect, useState } from "react";
import ImageSettings from "./ImageSettings";

const Logo = () => {
  const { onChange } = useQRCodeStore();
  const { imageSettings } = useQRCodeStore().data;
  const [files, setFiles] = useState<File[] | null>(null);

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

  console.log(files?.length);
  return (
    <div className="space-y-4">
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
      </div>
      {imageSettings?.src && files && files?.length !== 0 ? (
        <ImageSettings />
      ) : null}
    </div>
  );
};

export default Logo;
