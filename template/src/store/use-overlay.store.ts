import { create } from 'zustand'
import { mutative } from 'zustand-mutative'

type OverlayId = 'example'

interface OverlayState {
  overlays: Partial<Record<OverlayId, boolean>>
}

interface OverlayActions {
  setOverlayOpen: (overlayId: OverlayId, isOpen: boolean) => void
}

const useOverlayStore = create<OverlayState & OverlayActions>()(
  mutative((set) => ({
    overlays: {},
    setOverlayOpen: (overlayId, isOpen) =>
      set((state) => {
        state.overlays[overlayId] = isOpen
      })
  }))
)

export const setOverlayOpen = (overlayId: OverlayId, isOpen: boolean) =>
  useOverlayStore.getState().setOverlayOpen(overlayId, isOpen)

export const useOverlayStatus = (overlayId: OverlayId) =>
  useOverlayStore((state) => !!state.overlays[overlayId])
