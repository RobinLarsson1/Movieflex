import { atom, useRecoilState } from "recoil";

export const menuOpenState = atom({
  key: "menuOpenState",
  default: true, // Starta med menyn öppen
});

export function useMenuOpenState() {
  return useRecoilState(menuOpenState);
}
