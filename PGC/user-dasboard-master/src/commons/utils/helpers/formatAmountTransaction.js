import numeral from 'numeral';

export default function formatAmountTransaction(asset, amount) {
    asset = String(asset).toLocaleLowerCase();
    switch (asset) {
        case 'cse': {
            return numeral(Number(amount)).format('0,0.0[000]');
        }
        case 'opay': {
            return numeral(Number(amount)).format('0,0.0[000]');
        }
        case 'usd': {
            return numeral(Number(amount)).format('0,0.[00]');
        }
        case 'sgd': {
            return numeral(Number(amount)).format('0,0.[00]');
        }
        case 'vnd': {
            return numeral(Number(amount)).format('0,0');
        }
        case 'btc': {
            return numeral(Number(amount)).format('0,0.0[0000000]');
        }
        case 'eth': {
            return numeral(Number(amount)).format('0,0.0[0000000]');
        }
        default:
            return numeral(Number(amount)).format('0,0.0[0000000]');
    }

}
