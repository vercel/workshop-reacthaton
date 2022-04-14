import type { NextPage } from "next";
import { useEffect } from "react";
import { CallToAction } from "../components/CTA";
import { Layout } from "../components/layout";
import { database } from "../lib/database";

const Home: NextPage = () => {
  useEffect(() => {
    database.recipes().then(console.log);
  }, []);
  return (
    <Layout>
      <CallToAction />
    </Layout>
  );
};

export default Home;
