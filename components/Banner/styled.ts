/*
 * @Copyright: @2021 Silk Software Corp. All Rights Reserved
 */
import styled from 'vue-styled-components'

const imgContainerProps = {
  aspectRatio: Number
}

const imgProps = {
  fullWidth: Boolean,
  fullHeight: Boolean
}

export const StyledBanner = styled.div`
  max-width: ${(props: any) => `${props.theme.width.bannerWidth}px`};
  margin: 0 auto;
`

export const StyledImgContainer = styled('div', imgContainerProps)`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: ${(props: any) => `${100 / props.aspectRatio}%`};
`

export const StyledImgInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const StyledImg = styled('img', imgProps)`
  ${(props: any) => (props.fullWidth ? 'width: 100%;' : ' max-width: 100%;')};
  ${(props: any) =>
    props.fullHeight ? 'height: 100%;' : ' max-height: 100%;'};
`
