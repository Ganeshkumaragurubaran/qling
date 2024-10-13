import { CONFIG } from 'src/config-global';

import { AboutView } from 'src/sections/services/view';


// ----------------------------------------------------------------------

export const metadata = { title: `Services - ${CONFIG.site.name}` };

export default function Page() {
  return <AboutView/>;
}
