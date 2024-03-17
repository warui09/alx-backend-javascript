export interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any,
}

export interface Directors extends Teacher {
  numberOfReports: number,
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastName}`

interface StudentClassInterface {
  new (firstName: string, lastName: string): StudentClass;
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework():string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
