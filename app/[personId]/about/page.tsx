import assert from "node:assert";
import { turso } from "../../lib/database"



export default async function IntroPage({params}:{params:Promise<{personId: string}>}){
    const routeResult = await params;
    const {rows} = await turso.execute({
        sql:"Select * from Person WHERE PK_PersonId = ?",
        args:[routeResult.personId]
    });
    const person = rows.at(0);
    assert.ok(person);
    return(
        <h1>Hello {person.GivenName + " " + person.FamilyName}</h1>
    )
}