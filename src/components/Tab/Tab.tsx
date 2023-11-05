import { useEffect, useRef, PropsWithChildren } from "react"
import UIKit from 'uikit';

type TabItem = {
  name: string,
  label: string,
};

type TabProps = {
  tabs: TabItem[]
};
const Tab = ({ tabs, children }: PropsWithChildren<TabProps>) => {
  const tabContainerRef = useRef(null);

  useEffect(() => {
    tabContainerRef.current && UIKit.tab(tabContainerRef.current);
  }, []);

  return (
    <div className="uk-padding-small">
      <ul ref={tabContainerRef}>
        {tabs.map(tab => (
          <li key={tab.name}><a href="#">{tab.label}</a></li>
        ))}
      </ul>
      <ul className="uk-switcher">
        {children}
      </ul>
    </div>
  )
}

export default Tab