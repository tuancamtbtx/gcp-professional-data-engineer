# GCP Fundamental
## GCP Region vs Zones
In Google Cloud Platform (GCP), regions and zones are important concepts when it comes to deploying and managing resources.

### Region
- A region is a specific geographical location where you can run your resources. It is made up of one or more zones.
- Google Cloud Platform has multiple regions across the world to provide flexibility and options for deploying applications and services closer to your users.
- Each region is independent, and resources in one region are isolated from resources in other regions, providing fault tolerance and high availability.

### Zone
- A zone is an isolated location within a region. Each zone is designed to be independent of other zones in terms of power, cooling, networking, and connectivity.
- By deploying resources across multiple zones within a region, you can help protect your applications and data from data center failures.
- Zonal resources such as virtual machine instances, disks, and Kubernetes clusters are typically tied to a specific zone.

### Key Points
- Regions provide a way to isolate workloads and provide redundancy, while zones provide distinct, independent environments within a region.
- When deploying applications or services, you should consider distributing resources across multiple zones within a region to enhance availability and fault tolerance.
- GCP's global network connects all regions and zones, allowing for reliable and low-latency connectivity across the platform.

In summary, regions and zones in GCP play a crucial role in ensuring high availability, fault tolerance, and geographic distribution of resources, allowing you to design and deploy applications that are resilient and can meet the needs of users across the globe.

`Example`
![Alt text](./images/region-zone.png)


## Note abot GCP Account
Here are some important points to note about a Google Cloud Platform (GCP) account:

1. **Resource Management**: A GCP account provides access to a wide range of cloud services and resources, such as virtual machines, databases, storage, and networking capabilities.

2. **Billing and Cost Management**: With a GCP account, you can manage billing settings, view usage reports, and set up budgets and alerts to monitor and control costs associated with your usage of GCP services.

3. **Identity and Access Management (IAM)**: GCP accounts are associated with IAM roles, allowing you to control and manage permissions for users, groups, and service accounts, ensuring secure access to resources.

4. **Organization Hierarchy**: GCP accounts can be organized into a hierarchical structure using GCP Organizations. This allows for centralized management of policies, permissions, and resources across an organization.

5. **API Access and Service Usage**: GCP accounts enable access to a wide range of APIs and services, including tools for development, data analysis, machine learning, and more.

6. **Support and Service Level Agreements (SLAs)**: Depending on the type of GCP account, you may have access to support options and SLAs that provide commitments for service availability and performance.

7. **Integration with Other Google Services**: GCP accounts are often integrated with other Google services such as Gmail, Google Workspace, and Google Analytics, providing a comprehensive suite of cloud and productivity tools.

It's important to note that GCP accounts come in different types, such as personal accounts, enterprise accounts, and accounts associated with organizations. Each type of account has its own set of features, capabilities, and management options based on the specific needs of the user or organization.
## GCP Service
Google Cloud Platform (GCP) offers a wide range of services and products to support cloud computing, storage, machine learning, big data, and more. Here are some key GCP services:

1. **Compute**: 
   - Compute Engine: Provides virtual machines (VMs) for running applications.
   - Kubernetes Engine: Offers managed Kubernetes clusters for containerized applications.
   - App Engine: Platform as a Service (PaaS) for building and deploying applications.

2. **Storage**: 
   - Cloud Storage: Object storage for storing and accessing data.
   - Cloud SQL: Fully managed relational databases.
   - Cloud Bigtable: NoSQL wide-column database for large analytical and operational workloads.

3. **Networking**: 
   - Virtual Private Cloud (VPC): Provides networking functionality for GCP resources.
   - Cloud Load Balancing: Distributes incoming traffic across multiple instances.
   - Cloud CDN: Content Delivery Network for delivering content to users.

4. **Big Data and Machine Learning**: 
   - BigQuery: Serverless, highly scalable enterprise data warehouse for analytics.
   - Dataflow: Fully managed stream and batch data processing.
   - AI Platform: Managed services for building, testing, and deploying machine learning models.

5. **Databases**: 
   - Cloud Spanner: Horizontally scalable, strongly consistent, relational database service.
   - Firebase Realtime Database: NoSQL cloud database for mobile and web applications.
   - Firestore: Flexible, scalable database for mobile, web, and server development.

6. **Identity and Security**: 
   - Identity and Access Management (IAM): Provides centralized access management for GCP resources.
   - Cloud Identity: Manages users, devices, and apps from a single console.
   - Security Command Center: Provides security and risk insights for GCP resources.

7. **Developer Tools**: 
   - Cloud Build: Continuously build, test, and deploy software.
   - Cloud Source Repositories: Hosted private Git repositories.
   - Firebase: Platform for building and operating mobile and web applications.

8. **Management Tools**: 
   - Stackdriver: Monitoring, logging, and diagnostics for applications on GCP.
   - Deployment Manager: Infrastructure as Code service for managing GCP resources.
   - Cloud Console: Web-based user interface to manage GCP resources.

These are just a few examples of the extensive suite of services and products offered by Google Cloud Platform to support a wide range of use cases, from basic infrastructure needs to advanced data analytics and machine learning applications.