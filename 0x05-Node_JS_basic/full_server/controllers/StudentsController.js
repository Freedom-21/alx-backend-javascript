const readDatabase = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const fields = await readDatabase(process.argv[2]);
            let responseText = 'This is the list of our students\n';

            Object.keys(fields).sort().forEach((field) => {
                responseText += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
            });

            res.send(responseText.trim());
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const fields = await readDatabase(process.argv[2]);
            res.send(`List: ${fields[major].join(', ')}`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = StudentsController;
