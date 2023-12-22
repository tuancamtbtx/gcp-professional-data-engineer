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

This table provides an overview of various storage types, their descriptions, and their best use cases, allowing for a quick comparison of their features and suitable applications.

This table summarizes the storage classes in Google Cloud Storage, including their respective names for APIs and CLIs, minimum storage duration, retrieval fees, and typical monthly availability.