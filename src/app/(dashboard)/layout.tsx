import { ReactNode } from 'react';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';

export default async function DashboardPagesLayout(props: { children: ReactNode }) {
  return (
    <DashboardLayout>
      <PageContainer>
        {props.children}
      </PageContainer>
    </DashboardLayout>
  );
}
