import './index.css';
import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import MovieListingTabContent from '../MovieListingTabContent';

const MovieListingPage = () => {
  const tabs = [
    { title: 'In Theatres', key: 'onShow' },
    { title: 'Coming Soon', key: 'coming' },
  ];

  const renderTabContent = (props) => {
    return (
      <Sticky>
        {({ style }) => (
          <div style={{ ...style, zIndex: 1 }}>
            <Tabs.DefaultTabBar {...props} />
            <div className="tab-content">
              <MovieListingTabContent tab={props.tabs[props.activeTab].key} />
            </div>
          </div>
        )}
      </Sticky>
    );
  };

  return (
    <>
      <div>
        <WhiteSpace />
        <StickyContainer>
          <Tabs tabs={tabs} initialPage="onShow" renderTabBar={renderTabContent} />
        </StickyContainer>
        <WhiteSpace />
      </div>
    </>
  );
};

export default MovieListingPage;
