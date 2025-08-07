import { ReactNode } from 'react';

export default function PublicLayout(props: {children: ReactNode}) {

  return (
    <public>
      {props.children}
    </public>
  )
}