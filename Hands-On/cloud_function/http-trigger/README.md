To create an HTTP-triggered Cloud Function using Node.js in Google Cloud Platform (GCP), you can follow the steps below:

1. **Set Up Your Development Environment**:
   - Ensure you have Node.js and npm installed on your local development environment.

2. **Initialize a New Node.js Project**:
   - Create a new directory for your project and run `npm init -y` to initialize a new Node.js project. This will create a `package.json` file.

3. **Install the Cloud Functions SDK**:
   - Install the `@google-cloud/functions-framework` package, which is the Functions Framework for Node.js, by running the following command:
     ```bash
     npm install @google-cloud/functions-framework
     ```

4. **Create the Cloud Function**:
   - Create a new JavaScript file (e.g., `index.js`) and define your HTTP-triggered Cloud Function. Here's a simple example that responds with a "Hello, World!" message:
   ```javascript
   const functions = require('@google-cloud/functions-framework');
   functions.http('helloGET', (req, res) => {
      res.send('Hello World!');
   });```

5. **Run the Function Locally**:
   - You can run the function locally for testing using the Functions Framework by running the following command:
     ```bash
     npx @google-cloud/functions-framework --target=helloWorld
     ```

6. **Deploy the Function to GCP**:
   - Once you have tested the function locally, you can deploy it to Google Cloud by using the `gcloud` command-line tool. Ensure that you have authenticated your gcloud CLI and set the project:
     ```bash
     gcloud functions deploy helloWorld --runtime=nodejs14 --trigger-http
     ```

7. **Test the Deployed Function**:
   - Once the function is deployed, you can test it by sending an HTTP request to the provided URL.

By following these steps, you can create an HTTP-triggered Cloud Function using Node.js and deploy it to Google Cloud Platform. This will allow you to handle HTTP requests and create serverless API endpoints or webhooks.