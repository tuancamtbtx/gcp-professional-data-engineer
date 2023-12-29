In Google Cloud Platform (GCP), for block storage, you can use Google Cloud's Persistent Disks, and for file storage, you can use Google Cloud's Filestore service. Below is an overview of each service:

### Google Cloud Persistent Disks (Block Storage)

Google Cloud Persistent Disks provide block storage for your virtual machine instances. Persistent Disks are durable and reliable storage options that can be attached to virtual machine instances to store data. There are two types of Persistent Disks: Standard Persistent Disks and SSD Persistent Disks, each optimized for different use cases.

You can create and manage Persistent Disks through the Google Cloud Console, the `gcloud` command-line tool, or the Google Cloud API.

### Google Cloud Filestore (File Storage)

Google Cloud Filestore provides a fully managed network-attached storage (NAS) service for applications that require a filesystem interface and a shared filesystem for data. It offers high-performance file storage for applications that need a file system interface and a shared file system.

Filestore provides two types of storage: Filestore for NFS and Filestore for CIFS. Filestore for NFS is a high-performance shared file storage for Linux workloads, and Filestore for CIFS provides file storage for Windows workloads.

You can create and manage Filestore instances through the Google Cloud Console, the `gcloud` command-line tool, or the Google Cloud API.

These services are designed to meet various storage needs in the Google Cloud environment, providing scalable and reliable storage solutions for your applications.