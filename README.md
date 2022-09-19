# Task 3

## Modern Identification system with QRCode Integration

**What you’ll learn from these tasks:**

1. You will learn to use express

2. MongoDB/[Mongoose](https://mongoosejs.com/)

3. Data Encryption using the crypto library [Example 1](https://attacomsian.com/blog/nodejs-encrypt-decrypt-data) [Example 2](https://blog.logrocket.com/node-js-crypto-module-a-tutorial/)


### **Instruction:**

Ensure your code is properly documented using short and precise function level comments & git commits.

- Setup an expressjs project
- Create a “QRProfile” Mongo Database
- Setup input validation for your existing controllers/handlers using “Joi validation library”
- Save the response object into a “Profile” Collection
- Setup  the following endpoints to Create,  Delete, Fetch, Search and Verify the user data on the “Profile Collection”
- When a profile is created, encrypt your response data, generate a [QRCode](https://www.npmjs.com/package/qrcode) image using the encrypted data & send the encrypted data as the response message.
- Add a single search endpoint.  To achieve this, use the mongo filter command in performing search queries for the specific documents within the “Profile Collection”  *(You can either use the MongoDB default command or the mongoose option).*
- The search endpoint would accept two query params “key” and “value” where key would indicate the search key and value would indicate the search value.

Using a couple of up-to-date npm packages, you will set up the following on your API setup:

- Rate Limiting using the [express-rate-limit library](https://www.npmjs.com/package/express-rate-limit)
- CORS using the [cors](https://www.npmjs.com/package/cors) library
- Security Policies using the [helmet](https://www.npmjs.com/package/helmet) library
- Logging using the [morgan](https://www.npmjs.com/package/morgan) library
- CSRF Protection using the **[csurf](https://www.npmjs.com/package/csurf)** library