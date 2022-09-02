// import { useContext, useEffect, useState } from "react";
// import { fakeApi } from "../../services";
import { Banner } from "./styles";
import roca from "../../assets/img/roca.png";

const Banners = () => {
  // const { temp_c } = useContext(CityContext);

  // const [isMessage, setIsMessage] = useState(null);

  // useEffect(() => {
  //   fakeApi.get("endPointText" + temp_c).then((response) => {
  //     setIsMessage(response.data);
  //   });
  // }, []);

  return (
    <Banner>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
        architecto ipsam provident nam. Omnis porro voluptates vitae officia
        eius itaque aliquam, necessitatibus cumque, hic a veritatis in eum,
        adipisci illo.
      </p>

      <img src={roca} alt="" />
    </Banner>
  );
};

export default Banners;
