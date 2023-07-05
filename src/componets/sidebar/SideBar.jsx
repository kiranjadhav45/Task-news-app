import "./SideBar.css";

const SideBar = ({ title, pubDate, category, source_id, link }) => {
  return (
    <>
      {title && <h5>{title}</h5>}
      <p>
        {source_id && (
          <a target="_blank" className="me-4" href={link}>
            {source_id}
          </a>
        )}
        {pubDate && <span>{pubDate?.slice(0, 10)}</span>}
      </p>
      <hr className="text-primary" />
    </>
  );
};

export default SideBar;
