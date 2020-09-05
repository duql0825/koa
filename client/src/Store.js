import React from "react";
import io from "socket.io-client";

export const CTX = React.createContext();

const initstate = {
  general: [],
  topic2: [],
};

function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [topic]: [...state[topic], { from, msg }],
      };
    default:
      return state;
  }
}

let socket;

const user = "sy" + Math.random(100).toFixed(2);
function sendChatAction(val) {
  socket.emit("chat message", val);
}

export default function Store(props) {
  const [allChats, dispatch] = React.useReducer(reducer, initstate);

  const socket = io(":3001");
  if (!socket) {
    console.log("conn");
    socket.on("chat message", function (msg) {
      dispatch({ type: "RECEIVE_MESSAGE", payload: msg });
    });
  }

  return (
    <CTX.Provider value={{ allChats, sendChatAction, user }}>
      {props.children}
    </CTX.Provider>
  );
}
