import { ReactNode } from 'react';

export default function PublicLayout(props: {children: ReactNode}) {

  return (
    <main>
      {props.children}
    </main>
  )
}