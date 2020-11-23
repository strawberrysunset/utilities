import { useWindowDimensions } from './useWindowDimensions'

export const useIsMobile = (breakpoint: number): boolean => {
  const { innerWidth } = useWindowDimensions()
  return innerWidth <= breakpoint
}
