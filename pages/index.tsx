import type { NextPage } from "next";
import { MainHeader } from "../components/main-header";
import { MiniHeader } from "../components/mini-header";


const Home: NextPage = () => {
  return (
    <div>
      <MiniHeader/>
      <MainHeader/>
    </div>
  );
};

export default Home;
