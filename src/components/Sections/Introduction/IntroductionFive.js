import Button from "../../Control/Button";

export default function IntroductionFive() {
  return (
    <div
      className="introduction-five"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/introduction/IntroductionFive/1.png)`,
      }}
    >
      <div className="container">
        <div className="introduction-five__content">
          <h2>
            Coffee that <br />
            changes lives
          </h2>
          <Button
            action={process.env.PUBLIC_URL + "#"}
            content="Learn More"
            color="red"
          />
        </div>
      </div>
    </div>
  );
}
