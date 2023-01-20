const mongoose = require("mongoose");
const subTopicSchema = mongoose.Schema({
  sub_title: {
    type: String,
    required: true,
  },
  diagram: {
    type: String,
  },
  formulae: {
    type: String,
  },
  table_img: {
    type: String,
  },
  description: {
    type: String,
  },
  imp_note: {
    type: String,
  },
  points: {
    type: String,
  },
  point_style: {
    type: String,
    default: "unordered",
  },
});
const topicSchema = mongoose.Schema({
  topic_title: {
    type: String,
    required: true,
  },
  objective: {
    type: String,
    required: true,
  },
  sub_topic: [subTopicSchema],
});
const chapterSchema = mongoose.Schema({
  chapter_title: {
    type: String,
    required: true,
  },
  lecture_hrs: {
    type: Number,
  },
  index: {
    type: Number,
    required: true,
  },
  topics: [topicSchema],
});
const bookSchema = mongoose.Schema(
  {
    tags: [],
    author: {
      type: String,
      required: true,
    },
    book_title: {
      type: String,
      required: true,
    },
    cover_page: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    price:{
      type : Number,
      required: true,
    },
    chapters: [chapterSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
