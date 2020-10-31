import {useWindowDimensions} from './useWindowDimensions'

export const useIsMobile = (breakpoint) => {
    const {innerWidth} = useWindowDimensions()
    return innerWidth <= breakpoint
}
