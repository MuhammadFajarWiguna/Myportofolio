import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./component/Navbar/NavbarComponent.jsx";
import FooterComponent from "./component/Footer/FooterComponent.jsx";

import HomePages from "./component/pages/HomePages/HomePages.jsx";
import FaqComponent from "./component/pages/FaqPages/FaqComponent.jsx";
import KelasComponent from "./component/pages/KelasPages/KelasComponent.jsx";
import TestimoniComponent from "./component/pages/TestimoniPages/TestimoniComponent.jsx";
import SyaratKetPage from "./component/pages/SyaratKetPages/SyaratKetPage.jsx";



function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePages} />
        <Route path="/kelas" Component={KelasComponent} />
        <Route path="/testimonial" Component={TestimoniComponent} />
        <Route path="/faq" Component={FaqComponent} />
        <Route path="/syaratketen" Component={SyaratKetPage} />
      </Routes>
      <FooterComponent/>
    </div>
  )
}

export default App
