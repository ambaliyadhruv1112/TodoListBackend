import { Schema } from 'mongoose';

import { primaryDatabase } from '../connections';

const Product = new Schema({
  chemicalName: {
    type: String,
  },
  casNumber: {
    type: String,
  },
  haveBadSmell: {
    type: String,
  },
  sellerName: {
    type: String,
  },
  sellerEmail: {
    type: String,
    unique: true,
    sparse: true,
    lowercase: true,
  },
  sellerAddress: {
    type: String,
  },
});

export default primaryDatabase.model('products', Product);
