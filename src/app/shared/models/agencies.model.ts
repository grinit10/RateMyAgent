export interface Theme {
    AvatarImage: string;
}
export interface Agency {
    Name: string;
}
export interface Item {
    Name: string;
    IsAwardWinner: boolean;
    Agency: Agency;
    Theme: Theme;
    AverageSalePrice: number;
    SoldProperties: number;
    TotalReviews: number;
    StarRating: number;
}

export interface Agencies{
    Results: Item[];
}
