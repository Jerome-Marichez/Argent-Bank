import React from 'react';
import type { rootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { clearToken, setToken } from './redux/userSlice';

export default function Test() {
  const count = useSelector((state: rootState) => state.user.token);
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
          onClick={() => dispatch(clearToken())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}