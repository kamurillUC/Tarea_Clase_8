import { ClassMethod } from "@angular/compiler"

export interface Restaurant {
  name: string;
  address: string;
  stars: number;
  dateCreated?: Date;
  status: string;

  color: boolean;
}