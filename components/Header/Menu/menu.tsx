import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import { MenuIcon } from 'vue-feather-icons'

import { GET_CATEGOR_TREE } from '@/graphql/queries/getCategoryTree'
import { Fragment, Icon } from '@pwa/ui'

import Navigation from '@/components/Navigation'
import { StyledMenu } from './styled'

@Component({
  name: 'v-menu'
})
export default class Menu extends Vue {
  private visible = false
  private categories: any[] = []

  private async mounted() {
    const { data } = await this.$apollo.query({
      query: GET_CATEGOR_TREE
    })

    this.categories = data?.categoryList[0].children ?? []
  }

  protected render(h: CreateElement) {
    const handleOpenDrawer = () => {
      this.visible = true
    }

    const handleCloseDrawer = () => {
      this.visible = false
    }

    return (
      <Fragment>
        <StyledMenu onClick={handleOpenDrawer}>
          <Icon src={MenuIcon} />
        </StyledMenu>
        <Navigation
          categories={this.categories}
          visible={this.visible}
          handleCloseDrawer={handleCloseDrawer}
        />
      </Fragment>
    )
  }
}
