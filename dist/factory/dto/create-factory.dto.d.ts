declare class LocationDto {
    latitude: number;
    longitude: number;
}
declare class DocumentDto {
    documentName: string;
    documentUrl: string;
}
declare class CoinHistoryDto {
    amount: number;
    date: Date;
    description: string;
    user: string;
}
declare class PackageDto {
    packageName: string;
    price: number;
    duration: number;
}
export declare class CreateFactoryDto {
    factoryCode: string;
    factoryName: string;
    phone: string;
    email: string;
    location: LocationDto;
    coins: number;
    images: string;
    documents: DocumentDto;
    coinHistory: CoinHistoryDto;
    packages: PackageDto;
}
export {};
