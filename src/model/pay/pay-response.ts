export default class PayResponse {
  constructor(
    public consumerDetails?: {
      name: string;
      price: number;
      amount: number;
    }[],
    public account: string = '',
    public deadline: string=""
  ) {}
}
