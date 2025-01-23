
# 🌟 CliniNSync

**CliniNSync** is a cutting-edge healthcare management system that simplifies electronic health records (EHR) and clinic operations. Designed for admins, doctors, and patients, CliniNSync provides a seamless, secure, and efficient platform for managing patient data, appointments, and token systems.

---

## 🚀 Features
- **Role-Based Access:** Dedicated dashboards for Admin, Doctor, and Patient roles.
- **Patient Management:** Track medical history, medications, surgeries, and insurance claims.
- **Real-Time Token System:** Monitor tokens, receive notifications, and track ETA.
- **Dynamic Registration Forms:** Role-specific fields tailored for patients, doctors, and admins.
- **Appointment Optimization:** Traffic-aware arrival time estimations and timely reminders.

---

## 🛠️ Technologies Used
- **Frontend:** React, Bootstrap, react-router-dom  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** Secure password hashing with SHA-256  
- **APIs:** Google Maps API for traffic monitoring and ETA calculations  

---

## 📦 Installation Guide

Follow these steps to set up CliniNSync locally:
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/username/CliniNSync.git
   ```
   
2. **Navigate to the Project Directory**  
   ```bash
   cd CliniNSync
   ```

3. **Install Dependencies**
   Run the following command: 
   ```bash
   cd frontend
   npm install
   ```
   ```bash
   cd ../backend
   npm install
   ```

4. **Set Up Environment Variables**  
   Create a `.env` file in the backend root and add the following:
   ```env
   MONGO_URI=<your_mongodb_connection_string>
   PORT=5000
   ```

5. **Start the Server**  
   - Navigate to frontend directory and run the following command
   ```bash
   npm run dev
   ```
   - Navigate to backend directory and run the following command
   ```bash
   npm start
   ```

7. **Access the Application**  
   Open your browser and visit `http://localhost:5173` for frontend.
   The backend server will be running at `http://localhost:3001`.

---

## 👩‍💻 Usage

1. **Registration:**  
   - Create an account by choosing your role (Admin, Patient, or Doctor).  
   - Fill in the role-specific details in the dynamic registration form.  

2. **Login:**  
   - Use your credentials to log in to your personalized dashboard.

3. **Admin Features:**  
   - Manage user accounts and patient records.  
   - Add, edit, or remove patient details.  

4. **Doctor Features:**  
   - Access patient records and update diagnoses and treatments.

5. **Patient Features:**  
   - View your medical history.  
   - Monitor real-time token status for appointments.

---

## 🤝 Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Submit a pull request.

---

## Contributors
- **[Sumedh Udupa U](https://github.com/sumedhudupa)** - Initial Project Design and React backend
- **[Pratham M Mallya](https://github.com/PrathamMMallya)** - Insurance Recommendation
- **[T J Sreeharish](https://github.com/TJSreeharish)** - Flask and EHR related AI Chatbot 
- **[Syed Muzzamil Hussaini](https://github.com/The-Enshoruded-One)** - CSS Frontend
- **[Jay Sinha](https://github.com/)** - Design and Survey

*Want to join the team? Feel free to contribute!*

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## 📧 Contact
For support or inquiries, contact us at sumedhudupa15@gmail.com.
