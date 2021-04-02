import React, { useState, useEffect, useReducer } from "react";

export type ToastStatusType = 'success' | 'warn' | 'error'

export interface ToastInput {
  message: string;
  status?: ToastStatusType;
}
interface ToastEntry  extends ToastInput{
  key: string;
}

interface ToastAction {
  type: 'toast' | 'kill';
  value: ToastEntry;
}

interface ToastComponentProps extends ToastInput {
  id: string;
  kill: (props: ToastEntry) => void
}

const ToastComponent = ({message, id, status, kill}: ToastComponentProps) => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setShow(true);
        setTimeout(() => {
          setShow(false);
          setTimeout(() => {
            kill({key: id, message});
          },500)
        },5000)
      })
    }
  },[message])

  return (
    <div className={`toastMessage ${(show && message) ? 'show' : 'hide' } ${status}`}>
      {(message) ? message : ''}
    </div>
  )
}

const reducer = (state: ToastEntry[], action: ToastAction) => {
  switch (action.type) {
    case 'toast':
      return [...state, action.value];
    case 'kill':
      const index = state.findIndex(entry => entry.key === action.value.key);
      const arr = [...state];
      arr.splice(index,1);
      return arr;
  }
}

function Toaster({toastInput}: {toastInput: ToastInput} ) {

  const initialState: ToastEntry[] = [];
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (toastInput?.message) toast(toastInput)
  },[toastInput])

  const toast = ({message, status}: ToastInput) => {
    dispatch({
      type: 'toast',
      value: {
        message: message,
        status: (status) ? status : 'success',
        key: Math.random().toString()
      }
    });
  }

  const killToast = ({ key, message }: ToastEntry) => {
    dispatch({
      type: 'kill',
      value: {
        key: key,
        message: message
      }
    })
  }

  return (
    <div className="toastContainer">
      {state.map((toastEntry) => {
        return (
        <ToastComponent
          key={toastEntry.key}
          id={toastEntry.key}
          message={toastEntry.message}
          status={toastEntry.status}
          kill={killToast}  />
      )})}
    </div>
  )
}

export default Toaster;
