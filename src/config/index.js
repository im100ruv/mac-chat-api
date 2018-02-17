import mongodb from 'mongodb';

export default {
  "port": 3005,
  "mongoUrl": "mongodb://localhost:27017/chat-api",
  // "port": process.env.PORT,
  // "mongoUrl": "mongodb://im100ruv:accessdenied@ds239368.mlab.com:39368/chattychatchat",
  "bodyLimit": "100kb"
}
