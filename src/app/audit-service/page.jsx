import { CONFIG } from 'src/config-global';

import { AuditServicesSectionView } from 'src/sections/audit-service/view';


// ----------------------------------------------------------------------

export const metadata = { title: `Audit service - ${CONFIG.site.name}` };

export default function Page() {
  return <AuditServicesSectionView />;
}
