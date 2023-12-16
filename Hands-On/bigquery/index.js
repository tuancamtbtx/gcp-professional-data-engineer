const schema = [
    {
      name: 'id',
      type: 'INTEGER'
    },
    {
      name: 'name',
      type: 'STRING'
    },
    {
      name: 'details',
      type: 'RECORD',
      fields: [
        {
          name: 'age',
          type: 'INTEGER'
        },
        {
          name: 'address',
          type: 'RECORD',
          fields: [
            {
              name: 'city',
              type: 'STRING'
            },
            {
              name: 'zip',
              type: 'STRING'
            }
          ]
        }
      ]
    }
  ];
const rows = {
    "id": 123,
    "name": "John Doe",
    "details": {
      "age": 30,
      "address": {
        "city": "New York",
        "zip": "10001"
      }
    }
  }
  // Import the @google-cloud/bigquery library
const { BigQuery } = require('@google-cloud/bigquery');

// Create a new BigQuery client
const bigquery = new BigQuery({projectId: ""});

// Define the dataset and table names
const datasetId = 'tuan_test';
const tableId = 'test_table_struct_schema';

async function createTable() {
    const [table] = await bigquery
        .dataset(datasetId)
        .createTable(tableId, {
          schema: schema
        });
    return table
}
async function updateTable() {
    const [table] = await bigquery
        .dataset(datasetId)
        .table(tableId)
        .get();
    
    const newSchema = table.metadata.schema.fields.filter(field => field.name !== 'name');
    await bigquery
    .dataset(datasetId)
    .table(tableId)
    .setMetadata({
      schema: newSchema
    });
    return table
}
// Insert the data into the specified table
async function insertNestedData() {
    try {
      const dataset = bigquery.dataset(datasetId);
      const table = dataset.table(tableId);

      // Insert the rows into the table
      await table.insert(rows);
      console.log('Data inserted successfully.');
    } catch (error) {
        console.log(error)
      console.error('Error inserting error')
    }
  }
  
  // Call the function to insert the data

const newSchema = [
    {
      name: 'id',
      type: 'INTEGER'
    },
    {
      name: 'details',
      type: 'RECORD',
      fields: [
        {
          name: 'age',
          type: 'INTEGER'
        },
        {
          name: 'address',
          type: 'RECORD',
          fields: [
            {
              name: 'city',
              type: 'STRING'
            },
            {
              name: 'zip',
              type: 'STRING'
            }
          ]
        }
      ]
    }
  ];
updateTable();
