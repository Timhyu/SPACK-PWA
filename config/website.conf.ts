export const WebsiteConf: any = {
  website: {
    country: 'US',
    locale: 'en_US',
    cookie: {
      maxAge: 60 * 60 * 1,
      path: '/'
    },
    backTop: 100,
    breadcrumb: {
      separator: '→'
    },
    enableMultiCurrey: false,
    enableMutilStore: false,
    enableHidePrice: false,
    enableMegaMenu: true,
    enableOneStep: false
  },
  homepage: {
    bannerAspectRatio: 1200 / 500,
    bannerConfig: {
      autoplay: false,
      arrows: true,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            arrows: false
          }
        }
      ]
    },
    enableBanner: true
  },
  category: {
    enableInfinite: true,
    filter: {
      limitCount: 5
    },
    pagination: {
      PAGE_KEY: 'page',
      SIZE_KEY: 'size',
      currentPage: 1,
      pageSize: 12,
      total: 1
    },
    sort: {
      SORT_KEY: 'sort',
      sortCode: 'position',
      sortDirection: 'DESC'
    }
  },
  product: {
    carousel: {
      autoplay: false,
      arrows: true,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    },
    magnifierTypes: {
      type: 'glassMagnifier',
      magnifier: {
        mouseActivation: 'click',
        touchActivation: 'tap',
        dragToMove: 'true'
      },
      glassMagnifier: {
        allowOverflow: true,
        square: false,
        magnifierBorderSize: 5,
        magnifierBorderColor: 'rgba(255, 255, 255, .5)',
        magnifierSize: '40%'
      },
      sideBySideMagnifier: {
        fillAvailableSpace: false,
        fillGapLeft: 0,
        fillGapRight: 0,
        fillGapTop: 0,
        fillGapBottom: 0,
        alwaysInPlace: false,
        zoomContainerBorder: '1px solid rgba(0, 0, 0, .3)',
        zoomContainerBoxShadow: '1px 1px 2px 2px rgba(0, 0, 0, .3)'
      }
    }
  },
  account: {
    menus: [
      {
        url: '/account',
        i18n: 'accountMenu.myAccount'
      },
      {
        url: '/account/order-history',
        i18n: 'accountMenu.orderHistory'
      },
      {
        url: '/account/downloadable',
        i18n: 'accountMenu.downloadableProducts'
      },
      {
        url: '/account/wishlist',
        i18n: 'accountMenu.myWishList'
      },
      {
        url: '/account/address-book',
        i18n: 'accountMenu.addressBook'
      },
      {
        url: '/account/account-information',
        i18n: 'accountMenu.accountInformation'
      },
      {
        url: '/account/reviews',
        i18n: 'accountMenu.myProductReviews'
      },
      {
        url: '/account/newsletter',
        i18n: 'accountMenu.newsletterSubscriptions'
      }
    ]
  }
}
