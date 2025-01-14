# Cab Management System for IT Employees and Customer Assignments

**Cab Management System** is a platform designed to manage the transportation of IT employees and customers by assigning them to driver employees efficiently. The platform is built using the **MERN stack** (MongoDB, Express, React, Node.js), **Firebase** for authentication, **Serverless Functions** for backend tasks, and **WhatsApp API** for communication.

## Features

- **Employee and Customer Management**: Manage employee and customer profiles, including assignment details.
- **Driver Assignment**: Assign IT employees and customers to available drivers based on their location and availability.
- **Real-Time Updates**: Real-time updates and notifications through Firebase for driver status, customer bookings, and employee assignment.
- **WhatsApp Communication**: Integration with the **WhatsApp API** to notify employees, customers, and drivers about their assignments and statuses.
- **Serverless Backend**: Use of **Serverless Functions** to handle backend tasks, reducing infrastructure overhead and enhancing scalability.
- **Admin Panel**: Admin panel to manage employee and customer details, view booking history, and track drivers in real-time.

## Technologies Used

- **Frontend**:
  - **React**: For building the user interface.
  - **TailwindCSS**: For styling the application.
  - **React Router**: For navigation between different views (Admin, Employee, Customer).
  - **Axios**: For making API requests to the backend.
  
- **Backend**:
  - **Node.js** and **Express**: For building the REST API to manage the cab assignments and driver details.
  - **Firebase**: For user authentication, real-time database updates, and notifications.
  - **Serverless Functions**: For handling asynchronous backend tasks like sending WhatsApp notifications or assigning drivers dynamically.
  - **WhatsApp API**: For sending communication notifications to employees, customers, and drivers.

- **Database**:
  - **MongoDB**: For storing employee, customer, driver, and booking details.

## Features and Workflow

1. **Admin Dashboard**:
   - View all employee and customer details.
   - Assign drivers to employees or customers.
   - Track the status of assignments in real-time.

2. **Employee and Customer Interaction**:
   - Employees and customers can book cabs from the dashboard.
   - Once a booking is made, the system automatically assigns an available driver based on proximity and availability.

3. **Real-Time Updates**:
   - Use **Firebase** to provide real-time updates to both customers and drivers about their ride status (assigned, in-progress, completed).
   
4. **WhatsApp Notifications**:
   - WhatsApp API is used to send booking confirmations, assignment updates, and notifications to employees, customers, and drivers.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mugesh-rao/cab-management-system.git
