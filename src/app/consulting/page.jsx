import { CONFIG } from 'src/config-global';

import { ConsultingView } from 'src/sections/consulting/view';



// ----------------------------------------------------------------------

export const metadata = { title: `Consulting - ${CONFIG.site.name}` };

export default function Page() {
  return <ConsultingView />;
}
