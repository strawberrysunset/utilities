import {useWindowDimensions} from '../hooks'

export const useIsMobile = (breakpoint) => {

    const {x : width} = useWindowDimensions()

    return width <= breakpoint
}
