To create a Google Cloud Function triggered by Google Cloud Storage using Node.js, follow these steps:

1. **Set Up Your Development Environment**:
   - Ensure you have Node.js and npm installed on your local development environment.

2. **Initialize a New Node.js Project**:
   - Create a new directory for your project and run `npm init -y` to initialize a new Node.js project. This will create a `package.json` file.

3. **Install the Google Cloud Functions SDK**:
   - Install the `@google-cloud/functions-framework` package, which is the Functions Framework for Node.js, by running the following command:
     ```bash
     npm install @google-cloud/functions-framework
     ```

4. **Create Your Cloud Function**:
   - Create a new JavaScript file (e.g., `index.js`) and define your Cloud Function. Here's a basic example for a Cloud Function triggered by changes in a Cloud Storage bucket:
     ```javascript
     const { Storage } = require('@google-cloud/storage');
     const storage = new Storage();

     exports.processFile = (event, context) => {
       const file = event;
       console.log(`Processing file: ${file.name}`);
       
       // Custom logic to handle the file

       // Acknowledge the event
       console.log(`File processed: ${file.name}`);
     };
     ```

5. **Deploy the Function to GCP**:
   - Deploy the function to Google Cloud by using the `gcloud` command-line tool. Ensure that you have authenticated your gcloud CLI and set the project:
     ```bash
     gcloud functions deploy processFile --runtime=nodejs14 --trigger-resource=[YOUR_BUCKET_NAME] --trigger-event=google.storage.object.finalize
     ```

6. **Test the Deployed Function**:
   - Once the function is deployed, you can upload