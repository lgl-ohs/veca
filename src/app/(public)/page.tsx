import Link from 'next/link'
import Typography from '@mui/material/Typography';

export default function PublicPage() {

  return (
    <center>
        <p/>
        <Typography>WISDOM for Whole Life Energy and Carbon Management</Typography>
        <p/>
        <b><Link href="/auth/signin">Sign In</Link></b>
    </center>
  )
}
