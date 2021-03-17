import useWindowSize from "./useWindowSize";

const ChangeSliderRowsOnScreenSize = (name) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    rows: 7,
  };

  const windowHeight = useWindowSize()[1];
  const windowWidth = useWindowSize()[0];

  if (windowWidth > 959 && windowHeight < 700) {
    settings = {
      rows: 3,
    };
  }
  if (windowWidth > 959 && windowHeight < 500) {
    settings = {
      rows: 2,
    };
  }
  if (name === "sandwiches" && windowWidth > 959 && windowHeight > 500) {
    settings = {
      rows: 3,
      slidesToShow: 2,
    };
  }
  if (name === "sandwiches" && windowWidth > 959 && windowHeight > 620) {
    settings = {
      rows: 4,
      slidesToShow: 2,
    };
  }

  return settings;
};

export default ChangeSliderRowsOnScreenSize;
