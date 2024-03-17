interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

interface createEmployee {
  (salary: number | string): Director | Teacher;
}

interface isDirector {
  (employee: Director | Teacher): string;
}

interface executeWork {
  (employee: Director | Teacher): string;
}

export class Director implements DirectorInterface {
  workFromHome() return 'Working from home';
  getToWork() return 'Getting a coffee break';
  workDirectorTasks() return 'Getting to director tasks';
}

export class Teacher implements TeacherInterface {
  workFromHome() return 'Cannot work from home';
  getCoffeeBreak() return 'Cannot have a break';
  workTeacherTasks() return 'Getting to work';
}

export const createEmployee = (salary: number | string) => {
  if (typeof salary === 'number' && salary < 500)
	  return new Teacher();
  else
	  return new Director();
}

export const isDirector = (employee) => employee isinstance Director;

export const executeWork = (employee) => isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
