// Advacned task 2

export default function iterateThroughObject(reportWithIterator) {
    const employeeNames = [];
  
    // Use the iterator to collect employee names
    for (const employee of reportWithIterator) {
      employeeNames.push(employee);
    }
  
    // Join all names with '|' separator
    return employeeNames.join(' | ');
  }
  