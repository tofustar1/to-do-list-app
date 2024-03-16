export interface ITask {
  id: string;
  text: string;
  isDone: boolean;
  order: number;
}

export type TFilterValuesType = "All" | "Done" | "Active" ;