import { CreateElement, RenderContext, VNode } from 'vue'

interface Attribute {
  breadcrumbs: any[]
}

const VBreadcrumbs: any = {
  name: 'v-breadcrumbs',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  functional: true,
  render(h: CreateElement, context: RenderContext<Attribute>): VNode {
    const { breadcrumbs } = context.props

    return (
      <div class="breadcrumbs">
        <div class="container">
          {breadcrumbs.length > 0 && (
            <ul class="items">
              {breadcrumbs.map((bread: any) => {
                return (
                  <li class="item">
                    {bread.link ? (
                      <a href={bread.link} title={bread.label}>
                        {bread.label}
                      </a>
                    ) : (
                      <strong>{bread.label}</strong>
                    )}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default VBreadcrumbs
