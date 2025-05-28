/**
 * Interface for major credits
 * @interface MajorCredits
 * @property {number} credits - The number of major credits
 * @property {string} brand - The credit brand (New Republic credit)
 */
export interface MajorCredits {
    credits: number;
    brand: 'New Republic credit'; // Star Wars reference
}

/**
 * Interface for minor credits
 * @interface MinorCredits
 * @property {number} credits - The number of minor credits
 * @property {string} brand - The credit brand (Calamari Flan)
 */
export interface MinorCredits {
    credits: number;
    brand: 'Calamari Flan'; // Star Wars reference
}

/**
 * Sums the credits of two major credit subjects
 * @param {MajorCredits} subject1 - First major credit subject
 * @param {MajorCredits} subject2 - Second major credit subject
 * @returns {MajorCredits} Combined major credits
 */
export function sumMajorCredits (subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'New Republic credit',
    };
}

/**
 * Sums the credits of two minor credit subjects
 * @param {MinorCredits} subject1 - First minor credit subject
 * @param {MinorCredits} subject2 - Second minor credit subject
 * @returns {MinorCredits} Combined minor credits
 */
export function sumMinorCredits (subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Calamari Flan'
    };
}
