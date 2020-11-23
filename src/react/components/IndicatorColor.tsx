import React from 'react'
import styled from 'styled-components'

interface ColorProps {
  value: number
  colors: {
    positive: string
    negative: string
    noChange: string
  }
}

interface Props extends ColorProps {
  children: React.ReactChildren
  rest: any
}

const Wrapper = styled.div`
  color: ${(props: ColorProps) => {
    if (props.value > 0) {
      return props.colors.positive
    }
    if (props.value < 0) {
      return props.colors.negative
    }
    return props.colors.noChange
  }};
`

export const IndicatorColor = ({ children, value, colors, ...rest }: Props) => {
  return (
    <Wrapper value={value} colors={colors} {...rest}>
      {children}
    </Wrapper>
  )
}
