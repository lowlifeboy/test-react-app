interface ApiTableHeader {
  name: string
}

interface ApiTableRow {
  id: number
  data: (string | number)[]
}

export interface ApiTableData {
  id: number
  headers: ApiTableHeader[],
  rows: ApiTableRow[]
}
