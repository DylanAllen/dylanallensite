import React from "react";
import { MetaType } from "../interfaces";

interface RouteContextProps {
  activePost: MetaType | undefined;
  setActivePost: (post: MetaType | undefined) => void;
}

export const RouteContext = React.createContext<RouteContextProps>({
  activePost: undefined,
  setActivePost: (post: MetaType | undefined) => {},
});
