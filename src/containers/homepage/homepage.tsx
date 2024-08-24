import { Link } from "react-router-dom";
import HomePageStyles from "@/containers/homepage/homepage.module.scss";

export const Homepage = () => {
  return (
    <main className={HomePageStyles.wrapper}>
      <h1>Pages</h1>
      <Link to="/image-gallery">Image Gallery</Link>
      <Link to="/todo-app">Todo App</Link>
      <Link to="/form-creator">Form Creator</Link>
      <Link to="/debounced-search">Debounced Search</Link>
    </main>
  );
};
