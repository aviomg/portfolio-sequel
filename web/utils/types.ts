export type Poem = {
    title: string,
    subtitle:string,
    date: string,
    content: string,
    archive:"true" | "false",
    slug:string ,
    filename?:string,
  }