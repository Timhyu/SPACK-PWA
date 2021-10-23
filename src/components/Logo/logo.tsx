import Vue, { CreateElement, RenderContext, VNode } from 'vue'

import { connector } from '@/store'
import { StyledLogo } from './styled'

const Logo: any = {
  name: 'v-logo',
  functional: true,
  props: {},
  render(h: CreateElement, context: RenderContext<any>): VNode {
    const { data = {} } = context
    const storeConfig: any = data?.props?.storeConfig ?? {}
    const logo: any = storeConfig
      ? {
          src: `${storeConfig.secure_base_media_url}logo/${storeConfig.logo_src}`,
          width: storeConfig.logo_width || 54,
          height: storeConfig.logo_height || 54,
          alt: storeConfig.logo_alt
        }
      : null
    const { alt, width, height, src } = logo

    return (
      <StyledLogo>
        {logo && (
          <router-link to="/" title={alt}>
            <img src={src} width={width} height={height} alt={alt} />
          </router-link>
        )}
      </StyledLogo>
    )
  }
}

export default connector.connect({
  mapStateToProps: {
    storeConfig: (state: any) => state.app.storeConfig
  }
})(Logo)
