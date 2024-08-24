import { ImageGallery } from "./containers/image-gallery/image-gallery";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import { TodoApp } from "./containers/todo-app/todo-app";
import { FormCreator } from "./containers/form-creator/form-creator";
import { DebouncedSearch } from "./components/debounced-search/debounced-search";
import { Homepage } from "./containers/homepage/homepage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/form-creator" element={<FormCreator />} />
        <Route path="/debounced-search" element={<DebouncedSearch />} />
      </Routes>
    </Router>
  );
};

export default App;
