import { memo } from 'react'

import cls from './AppTable.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import {ApiTableData} from "app/api/entities/ApiTableData";

interface AppTableProps {
  data: ApiTableData
  className?: string
}

const AppTable = memo(({ data, className }: AppTableProps) => {
  return (
    <table className={classNames(cls.appTable, {}, [className])}>
      <thead>
        <tr>
          {data.headers.map((header) => (
            <th key={header.name}>{header.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row) => (
          <tr key={row.id}>
            {row.data.map((cell) => (
              <td key={cell}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
})

export default AppTable
