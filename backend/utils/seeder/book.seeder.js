const mongoose = require("mongoose");
const Book = require("../../models/Book.model");
const CONNECTION_URL =
  "mongodb+srv://souhail:souhail2001@cluster0.bnzut.mongodb.net/myDataBase?retryWrites=true&w=majority";
const dummy = {
  book_title: "nlm",
  author: "newton",
  lecture_hrs: "8",
  cover_page:
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564",
  chapters: [
    {
      chapter_title: "Chapter 1",
      lecture_hrs: "4",
      index: "2",
      topics: [
        {
          topic_title: "Newton 1st law",
          sub_topic: [
            {
              sub_title: "law of inertia",
              diagram: "",
              formulae: "f=m*a",
              table_img: "",
              description:
                "An object would continue its state(motion/rest) unless and untill net external force is applied to it.",
              imp_note: "this law is also known as law of inertia.",
              points: "Has some roots in law of inertia",
              point_style: "ordered",
            },
            {
              sub_title: "fun facts",
              diagram: "",
              formulae: "a=b+c",
              table_img: "",
              description:
                "Newton's first law of motion predicts the behavior of objects for which all existing forces are balanced",
              imp_note:
                "The first law - sometimes referred to as the law of inertia - states that if the forces acting upon an object are balanced, then the acceleration of that object will be 0 m/s/s",
              points: "Has some roots in law of inertia",
              point_style: "ordered",
            },
          ],
          objective: "basic understanding of motion and rest",
        },
        {
          topic_title: "Newton 2nd law",
          sub_topic: [
            {
              sub_title: "Identification of force",
              diagram:
                "https://physicsteacher.in/wp-content/uploads/2018/09/newtons-second-law-and-force.jpg",
              formulae:
                "https://image.shutterstock.com/image-vector/newtons-second-law-motion-formula-260nw-766341532.jpg",
              table_img: "",
              description:
                "rate of change of momentum is directlt proptional to net applied force.",
              imp_note: "Momentum is the quantity of motion coupled with mass",
              points:
                "when catching a ball player move their hands with ball for a moment,F net is net external applied force, A net 0 external force result in net 0 liner momentum",
              point_style: "ordered",
            },
          ],
          objective:
            "learn nature of force,mass and acceleration alongwith their relations",
        },
      ],
    },

    {
      chapter_title: "Chapter 2",
      lecture_hrs: "8",
      index: "3",
      topics: [
        {
          topic_title: "Time dilation",
          sub_topic: [
            {
              sub_title: "Is time linear?",
              diagram:
                "https://cdn.mos.cms.futurecdn.net/7FpLzsQyVKUTRZUuh8V6UC-1200-80.jpg",
              formulae: "",
              table_img: "",
              description:
                "time dilation, in the theory of special relativity, the “slowing down” of a clock as determined by an observer who is in relative motion with respect to that clock.In physics and relativity, time dilation is the difference in the elapsed time as measured by two clocks. It is either due to a relative velocity between them or to a difference in gravitational potential between their locations. When unspecified, time dilation usually refers to the effect due to velocity.Time dilation is the slowing of time as perceived by one observer compared with another, depending on their relative motion or positions in a gravitational field. It's a consequence of Einsteinian relativity, in which time is not as absolute as it might appear; the rate at which it passes is different for observers in different frames of reference. ",
              imp_note: "Time is not linear",
              points: "Time slows, gravity is bending time-space curve",
              point_style: "ordered/unordered",
            },
          ],
          objective: "learn about time",
        },
        {
          topic_title: "Time travel , is it possible?..Twin paradox",
          sub_topic: [
            {
              sub_title: "Moment of momentum",
              diagram: "img",
              formulae: "",
              table_img: "",
              description:
                "One of the most mind-bending consequences of time dilation is the so-called twin paradox. In this thought experiment, one identical twin lives on Earth while their twin takes a round trip to a distant star at velocities approaching the speed of light. When they meet up again, the traveling twin — thanks to time dilation of the special relativistic kind — has aged far less than the one who stayed at home. The apparent paradox comes from the mistaken belief that the situation is symmetrical — in other words, that you could also say the traveling twin is stationary relative to the Earthbound twin, meaning that the Earthling would have aged less than the star-voyaging twin. .",
              imp_note: "",
              points:
                "We experience stronger gravity than the spacecraft,  how relativity is essential for a working universe",
              point_style: "ordered",
            },
          ],
          objective: "learn about time",
        },
      ],
    },
  ],
};

//connect db
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db in development environment");
    //save your data. this is an async operation
    //after you make sure you seeded all the products, disconnect automatically
    const saveBook = async () => {
      try {
        const BookToBeSaved = new Book(dummy);
        const res = await BookToBeSaved.save();
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
    saveBook().then(() => {
      console.log("done");
      mongoose.disconnect();
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
