import './App.css';
import Homepage from './Homepage';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Overview from './Overview';
import Profile from './Profile';
import Privacy from './Privacy';
import Blog from './Blog';
import Analysis from './Analysis';
import Track from './Track';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UnderstandingAndManaging from './Blog_post/UnderstandingAndManaging';
import TimeManagment from './Blog_post/TimeManagement';
import RelaxationTechniques from './Blog_post/RelaxationTechniques';
import ImportanceOfBreaks from './Blog_post/ImportanceOfBreaks';
import ArtOfTimeManagement from './Blog_post/ArtOfTimeManagement';
import OrganizationTips from './Blog_post/OrganizationTips';
import TimeEfficiency from './Blog_post/TimeEfficiency';
import UnderstandingCognitiveEnhancement from './Blog_post/UnderstandingCognitiveEnhancement';
import InterplayOfMemory from './Blog_post/InterplayOfMemory';
import PowerOfMetacognition from './Blog_post/PowerOfMetacognition';
import PhysicalActivityAndMentalHealth from './Blog_post/PhysicalActivityAndMentalHealth';
import PhysicalActivityAffectsMentalHealth from './Blog_post/PhysicalActivityAffectsMentalHealth';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Overview/:user_name" element={<Overview />} />
          <Route path="/Analysis/:user_name" element={<Analysis />} />
          <Route path="/Profile/:user_name" element={<Profile />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Blog/:user_name" element={<Blog />} />
          <Route path="/Track/:user_name" element={<Track />} />
          <Route path="/Blog/understanding_and_managing/:user_name" element={<UnderstandingAndManaging />} />
          <Route path="/Blog/time_management/:user_name" element={<TimeManagment />} />
          <Route path="/Blog/relaxation_techniques/:user_name" element={<RelaxationTechniques />} />
          <Route path="/Blog/importance_of_breaks/:user_name" element={<ImportanceOfBreaks />} />
          <Route path="/Blog/art_of_time_management/:user_name" element={<ArtOfTimeManagement />} />
          <Route path="/Blog/organization_tips/:user_name" element={<OrganizationTips />} />
          <Route path="/Blog/time_efficiency/:user_name" element={<TimeEfficiency />} />
          <Route path="/Blog/understanding_cognitive_enhancement/:user_name" element={<UnderstandingCognitiveEnhancement />} />
          <Route path="/Blog/interplay_of_memory/:user_name" element={<InterplayOfMemory />} />
          <Route path="/Blog/power_of_metacognition/:user_name" element={<PowerOfMetacognition />} />
          <Route path="/Blog/physical_activity_and_mental_health/:user_name" element={<PhysicalActivityAndMentalHealth />} />
          <Route path="/Blog/physical_activity_affects_mental_health/:user_name" element={<PhysicalActivityAffectsMentalHealth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
