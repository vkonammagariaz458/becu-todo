export interface TodoModel{
    id: string;
    description: string;
    status: Status;
    createddate: string;
    createdby: string;
    modifieddate:string;
}

export enum Status{
    NOTSTARTED = "NOTSTARTED",
    PENDING = "PENDING",
    COMPLETED = "COMPLETED"
}