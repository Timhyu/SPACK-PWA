import Vue, { CreateElement } from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import { Drawer } from '@pwa/ui'

import { StyledNavigation, StyledList } from './styled'

@Component({
  name: 'v-navigation'
})
export default class Navigation extends Vue {
  @Prop(Array) readonly categories: any[] | any
  @Prop(Boolean) readonly visible: boolean | any
  @Prop(Function) readonly handleCloseDrawer: Function | any

  protected render(h: CreateElement) {
    return (
      <Drawer
        width={350}
        placement="left"
        visible={this.visible}
        title="Menu"
        onClose={this.handleCloseDrawer}
      >
        <StyledNavigation>
          {this.categories.length > 0 ? (
            <StyledList>
              {this.categories.map((category: any) => {
                return category.include_in_menu ? (
                  <li key={category.id}>
                    <router-link to={category.url_path} title={category.name}>
                      <span domPropsInnerHTML={category.name} />
                    </router-link>
                  </li>
                ) : null
              })}
            </StyledList>
          ) : (
            <p>There is no any category.</p>
          )}
        </StyledNavigation>
      </Drawer>
    )
  }
}
