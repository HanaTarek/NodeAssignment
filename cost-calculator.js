/**
 * This function calculates the cost of an employee based on the data in its file
 * @param {string} filePath - path to the employee data file
 * @returns {{name: string, cost: number}} - the name and cost of the employee
 */

const fs = require("fs");
function costCalculator(filePath) {
	// TODO: write your code hereinstall
	// DON'T TOUCH ANYTHING OUTSIDE THIS FUNCTION
	try {
		const data = fs.readFileSync(filePath, "utf-8");
			
			  
			  try {
				const employee = JSON.parse(data);
	
		        const { name, hours, salary } = employee;
		        const costPerHour = salary / hours;
				// output the parsed data
				return {
					name: name.charAt(0).toUpperCase() + name.slice(1),
					cost: costPerHour,
				  };
			  }
			   catch (err) {
				console.error('Error while parsing JSON data:', err)
				return null ;
			  }
		}
		catch (err) {
			console.error('Error while parsing JSON data:', err)
			return null ;
		  }
		
		
	 
  


}

module.exports = {
	costCalculator,
};
