import Layout from "../../components/Layout";
import Picture from "../../components/Picture";
import Comments from "../../components/Comments";
import React, { useContext } from "react";
import usePrism from "../../hooks/usePrism";
import { Context } from "../_app";

const toastCodeString = `import React, { useEffect, useState } from "react";

const ToastComponent = ({ message, id, status, kill }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setShow(true);
        setTimeout(() => {
          setShow(false);
          setTimeout(() => {
            kill({ key: id, message });
          }, 500);
        }, 5000);
      }, 100);
    }
  }, [message]);

  return (
    <div
      className={\`toastMessage \${show && message ? "show" : "hide"} \${status}\`}
    >
      {message ? message : ""}
    </div>
  );
};

export default ToastComponent;`;

const toasterCodeString = `
import React, { useEffect, useReducer } from "react";
import ToastComponent from "./Toast";

const reducer = (state, action) => {
  switch (action.type) {
    case "toast":
      return [...state, action.value];
    case "kill":
      const index = state.findIndex((entry) => entry.key === action.value.key);
      const arr = [...state];
      arr.splice(index, 1);
      return arr;
    default:
      throw new Error();
  }
};

function Toaster({ toastInput }) {
  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (toastInput?.message) toast(toastInput);
  }, [toastInput]);

  const toast = ({ message, status }) => {
    dispatch({
      type: "toast",
      value: {
        message: message,
        status: status ? status : "success",
        key: Math.random().toString()
      }
    });
  };

  const killToast = ({ key, message }) => {
    dispatch({
      type: "kill",
      value: {
        key: key,
        message: message
      }
    });
  };

  return (
    <div className="toastContainer">
      {state.map((toastEntry) => {
        return (
          <ToastComponent
            key={toastEntry.key}
            id={toastEntry.key}
            message={toastEntry.message}
            status={toastEntry.status}
            kill={killToast}
          />
        );
      })}
    </div>
  );
}

export default Toaster;`;

const Toast: React.FunctionComponent = () => {
  const { toast } = useContext(Context);

  usePrism();

  return (
    <Layout
      title={`${meta.title} | Dylan Allen | JavaScript Developer | Frontend Web`}
      image={meta.image}
      description={meta.description}
    >
      <div className="container">
        <h1>{meta.title}</h1>
        <Picture
          src={meta.image}
          style={{ width: "100%", height: "45vw", maxHeight: "700px" }}
          layoutId={`post-${meta.slug}`}
        ></Picture>
        <p>
          I love toast notifications. Simple, unobtrusive, and useful. In this
          post I am going to show you how to create a simple toast component and
          implement it with React Hooks. If you just want to see the code, you
          can peruse the{" "}
          <a href="https://codesandbox.io/s/react-toast-component-8w9wz?file=/src/App.js:524-622">
            Code Sandbox
          </a>
          .
        </p>
        <p>
          If you don't know what I mean when I say "toast notification",{" "}
          <a onClick={() => toast("This is a toast!")}>click here</a> to see an
          example. It is a message that pops up at the bottom of the window like
          toast popping out of the toaster.
        </p>
        <h2>The Toast Component</h2>
        <p>
          I split this into two components. There is the Toast, which is the
          visual element that handles it's fade in, fade out, and removal
          timing. That component is used inside a Toaster component (see what I
          did there) which handles the state of each toast message and supplies
          the function for removing a message to the Toast component. So lets
          dig in, here is the code for the toast component.
        </p>
        <pre>
          <code className="language-javascript">{toastCodeString}</code>
        </pre>
        <p>
          Pretty simple except for the unfortunately deep nesting of setTimeouts
          in the <code>useEffect</code> hook. I don't like it, and there is
          probably a better way to do it, but this works. This nest allows the
          animations to be ahndled by CSS. We create the element, then update
          the class to present the message, wait 5 seconds, chage the class to
          trigger the fade out transition, then call the <code>kill</code>{" "}
          function that is provided by the Toaster parent component to remove
          the message from the DOM.
        </p>
        <h2>The Toaster Component</h2>
        <p>
          There is quite a bit more going on here to handle state for the
          messages and make sure that we can handle multiple messages fired at
          different times from different sources and stay consistent.
        </p>
        <pre>
          <code className="language-javascript">{toasterCodeString}</code>
        </pre>
        <h2>Style: CSS</h2>
        <p>
          There isn't a whole lot to the CSS. A simple transform rule gives us
          the pop up and drop down motion when the className is toggled.
        </p>
        <pre>
          <code className="language-css">{css}</code>
        </pre>
        <h2>Implement the toast component</h2>
        <p>
          This is the kind of component you need to be able to access from
          several different components. So it makes sense to pass the toast
          function to a Context provider at the root level. I wanted it to be as
          easy as possible to create a toast notification, so I created a
          function that handles the state updates, and then I pass that function
          to the context.
        </p>
        <pre>
          <code className="language-javascript">{codeImplement}</code>
        </pre>
        <h2>React Toast Component Summary</h2>
        <p>
          If you need a feature rich component, then you will probably want to
          use an existing library like{" "}
          <a href="https://github.com/fkhadra/react-toastify">React Toastify</a>
          . But if you want to add a simple solution to your app without
          importing extra dependencies, this will do the trick. This is
          basically what I am using on this site, but my site is in TypeScript,
          so if you need a TS example, you can look through the code on my{" "}
          <a href="https://github.com/DylanAllen/dylanallen/blob/master/components/Toast.tsx">
            GitHub repo
          </a>
          .
        </p>
        <p>
          You can see a working demo in this{" "}
          <a href="https://codesandbox.io/s/react-toast-component-8w9wz?file=/src/App.js:524-622">
            Code Sandbox
          </a>
        </p>
        <Comments slug={meta.slug}></Comments>
      </div>
    </Layout>
  );
};

const codeImplement = `
import React, { useState, createContext } from "react";
import Toaster from "./Toast/Toaster";

export const ToastContext = createContext();

export default function App() {
  const [toastMessage, setMessage] = useState("");

  const toast = (message, status) => {
    setMessage({
      message: message,
      status: status ? status : undefined
    });
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      <div className="App">
      { your app code here }
      </div>
    </ToastContext.Provider>
  );
}

`;

const css = `
.App {
  font-family: sans-serif;
  text-align: center;
}

.toastContainer {
  position: fixed;
  display: flex;
  flex-direction: column-reverse;
  bottom: 0;
  text-align: center;
  pointer-events: none;
  z-index: 99;
  width: 100%;
}

.toastContainer .toastMessage {
  opacity: 0.9;
  display: inline-block;
  margin: 0 auto 20px;
  background-color: rgb(44, 97, 44);
  color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 0 5px #000000;
  padding: 10px 40px;
  transition: all 0.5s ease-out;
  font-size: 17px;
}

.toastContainer .toastMessage.error {
  background-color: red;
}

.toastContainer .toastMessage.hide {
  opacity: 0;
  transform: translateY(15px);
}

`;

export const meta = {
  title: "React Toast Component",
  description:
    "I love toast notifications. Simple, unobtrusive, and useful. In this post I am going to show you how to create a simple toast component and implement it with React Hooks.",
  image: "/toast.jpg",
  slug: "toast",
  date: new Date(2020, 10, 25),
};

export default Toast;
