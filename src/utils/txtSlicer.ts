
/**
 * 
 * @param {string} txt
 * @param {number} max
 * @returns The sliced text as a string with an elipsis {...} at end
 */
export function txtSlider(txt: string,max: number=80): string {
    return txt.length>max? `${txt.slice(0,max)}...`:txt
}