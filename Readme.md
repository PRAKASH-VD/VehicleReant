### Technology Stack
Frontend: HTML, CSS, JavaScript, React, Redux, TailwindCSS
Backend: NodeJS, Express, MongoDB

### Application: Vehicle Rental System


### Features

#### User
User Registration
User Login
User Logout
Vehicle List
Vehicle Details
Add to Cart
Checkout/Place Booking

#### dmin
Admin Login
Admin Logout
Vehicle List
Vehicle Add
Vehicle Update
Vehicle Delete
Booking List
Booking Update
Booking Delete
User List
User Update
User Delete

### User Stories

As a User, I should be able to register on the application.

As a User, I should be able to login into the application.

As a User, I should be able to logout from the application.

As a User, I should be able to view the list of Vehicles.

As a User, I should be able to view the details of a Vehicle.

As a User, I should be able to add a Vehicle to the cart.

As a User, I should be able to place an Booking.

As an Admin, I should be able to login into the application.

As an Admin, I should be able to logout from the application.

As an Admin, I should be able to view the list of Vehicles.

As an Admin, I should be able to add a Vehicle.

As an Admin, I should be able to update a Vehicle.

As an Admin, I should be able to delete a Vehicle.

As an Admin, I should be able to view the list of Bookings.

As an Admin, I should be able to update an Booking.

As an Admin, I should be able to delete an Booking.

As an Admin, I should be able to view the list of users.

As an Admin, I should be able to update a user.

As an Admin, I should be able to delete a user.

### Tasks

Setup Backend
Setup Frontend
User Registration
Create an API to register a user
Create a form to register a user
User Login
Create an API to login a user
Create a form to login a user
User Logout
Create an API to logout a user
Vehicle List
Create an API to get the list of Vehicles
Create a page to display the list of Vehicles
Vehicle Details
Create an API to get the details of a Vehicle
Create a page to display the details of a Vehicle
Add to Cart
Create an API to add a Vehicle to the cart
Create a page to display the cart
Checkout/Place Booking
Create an API to place an Booking
Create a page to place an Booking
### Backend API Routes
Auth routes
POST /api/v1/auth/register POST /api/v1/auth/login GET /api/v1/auth/logout GET /api/v1/auth/me

### Vehicle routes
Allowed for Users
GET /api/v1/Vehicles GET /api/v1/Vehicles/:id

### Allowed for Admin
POST /api/v1/Vehicles PUT /api/v1/Vehicles/:id DELETE /api/v1/Vehicles/:id

### Booking routes
Allowed only for Admin
GET /api/v1/Bookings GET /api/v1/Bookings/:id PUT /api/v1/Bookings/:id DELETE /api/v1/Bookings/:id

### Allowed for User
POST /api/v1/Bookings PUT /api/v1/Bookings/:id - Cancel Booking

### User routes
Allowed only for Admin
GET /api/v1/users GET /api/v1/users/:id PUT /api/v1/users/:id DELETE /api/v1/users/:id

### Vehicle Schema

{
  "name": "string",
  "description": "string",
  "price": "number",
  "image": "string",
  "category": "string",
  "stock": "number"
}

#### Example Data:

{
  "name": "Bick",
  "description": "Hundai",
  "price": 8,
  "image": "HundaiE.jpg",
  "category":  "Electronics",
  "stock": 2
}
{
  "name": "Bick",
  "description": "Hundai",
  "price": 5,
  "image": "Hundai.jpg",
  "category":  "Pertol",
  "stock": 20
}
{
  "name": "Bick-Cycle",
  "description": "Weeal",
  "price": 2,
  "image":  "Weeal.jpg",
  "category": "Eco",
  "stock": 25

}
{
    "name":"car",
    "description" :"TaTa",
    "price":"10",
    "image":"Tata.jpg",
    "category": "Electrick",
    "stock":"9"
}