import {randEmail, randUserName, randPassword, randUuid} from "@ngneat/falso";

export const generateRandomUser=() => ({
    id:randUuid(),
    username: randUserName({size: [1-17]}),
    email: randEmail(),
    password: randPassword({size: 10})
});
