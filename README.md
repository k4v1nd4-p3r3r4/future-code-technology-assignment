# Future Code Technologies Assignment

## Project Setup


### 1. Clone the Repository

```sh
git clone https://github.com/k4v1nd4-p3r3r4/future-code-technology-assignment.git
cd futurec-technologies-assignment
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add your database credentials:

```
HOST=localhost
USER=root
DB_PWD= your db password
DB_NAME= your db name
PORT=8000
```

### 4. Set Up the Database

- Create a MySQL database (e.g., `products_db`).
- Create the required tables. Example for a `users` and `products` table:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10,2),
  quantity INT
);
```

### 5. Start the Server

```sh
npm start
```
or 
```sh
npm run dev
```

The server will run on [http://localhost:8000](http://localhost:8000) by default.

---

## API Endpoints

### Auth Routes

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login


### Product Routes

- `POST /api/products/` — Create a product
- `GET /api/products/all` — Get all products
- `GET /api/products/:id` — Get product by ID
- `PUT /api/products/:id` — Update product
- `DELETE /api/products/:id` — Delete product

---

## Testing the API

Use postman or thunder client for test api.

Example to register user:

- `POST http://localhost:8000/api/auth/register` — Register a new user

```json
{
  "name":"wick",
  "username":"wick123",
  "password":"wick@123"
}
```
Example to login user:

 `POST http://localhost:8000/api/auth/login` — Login

```json
{
  "username":"wick123",
  "password":"wick@123"
}
```

Example to create a product:

- `POST http://localhost:8000/api/products/` — Create a product

```json
{
  "name": "Laptop",
  "price": 1200,
  "quantity": 5
}
```
Example to get all product:

- `GET http://localhost:8000/api/products/all` — Get all products

Example to get product by id:

- `http://localhost:8000/api/products/1` — Get product by ID

Example update product:

- `PUT http://localhost:8000/api/products/1` — Update product

```json
{
  "name": "iphone X",
  "price": 9000,
  "quantity": 18
}
```
Example delete product:

- `DELETE http://localhost:8000/api/products/1` — Delete product



---
