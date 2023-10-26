export type TapPath = 'tabs/dummyTable' | 'tabs/dummyChart' | 'tabs/dummyList'

export interface ApiTab {
  id: string,
  title: string,
  order: number,
  path: TapPath
}
