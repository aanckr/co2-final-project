import Header from './Header';
import Footer from './Footer';
import "./Blog.css";
import PhysicalActivityAndMentalHealth from "./images/PhysicalActivityAndMentalHealth.png";
import PhysicalActivityAffectsMentalHealth from "./images/PhysicalActivityAffectsMentalHealth.png";
import PowerOfMetacognition from "./images/PowerOfMetacognition.png";
import InterplayOfMemory from './images/InterplayOfMemory.png';
import UnderstandingCognitiveEnhancement from './images/UnderstandingCognitiveEnhancement.png';
import OrganizationTips from './images/OrganizationTips.png';
import ArtOfTimeManagement from './images/ArtOfTimeManagement.png';
import ImportanceOfBreaks from './images/ImportanceOfBreaks.png';
import RelaxationTechniques from './images/RelaxationTechniques.png';
import TimeEfficiency from './images/TimeEfficiency.png';
import TimeManagement from './images/TimeManagement.png';
import UnderstandingAndManaging from './images/UnderstandingAndManaging.png';
import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';

function Blog() {
    let { user_name } = useParams();

    const token = localStorage.getItem('token');

    useEffect(() => {
      if (!token) {
        window.location.href = 'http://localhost:3000/LogIn';
      } else {
        const [tokenUserName] = token.split(':');
        
        if (tokenUserName !== user_name) {
          window.location.href = 'http://localhost:3000/LogIn';
        }
      }
    }, [token, user_name]);

    return (
        <div className='color'>
            <Header />
            <h1>Tips for your best Uni Life and Mental Wellbeing</h1>
            <p className='Blog-txt'>Discover our blog with valuable tips to make the most of your uni life and boost your mental health. Find inspiration for effective learning, stress management and more mindfulness in your everyday life.</p>
            <div className='Blog'>
                <div className='Blog-entries'>
                    <h3>Stress Management and Relaxation Techniques</h3>
                    <section className="Topic_1">
                        <div className="entries" onClick={() => window.location.href = `http://localhost:3000/Blog/understanding_and_managing/${user_name}`}>
                            <img src={UnderstandingAndManaging} alt="Stress Management and Relaxation Techniques" />
                            <div className="entrie-topic">
                                <p>Understanding and Managing Stress</p>
                            </div>
                        </div>
                        <div className="entries" onClick={() => window.location.href = `http://localhost:3000/Blog/time_management/${user_name}`}>
                            <img src={TimeManagement} alt="Time management and stress reduction" />
                            <div className="entrie-topic">
                                <p>Time Management and Stress Reduction</p>
                            </div>
                        </div>
                        <div className="entries" onClick={() => window.location.href = `http://localhost:3000/Blog/relaxation_techniques/${user_name}`}>
                            <img src={RelaxationTechniques} alt="Relaxation techniques for stressful study life" />
                            <div className="entrie-topic">
                                <p>Relaxation Techniques for Stressful Study Life</p>
                            </div>
                        </div>
                        <div className="entries" onClick={() => window.location.href = `http://localhost:3000/Blog/importance_of_breaks/${user_name}`}>
                            <img src={ImportanceOfBreaks} alt="The importance of breaks and social support" />
                            <div className="entrie-topic">
                                <p>The Importance of Breaks and Social Support</p>
                            </div>
                        </div>
                    </section>
                    <h3>Effective Time Management and Organization</h3>
                    <section className='Topic_2'>
                        <div className="entries" onClick={() => window.location.href = `http://localhost:3000/Blog/art_of_time_management/${user_name}`}>
                            <img src={ArtOfTimeManagement} alt="The art of time management" />
                            <div className="entrie-topic">
                                <p>The Art of Time Management</p>
                            </div>
                        </div>
                        <div className="entries" onClick={() => window.location.href = `http://localhost:3000/Blog/organization_tips/${user_name}`}>
                            <img src={OrganizationTips} alt="Organization tips for an orderly study day" />
                            <div className="entrie-topic">
                                <p>Organization Tips for an Orderly Study Day</p>
                            </div>
                        </div>
                        <div className="entries" onClick={() => window.location.href = `http://localhost:3000/Blog/time_efficiency/${user_name}`}>
                            <img src={TimeEfficiency} alt="Time efficiency in your studies" />
                            <div className="entrie-topic">
                                <p>Time Efficiency in Your Studies</p>
                            </div>
                        </div>
                    </section>
                    <h3>Cognitive Enhancement and Learning</h3>
                    <section className='Topic_2'>
                        <div className="entries" onClick={() => window.location.href = `http://localhost:3000/Blog/understanding_cognitive_enhancement/${user_name}`}>
                            <img src={UnderstandingCognitiveEnhancement} alt="Understanding Cognitive Enhancement" />
                            <div className="entrie-topic">
                                <p>Understanding Cognitive Enhancement</p>
                            </div>
                        </div>
                        <div className="entries" onClick={() => window.location.href = `http://localhost:3000/Blog/interplay_of_memory/${user_name}`}>
                            <img src={InterplayOfMemory} alt="The interplay of memory and learning strategies" />
                            <div className="entrie-topic">
                                <p>The Interplay of Memory and Learning Strategies</p>
                            </div>
                        </div>
                        <div className="entries" onClick={() => window.location.href = `http://localhost:3000/Blog/power_of_metacognition/${user_name}`}>
                            <img src={PowerOfMetacognition} alt="The power of metacognition" />
                            <div className="entrie-topic">
                                <p>The Power of Metacognition</p>
                            </div>
                        </div>
                    </section>
                    <h3>Physical Activity and Mental Health</h3>
                    <section className='Topic_3'>
                        <div className="entries" onClick={() => window.location.href = `http://localhost:3000/Blog/physical_activity_and_mental_health/${user_name}`}>
                            <img src={PhysicalActivityAndMentalHealth} alt="The link between physical activity and mental health" />
                            <div className="entrie-topic">
                                <p>The Link Between Physical Activity and Mental Health</p>
                            </div>
                        </div>
                        <div className="entries" onClick={() => window.location.href = `http://localhost:3000/Blog/physical_activity_affects_mental_health/${user_name}`}>
                            <img src={PhysicalActivityAffectsMentalHealth} alt="How physical activity affects mental health" />
                            <div className="entrie-topic">
                                <p>How Physical Activity Affects Mental Health</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
