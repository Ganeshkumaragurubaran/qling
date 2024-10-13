import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData = [
  { title: 'Home', path: '/', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  // {
  //   title: 'About us',
  //   path: paths.about,
  //   icon: <Iconify width={22} icon="solar:atom-bold-duotone" />,
  // },
  {
    title: 'About us',
    path: '/about-us',
    icon: <Iconify width={22} icon="mdi:about" />,
    children: [
      {
        items: [
          { title: 'Company Information', path: paths.about },
          { title: 'Team', path: paths.aboutTeam },
          { title: 'Global Network', path: paths.globalNetwork }
        ],
      },
    ],
  },
  // {
  //   title: 'Pages',
  //   path: '/pages',
  //   icon: <Iconify width={22} icon="solar:file-bold-duotone" />,
  //   children: [
  //     {
  //       subheader: 'Other',
  //       items: [
  //         { title: 'About us', path: paths.about },
  //         { title: 'Contact us', path: paths.contact },
  //         { title: 'FAQs', path: paths.faqs },
  //         { title: 'Pricing', path: paths.pricing },
  //         { title: 'Payment', path: paths.payment },
  //         { title: 'Maintenance', path: paths.maintenance },
  //         { title: 'Coming soon', path: paths.comingSoon },
  //       ],
  //     },
  //   ],
  // },
  {
    title: 'Services',
    path: '/services',
    icon: <Iconify width={22} icon="material-symbols:home-repair-service-sharp" />,
    children: [
      {
        items: [
          { title: 'Third party inspection', path: paths.services },
          { title: 'Audit services', path: paths.auditServices },
          { title: 'Consultacy and brand development services', path: paths.consulting },
        ],
      },
    ],
  },
  { title: 'Products', path: paths.products, icon: <Iconify width={22} icon="gridicons:product" /> },

];
