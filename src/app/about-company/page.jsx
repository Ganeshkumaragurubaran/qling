import { CONFIG } from 'src/config-global';

import { AboutCompanyView } from 'src/sections/about/view';


// ----------------------------------------------------------------------

export const metadata = { title: `Audit service - ${CONFIG.site.name}` };

export default function Page() {
  return <AboutCompanyView />;
}
