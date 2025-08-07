"use client"

import { redirect, RedirectType } from 'next/navigation'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function PublicPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  function handleClick() {
    redirect('/auth/signin', RedirectType.replace);
  }

  return (
    <>
        <Typography>WISDOM for Whole Life Energy and Carbon Management</Typography>
        <Button
          variant="contained"
          size="small"
          color="primary"
          endIcon={<ChevronRightRoundedIcon />}
          fullWidth={isSmallScreen}
          onClick={handleClick}
        >
          Sign In
        </Button>
    </>
  )
}
