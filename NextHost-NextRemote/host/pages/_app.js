import '@module-federation/nextjs-mf/src/include-defaults';
import dynamic from 'next/dynamic';
const page = import('../PageComponent/_app');
const AppPage = dynamic(() => import('../PageComponent/_app'));
const Page = props => {
  return <AppPage {...props} />;
};
Page.getInitialProps = async ctx => {
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
};
export default Page;