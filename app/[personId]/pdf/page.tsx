import { turso } from "@/app/lib/database";

async function GetPersonData(personId: string){
    const personResult = await turso.execute({
        sql:"SELECT * FROM Person WHERE PK_PersonId = ?",
        args:[personId]
    });
    const positionResult = await turso.execute({
        sql:"SELECT * FROM Position WHERE FK_PersonId = ?",
        args:[personId]
    });
    const skillResult = await turso.execute({
        sql:"SELECT * FROM Skill WHERE FK_PersonId = ?",
        args:[personId]
    });
    const qualificationResult = await turso.execute({
        sql:"SELECT * FROM Qualification WHERE FK_PersonId = ?",
        args:[personId]
    });
    const positionIds = positionResult.rows.map((x)=> `'${x.PkPositionId}'`);
    const positionIdsString = positionIds.join(",")
    const responsibilityResult = await turso.execute({
        sql:"SELECT * FROM Responsibility WHERE FK_PositionId IN (?)",
        args: [positionIdsString]
    });
    const accomplishmentResult = await turso.execute({
        sql:"SELECT * FROM Accomplishment WHERE FK_PositionId IN (?)",
        args: [positionIdsString]
    });
}

export default async function PdfPage({params}:{params: Promise<{personId: string}>}){
    const param = await params;
    const personData = GetPersonData(param.personId);


}