import { Member, User } from "lib/types";

export interface RootState {
  menuVisible: boolean;
  loggedIn: boolean;
  user?: User;
  member?: Member;
  permissions: string[];
}

export enum Actions {
  toggleMenu = "toggleMenu",
  closeMenu = "closeMenu",
  setLoggedIn = "setLoggedIn",
  setUser = "setUser",
}

export type Action = { type: Actions; payload?: unknown };
export type Dispatch = (action: Action) => void;
