'use client';
import * as React from 'react';
import { Crud } from '@toolpad/core/Crud';

import { employeesDataSource, Employee, employeesCache } from '../../../data/employeesData';
import CustomDataGrid from '../../../components/CustomDataGrid';

export default function EmployeesCrudPage() {
  const [employeeId] = [0];

  return (
    <Crud<Employee>
      dataSource={employeesDataSource}
      dataSourceCache={employeesCache}
      rootPath="/employees"
      initialPageSize={20}
      defaultValues={{ title: 'New Employee' }}
      pageTitles={{
        show: `Employee ${employeeId}`,
        create: 'New Employee',
        edit: `Employee ${employeeId} - Edit`,
      }}
      slots={{
        list: {
          dataGrid: CustomDataGrid,
        },
      }}
    />
  );
}
