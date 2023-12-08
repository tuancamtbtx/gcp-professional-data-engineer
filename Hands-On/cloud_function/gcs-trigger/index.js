const { Storage } = require('@google-cloud/storage');
const storage = new Storage();

exports.processFile = (event, context) => {
  const file = event;
  console.log(`Processing file: ${file.name}`);
  
  // Custom logic to handle the file

  // Acknowledge the event
  console.log(`File processed: ${file.name}`);
};