import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
export const Home = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="home">
      <div className="projects-slider float-left w-[65vw]  p-4">
      <Slider {...settings}>
      {data.map((d,index)=>(
        <div key={index} className="bg-white  text-black rounded-xl ">
          <img className="flex flex-col justify-center items-center gap-4 p-4" style={{height: "500px",width:"100%"}} src={d.path} alt={d.heading} />
        <p className="flex flex-col justify-center items-center gap-4 p-1">{d.heading}</p>
        <button className="">Read More</button>
        </div>
      ))}
      </Slider>
      </div>
      <div className="float-right w-1/4 p-4 h-[40rem] flex flex-col justify-center items-center">
        {data.map((d,index)=>(
          <div key={index}>
            {d.description}
          </div>
        ))}
      </div>
    </div>
  )
}
const data = [
   {
    path:"/images/img1.jpg",
    heading:"Personal Website",
    description:"Personal web pages are World Wide Web pages created by an individual to contain content of a personal nature rather than content pertaining to a company, organization or institution."
  },
   {
    path:"/images/img2.jpg",
    heading:"E-Commerce Website",
    description:""
  },
   {
    path:"/images/img3.jpg",
    heading:"Spotify Clone",
    description:""
  },
   {
    path:"/images/img4.jpg",
    heading:"Business Website",
    description:""
  },
   {
    path:"/images/img5.jpg",
    heading:"Blog Website",
    description:""
  },
   {
    path:"/images/img6.jpg",
    heading:"Portfolio Website",
    description:""
  },
]