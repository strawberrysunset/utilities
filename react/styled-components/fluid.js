export const fluid = (variable, min, max, bkptMin, bkptMax) => {

    if (!variable) {
        throw new Error('Variable undefined.')
    }

    const breakpointMin = bkptMin ? bkptMin : 320;
    const breakpointMax = bkptMax ? bkptMax : 1200;

    // Function which scales linearly between 0 and 1 over user defined screen width range. 
    const valueDiff = stripUnit(max) - stripUnit(min);
    const screenDiff = stripUnit(breakpointMax) - stripUnit(breakpointMin);

    return (
        `
            ${variable} : calc(${min} + ${valueDiff} * (calc(100vw - ${breakpointMin}) / ${screenDiff}));

            @media only screen and (min-width: ${breakpointMax}) {
                ${variable} : ${max}; 
            }

            @media only screen and (max-width: ${breakpointMin}) {
                ${variable} : ${min};
            }
        `
    )
}
