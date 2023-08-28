import Header from '../Header';
import Footer from '../Footer';
const React = require('react');

function PhysicalActivityAffectsMentalHealth() {
    return (
        <div className='color'>
            <Header />
            <div className='color_box'>
                <div className='text_box'>
                    <h1>How physical activity affects mental health</h1>
                    <h6>Author: A. Schobert</h6>
                    <h6>Last updated August 20, 2023</h6>
                    <p>The strong link between physical activity and mood is well documented. In this entry, 
                        we look at the interactions between exercise and mental health.</p>
                    <p>When you exercise, your body releases chemicals that can increase feelings of happiness 
                        and reduce anxiety. These natural mood enhancers can help alleviate depressive symptoms
                         and improve overall well-being.</p>
                    <p>Another exciting aspect is the social dimension of physical activity. Shared sports 
                        activities can promote social interactions and strengthen a sense of belonging, which 
                        can positively impact mental health.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default PhysicalActivityAffectsMentalHealth;