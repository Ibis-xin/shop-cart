export default class PayResponse {
  constructor(
    public account: string = "",
    public deadline: string = "",
    public consumerDetails: {
      name: string;
      price: number;
      amount: number;
    }[]=[]
  ) {}
}
