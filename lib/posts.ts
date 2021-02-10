import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");
const dateRegex = new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d");

export function getPostsData() {
  const fullPathPosts = path.join(postsDirectory, "posts.json");
  const fullPathCategories = path.join(postsDirectory, "categories.json");
  const fileContentsPosts = fs.readFileSync(fullPathPosts);
  const fileContentsCat = fs.readFileSync(fullPathCategories);
  const parsedDataPosts = JSON.parse(fileContentsPosts);
  const parsedDataCat = JSON.parse(fileContentsCat);

  return { parsedDataPosts, parsedDataCat };
}
