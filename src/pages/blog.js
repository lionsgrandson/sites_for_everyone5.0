import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import PostContent from "../components/blog/postContent";
import "./blog.css";
import FullBlogPage from "../components/blog/fullBlogPost.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();
  const PORT = process.env.PORT || 5000;

  const [postData, setPostData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${PORT}/posts/get`)
      .then(function (response) {
        setPostData(response.data);
        console.log(response.data + "      HI");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Menu currentPage="blog" />
      <div className="beingBuilt ">
        {Array.isArray(postData) &&
          postData.map((postGet, index) => {
            return (
              <div
                key={index}
                className="IndPost"
              >
                <PostContent
                  PostTitle={postGet.postTitle}
                  PostWriter={postGet.writersName}
                  PostPreview={postGet.preview}
                />
                <button
                  className="read-more-button"
                  onClick={() => {
                    <FullBlogPage postTitle={postGet.postTitle} />;
                    navigate("/full", {
                      state: { postTitle: postGet.postTitle },
                    });
                  }}
                >
                  {t("Read More")}
                </button>
              </div>
            );
          })}
      </div>
      <Footer />
    </>
  );
}
