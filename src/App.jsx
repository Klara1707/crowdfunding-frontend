
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthProvider"; // ✅ Correct import
import HomePage from "./pages/HomePage";
import FundraiserDetail from "./pages/FundraiserDetail";
import CreateFundraiserPage from "./pages/CreateFundraiserPage";
import NavBar from "./components/NavBar";
import AutoLogout from "./components/AutoLogout";

function App() {
    return (
        <AuthProvider>
        <AutoLogout />
        <Router>
            <NavBar />
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fundraiser/:id" element={<FundraiserDetail />} />
            <Route path="/create-fundraiser" element={<CreateFundraiserPage />} />
            </Routes>
        </Router>
        </AuthProvider>
    );
}

export default App;



