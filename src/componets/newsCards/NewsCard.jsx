import "./NewsCard.css";

const NewsCard = () => {
  return (
    <div class="col-md-5">
      <h4 class="mt-4">The Mullahs Have Lost Iran’s Youth</h4>
      <p>
        <a class="text-decoration-none" href="#">
          OPINION{" "}
        </a>{" "}
        October 13, 2022
      </p>
      <img class="img-fluid" src="/images/headline 1.jpg" />
      <p class="mt-4">
        The political cost of decades of placating regime hardliners is now
        evident in the unrest sweeping Iran’s cities.
      </p>
    </div>
  );
};

export default NewsCard;
