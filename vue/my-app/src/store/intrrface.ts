export interface movie{
    name: string;
    genres: [];
    title: string;
    id: string;
    alt: string;
    images: [];
    year: string;
    directors: [];
    subtype: string;
    original_title: string;
    collect_count:　number;
    carts: star[];
    rating: rating;
}
export interface rating {
    max: number;
    avarage: string;
    stars: number;
    min: number;
}
export interface star{
    name: string;
    id:　string;
    avatars: [];

}
export interface State {
    movieList: movie[];
} 
