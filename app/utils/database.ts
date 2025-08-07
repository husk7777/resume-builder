import {createClient } from "@libsql/client";
import assert from "assert";

const url = process.env.TURSO_DATABASE_URL;
const token = process.env.TURSO_AUTH_TOKEN;

function CreateTursoClient(){
    assert.ok(url);
    assert.ok(token);
    return createClient({
    url: url,
    authToken: token 
});
}

export const turso = CreateTursoClient();