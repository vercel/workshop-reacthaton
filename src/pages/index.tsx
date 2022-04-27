import type { NextPage } from "next";
import { CallToAction } from "../components/CTA";
import { Layout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <CallToAction />
    </Layout>
  );
};

export default Home;
