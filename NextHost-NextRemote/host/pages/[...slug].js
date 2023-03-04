import dynamic from 'next/dynamic';
const page = import('../PageComponent/[...slug]');
const Page = dynamic(() => import('../PageComponent/[...slug]'));
Page.getInitialProps = async ctx => {
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
  return {};
};
export default Page;