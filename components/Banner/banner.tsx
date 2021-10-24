import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import { GET_SLIDER } from '@/graphql/queries/getSlider'
import { Carousel } from '@pwa/ui'

import {
  StyledBanner,
  StyledImgContainer,
  StyledImgInner,
  StyledImg
} from './styled'

const appModule: any = namespace('app')

@Component({
  name: 'v-banner'
})
export default class Banner extends Vue {
  @Prop(String) readonly identifier: string | any
  @appModule.State('storeConfig') storeConfig: any

  private slider: any = null

  private get baseUrl() {
    return this.storeConfig?.secure_base_url ?? ''
  }

  // Query Store Config
  private async mounted() {
    const { data } = await this.$apollo.query({
      query: GET_SLIDER,
      variables: {
        identifier: this.identifier
      }
    })

    this.slider = data?.slider ?? {}
  }

  protected render(h: CreateElement) {
    return (
      <StyledBanner class="banner">
        {this.slider && (
          <Carousel>
            {this.slider.banners.map((banner: any) => {
              return (
                banner.banner_status && (
                  <div className="banner__item" key={banner.id}>
                    <StyledImgContainer aspectRatio={1200 / 500}>
                      <StyledImgInner>
                        <StyledImg
                          src={`${this.baseUrl}${banner.image}`}
                          alt={banner.alt}
                          fullWidth={true}
                          fullHeight={true}
                        />
                      </StyledImgInner>
                    </StyledImgContainer>
                  </div>
                )
              )
            })}
          </Carousel>
        )}
      </StyledBanner>
    )
  }
}
