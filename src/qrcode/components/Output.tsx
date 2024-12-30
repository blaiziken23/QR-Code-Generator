import { QRCodeSVG } from "qrcode.react";
import { useQRCodeStore } from "../zustand";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

const Output = () => {
  return (
    <div className="flex justify-center items-center flex-col space-y-4">
      <QRCodeSVG {...useQRCodeStore().data} />
      <Button
        className="w-full max-w-sm rounded-full bg-[#006D77] hover:bg-[#006D77]/80"
        // onClick={onClick}
      >
        <DownloadIcon /> Download
      </Button>
    </div>
  );
};

export default Output;
