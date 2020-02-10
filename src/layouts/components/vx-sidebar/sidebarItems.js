/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    header: "Apps",
    i18n: "Apps",
  },
  {
    url: null,
    name: "Dashboard",
    tag: "2",
    tagColor: "warning",
    icon: "HomeIcon",
    i18n: "Dashboard",
    submenu: [
      {
        url: '/dashboard/analytics',
        name: "Analytics",
        slug: "dashboard-analytics",
        i18n: "Analytics",
      },
      {
        url: '/dashboard/ecommerce',
        name: "eCommerce",
        slug: "dashboard-ecommerce",
        i18n: "eCommerce",
      },
    ]
  },
  {
    header: "Apps",
    i18n: "Apps",
  },
]
