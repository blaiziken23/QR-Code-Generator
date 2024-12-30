import { create } from "zustand";
import { ImageSettings, QRProps, QRStore } from "./types";

export const initialImageSettings: ImageSettings = {
  src: "",
  height: 50,
  width: 50,
  excavate: true,
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
  imageSettings: initialImageSettings,
};

export const useQRCodeStore = create<QRStore>()((set) => ({
  data: initialValue,
  onChange: (value) =>
    set((state) => ({
      data: {
        ...state.data, // Keep existing data state
        ...value, // Update with new settings
      },
    })),
}));
