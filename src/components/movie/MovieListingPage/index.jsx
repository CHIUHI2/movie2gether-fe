import './index.css';
import { Tabs, WhiteSpace, WingBlank } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import React, { useState } from 'react';
import MovieListingGroup from '../MovieListingGroup';
import MovieListingRecommend from '../MovieListingRecommend';

const TabContent = (props) => {
  console.log(props.tab);
  const [movies] =  useState([
    {
      id:"123",
      name:"test",
      url: "https://image.tmdb.org/t/p/w500/vlOgaxUiMOA8sPDG9n3VhQabnEi.jpg"
    },
    {
      id:"323",
      name:"test",
      url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
      id: "223",
      name:"test",
      url: "https://image.tmdb.org/t/p/w500/yGSxMiF0cYuAiyuve5DA6bnWEOI.jpg"
    }
  ]);

	return (
		  <WingBlank>
        <MovieListingRecommend tab={props.tab} movies={movies} />
        <MovieListingGroup tab={props.tab} movies={movies} />
      </WingBlank>
	);
}

function renderTabContent(props) {
	return (
		<Sticky>
			{({ style }) =>
				<div style={{ ...style, zIndex: 1 }}>
					<Tabs.DefaultTabBar {...props} />
					<div className="tab-content" >
						<TabContent tab={props.tabs[props.activeTab].key} />
					</div>
				</div>
			}
		</Sticky>
	);
}

const MovieListingPage = () => {
	const tabs = [
		{ title: 'In Theatres', key: 'onShow' },
		{ title: 'Coming Soon', key: 'coming' }
  ];

  const initTab = "onShow";

	const TabPages = () => (
		<div>
			<WhiteSpace />
			<StickyContainer>
        <Tabs
          tabs={tabs}
					initialPage={initTab}
          renderTabBar={renderTabContent}
				/>
			</StickyContainer>
			<WhiteSpace />
		</div>
	);

	return (
		<>
			<TabPages />
		</>
	);
};

export default MovieListingPage;
