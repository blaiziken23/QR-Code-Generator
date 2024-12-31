import { create } from "zustand";
import { ImageSettingsProps, QRProps, QRStore } from "./types";

export const initialImageSettings: ImageSettingsProps = {
  src: "",
  height: 50,
  width: 50,
  excavate: false,
  x: undefined,
  y: undefined,
  opacity: 1,
  crossOrigin: "anonymous",
};
export const initialValue: QRProps = {
  value: "",
  size: 300,
  level: "L",
  bgColor: "#FFFFFF",
  fgColor: "#000000",
  includeMargin: false,
  marginSize: 1,
  title: "",
  minVersion: 1,
  boostLevel: true,
};

export const useQRCodeStore = create<QRStore>()((set) => ({
  QRdata: initialValue,
  QRImageSettings: initialImageSettings,

  updateQRdata: (value) =>
    set((state) => ({
      QRdata: {
        ...state.QRdata,
        ...value,
      },
    })),

  updateQRImageSettings: (value) =>
    set((state) => ({
      QRImageSettings: {
        ...state.QRImageSettings,
        ...value,
      },
    })),
}));
