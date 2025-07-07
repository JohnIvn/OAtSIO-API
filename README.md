# Offline Arduino to Socket IO API

> Connects the Offline Arduino UNO R3 to a Socket.IO Server to send RC522 data without using ESP32/NodeMCU.

![Node.js](https://img.shields.io/badge/Node.js-v14%2B-brightgreen)
![Arduino](https://img.shields.io/badge/Hardware-Arduino%20UNO%20R3-blue)
![License](https://img.shields.io/github/license/JohnIvn/OAtSIO-API)

---

## About

This project connects an **offline Arduino UNO R3** with an **RC522 RFID/NFC reader** to a **Socket.IO server** via serial communication, enabling you to send RFID tag data in real-time.

---

## Table of Contents

- [Requirements](#requirements)
- [Release](#release)
- [Installation](#installation)
- [Structure](#structure)
- [Wiring Diagram](#wiringdiagram)
- [Features](#features)
- [Technologies Used](#technologiesused)
- [Testing](#testing)
- [License](#license)

## Requirements

To run this project locally, make sure the following are installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- `npm` or `yarn`
- RFID/NFC Reader (RC522)

---

## Release

- Alternatively you can download the `.zip` file from the [Releases](https://github.com/JohnIvn/OAtSIO-API/releases) section.

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/JohnIvn/OAtSIO-API.git
cd OAtSIO-API
```

### 2. Install Dependencies

```bash
npm install
# OR
yarn install
```

### 3. Configure Environment

Create a `.env` file in the root directory:

```env
SERIAL_PORT=COM10
SOCKET_IO_URL=http://localhost:3000
```

### 4. Upload Arduino Sketch

Upload the script from:

```
Hardware/Ino/OAtSIO.ino
```

It is compatible with **Arduino UNO R3**.

### 5. Start the Server

```bash
npm run server
# OR
yarn server
```

---

## Wiring Diagram

| MFRC522 Pin | Arduino Uno Pin    |
| ----------- | ------------------ |
| SDA         | 10                 |
| SCK         | 13                 |
| MOSI        | 11                 |
| MISO        | 12                 |
| IRQ         | Not connected      |
| GND         | GND                |
| RST         | 9                  |
| 3.3V        | 3.3V (**not 5V!**) |

---

## Features

- Send RC522 tag data from Arduino to Socket.IO server
- No need for ESP32 or NodeMCU
- Easy setup using environment variables

## Structure

```bash
/   
└── Hardware/            
```

---

## Technologies Used

| Category | Tools                          |
| -------- | ------------------------------ |
| Hardware | Arduino UNO R3                 |
| Sensor   | RC522                          |
| Backend  | Node.js, SerialPort, Socket.IO |

---

## Testing

Once everything is set up and the server is running, you can test by scanning a card/tag. The data should be sent to your Socket.IO server.

---

## License

See the [LICENSE](LICENSE) file for more information.

---

> Built with ❤️ by JohnIvn
