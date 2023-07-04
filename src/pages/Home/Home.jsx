import "./Home.css";
import MainHeadLine from "../../componets/mainHeadLine/MainHeadLine";
import NewsCard from "../../componets/newsCards/NewsCard";
import SideBar from "../../componets/sidebar/SideBar";
import { useEffect, useState } from "react";

const Home = () => {
  useEffect(() => {
    // const fetchdata = async () => {
    //   const options = {
    //     method: "GET",
    //     url:
    //      `https://newsdata.io/api/1/news?apikey=pub_257128ab265ea2344ae5cd0a70b6c4d3850c3&country=au,us&category=sports`
    //      ,
    //   };
    //   try {
    //     const response = await axios.request(options);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // fetchdata();
  }, []);

  return (
    <div>
      <div class="container-fluid">
        <div class="row justify-content-evenly">
          <div class="col-lg-7 mt-4">
            <MainHeadLine />
            <div class="row justify-content-evenly">
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
          </div>
          <div class="col-lg-3">
            <h4 class="text-center mt-4">Top Stories</h4>
            <hr class="text-primary" />
            <SideBar />
            <SideBar />
            <SideBar />
            <SideBar />
            <SideBar />
            <SideBar />
            <SideBar />
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
