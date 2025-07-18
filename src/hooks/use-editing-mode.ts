import { atom, useAtom } from "jotai";

const isOpenEditingModeAtom = atom(false);

export function useEditingMode() {
  const [isOpen, setIsOpen] = useAtom(isOpenEditingModeAtom);

  return {
    isOpen,
    setIsOpen
  };
}
