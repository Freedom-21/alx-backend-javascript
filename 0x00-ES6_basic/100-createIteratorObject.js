// Advanced task 1

export default function createIteratorObject(report) {
    const employees = [];
    
    // Gather all employees from each department
    for (const department of Object.values(report.allEmployees)) {
      employees.push(...department);
    }
  
    // Return an iterator using the Symbol.iterator protocol
    return employees[Symbol.iterator]();
  }
  