import { turso } from "@/app/lib/database";
import { MapAccomplishmentDataToModel, MapPersonDataToModel, MapPositionDataToModel, MapQualificationDataToModel, MapResponsibilityDataToModel, MapSkillDataToModel } from "@/app/lib/utils";
import { Accomplishment, Responsibility } from "@/app/lib/definitions";
import { PDFViewer } from "@/components/pdf";
import { ResumeDocument } from "@/components/pdf/index"

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
    const positionIds = positionResult.rows.map((x)=> `'${x.PK_PositionId}'`);
    const positionIdsString = positionIds.join(",");
    const responsibilityQuery = `SELECT * FROM Responsibility WHERE FK_PositionId IN (${positionIdsString})`; 
    const responsibilityResult = await turso.execute({
        sql:responsibilityQuery
    });
    const accomplishmentQuery = `SELECT * FROM Accomplishment WHERE FK_PositionId IN (${positionIdsString})`; 
    const accomplishmentResult = await turso.execute({
        sql:accomplishmentQuery
    });
    const person = MapPersonDataToModel(personResult.rows[0])
    person.positions = positionResult.rows.map((p)=> MapPositionDataToModel(p));
    person.skills = skillResult.rows.map((s)=> MapSkillDataToModel(s));
    person.qualifications = qualificationResult.rows.map((q)=>MapQualificationDataToModel(q));
    person.positions.forEach((p)=>{
        accomplishmentResult.rows.forEach((a)=>{
            if(a.FK_PositionId == p.id) p.accomplishments.push(MapAccomplishmentDataToModel(a));
        });
        responsibilityResult.rows.forEach((r)=>{
            if(r.FK_PositionId == p.id) p.responsibilities.push(MapResponsibilityDataToModel(r));
        })
    });
    return person;
}

export default async function PdfPage({params}:{params: Promise<{personId: string}>}){
    const param = await params;
    const personData = await GetPersonData(param.personId);

    return (
        <PDFViewer className="min-h-screen w-full">
            <ResumeDocument person={personData}/>
        </PDFViewer>
    )
}