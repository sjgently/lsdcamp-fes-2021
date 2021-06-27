import styled from 'styled-components'

import { Style } from '@/const/style'

const VENUE_COLOR = [
  Style.COLOR.MANGO_TANGO,
  Style.COLOR.STRAW,
  Style.COLOR.ORCHID_CRAYOLA,
]

interface IVenueLabelProps {
  labelNo: 0 | 1 | 2
  labelText: string
}

export const VenueLabel = ({ labelNo, labelText }: IVenueLabelProps) => (
  <Wrapper>
    <Container labelNo={labelNo}>{labelText}</Container>
  </Wrapper>
)

const Wrapper = styled.div`
  margin-top: 32px;
  padding: 16px;
  background-color: ${Style.COLOR.GREEN_SHEEN};
`

interface IContainerProps {
  labelNo: IVenueLabelProps['labelNo']
}

const Container = styled.div<IContainerProps>`
  height: 44px;
  padding: 0 16px;
  background-color: ${({ labelNo }) => VENUE_COLOR[labelNo]};
  font-size: 16px;
  line-height: 44px;
`
