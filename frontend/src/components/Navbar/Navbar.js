import React, { useEffect, useState } from "react";
import "./Navbar.css";
// import { withRouter } from "react-router-dom";
import { Input, Popover, Drawer, Badge, Button, Dropdown } from "antd";
// import {
  import logo from "../assets/logo.jpeg";

//   AiOutlineSearch,
//   AiOutlineClose,
//   RiArrowDropDownLine,
// } from "react-icons/all";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../useWindowDimensions";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useSelector, useDispatch } from "react-redux";
const Navbar = ({ match, history }) => {
  const { height, width } = useWindowDimensions();
  const [showsearch, setshowsearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [showicons, setshowicons] = useState(false);
  const { Search } = Input;
  const auth = useSelector((state) => state.auth);
  const { user, isLogged, loading } = auth;

  const cartReducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartReducer;

  const handleSearch = () => {
    if (keyword) {
      history.push(`/search/${keyword}`);
    }
  };
  const handleLogout = async () => {
    try {
      await axios.get("/user/logout");
      localStorage.removeItem("firstLogin");
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  };
  const contentProfile = (
    <div className="Profilepobover">
      <Link to="/profile">Profile</Link> <br />
      <Link to="/" onClick={handleLogout}>
        Logout
      </Link>
      <br />
    </div>
  );
  const contentProfilephone = (
    <div className="Profilepobover phonedropdown">
      <Link to="/profile">Profile</Link> <br />
      <Link to="/" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
  const userLink = () => {
    return (
      <Popover content={contentProfile} style={{ cursor: "pointer" }}>
        <Link to="/" className="avatar">
          <div className="dropdownic">
            {loading ? (
              <div className="loadingNav">
                <PropagateLoader color={"#1B78CA"} loading={loading} size={3} />
              </div>
            ) : (
              <>
                {" "}
                <img src={user.avatar} className="profile_pic" alt="img.png" />
                {user.name} RiArrowDropDownLine
              </>
            )}
          </div>
        </Link>
      </Popover>
    );
  };
  const userLinkDrawer = () => {
    return (
      <Dropdown overlay={contentProfilephone} trigger={["click"]}>
        <div className="dropdownic" style={{ margin: "20px 0px" }}>
          <img src={user.avatar} className="profile_pic" alt="profilpic" />{" "}
          {user.name}
          {/* <RiArrowDropDownLine size="24" /> */}
        </div>
      </Dropdown>
    );
  };

  const [visbile, setvisbile] = useState(false);
  const showDrawer = () => {
    setvisbile(true);
  };

  const onClose = () => {
    setvisbile(false);
  };

  const content = (
    <div className="Categoriespobover">
      <Link to="/coursesfilter/Physics">Physics</Link> <br />
      <Link to="/coursesfilter/Chemistry">Chemistry</Link>
      <br />
      <Link to="/coursesfilter/Maths">Maths</Link>
      <br />
      <Link to="/coursesfilter/Biology">Biology</Link>
      <br />
    </div>
  );
  useEffect(() => {
    if (width < 788) {
      setshowicons(true);
    } else {
      setvisbile(false);
      setshowicons(false);
    }
    return () => {};
  }, [width]);
  const Activateburger = () => {
    showDrawer();
  };
  return (
    <>
      <nav className="navbar  items-center py-10" >
        <div className="burger" onClick={Activateburger}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className="logo flex flex-row mb-4">
          <Link to="/">
            <img
              src={logo}
              alt="Logo.png"
              className="logo_header "
            />
          </Link>
          <Popover content={content} style={{ cursor: "pointer"}}>
                <button className="Navbarbtns mx-8 text-[##2f2f2f] text-[16px] pt-6" id="Categoriesbtn">
                  Categories
                </button>
          </Popover>

        </div>
        {showicons && (
          <div className="Phoneonright items-center">
            {showsearch ? (
              <span onClick={() => setshowsearch(!showsearch)}>
                AiOutlineClose
              </span>
            ) : (
              <span onClick={() => setshowsearch(!showsearch)}>
                AiOutlineSearch
              </span>
            )}

            <div className={showsearch ? "searchactive" : "searchphone"}>
              <Search
                placeholder="Search"
                allowClear
                enterButton
                size="large"
                onPressEnter={handleSearch}
                onSearch={handleSearch}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
          </div>
        )}
        <div className="search_box ">
          <Search className="mb-2"
            placeholder="Search"
            allowClear
            enterButton
            size="medium"
            onPressEnter={handleSearch}
            onSearch={handleSearch}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        {!showicons && (
          <div classname="onright ">
            <ol className="mx-8 pt-6">
              <Link to="/instructorPortal">
                <Button
                  disabled={isLogged}
                  className="Navbarbtns"
                  id="Teacherbtn"
                >
                  Instructor Portal
                </Button>
              </Link>
              {/* <Popover content={content} style={{ cursor: "pointer" }}>
                <button className="Navbarbtns" id="Categoriesbtn">
                  Categories
                </button>
              </Popover> */}

              <Link to="/AllCourses">
                <Button className="Navbarbtns" id="Teacherbtn">
                  AllCourses
                </Button>
              </Link>

              <Link to="/Allbooks">
                <Button className="Navbarbtns" id="Teacherbtn">
                  All Vbooks
                </Button>
              </Link>
              <Link to="/classroom">
                <Button className="Navbarbtns" id="Teacherbtn">
                  Go to Classroom
                </Button>
              </Link>
              {isLogged ? (
                userLink()
              ) : (
                <button className="Btn" id="SignInbtn">
                  <div id="spin"></div>
                  <Link to="/login" className="linkinbtn">
                    {" "}
                    Log in
                  </Link>
                </button>
              )}

              {showicons && (
                <Drawer
                  title="VBook& V-Classroom"
                  placement={"left"}
                  closable={true}
                  onClose={onClose}
                  visible={visbile}
                  key={"left"}
                >
                  <div className={isLogged ? "" : "onRightphone"}>
                    <Link to="/register">
                      <Button
                        className="Navbarbtns"
                        disabled={isLogged}
                        id="Teacherbtn"
                      >
                        Instructor Portal
                      </Button>
                    </Link>
                    <br />
                    {isLogged ? (
                      userLinkDrawer()
                    ) : (
                      <button className="Btn" id="SignInbtn">
                        <div id="spin"></div>
                        <Link to="/login" className="linkinbtn">
                          {" "}
                          Log in
                        </Link>
                      </button>
                    )}
                    <br />
                    <h4>Most visited :</h4> <hr />
                    {content}
                  </div>
                </Drawer>
              )}
            </ol>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
