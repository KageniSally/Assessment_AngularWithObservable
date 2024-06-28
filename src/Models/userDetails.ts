export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suit: string,
        cit: string,
        zipcode: string,
        geo: {
            la: string,
            ln: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}
