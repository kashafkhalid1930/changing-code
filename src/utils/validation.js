/**
 * Validates if a student meets the minimum age requirement based on their Date of Birth.
 * 
 * @param {string|Date} dob - The date of birth (ISO string or Date object).
 * @param {number} [minAge=18] - The minimum age requirement (default 18).
 * @returns {Object} - An object containing { isValid: boolean, age: number, message: string }
 */
export const validateAge = (dob, minAge = 18) => {
    if (!dob) {
        return { 
            isValid: false, 
            age: 0, 
            message: "Date of birth is required." 
        };
    }

    const today = new Date();
    const birthDate = new Date(dob);
    
    // Check for invalid date inputs
    if (isNaN(birthDate.getTime())) {
        return { 
            isValid: false, 
            age: 0, 
            message: "The provided date of birth is invalid." 
        };
    }

    // Calculate initial age difference
    let age = today.getFullYear() - birthDate.getFullYear();
    
    // Adjust age if the birthday hasn't happened yet this year
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Response for ineligible applicants
    if (age < minAge) {
        return {
            isValid: false,
            age,
            message: `Minimum age requirement for university admission is ${minAge}. You are currently ${age} years old.`
        };
    }

    // Response for eligible applicants
    return {
        isValid: true,
        age,
        message: "Eligibility verified."
    };
};
