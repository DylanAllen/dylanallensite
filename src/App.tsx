import { useEffect, useReducer } from "react";
import { Helmet } from "react-helmet";
import Routes from "./Routes";
import { initApp } from "./utils/firebase";
import { User } from "@firebase/auth"
import "@firebase/auth";
import Toaster, { ToastInput, ToastStatusType } from "./components/Toast";
import React from "react";
import { auth } from "./utils/auth";
import "./assets/style.scss";

export interface StateType {
  user?: User | null;
  updateState: (state: StateFragment) => void;
  loaded?: boolean;
  toast: (message: string, status?: ToastStatusType) => void;
  toastValue: ToastInput;
  initialized: boolean;
}

export interface StateFragment {
  user?: User | null;
  updateState?: (state: StateType) => void;
  loaded?: boolean;
  toast?: (message: string, status?: ToastStatusType) => void;
  toastValue?: ToastInput;
  initialized?: boolean;
}

const initialState: StateType = {
  user: null,
  updateState: () => {},
  loaded: false,
  toast: (message) => {
    console.log(message);
  },
  toastValue: { message: "" },
  initialized: false,
};

const reducer = (state: StateType, newState: StateFragment): StateType => {
  return { ...state, ...newState } as StateType;
};

export const Context: React.Context<StateType> = React.createContext(
  initialState
);

function App() {
  const [state, setState] = useReducer(reducer, {
    user: null,
    updateState: (state: StateFragment) => {
      setState(state);
    },
    toast: (message: string, status?: ToastStatusType) => {
      setState({
        toastValue: {
          message: message,
          status: status ? status : undefined,
        },
      });
    },
    toastValue: { message: "" },
    initialized: false,
  });

  useEffect(() => {
    if (!state.initialized) {
      initApp();
      auth.init();
      setState({ initialized: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userEvtHandler = (user: CustomEventInit) => {
    setState({ user: user.detail });
  };

  useEffect(() => {
    if (!state.user) {
      window.addEventListener("userUpdate", userEvtHandler);
    }
    if (!state.loaded) {
      setState({ loaded: true });
    }
    return () => {
      window.removeEventListener("userUpdate", userEvtHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,500&family=Source+Code+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="dns-prefetch"
          href="https://firebasestorage.googleapis.com"
        />
      </Helmet>
      <Context.Provider value={state}>
          <Routes />
      </Context.Provider>
      <Toaster toastInput={state.toastValue} />
    </div>
  );
}

export default App;
