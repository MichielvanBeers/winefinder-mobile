// Define Types
export type Grape = {
  id?: number;
  name: string;
};

export type Type = {
  id?: number;
  name: string;
};

export type Tag = {
  id?: number;
  name: string;
};

export type Food = {
  id?: number;
  name: string;
  category: number[];
};

export type Region = {
  id?: number;
  name: string;
};

export type Allergen = {
  id?: number;
  name: string;
};

export type ReceivedFrom = {
  id?: number;
  name: string;
};

export type Wine = {
  id?: number;
  grape?: Grape[];
  type?: Type[];
  tag?: Tag[];
  food?: Food[];
  region?: Region[];
  allergen?: Allergen[];
  received_from?: ReceivedFrom[];
  name?: string;
  date_added?: string;
  archived?: boolean;
  archived_date?: string;
  year?: string;
  price?: string;
  score?: string;
  country?: string;
  image?: string;
  drank_image?: string;
};
