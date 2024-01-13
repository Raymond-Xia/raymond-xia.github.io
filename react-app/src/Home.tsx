import ListGroup from "./components/ListGroup";
import Button from "react-bootstrap/Button";
import Tree from "./assets/tree.jpg";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <Image src={Tree} alt="Tree" fluid />
      <div className="jumbotron">
        <h1 className="display-4">Hi, I'm Raymond</h1>
        <p className="lead">
          I'm a full stack web developer with 2+ years of experience.
        </p>
        <hr className="my-4" />
        <p>Here you can find cool things about me and my technical skills.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Button variant="primary">Lit</Button> */}
    </>
  );
}

export default Home;
