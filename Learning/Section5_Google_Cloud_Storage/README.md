# Google Cloud Storage

## Storage Location
Here's a table representing the requirements, recommended bucket locations, and workload examples:

| Requirements                          | Recommended Bucket Location | Workload Examples                           |
|---------------------------------------|------------------------------|---------------------------------------------|
| Optimized latency and bandwidth       | Regional                     | Analytics, Backup and archive               |
| Lowest data storage cost              | Regional                     | Analytics, Backup and archive               |
| Cross-zone redundancy                 | Regional                     | Analytics, Backup and archive               |
| Optimized latency and bandwidth       | Dual-region                  | Analytics, Backup and archive, Disaster recovery |
| Cross-region redundancy                | Dual-region                  | Analytics, Backup and archive, Disaster recovery |
| Cross-geography data access           | Multi-region                 | Content serving                              |
| Highest availability                  | Multi-region                 | Content serving                              |

This table outlines the requirements, the recommended bucket locations, and typical workload examples associated with each requirement.
## Storage Class
Here's the provided information organized in a table format:

| Storage Class   | Name for APIs and CLIs | Minimum Storage Duration | Retrieval Fees | Typical Monthly Availability |
|-----------------|-------------------------|--------------------------|-----------------|------------------------------|
| Standard storage | STANDARD | None | None | >99.99% in multi-regions and dual-regions, 99.99% in regions |
| Nearline storage | NEARLINE | 30 days | Yes | 99.95% in multi-regions and dual-regions, 99.9% in regions |
| Coldline storage | COLDLINE | 90 days | Yes | 99.95% in multi-regions and dual-regions, 99.9% in regions |
| Archive storage | ARCHIVE | 365 days | Yes | 99.95% in multi-regions and dual-regions, 99.9% in regions |
Storage options
Here's a table summarizing the storage types, their descriptions, and the best use cases for each:

| Storage Type       | Description                                                                                   | Best For                                    |
|--------------------|-----------------------------------------------------------------------------------------------|---------------------------------------------|
| Standard Storage   | Storage for frequently accessed ("hot") data, and/or stored for brief periods of time.        | Websites, streaming videos, mobile apps     |
| Nearline Storage   | Low-cost, highly durable storage for infrequently accessed data, stored for up to 30 days.    | Data storage for 30-day access patterns     |
| Coldline Storage   | Very low-cost, highly durable storage for infrequently accessed data, stored for up to 90 days. | Data storage for 90-day access patterns     |
| Archival Storage   | Lowest cost, highly durable storage for data archiving, online backup, and disaster recovery. | Long-term data archiving and disaster recovery purposes, data stored for 365 days. |

## Security Data with Encryption
When working with Google Cloud Storage (GCS) and encryption, you can ensure the security of your data using several methods:

1. **Server-Side Encryption (SSE)**:
   - GCS provides default encryption for all data at rest.
   - Data is automatically encrypted before it is written to disk and decrypted after it is read from disk.

2. **Customer-Supplied Encryption Keys (CSEK)**:
   - You can manage your own encryption keys and provide them when you upload or download data to or from GCS.
   - GCS uses these keys to encrypt and decrypt your data.

3. **Customer-Managed Encryption Keys (CMEK)**:
   - With CMEK, you can use Cloud Key Management Service (KMS) to manage and control your encryption keys.
   - GCS uses these keys to encrypt and decrypt your data at rest.

4. **Client-Side Encryption**:
   - You can encrypt your data locally before sending it to GCS and decrypt it after retrieval.
   - This provides an additional layer of protection, as the data is already encrypted before reaching the storage service.

## Object Lifecycle Management
Object Lifecycle Management in Google Cloud Storage (GCS) allows you to automate the management of your objects over their lifetime. You can define lifecycle management rules to automatically transition or delete objects based on their age or storage class.

Key features of GCS Object Lifecycle Management include:

1. **Transition Actions**:
   - Automatically transition objects to a different storage class after a specified duration. For example, you can move objects from Standard to Nearline or Coldline storage classes to optimize storage costs.

2. **Delete Actions**:
   - Automatically delete objects after a specified duration. This can help to enforce data retention policies and ensure compliance with data privacy regulations.

3. **Conditions**:
   - Define rules based on object age or "created before" date to trigger transitions or deletions.

4. **Rules**:
   - Rules can be set at the bucket level to apply to all objects in the bucket, or at the object level to apply to specific objects.

5. **Storage Class Transitions**:
   - Object Lifecycle Management supports transitioning objects between different storage classes, enabling cost optimization based on access patterns.

By using Object Lifecycle Management in GCS, you can effectively manage your storage costs, automate data retention policies, and ensure that objects are stored in the most cost-effective and operationally efficient manner throughout their lifecycle.

## Google Cloud Storage Pricing
Cloud Storage pricing is based on the following components:

**Data storage:** the amount of data stored in your buckets. Storage rates vary depending on the storage class of your data and location of your buckets.
**Data processing:** the processing done by Cloud Storage, which includes operations charges, any applicable retrieval fees, and inter-region replication.
**Network usage:** the amount of data read from or moved between your buckets.