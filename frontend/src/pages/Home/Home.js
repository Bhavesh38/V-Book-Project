import { Card } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Empty } from "antd";
import { Helmet } from "react-helmet";
import axios from "axios";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Tabs } from "antd";
import { Skeleton } from "antd";

// import CourseCard from "../../components/CourseCard/CourseCard";
// import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import {
  dispatchLogin,
  dispatchGetUser,
  fetchUser,
} from "../../redux/actions/authAction";
import {
  Listcoursesbypobularity,
  ListcoursesbyTopic,
} from "../../redux/actions/courseActions";
import Error from "../../components/utils/Error";

import "./Home.css";
import DynamicCard from "../../components/DynamicCards/DynamicCard";
import { fetchCardDatas } from "../../redux/actions/CardAction";

//icons for carousel
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const ListCoursesReducer = useSelector((state) => state.ListCoursesReducer);
  const dynamicCardData = useSelector((state) => state.dynamicCardReducer);
  const { loading, courses, error } = ListCoursesReducer;
  const ListCoursesbyPobularityReducer = useSelector(
    (state) => state.ListCoursesbyPobularityReducer
  );
  const {
    loading: loadingpobular,
    courses: coursespobular,
    error: errorpobular,
  } = ListCoursesbyPobularityReducer;
  const menuref = useRef(null);
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);
  const pobularref = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const executeScroll = () => menuref.current.scrollIntoView();

  const { TabPane } = Tabs;
  useEffect(() => {
    const getToken = async () => {
      // make post request : hey db get me some data and return it to me
      const res = await axios.post("/user/refresh_token", null);
      dispatch({
        type: "GET_TOKEN",
        payload: res.data.access_token,
      });
    };
    getToken();
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin());
        //Get user infor
        return fetchUser(token).then((res) => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
    dispatch(ListcoursesbyTopic("Development"));
    dispatch(Listcoursesbypobularity());
  }, [auth.isLogged, token, dispatch]);
  const changetopic = (key) => {
    switch (key) {
      case "1":
        dispatch(ListcoursesbyTopic("Development"));
        break;
      case "2":
        dispatch(ListcoursesbyTopic("marketing"));
        console.log("case 2");
        break;
      case "3":
        dispatch(ListcoursesbyTopic("Self-dev"));
        console.log("case 3");
        break;
      case "4":
        dispatch(ListcoursesbyTopic("photography"));
        console.log("case 4");
        break;
      case "5":
        dispatch(ListcoursesbyTopic("music"));
        console.log("case 5");
        break;
      case "6":
        dispatch(ListcoursesbyTopic("design"));
        console.log("case 6");
        break;
      default:
        break;
    }
  };

  //fetching card data
  useEffect(() => {
    dispatch(fetchCardDatas());
    console.log(dynamicCardData?.dynamicCardData);
  }, []);

  //carousal data
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1628863353691-0071c8c1874c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1596496181935-7801d2065877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  // const autoSlide= true;
  // const autoSlideInterval = 3000;


  // useEffect(() => {
  //   if (!autoSlide) return
  //   const slideInterval = setInterval(nextSlide, autoSlideInterval)
  //   return () => clearInterval(slideInterval)
  // }, [])


  const [currentIndex, setCurrentIndex] = useState(0);


  const prevSlide = () => {
    // const isFirstSlide = currentIndex === 0;
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    // const isLastSlide = currentIndex === slides.length - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="home" style={{ backgroundColor: "white" }}>
      {/* <h1 style={{ color: "black" }}>hii</h1> */}
      <Helmet>
        <title>VCLASSROOM</title>
      </Helmet>
      <div className="group h-[700px] w-full  py-2 px-2 relative">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          {/* Left arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer text-white">
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="Banner_Card">
          <Card>
            <h1>Find the new dimension of Learning</h1>
            <hr />
            <p>
              Ambition accepted. Learn the latest skills to reach your
              professional goals.
            </p>
            <button className="Btn" id="discover_btn" onClick={executeScroll}>
              DISCOVER
            </button>
          </Card>
        </div> */}
        {/* <img className="Home_image" alt="" src=".../public/images/LOGO.jpg" /> */}
      </div>
      <section className="Menu1" id="Menu1" ref={menuref}>
        <h2>For Aspirants:</h2>
        <h3>We Recommend this for you to start.</h3>

        <Tabs defaultActiveKey="1" onTabClick={changetopic}>
          <TabPane tab="Physics" key="1">
            <div className="Tab_Content">
              <h2> Stress on your fundamentals</h2>

              <div id="paragraphbtn">
                <p>
                  physics you will find the courses as well as readymade Vbooks
                  VNOTES pdfs direct mentorship from experienced instructors
                </p>
                <Link
                  style={{ textDecoration: "none !important" }}
                  to="/coursesfilter/Development"
                >
                  <button className="Btn" id="ReadMorebtn">
                    Discover More
                  </button>
                </Link>
              </div>
              <div className="coursecards">
                {loading ? (
                  <Skeleton />
                ) : error ? (
                  <Error error={error} />
                ) : courses.length === 0 ? (
                  <Empty />
                ) : (
                  <Slider {...settings}>
                    {courses.map((course, index) => (
                      <>
                        {/* <CourseCard key={course._id} data-index={index} course={course} /> */}
                      </>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </TabPane>
          <TabPane tab="chemistry" key="2">
            <div className="Tab_Content">
              <h2> stress on fundamentals of physical and organic</h2>

              <div id="paragraphbtn">
                <p className="mb-8">
                  Marketing is more than a concentration within a business
                  major. More accurately, it describes a collection of skills
                  that are useful in any career. As a professional discipline,
                  marketing is a vital function of any business’ operation. It
                  explores customer perceptions and journeys as primary sources
                  of profit. It also utilizes various data to make smart and
                  insightful business decisions.
                </p>
                <Link
                  style={{ textDecoration: "none !important" }}
                  to="/coursesfilter/Marketing"
                >
                  <button className="Btn" id="ReadMorebtn">
                    Discover More
                  </button>
                </Link>
              </div>
              <div className="coursecards">
                {loading ? (
                  <Skeleton />
                ) : error ? (
                  <Error error={error} />
                ) : courses.length === 0 ? (
                  <Empty />
                ) : (
                  <Slider {...settings}>
                    {courses.map((course, index) => (
                      <>
                        {/* <CourseCard key={course._id} data-index={index} course={course} /> */}
                      </>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </TabPane>
          <TabPane tab="Self Dev" key="3">
            <div className="Tab_Content">
              <h2>Improve your soft skills</h2>
              <div id="paragraphbtn">
                <p>
                  Personal development is a lifelong process. It is a way for
                  people to assess their skills and qualities, consider their
                  aims in life and set goals in order to realise and maximise
                  their potential.
                </p>
                <Link
                  style={{ textDecoration: "none !important" }}
                  to="/coursesfilter/Self-Dev"
                >
                  <button className="Btn" id="ReadMorebtn">
                    Discover More
                  </button>
                </Link>
              </div>
              <div className="coursecards">
                {loading ? (
                  <Skeleton />
                ) : error ? (
                  <Error error={error} />
                ) : courses.length === 0 ? (
                  <Empty />
                ) : (
                  <Slider {...settings}>
                    {courses.map((course, index) => (
                      <>
                        {/* <CourseCard key={course._id} data-index={index} course={course} /> */}
                      </>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </TabPane>
          <TabPane tab="Photography" key="4">
            <div className="Tab_Content">
              <h2>Become a Photographer</h2>
              <div id="paragraphbtn">
                <p>
                  Learning about light, exposure, color, tone, composition and
                  timing will help you produce more creative, more interesting,
                  more noticeable photographs. ... Learning to appreciate
                  different types of light and when some light is better for
                  making photos than others, will help you create more
                  outstanding photographs.
                </p>
                <Link
                  style={{ textDecoration: "none !important" }}
                  to="/coursesfilter/Photography"
                >
                  <button className="Btn" id="ReadMorebtn">
                    Discover More
                  </button>
                </Link>
              </div>
              <div className="coursecards">
                {loading ? (
                  <Skeleton />
                ) : error ? (
                  <Error error={error} />
                ) : courses.length === 0 ? (
                  <Empty />
                ) : (
                  <Slider {...settings}>
                    {courses.map((course, index) => (
                      <>
                        {/* <CourseCard key={course._id} data-index={index} course={course} /> */}
                      </>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </TabPane>
          <TabPane tab="Music" key="5">
            <div className="Tab_Content">
              <h2>Become a Musician</h2>

              <div id="paragraphbtn">
                <p>
                  Learning a musical instrument not only sustains and feeds the
                  brain, but it also improves so many other cognitive and
                  physical aspects of the human body. It's been widely studied
                  and proven that learning a musical instrument improves memory;
                  it not only improves your cognitive memory but also muscle
                  memory as well.
                </p>
                <Link
                  style={{ textDecoration: "none !important" }}
                  to="/coursesfilter/Music"
                >
                  <button className="Btn" id="ReadMorebtn">
                    Discover More
                  </button>
                </Link>
              </div>
              <div className="coursecards">
                {loading ? (
                  <Skeleton />
                ) : error ? (
                  <Error error={error} />
                ) : courses.length === 0 ? (
                  <Empty />
                ) : (
                  <Slider {...settings}>
                    {courses.map((course, index) => (
                      <>
                        {/* <CourseCard key={course._id} data-index={index} course={course} /> */}
                      </>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </TabPane>
          <TabPane tab="Design" key="6">
            <div className="Tab_Content">
              <h2>Become a Designer</h2>
              <div id="paragraphbtn">
                <p>
                  Millions of UK workers are at risk of being replaced by robots
                  within 15 years, a study claims. It's depressing news for
                  many, but if you learn something that machines could never do,
                  then you'll be future-proofing your career for many decades to
                  come. Graphic design is creative and requires human-led
                  intelligence and ideas to respond to trends, tastes, and what
                  has already been before. It will never be something a robot
                  can mimic. Sure, the technology to create will continue to
                  make our lives easier as designers, but they'll never replace
                  us. Never.
                </p>
                <Link
                  style={{ textDecoration: "none !important" }}
                  to="/coursesfilter/Design"
                >
                  <button className="Btn" id="ReadMorebtn">
                    Discover More
                  </button>
                </Link>
              </div>
              <div className="coursecards">
                {loading ? (
                  <Skeleton />
                ) : error ? (
                  <Error error={error} />
                ) : courses.length === 0 ? (
                  <Empty />
                ) : (
                  // <Slider {...settings}>
                  //   {courses.map((course, index) => (
                  //     <>
                  //       {/* <CourseCard key={course._id} data-index={index} course={course} /> */}
                  //     </>
                  //   ))}
                  // </Slider>
                  <DynamicCard />
                )}
              </div>
            </div>
          </TabPane>
        </Tabs>
      </section>
      <section className="Courses_Popular shadow-lg mb-4" ref={pobularref}>
      <button className="outline outline-1 outline-offset-2 rounded-md"><span className="px-4 font-bold">Popular VBooks </span></button>
        <div className="coursecards">
          {loadingpobular ? (
            <Skeleton />
          ) : errorpobular ? (
            <Error error={errorpobular} />
          ) : coursespobular.length === 0 ? (
            <Empty />
          ) : (
            // <Slider {...settings}>
            //   {coursespobular.map((course, index) => (
            //     <>
            //       {/* <CourseCard key={course._id} data-index={index} course={course} /> */}<DynamicCard />
            //     </>
            //   ))}
            // </Slider>
            <DynamicCard />
          )}
        </div>
      </section>
      <section className="Categorys_Popular shadow-lg">
      <button className="outline outline-1 outline-offset-2 rounded-md"><span className="px-4 font-bold">Famous VBooks</span></button>
        <div className="Categorycards">
          <DynamicCard />
        </div>
      </section>
      <section className="Categorys_Popular shadow-lg">
      <button className="outline outline-1 outline-offset-2 rounded-md"><span className="px-4 font-bold">Chipest VBooks</span></button>
        <div className="Categorycards">
          <DynamicCard />
        </div>
      </section>
      <section className="Categorys_Popular shadow-lg">
        <button className="outline outline-1 outline-offset-2 rounded-md"><span className="px-4 font-bold">Most Visited</span></button>
        <div className="Categorycards">
          <DynamicCard />
        </div>
      </section>
      <section className="Become_Teacher">
        <div className="background shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="Teacher"
          />
          <div className="paragraph">
            <h2>Become a Teacher with us</h2>
            <p>Do you have the skills and you want to share it with profit?</p>
            <button className="Btn" id="Joinusbtn">
              Join Us
            </button>
          </div>
        </div>
      </section>
      {/* footer */}
      <section>
        <div className="mt-[40px]">
        <Footer />
        </div>
      </section>
    </div>
  );
};

export default Home;
