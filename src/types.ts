export interface IProduct {
  type: string;
  initial_price: number;
  quantity: number;
  quantity_available: number;
  created_by: ICreatedBy;
}

interface ICreatedBy {
  custom_url: string;
  display_name: string;
  image: {
    compressed: string;
    original: string;
  };
}
