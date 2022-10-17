/* eslint-disable */
import React, { useState, useReducer } from 'react';

export default function usePagination({
  current = 1,
  pageSize = 10,
  total = 0,
  showTotal = true,
  showSizeChanger = true,
  showQuickJumper = true,
}) {
  const initialState = {
    current,
    pageSize,
    total,
    showSizeChanger,
    showQuickJumper,
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'update_page':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const pageChange = (page, pageSize) => {
    dispatch({
      type: 'update_page',
      payload: {
        current: page,
        pageSize,
      },
    });
  };

  const pagination = {
    ...state,
    onChange: pageChange,
  };

  if (typeof showTotal === 'function') {
    pagination.showTotal = showTotal;
  } else {
    showTotal && (pagination.showTotal = (total) => `共${total}条`);
  }

  if (showSizeChanger) {
    pagination.onShowSizeChange = (current, size) => {
      dispatch({
        type: 'update_page',
        payload: {
          current: 1,
          pageSize: size,
        },
      });
    };
  }

  const setPagination = (pageObj) => {
    dispatch({
      type: 'update_page',
      payload: pageObj,
    });
  };

  return [pagination, setPagination];
}
