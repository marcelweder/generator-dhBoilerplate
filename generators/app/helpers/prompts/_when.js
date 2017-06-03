/*
 * When helper function to stop repeat myself
 * Wrapping When Function to pass the prompt Type
 * {
 *   when: when('craft'),
 * }
 *
 * @param type (String)
 * @returns {function(*)}
 */

const when = (type, spawny = true) => {
    // Return actual when function provided by inquirer
    return (promptAnswers) => {
        return promptAnswers.projectType === type && spawny === true
    }
}

module.exports = when
