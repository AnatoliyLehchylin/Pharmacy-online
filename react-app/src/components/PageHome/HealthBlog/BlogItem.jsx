import {blogDesc, blogImg, blogTitle, Item} from "./style/index.js";
import {Typography} from "@mui/material";

const BlogItem = ({ BlogImg, BlogImgName }) => (
  <Item>
    <Typography component="div" sx={blogImg}>
    <img src={BlogImg} alt={`post-${BlogImgName}`} />
    </Typography>
    <Typography component="p" sx={blogTitle}>
      Активная жизнь без "приливов" - все в ваших руках
    </Typography>
    <Typography component="p" sx={blogDesc}>
      И все же природу обмануть невозможно, и почти каждая женщина после сорока лет задумывается о приближении климакса.
    </Typography>
  </Item>
);

export default BlogItem;
