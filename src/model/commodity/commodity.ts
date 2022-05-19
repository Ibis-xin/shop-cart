export default class Commodity {
  constructor(
    public id: string = "",
    public name: string = "",
    public price: number = 0,
    public comment: string = "",
    public star: number = 0,
    public images: Array<string> = []
  ) {}
}
