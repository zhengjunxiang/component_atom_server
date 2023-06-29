export function filterRedundancyFields(input, fields) {
    const appointSet = new Set(Object.keys(fields));
    let temp = {};
    for (const key in input) {
        if (Array.isArray(input[key])) {
            return input;
        } else {
            if (appointSet.has(key)) {
                temp[key] = input[key];
            }
        }
    }
    return temp;
}