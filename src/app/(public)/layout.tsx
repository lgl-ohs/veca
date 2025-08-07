import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

import { auth } from '../../auth';

export default function PublicLayout(props: {children: ReactNode}) {
  const session = auth();

  return (
    <SessionProvider session={session}>
      {props.children}
    </SessionProvider>
  )
}