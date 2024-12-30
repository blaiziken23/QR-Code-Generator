import { QRCodeSVG } from "qrcode.react";
import { useQRCodeStore } from "../zustand";

const Output = () => {
  return (
    <div className="flex justify-center items-center">
      <QRCodeSVG {...useQRCodeStore().data} />
    </div>
  );
};

export default Output;
