import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./fullBlogPost.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import writerHeadshop from "../../img/Schwartzberg_Moshe.jpg";
export default function FullBlogPost(props) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [postData, setPostData] = useState([]);
  const location = useLocation();
  const data = location.state;
  useEffect(() => {
    axios
      .get(`/get/${data.postTitle}`)
      .then(function (response) {
        setPostData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return (
    <>
      {postData.map((postGet, index) => {
        return (
          <div
            className="container postContainer"
            key={postGet.id}
          >
            {/* <img
              src={postGet.headerImage}
              alt="Header"
              className="header-img"
            /> */}
            <h1 className="post-title">{postGet.postTitle}</h1>
            <div className="writer-info">
              <img
                src={writerHeadshop}
                alt="Writer"
              />
              <div>
                <div className="name">
                  {t("Written by")}: {postGet.writersName}
                </div>
                <div className="date">
                  {t("Posted On")}: {postGet.postedDate}
                </div>
              </div>
            </div>
            <div className="post-content">
              <p>{postGet.content}</p>
              <button
                className="back-button"
                onClick={() => {
                  // <FullBlogPage postTitle={postGet.postTitle} />;
                  navigate("/blog");
                }}
              >
                {t("Back")}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
