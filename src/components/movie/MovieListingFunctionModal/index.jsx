import './index.css';
import { Modal, Icon, Tag } from 'antd-mobile';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FILTER_GENRES } from '../../../common/constants/genres';

function closest(el, selector) {
  const matchesSelector =
    el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    // eslint-disable-next-line no-param-reassign
    el = el.parentElement;
  }

  return null;
}

const MovieListingFunctionModal = ({ applyFilterHandler }) => {
  const [visible, setVisible] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("all");

  const onWrapTouchStart = (el) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(el.target, '.am-modal-content');
    if (!pNode) {
      el.preventDefault();
    }
  };

  const onClose = () => {
    if (selectedGenre) {
      applyFilterHandler(selectedGenre);
    }
    setVisible(false);
  };

  const onShow = (el) => {
    el.preventDefault();
    setVisible(true);
  };

  const onClickFilter = (filter) => {
    setSelectedGenre(selectedGenre === filter ? "all" : filter);
  };

  return (
    <>
      <Icon className="sub-title-icon" type="search" size="xxs" onClick={(el) => onShow(el)} />
      <Modal
        visible={visible}
        transparent
        maskClosable={false}
        onClose={() => onClose()}
        footer={[{ text: 'Apply', onPress: () => onClose() }]}
        wrapProps={{ onTouchStart: (el) => onWrapTouchStart(el) }}
        title="Searching Criteria"
      >
        <div className="filterTag-container">
          <div className="filterTag-container-title">
            <span>Genres</span>
          </div>
          {FILTER_GENRES.map((filterTag) => (
            <div onClick={() => onClickFilter(filterTag)} key={uuidv4()}>
              <Tag selected={filterTag === selectedGenre}>{filterTag}</Tag>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default MovieListingFunctionModal;
