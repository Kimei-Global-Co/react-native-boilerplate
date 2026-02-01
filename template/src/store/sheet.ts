import type { Sheet } from 'shared/types/sheet.type'
import { create } from 'zustand'
import { mutative } from 'zustand-mutative'

interface SheetStore {
  activeSheets: Sheet[]
  isSheetActive: boolean
  openSheet: (sheet: Sheet) => void
  closeSheet: () => void
  closeAllSheets: () => void
  actionSheet: (callback: () => void) => void
}

export const useSheetStore = create<SheetStore>()(
  mutative((set, get) => ({
    actionSheet: (callback) => {
      const sheets = get().activeSheets
      if (sheets.length > 0) {
        set((state) => {
          state.activeSheets.pop()
        })
        callback?.()
      }
    },
    activeSheets: [],

    closeAllSheets: () => {
      set((state) => {
        state.activeSheets = []
      })
    },

    closeSheet: () => {
      set((state) => {
        if (state.activeSheets.length > 0) {
          state.activeSheets.pop()
        }
      })
    },

    get isSheetActive() {
      return get().activeSheets.length > 0
    },

    openSheet: (sheet) => {
      const last = get().activeSheets.at(-1)
      if (last?.name === sheet.name) {
        return
      }
      set((state) => {
        state.activeSheets.push(sheet)
      })
    }
  }))
)
