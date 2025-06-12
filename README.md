# Offline Arduino to Socket IO API

## ABOUT

Connects the Offline Arduino UNO R3 to a Socket IO Server to send RC522 data.

## REQUIREMENTS

To run this project locally, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- RFID/NFC Reader

## INSTALLATION

1. Clone the Repository:
   git clone https://github.com/JohnIvn/OAtSIO-API.git
   cd OAtSIO-API

2. Install Dependencies:
   npm install
   OR
   yarn install

3. Configure Environment:
   Create a .env file in the root directory and add your configuration:
   SERIAL_PORT= (What serial port is your Arduino Connected)
   SOCKET_IO_URL= (What is the socket io server your sending the data to)

4. Run the hardware:
   The hardware and .ino used are compatible for Arduino UNO R3

   The arduino script is inside Hardware/Ino.

5. Run the Development Server:

   4a. OAtSIO-API
   npm run server
   OR
   yarn server

6. Testing:
   You can go to your Socket IO server and test if this sends.

## FEATURES

- Connect the offline Arduino R3 without using ESP32/NodeMCU

## TECHNOLOGIES USED

- Arduino UNO R3
- RC522

## LICENSE

See the LICENSE file for more information.

---
