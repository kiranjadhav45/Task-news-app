import "./MainHeadLine.css";

const MainHeadLine = ({
  title,
  description,
  image_url,
  source_id,
  pubDate,
  category,
  link,
}) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      {pubDate && <p>{pubDate.slice(0, 10)}</p>}
      {image_url && (
        <img
          className="img-fluid"
          src={image_url}
          alt="Russian-Tank-Mariupol"
        />
      )}
      {description && <p className=" mt-2">{description}</p>}
      <a target="_blank" href={link}>
        read more
      </a>
      <hr className="text-primary"></hr>
    </>
  );
};

export default MainHeadLine;
