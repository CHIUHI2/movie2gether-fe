import './index.css';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Result, WhiteSpace } from 'antd-mobile';
import { useHistory } from 'react-router-dom';

const NotFoundPage = () => {
  const history = useHistory();

  const handleBackToHome = () => {
    history.push('/');
  };

  const NotFoundContent = () => (
    <div>
      <span>We&apos;re sorry, the page you requested could not be found.</span>
      <WhiteSpace size="lg" />
      <div>
        <Button type="primary" inline onClick={handleBackToHome}>
          BACK TO HOME
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <WhiteSpace size="lg" />
      <Result
        img={<SearchOutlined className="not-found-icon" />}
        title="Page Not Found"
        message={<NotFoundContent />}
      />
    </>
  );
};

export default NotFoundPage;
