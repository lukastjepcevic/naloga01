export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Naloga01UsersInterface {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
}
