export type typeprofile = {
    id : number,
    firstName : string,
    lastName : string,
    age : number,
    birthDate : Date,
    sex : string,
    timestamp : Date,
    status : string
  }

export type typeTodo = {
    id : number,
    Name: string,
    status: string,
    timestamp: Date
};

export type typefilter = {
  status: "Pending" | "Completed" | "All"
}