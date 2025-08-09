import {Person, Position, Responsibility, Accomplishment, Qualification, Skill, } from "../lib/definitions";

export function MapPersonDataToModel(row:any){
    const dateOfBirth = new Date(Date.parse(row.DateOfBirth));
    const person:Person = {
        id: row.PkPerson_Id,
        givenName: row.GivenName,
        familyName: row.FamilyName,
        emailAddress: row.EmailAddress,
        phoneNumber: row.PhoneNumber,
        location: row.Location,
        about: row.About, 
        title: row.Title,
        dateOfBirth: dateOfBirth,
        positions: [],
        skills: []
    };
    return person;
}

export function MapPositionDataToModel(row: any){
    const positionStartDate = new Date(Date.parse(row.StartDate));
    let positionEndDate = null;
    if(row.EndDate) positionEndDate = new Date(Date.parse(row.EndDate));
    const position: Position = {
        id: row.Pk_PositionId,
        title: row.Title,
        organisation: row.Organisation,
        location: row.Location, 
        startDate: positionStartDate,
        endDate: positionEndDate,
        type: row.Type,
        responsibilities: [],
        accomplishments: []
    };
    return position;
}

export function MapResponsibilityDataToModel(row:any){
    const responsibility: Responsibility = {
        id: row.Pk_ResponsibilityId,
        description: row.Description
    };
    return responsibility;
}

export function MapAccomplishmentDataToModel(row: any){
    const accomplishment: Accomplishment = {
        id: row.Pk_AccomplishmentId,
        description: row.Description
    };
    return accomplishment;
}

export function MapQualificationDataToModel(row:any){
    const startDate = new Date(Date.parse(row.CommencementDate));
    const endDate = new Date(Date.parse(row.CompletionDate));
    const qualification: Qualification = {
        id: row.Pk_QualificationId,
        name: row.QualificationName,
        commencementDate: startDate,
        completionDate: endDate,
        organisation: row.Organisation,
        location: row.Location
    };
    return qualification;
}

export function MapSkillDataToModel(row: any){
    const skill: Skill = {
        id: row.Pk_SkillId,
        name: row.Name,
        skillLevel: row.SkillLevel,
        yearsExperience: row.YearsExperience,
        type: row.SkillType
    };
    return skill;
}