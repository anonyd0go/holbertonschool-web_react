// Create an interface for Teacher
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: unknown;
}
// Directors extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// TODO: confirm if this is what they ment when
// talking about function interfaces.
// Interface for printTeacher function
interface printTeacherFunction {
    (firstName:string, lastName: string): void;
}
// Function
let printTeacher: printTeacherFunction;
printTeacher = (firstName:string, lastName: string): void => {
    console.log(`${firstName.charAt(0)}. ${lastName}`);
}
