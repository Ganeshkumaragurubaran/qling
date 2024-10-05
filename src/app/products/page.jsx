import { CONFIG } from 'src/config-global';

import { ProductView } from 'src/sections/our-products/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Products - ${CONFIG.site.name}` };

export default function Page() {
  return <ProductView/>;
}
