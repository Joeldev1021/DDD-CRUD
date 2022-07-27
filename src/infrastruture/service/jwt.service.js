import jwtoken from "jsonwebtoken";

const jwtSecret = process.env.JWT_PRIVATE_KEY || "defaul_jwt_secret";

export const signJwtAsync = (payload, signOptions) =>
   new Promise((resolve, reject) =>{
        jwtoken.sign(payload, jwtSecret ,signOptions, (err, token)=> {
            if(err) reject(err);
            else resolve(token);
        });
    });


export const veryfyTokenAsync = (token)=>
    new Promise((resolve, reject) =>{
        jwtoken.verify(token, jwtSecret, (err,payload)=>{
            if(err) reject(err);
            else resolve(payload);
        });
    });
