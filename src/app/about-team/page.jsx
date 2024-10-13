import { CONFIG } from 'src/config-global';

import { AboutTeam } from 'src/sections/about/about-team';



// ----------------------------------------------------------------------

export const metadata = { title: `About Team - ${CONFIG.site.name}` };

export default function Page() {
  return <AboutTeam />;
}
