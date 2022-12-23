import config from 'config';
import mongoose from 'mongoose';

const primaryDatabaseURL = config.get('primaryDB');

mongoose.connection.on('connected', (event) => {
  console.log(`${event} Mongoose connected to database`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Failed to connect mongoose to database due to error ${err}`);
});

mongoose.connection.on('disconnected', (event) => {
  console.log(`${event} Mongoose disconnected from database`);
});

export const primaryDatabase = mongoose.createConnection(primaryDatabaseURL, {
  appName: 'product-listing',
  keepAlive: true,
});
