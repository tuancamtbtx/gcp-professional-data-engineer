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