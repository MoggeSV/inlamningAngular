export interface User {
    _id: string;
    firstname: string;
    middlename: string;
    lastname: string;
    birthday: string;

    postal_addressline: string;
    postal_zipcode: string;
    postal_city: string;
    postal_country: string;

    billing_addressline: string;
    billing_zipcode: string;
    billing_city: string;
    billing_country: string;

    email: string;
    password: string;
}
