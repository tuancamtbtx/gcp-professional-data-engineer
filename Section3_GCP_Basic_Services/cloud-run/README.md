Google Cloud Run is a fully managed compute platform that allows you to run stateless containers that are invocable via HTTP requests. Here's an overview of how to deploy a container to Google Cloud Run:

1. **Containerize Your Application**:
   - Containerize your application using Docker. Create a `Dockerfile` in the root of your application to define how your application should be packaged into a container.

2. **Build and Push the Docker Image**:
   - Build the Docker image and push it to Google Container Registry (GCR) using the following commands:
     ```bash
     # Build the Docker image
     docker build -t gcr.io/[PROJECT_ID]/[IMAGE_NAME] .

     # Push the Docker image to GCR
     docker push gcr.io/[PROJECT_ID]/[IMAGE_NAME]
     ```

3. **Deploy to Cloud Run**:
   - Use the `gcloud run deploy` command to deploy your container to Google Cloud Run:
     ```bash
     gcloud run deploy --image gcr.io/[PROJECT_ID]/[IMAGE_NAME] --platform managed
     ```

4. **Access Your Application**:
   - Once the deployment is complete, you will receive a URL that can be used to access your application running on Cloud Run.

### Additional Considerations:
- **Environment Variables**: You can set environment variables for your container using the `--set-env-vars` flag during deployment.
- **Concurrency**: Cloud Run automatically scales your container up and down based on traffic. You can configure the maximum number of concurrent requests using the `--concurrency` flag.

By following these steps, you can deploy your stateless container to Google Cloud Run, allowing you to run and scale your applications automatically in a serverless environment.