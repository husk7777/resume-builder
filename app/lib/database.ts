import {createClient } from "@libsql/client";
import assert from "assert";


function CreateTursoClient(){
const url = process.env.NEXT_PUBLIC_TURSO_DATABASE_URL;
const token = process.env.NEXT_PUBLIC_TURSO_AUTH_TOKEN;
console.log(url);
    assert.ok(url);
    assert.ok(token);
    return createClient({
    url: url,
    authToken: token 
});
}

export const turso = CreateTursoClient();