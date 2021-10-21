import styled from 'vue-styled-components'

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: ${(props: any) => 100 / props.aspectRatio}%;
  background-color: ${(props: any) => props.backgroundColor};

  .lazyload-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`
export const Img = styled.img`
  ${(props: any) => (props.fullWidth ? 'width: 100%;' : ' max-width: 100%;')}
  ${(props: any) => (props.fullHeight ? 'height: 100%;' : ' max-height: 100%;')}
`
