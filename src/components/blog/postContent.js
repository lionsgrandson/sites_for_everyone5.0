import { useTranslation } from "react-i18next";
export default function PostContent(props) {
  const { t } = useTranslation();

  return (
    <div>
      {/* <img
        alt="profile picture of the post"
        src={props.srcImg}
      /> */}
      <h1>{t(props.PostTitle)}</h1>
      <h4>
        {t("Written by")}: {t(props.PostWriter)}
      </h4>
      <p>{t(props.PostPreview)}</p>
    </div>
  );
}
