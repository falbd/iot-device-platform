# IoT Device Management Platform

A **Node.js + MongoDB IoT Device Management Platform** allowing:
✅ User authentication  
✅ Device registration and management  
✅ Secure device telemetry ingestion  
✅ Real-time telemetry streaming using Socket.IO  
✅ Telemetry data storage and retrieval

---

## 🚀 Features

- **User Authentication** (JWT, bcrypt)
- **Device CRUD** with secure `apiKey` generation
- **Telemetry ingestion API** for IoT devices
- **Real-time updates** with Socket.IO
- **MongoDB** for persistent device and telemetry data storage
- **Clean modular structure** for scalability and clarity

---

## 🛠 Tech Stack

- **Node.js** (Express)
- **MongoDB** (Mongoose)
- **Socket.IO**
- **JWT Authentication**
- **dotenv** for environment variable management

---

## ⚙️ Installation

1️⃣ Clone the repository:
```bash
git clone https://github.com/yourusername/iot-device-platform.git
cd iot-device-platform

2️⃣ Install dependencies:

npm install

3️⃣ Create your .env file:

PORT=5000 OR Any Port
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

🚦 Running the Project
Run in development mode:

npm run dev
Server will run on http://localhost:5000.

📮 API Endpoints
Auth
POST /api/auth/register - Register user

POST /api/auth/login - Login user

Devices
POST /api/devices - Register device (requires JWT)

GET /api/devices - Get user's devices (requires JWT)

Telemetry

POST /api/telemetry - Push telemetry (requires apiKey)

🖥 Real-time Telemetry
Connect to the Socket.IO server (ws://localhost:5000)

Join device room by emitting:


socket.emit("joinDeviceRoom", "<deviceId>");
Receive real-time telemetry:


socket.on("telemetry", (data) => {
  console.log(data);
});

🛡 Security
Uses JWT authentication for protected routes.

Device telemetry protected via unique apiKey.

.env excluded via .gitignore to protect secrets.

🤝 Contributions
Pull requests are welcome! Please fork the repository and submit a PR for review.

📄 License
This project is open-source and available under the MIT License.

🚀 Future Improvements
✅ Frontend dashboard (React/Next.js)
✅ Alert system with email notifications
✅ Historical data analytics and CSV export
✅ Multi-tenant SaaS structure for scaling

📫 Contact
For questions or contributions:
Fahad Albedah

https://www.linkedin.com/in/fahad-albedah-a087b8220