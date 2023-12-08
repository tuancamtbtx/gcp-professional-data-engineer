To create a Google Cloud Function triggered by Google Cloud Pub/Sub using Node.js, follow these steps:

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
   - Create a new JavaScript file (e.g., `index.js`) and define your Cloud Function. Here's a basic example for a Pub/Sub-triggered Cloud Function:
     ```javascript
     const { PubSub } = require('@google-cloud/pubsub');

     exports.subscribe = (event, context) => {
       const pubsubMessage = event.data;
       const data = JSON.parse(Buffer.from(pubsubMessage, 'base64').toString());

       console.log(data);

       // Custom logic to handle the Pub/Sub message

       // Acknowledge the message
       const pubsub = new PubSub();
       const subscription = pubsub.subscription(context.subscription);
       subscription.ack(pubsubMessage.id);
     };
     ```

5. **Run the Function Locally**:
   - You can run the function locally for testing using the Functions Framework by running the following command:
     ```bash
     npx @google-cloud/functions-framework --target=subscribe
     ```

6. **Deploy the Function to GCP**:
   - Once you have tested the function locally, you can deploy it to Google Cloud by using the `gcloud` command-line tool. Ensure that you have authenticated your gcloud CLI and set the project:
     ```bash
     gcloud functions deploy subscribe --runtime=nodejs14 --trigger-topic=[YOUR_TOPIC_NAME]
     ```

7. **Test the Deployed Function**:
   - Once the function is deployed, you can publish a message to the specified Pub/Sub topic to test the function in the GCP environment.

By following these steps, you can create a Cloud Function triggered by Google Cloud Pub/Sub using Node.js and deploy it to Google Cloud Platform. This will allow you to process Pub/Sub messages in a serverless environment.