import React, { useState, createContext, useContext } from "react";
import socketIOClient from "socket.io-client";
import { config } from "../config";
const { url } = config;
const ENDPOINT = url;

const SocketContext = createContext();

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(socketIOClient(ENDPOINT));
  function connection(string) {
    setSocket(string);
  }

  return (
    <SocketContext.Provider value={[socket, connection]}>
      {children}
    </SocketContext.Provider>
  );
}

export default function useSocketContext() {
  return useContext(SocketContext);
}
