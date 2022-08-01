import React, { useState } from 'react';
import './index.less';
// 引入相关的hooks
import { useSelector, useDispatch } from 'react-redux';
// 引入对应的方法
import { increment, decrement } from '@/store/counterSlice';

export default function Index(props) {
  // 通过useSelector直接拿到store中定义的value
  const { value } = useSelector((state) => state.counter);
  // 通过useDispatch 派发事件
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  return (
    <div className="p-3">
      <input
        type="text"
        onChange={(e) => setAmount(+e.target.value)}
        value={amount}
        className="shadow-md rounded-md px-3 py-1 mb-3 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <div className="index flex">
        <button
          className="btn btn-green"
          onClick={() => dispatch(increment({ value: amount }))}
        >
          +

        </button>
        <button
          className="btn bg-purple-600 hover:bg-purple-800 text-white ml-3"
          onClick={() => dispatch(decrement({ value: amount }))}
        >
          -
        </button>
      </div>
      <div className="text-cyan-400 text-xl hover:text-cyan-800">
        {value}
      </div>
    </div>
  );
}
