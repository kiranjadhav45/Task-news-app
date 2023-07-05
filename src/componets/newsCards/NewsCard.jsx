import "./NewsCard.css";

const NewsCard = ({
  title,
  description,
  image_url,
  pubDate,
  category,
  link,
}) => {
  return (
    <div className="col-md-5">
      {title && <h4 className="mt-4">{title}</h4>}
      {pubDate && (
        <p>
          {category && (
            <a className="text-decoration-none me-4" href="#">
              {category[0]}
            </a>
          )}
          {pubDate?.slice(0, 10)}
        </p>
      )}
      {image_url && (
        <img
          height={100}
          className="img-fluid"
          src={image_url}
          alt="no image available"
        />
      )}
      {description && <p className="mt-4">{description}</p>}
      <a target="_blank" href={link}>
        read more
      </a>
      <hr className="text-primary" />
    </div>
  );
};

export default NewsCard;
