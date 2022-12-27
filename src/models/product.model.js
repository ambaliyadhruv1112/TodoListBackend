import { Schema } from 'mongoose';

import { primaryDatabase } from '../connections/index.js';

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
    sparse: true,
    lowercase: true,
  },
  sellerAddress: {
    type: String,
  },
});

export default primaryDatabase.model('products', Product);
