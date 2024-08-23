import { ServerRespond } from './DataStreamer';

export interface Row {
  price_abc:number,
  price_def:number,
  ratio:number,
  timestamp: Date,
  upper_bound:number,
  lower_bound:number,
  trigger_bound:number |undefined,
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]: Row) {
    const priceABC=(serverRespond[0].top_ask.price+serverRespond[0].top_bid.price)/2;
    const priceDEF=(serverRespond[1].top_ask.price+serverRespond[1].top_bid.price)/2;
    const ratio =priceABC/priceDEF;
    const lowerBound=1+0.05;
    return{
      price_abc: priceABC,
      price_def:priceDEF,
      ratio,
      timestamo:serverRespond[0],timestamp>serverRespond[1].timestamp?
       serverResponds[0].timestamp:serverRespond[1].timestamp,
      upper_bound:upperBound,
      lower_bound:lowerBound,
      trigger_alert:{ratio> upperBound || retio < lowerBound) ? ratio :undefined,
      };
    })
  }
}
