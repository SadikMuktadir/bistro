import Cover from "./Cover";

import coverImg from "../../public/assets/contact/banner.jpg";
const ContactUs = () => {
  return (
    <div>
      <Cover
        img={coverImg}
        title="CONTACT US"
        desc="Would you like to try a dish?"
      ></Cover>
    </div>
  );
};

export default ContactUs;
