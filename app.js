import "dotenv/config";
import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";
import { io } from "socket.io-client";

const { SERIAL_PORT, SOCKET_IO_URL } = process.env;

if (!SERIAL_PORT || !SOCKET_IO_URL) {
  console.error("Missing SERIAL_PORT or SOCKET_IO_URL in .env file.");
  process.exit(1);
}

const port = new SerialPort({
  path: SERIAL_PORT,
  baudRate: 9600,
});

const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

const socket = io(SOCKET_IO_URL);

parser.on("data", (tagId) => {
  console.log(`RFID Tag: ${tagId}`);
  socket.emit("rfid", tagId);
});

socket.on("connect", () => {
  console.log("Connected to Socket.IO server");
});

socket.on("disconnect", () => {
  console.warn("Disconnected from Socket.IO server");
});
