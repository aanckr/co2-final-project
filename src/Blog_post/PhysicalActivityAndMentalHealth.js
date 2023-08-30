import Header from '../Header';
import Footer from '../Footer';
const React = require('react');

function PhysicalActivityAndMentalHealth() {
    return (
        <div className='color'>
            <Header />
            <div className='distance'></div>
            <div className='color_box'>
                <div className='text_box'>
                    <h1>The Link Between Physical Activity and Mental Health</h1>
                    <h6>Author: A. Schobert</h6>
                    <h6>Last updated August 21, 2023</h6>
                    <p>The link between physical activity and mental health is undeniable. This entry
                        will explore how exercise affects well-being and the mechanisms behind this connection.</p>
                    <p>Physical activity releases endorphins - chemical messengers that act as natural
                        mood elevators. Likewise, exercise promotes blood flow to the brain and stimulates
                        the growth of new neurons. This can help relieve stress, reduce anxiety, and improve
                        cognitive function.</p>
                    <p>Whether walking, running, yoga, or dancing, exercise can positively affect mental health.
                        Incorporating regular physical activity into your daily routine can boost your well-being
                        and support your mental health.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default PhysicalActivityAndMentalHealth;