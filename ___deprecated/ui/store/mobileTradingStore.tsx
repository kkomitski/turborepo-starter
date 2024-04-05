import { create } from "zustand";

// This stores the state of the "scan to download the app" button which opens up the QR code
// for the associated mobile trading card in the "PlatformType" component.
// We use zustand to create a store that holds the state of the QR code being open or closed.
// This is because the QR code is stored in the PlatformType component whilst the button to open it is stored in the ContentfulLink component.
interface PlatformMobileTradingState {
  qrCodeOpen: boolean;
  openQRCode: () => void;
  closeQRCode: () => void;
}

export const usePlatformMobileTradingStore = create<PlatformMobileTradingState>(
  (set) => ({
    qrCodeOpen: false,
    openQRCode: () => set({ qrCodeOpen: true }),
    closeQRCode: () => set({ qrCodeOpen: false }),
  })
);
