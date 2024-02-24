export interface Category {
  code: string;
  name: string;
  imagePath: string;
  slug: string;
  percentageDiscount: number;
}

export interface Group {
  groupCategory: string;
  title: string;
  categories: Category[];
}