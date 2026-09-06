import { useSyncExternalStore } from "react";

export type MenuCategory = "Hair transplant" | "Hair Regeneration" | "Skin Treatment";

type State = { open: boolean; category: MenuCategory | null };

let state: State = { open: false, category: null };
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export function openMenu(category?: MenuCategory) {
  state = { open: true, category: category ?? null };
  emit();
}

export function closeMenu() {
  state = { ...state, open: false };
  emit();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

const getSnapshot = () => state;

export function useMenuState() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
