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
      <tr>
        {data.headers.map((header, index) => (
          <th key={header.name}>{header.name}</th>
        ))}
      </tr>
      {data.rows.map((row, index) => (
        <tr key={row.id}>
          {row.data.map((cell, index) => (
            <td key={cell}>{cell}</td>
          ))}
        </tr>
      ))}
    </table>
  );
})

export default AppTable
