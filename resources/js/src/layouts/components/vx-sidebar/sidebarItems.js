export default [
  {
    url: "/",
    name: "Home",
    slug: "home",
    icon: "HomeIcon",
  },
  {
    name: "Sales",
    icon: "MailIcon",
    submenu: [
			{
				url: '/client',
				name: "Client",
				slug: "client",
				i18n: "FileIcon",
			},
			{
				url: '/ecommerce',
				name: "eCommerce",
				slug: "dashboardECommerce",
				i18n: "eCommerce",
			},
		]
  },
  {
    name: "Account",
    icon: "MailIcon",
    submenu: [
			{
				url: '/account',
				name: "Account",
				slug: "Account",
				i18n: "FileIcon",
			},
			{
				url: '/ecommerce',
				name: "eCommerce",
				slug: "dashboardECommerce",
				i18n: "eCommerce",
			},
		]
  },
]
