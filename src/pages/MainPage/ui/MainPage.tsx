import {memo, Suspense, useCallback, useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";

import cls from "./MainPage.module.scss"

import { classNames } from 'shared/lib/classNames/classNames'
import { Api } from 'app/api'
import { ApiTab } from "app/api/entities/ApiTab";
import { bubbleSortByProperty } from "shared/lib/sort/bubbleSort/bubbleSort";
import { Tab } from "entities/Tab";
import { ChartTab, ListTab, TableTab } from './tabs';
import PageLoader from "shared/ui/PageLoader/PageLoader";

interface MainPageProps {
  className?: string
}

const MainPage = memo(({ className }: MainPageProps) => {
  const navigate = useNavigate()
  const {id} = useParams()

  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState<ApiTab[]>([]);

  const handleTabClick = (index: number) => {
    navigate(`/${tabs[index].path}`)
  }

  useEffect(() => {
    Api.getTabsList()
      .then((res) => {
        setTabs(bubbleSortByProperty<ApiTab>(res, 'order'))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    if (tabs && id) {
      setActiveTab(tabs.findIndex((tab) => tab.id === id) ?? 0)
    } else {
      setActiveTab(0)
    }
  }, [id, tabs]);


  const renderTabContent = useCallback((tab: ApiTab) => {
    switch (tab?.id) {
      case 'dummyTable':
        return <TableTab path={tab.path} />
      case 'dummyChart':
        return <ChartTab path={tab.path} />
      case 'dummyList':
        return <ListTab path={tab.path} />
      default:
        return null
    }
  }, []);

  return (
    <div className={classNames(cls.mainPage, {}, [className])}>
      <ul className={cls.tabsList}>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <Tab
              key={tab.id}
              title={tab.title}
              active={activeTab === tab.order}
              onClick={() => handleTabClick(tab.order)}
            />
          </li>
        ))}
      </ul>

      <Suspense fallback={<PageLoader />}>
        {renderTabContent(tabs[activeTab])}
      </Suspense>
    </div>
  );
})

export default MainPage
