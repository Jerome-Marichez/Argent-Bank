import React from 'react';
import './App.css';
import type { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { disconnect, setToken } from './redux/userSlice';

export default function Test() {
  const count = useSelector((state: RootState) => state.user.token);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Test"
          onClick={() => dispatch(setToken("rrr"))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Test2"
          onClick={() => dispatch(disconnect())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}