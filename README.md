# IoT Device Management Platform

A professional, DevOps-enabled IoT Device Management Platform built with Node.js, Express, and MongoDB, providing:

✅ Secure user authentication and role-based access

✅ Device registration, management, and unique apiKey generation

✅ Secure telemetry ingestion from IoT devices

✅ Real-time telemetry streaming with Socket.IO

✅ Persistent telemetry data storage and retrieval in MongoDB

✅ Containerized with Docker and integrated with GitHub Actions CI/CD for automated builds and linting



---

## 🚀 Features

- **Secure User** Authentication using JWT and bcrypt for hashed passwords
- **Device CRUD operations** with secure apiKey generation for device-level security
- **Telemetry ingestion API** allowing IoT devices to securely push data
- **Real-time telemetry** streaming using Socket.IO for instant monitoring
- **MongoDB integration** for scalable, persistent device and telemetry data storage
- **Clean, modular project structure** ensuring scalability, readability, and ease of maintenance
- **Dockerized** for consistent deployments across environments
- **Integrated GitHub Actions** CI/CD for automated linting and build validation


---

## 🛠 Tech Stack

- **Node.js (Express)**: Backend REST API and WebSocket server

- **MongoDB (Mongoose)**: NoSQL database for scalable device and telemetry data storage

- **Socket.IO**: Real-time telemetry streaming and device room management

- **JWT Authentication**: Secure user authentication and route protection

- **dotenv**: Secure environment variable management

- **Docker**: Containerization for consistent local and cloud deployments

- **GitHub Actions**: CI/CD pipeline for automated linting and Docker build validation

---

⚙️ Installation

1️⃣ Clone the repository

git clone https://github.com/falbd/iot-device-platform.git
cd iot-device-platform

2️⃣ Install dependencies
npm install

3️⃣ Create your .env file in the project root
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

🚦 Running the Project

🖥️ Development mode
npm run dev
The server will start on:
http://localhost:5000

🐳 Run with Docker
Build and run the container:
docker build -t iot-device-platform .
docker run -p 5000:5000 iot-device-platform

📮 API Endpoints

🔐 Authentication
POST /api/auth/register – Register a new user

POST /api/auth/login – Authenticate and receive a JWT

🔧 Devices
POST /api/devices – Register a new device (requires JWT)

GET /api/devices – Retrieve user’s registered devices (requires JWT)

📡 Telemetry
POST /api/telemetry – Push telemetry data (requires device apiKey)

🖥️ Real-time Telemetry Streaming
Connect to the Socket.IO server:
ws://localhost:5000

Join a device room:
socket.emit("joinDeviceRoom", "<deviceId>");

Receive telemetry data in real-time:
socket.on("telemetry", (data) => {
  console.log(data);
});

🛡 Security
✅ JWT authentication for protected routes

✅ Device telemetry secured via unique apiKey

✅ Environment variables securely managed in .env (excluded from Git using .gitignore)

🤝 Contributions
Pull requests are welcome! Please fork the repository and submit a PR for review.

📄 License
This project is open-source and available under the MIT License.

🚀 Future Improvements
✅ Frontend dashboard using React/Next.js for device monitoring

✅ Alert system with email notifications for critical telemetry

✅ Historical telemetry analytics and CSV export

✅ Multi-tenant SaaS structure for scalable deployments

📫 Contact
For questions or contributions:

Fahad Albedah

https://www.linkedin.com/in/fahad-albedah-a087b8220
