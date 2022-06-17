import { ReactNode } from 'react';
import { Grid } from '../Grid';
import Header from '../Header';
import Sidebar from '../Sidebar';

interface LayoutProps {
  children: ReactNode,
}

function Layout({ children }: LayoutProps) {
  return (
    <Grid>
      <Sidebar/>
      <Header/>
      { children }
    </Grid>
  );
}

export default Layout;