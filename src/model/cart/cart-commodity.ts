import Commodity from "../commodity/commodity";

export default class CartCommodity {
  public id: string;
  public name: string;
  public price: number;
  public image: string;
  constructor(data: Commodity, public amount: number) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.image = data.images[0];
  }
}
