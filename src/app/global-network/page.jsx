import { CONFIG } from 'src/config-global';

import { GlobalNetworkView } from 'src/sections/global-network/view';


// ----------------------------------------------------------------------

export const metadata = { title: `Global Network - ${CONFIG.site.name}` };

export default function Page() {
  return <GlobalNetworkView />;
}
