import { QRCodeSVG } from "qrcode.react";
import { useQRCodeStore } from "../zustand";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { useRef } from "react";

const Output = () => {
  const qrCodeRef = useRef<SVGSVGElement>(null);
  const { QRImageSettings, QRdata } = useQRCodeStore();

  const downloadQRCode = () => {
    if (qrCodeRef.current) {
      const svgData = new XMLSerializer().serializeToString(qrCodeRef.current);
      const svgBlob = new Blob([svgData], {
        type: "image/svg+xml;charset=utf-8",
      });
      const svgUrl = URL.createObjectURL(svgBlob);
      const downloadLink = document.createElement("a");
      downloadLink.href = svgUrl;
      downloadLink.download = "qrcode.svg";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col space-y-4">
      <div className="relative max-w-80">
        <QRCodeSVG
          {...QRdata}
          imageSettings={QRImageSettings}
          ref={qrCodeRef}
        />
      </div>
      <Button
        className="w-full max-w-sm rounded-full bg-[#006D77] hover:bg-[#006D77]/80"
        onClick={downloadQRCode}
      >
        <DownloadIcon /> Download
      </Button>
    </div>
  );
};

export default Output;
