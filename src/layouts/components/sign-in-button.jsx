import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export function SignInButton({ sx, ...other }) {
  return (
    <Button component={RouterLink} href={paths.contact} variant="outlined" sx={sx} {...other}>
      Contact Us
    </Button>
  );
}
