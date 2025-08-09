export type Person = {
    id: string,
    givenName:string,
    familyName: string,
    dateOfBirth: Date,
    emailAddress: string,
    phoneNumber: string | null,
    location: string | null,
    about: string,
    title: string,
    positions: Position[],
    skills: Skill[]
}

export type Position = {
    id: string,
    title: string,
    organisation: string,
    location: string,
    startDate: Date,
    endDate: Date | null,
    type: number,
    responsibilities: Responsibility[],
    accomplishments: Accomplishment[]
}

export type Responsibility = {
    id: string,
    description: string
}

export type Accomplishment = {
    id: string,
    description: string
}

export type Skill = {
    id: string, 
    name: string,
    skillLevel: number,
    yearsExperience: number,
    type: number
}

export type Qualification = {
    id: string, 
    name: string,
    organisation: string,
    location: string,
    commencementDate: Date,
    completionDate: Date
}