export default interface PayContent {
  value: {
    id: string;
    amount: number;
  }[];
  address: string;
  name: string;
  phone: string;
}
