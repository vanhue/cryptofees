import CurrencyInfo from './CurrencyInfo';

/* global _ */

class BTCInfo extends CurrencyInfo {
    get shortName() {
        return 'BTC';
    }

    get fullName() {
        return 'Bitcoin';
    }

    getTransactionURL(tx) {
        return 'https://blockchain.info/tx/' + tx;
    };
}

export default BTCInfo;
