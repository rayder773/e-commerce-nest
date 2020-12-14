import data from '../seeds/product.json';
import { describeSeeder } from '../database.config';

module.exports = describeSeeder('product', data);
