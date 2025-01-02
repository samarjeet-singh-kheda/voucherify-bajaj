# Voucher Service

This project is a voucher management service built with the NestJS framework. It allows administrators to create, edit and delete vouchers and users to apply and use vouchers as per their info and cart size.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

```plaintext
JWT_SECRET=your_jwt_secret
MONGO_URI=your_mongodb_uri
```

## API Endpoints

### User Endpoints

- **Sign Up**

  - **URL:** `/api/user/sign-up`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "email": "string",
      "username": "string",
      "password": "string"
    }
    ```
  - **Description:** Register a new user.

- **Log In**
  - **URL:** `/api/user/log-in`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
  - **Description:** Log in an existing user and get a JWT token.

### Voucher Endpoints

- **Get All Vouchers (Admin)**

  - **URL:** `/api/voucher/vouchers`
  - **Method:** `GET`
  - **Headers:**
    ```json
    {
      "Authorization": "Bearer <JWT_TOKEN>"
    }
    ```
  - **Description:** Get all vouchers created by the admin.

- **Create Voucher (Admin)**

  - **URL:** `/api/voucher/create-voucher`
  - **Method:** `POST`
  - **Headers:**
    ```json
    {
      "Authorization": "Bearer <JWT_TOKEN>"
    }
    ```
  - **Body:**
    ```json
    {
      "name": "string",
      "voucherCode": "string",
      "discountType": "string",
      "discountValue": "number",
      "minCartValue": "number",
      "maxDiscount": "number",
      "activationDate": "string (ISO 8601 date)",
      "expiryDate": "string (ISO 8601 date)",
      "usageLimit": "number",
      "reusable": "boolean",
      "eligibilityCriteria": {
        "gender": "male" | "female" | "other",
        "ageRange": [number, number],
        "userType": "string"
      }
    }
    ```
  - **Description:** Create a new voucher.

- **Apply Voucher (User)**

  - **URL:** `/api/voucher/apply-voucher`
  - **Method:** `POST`
  - **Headers:**
    ```json
    {
      "Authorization": "Bearer <JWT_TOKEN>"
    }
    ```
  - **Body:**
    ```json
    {
      "voucherCode": "string",
      "cartValue": "number"
    }
    ```
  - **Description:** Apply a voucher to a cart.

- **Use Voucher (User)**

  - **URL:** `/api/voucher/use-voucher`
  - **Method:** `POST`
  - **Headers:**
    ```json
    {
      "Authorization": "Bearer <JWT_TOKEN>"
    }
    ```
  - **Body:**
    ```json
    {
      "voucherCode": "string",
      "cartValue": "number"
    }
    ```
  - **Description:** Use a voucher at checkout.

- **Delete Voucher (Admin)**

  - **URL:** `/api/voucher/delete/:id`
  - **Method:** `DELETE`
  - **Headers:**
    ```json
    {
      "Authorization": "Bearer <JWT_TOKEN>"
    }
    ```
  - **Description:** Delete a voucher by its ID.

- **Edit Voucher (Admin)**
  - **URL:** `/api/voucher/edit-voucher/:id`
  - **Method:** `PATCH`
  - **Headers:**
    ```json
    {
      "Authorization": "Bearer <JWT_TOKEN>"
    }
    ```
  - **Body:**
    ```json
    {
      "name": "string",
      "voucherCode": "string",
      "discountType": "string",
      "discountValue": "number",
      "minCartValue": "number",
      "maxDiscount": "number",
      "activationDate": "string (ISO 8601 date)",
      "expiryDate": "string (ISO 8601 date)",
      "usageLimit": "number",
      "reusable": "boolean",
      "eligibilityCriteria": {
        "gender": "male" | "female" | "other",
        "ageRange": [number, number],
        "userType": "string"
      }
    }
    ```
  - **Description:** Edit an existing voucher by its ID.
