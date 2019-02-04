export class Repository {
     public showDescription:boolean
    constructor (public url:string, 
        public repos_url:string, 
        public descrition:string)

    {
        this.showDescription=false
    }
}

