export type DataPoint = {
  interest: number;
  skill: number;
  tag: string;
  type: string;
  fill: string;
}

export type Person = {
  _id?: string;
  firstName: string;
  lastName: string;
  role: "eng"|"data"|"op"|"ux"; // what are the roles?
  title: string; // explicit roles?
  data: DataPoint[];
}
