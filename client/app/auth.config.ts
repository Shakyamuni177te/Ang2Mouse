interface AuthConfiguration {
    clientID: string,
    domain: string,
    callbackURL: string
}

export const myConfig: AuthConfiguration = {
    clientID: 'xhpJWNQ30P4KsAr5uql9LBQJuoYtUTXo',
    domain: 'peterdcarter.eu.auth0.com',
    // You may need to change this!
    callbackURL: 'http://localhost:3002/'
};
