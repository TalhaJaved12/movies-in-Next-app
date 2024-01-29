export type Genre = {
    id: number,
    name: string
}

export type Genres = {
    genres : Genre[]
}

export type SearchResults = {
    page : number,
    results : any[]
    total_pages : number,
    total_results : number,
}
