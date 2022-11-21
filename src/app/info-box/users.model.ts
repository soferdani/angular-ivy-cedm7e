export interface IUsers {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

export interface IDataUsers {
  data: IUsers[]
}