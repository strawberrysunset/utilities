import {useWindowDimensions} from './useWindowDimensions'

export const useIsMobile = (breakpoint) => {

    const {width} = useWindowDimensions()

    return width <= breakpoint
}
