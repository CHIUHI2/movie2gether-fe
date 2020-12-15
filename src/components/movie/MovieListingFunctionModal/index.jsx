import './index.css'
import { Modal, Icon, Tag } from 'antd-mobile';
import { useState } from 'react';

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    // eslint-disable-next-line no-param-reassign
    el = el.parentElement;
  }

  return null;
}

const MovieListingFunctionModal = (props) => {
  const [visible, setVisible] = useState(false);

  const onWrapTouchStart = (el) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(el.target, '.am-modal-content');
    if (!pNode) {
      el.preventDefault();
    }
  }

  const onClose = () => {
    setVisible(false);
  }

  const onShow = (el) => {
    el.preventDefault();
    setVisible(true);
  }

  const [filterTags] = useState([
      {
        id: "123",
        message: "Adventure"
      },
      {
        id: "223",
        message: "Comedy"
      },
      {
        id: "333",
        message:"Action"
      }
  ]);

  const onClickFilter = (filter) => {
    props.setFilterGenres(filter);
  }

  return (
    <>
      <Icon
        className="sub-title-icon"
        type="search"
        size="xxs"
        onClick={(el) => onShow(el)}
      />
      <Modal
          visible={visible}
          transparent
          maskClosable={false}
          onClose={() => onClose()}
          footer={[{ text: 'Apply', onPress: () => onClose()}]}
          wrapProps={{ onTouchStart: (el) => onWrapTouchStart(el) }}
          title="Searching Criteria"
        >
          <div className="filterTag-container">
            <div className="filterTag-container-title">
              <span>Genres</span>
            </div>
            {
              filterTags.map(filterTag => (
                <div onClick={() => onClickFilter(filterTag.message)}>
                  <Tag
                      selected={filterTag.message === props.selectedGenre}
                  >
                    {filterTag.message}
                  </Tag>
                </div>
              ))
            }
          </div>
      </Modal>
    </>
  );
}

export default MovieListingFunctionModal;
