export interface People {
  name   : string;
  gender : string;
}

export interface Hero {
  name : string;
  fly  : boolean;
  color: Colors;
}

export enum Colors {
  red, blue, green, black
}