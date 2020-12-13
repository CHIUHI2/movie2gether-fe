import NavigationBar from '../NavigationBar';
import PageContainer from '../PageContainer';

const AppLayout = ({ children }) => (
  <div>
    <NavigationBar />
    <PageContainer>{children}</PageContainer>
  </div>
);

export default AppLayout;
