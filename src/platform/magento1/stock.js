import AbstractStockProxy from '../abstract/stock';
import { multiStoreConfig } from './util';

class StockProxy extends AbstractStockProxy {
  constructor (config, req){
    const Magento1Client = require('magento1-vsbridge-client').Magento1Client;
    super(config, req)
    this.api = Magento1Client(multiStoreConfig(config.magento1.api, req));
  }
  check (sku) {
    return this.api.stock.check(sku);
  }
}

module.exports = StockProxy;
