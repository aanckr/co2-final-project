import Footer from './Footer';
import "./Blog.css"

const React = require('react');

function Blog() {
    return (
        <div className='color'>
            <h2 className='Blog-txt'>Tips for your best uni life and mental wellbeing.</h2>
            <p className='Blog-txt'>Discover our blog with valuable tips to make the most of your uni life and boost your mental health. Find inspiration for effective learning, stress management and more mindfulness in your everyday life.</p>
            <div className='Blog'>
                <div className='Blog-entries'>
                    <h3>Stress Management and Relaxation Techniques</h3>
                    <section className="Topic_1">
                        <div className="entries">
                            <img alt="Stress Management and Relaxation Techniques" />
                            <div className="entrie-topic">
                                <p>Understanding and Managing Stress</p>
                            </div>
                        </div>
                        <div className="entries">
                            <img alt="Time management and stress reduction" />
                            <div className="entrie-topic">
                                <p>Time management and stress reduction</p>
                            </div>
                        </div>
                        <div className="entries">
                            <img alt="Relaxation techniques for stressful study life" />
                            <div className="entrie-topic">
                                <p>Relaxation techniques for stressful study life</p>
                            </div>
                        </div>
                        <div className="entries">
                            <img alt="The importance of breaks and social support" />
                            <div className="entrie-topic">
                                <p>The importance of breaks and social support</p>
                            </div>
                        </div>
                    </section>
                    <h3>Effective Time Management and Organization</h3>
                    <section className='Topic_2'>
                        <div className="entries">
                            <img alt="The art of time management" />
                            <div className="entrie-topic">
                                <p>The art of time management</p>
                            </div>
                        </div>
                        <div className="entries">
                            <img alt="Organization tips for an orderly study day" />
                            <div className="entrie-topic">
                                <p>Organization tips for an orderly study day</p>
                            </div>
                        </div>
                        <div className="entries">
                            <img alt="Time efficiency in your studies" />
                            <div className="entrie-topic">
                                <p>Time efficiency in your studies</p>
                            </div>
                        </div>
                    </section>
                    <h3>Cognitive Enhancement and Learning</h3>
                    <section className='Topic_2'>
                        <div className="entries">
                            <img alt="Understanding Cognitive Enhancement" />
                            <div className="entrie-topic">
                                <p>Understanding Cognitive Enhancement</p>
                            </div>
                        </div>
                        <div className="entries">
                            <img alt="The interplay of memory and learning strategies" />
                            <div className="entrie-topic">
                                <p>The interplay of memory and learning strategies</p>
                            </div>
                        </div>
                        <div className="entries">
                            <img alt="The power of metacognition" />
                            <div className="entrie-topic">
                                <p>The power of metacognition</p>
                            </div>
                        </div>
                    </section>
                    <h3>Physical Activity and Mental Health</h3>
                    <section className='Topic_3'>
                        <div className="entries">
                            <img alt="The link between physical activity and mental health" />
                            <div className="entrie-topic">
                                <p>The link between physical activity and mental health</p>
                            </div>
                        </div>
                        <div className="entries">
                            <img alt="How physical activity affects mental health" />
                            <div className="entrie-topic">
                                <p>How physical activity affects mental health</p>
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
