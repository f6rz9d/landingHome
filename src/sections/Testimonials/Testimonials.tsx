import TestimonialsSlider from "./TestimonialsSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const testimonialsCard = [
    {
      text: "Working with Materialist is fantastic! Simple, re-usable components all in one platform.",
      name: "Clara Bertoletti",
      job: "Material-UI lover",
      avatarAddress: "https://assets.maccarianagency.com/avatars/img1.jpg",
    },
    {
      text: "This is great bundle. I can contruct anything in just 10 minuts. Absolutelly love it! 10 out of 10.",
      name: "Jhon Anderson",
      job: "Senior Frontend Developer",
      avatarAddress: "https://assets.maccarianagency.com/avatars/img2.jpg",
    },
    {
      text: "Love the app for cash back, reward points and fraud protection – just like when you're swiping your card.",
      name: "Chary Smith",
      job: "SEO at Comoti",
      avatarAddress: "https://assets.maccarianagency.com/avatars/img3.jpg",
    },
    {
      text: "Working with Materialist is fantastic! Simple, re-usable components all in one platform.",
      name: "Clara Bertoletti",
      job: "Material-UI lover",
      avatarAddress: "https://assets.maccarianagency.com/avatars/img4.jpg",
    },
    {
      text: "This is great bundle. I can contruct anything in just 10 minuts. Absolutelly love it! 10 out of 10.",
      name: "Jhon Anderson",
      job: "Senior Frontend Developer",
      avatarAddress: "https://assets.maccarianagency.com/avatars/img5.jpg",
    },
    {
      text: "Love the app for cash back, reward points and fraud protection – just like when you're swiping your card.",
      name: "Chary Smith",
      job: "SEO at Comoti",
      avatarAddress: "https://assets.maccarianagency.com/avatars/img6.jpg",
    },
  ];

  var settings = {
    dots: true,
    infinite: false,
    arrows:false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>{testimonialsCard.map((item) => (
        <TestimonialsSlider text={item.text} name={item.name} job={item.job} avatarAddress={item.avatarAddress} />
      ))}
      </Slider>
  );
}

export default Testimonials;
