## Data Engineering Overview

1. Data pipeline
2. How data flows

```mermaid
graph LR
A[Ingestion] -->B(Storage) --> C(Process and analyze) --> D(Explre and visualize)
    
```
![data](./images/data-lifecycle-1.webp)

### Ingest
- Gather data from multiple sources
- Data gather from app
  - event log, click stream data, ecommerce transaction ..

- Streaming ingest
    - pubsub

- Bacth ingest
    - Different transfer services
    - GCS - gsutil