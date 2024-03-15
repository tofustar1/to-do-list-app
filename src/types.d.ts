export interface ITask {
  id: string;
  text: string;
  isDone: boolean;
}

export type TFilterValuesType = "All" | "Done" | "Active" ;