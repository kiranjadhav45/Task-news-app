import "./Home.css";
import MainHeadLine from "../../componets/mainHeadLine/MainHeadLine";
import NewsCard from "../../componets/newsCards/NewsCard";
import SideBar from "../../componets/sidebar/SideBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import env from "react-dotenv";
const Home = ({ type }) => {
  const searchQuery = useSelector((state) => state.searchReducer);

  const [data, setData] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const options = {
        method: "GET",
        url: `https://newsdata.io/api/1/news?apikey=pub_25773a8391910ed834251c83f533f79a63efb&category=${type}&language=hi,en&q=${searchQuery.message}`,
      };
      try {
        const response = await axios.request(options);
        setData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchdata();
  }, [type, searchQuery]);

  if (!data) {
    return <h1 className="text-center mt-5">Loading...</h1>;
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-evenly">
          <div className="col-lg-7 mt-4">
            {data &&
              data[5]?.title &&
              data[5].description &&
              data[5].image_url &&
              data[5].source_id &&
              data[5].pubDate &&
              data[5].category &&
              data[5].link && (
                <MainHeadLine
                  title={data[5]?.title}
                  description={data[5].description}
                  image_url={data[5].image_url}
                  source_id={data[5].source_id}
                  pubDate={data[5].pubDate}
                  category={data[5].category}
                  link={data[5].link}
                />
              )}
            <div className="row justify-content-evenly">
              {data &&
                data.map((item) => {
                  return (
                    <NewsCard
                      key={item.title}
                      title={item.title}
                      description={item.description}
                      image_url={item.image_url}
                      source_id={item.source_id}
                      pubDate={item.pubDate}
                      category={item.category}
                      link={item.link}
                    />
                  );
                })}
            </div>
          </div>
          <div className="col-lg-3">
            <h4 className="text-center mt-4">Top Stories</h4>
            <hr className="text-primary" />

            {data &&
              data.map((item) => {
                return (
                  <SideBar
                    key={item.title}
                    title={item.title}
                    pubDate={item.pubDate}
                    category={item.category}
                    source_id={item.source_id}
                    link={item.link}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
