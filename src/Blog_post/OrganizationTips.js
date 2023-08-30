import Header from '../Header';
import Footer from '../Footer';
const React = require('react');

function OrganizationTips() {
    return (
        <div className='color'>
            <Header />
            <div className='distance'></div>
            <div className='color_box'>
                <div className='text_box'>
                    <h1>Organization Tips for an Orderly Study Day</h1>
                    <h6>Author: A. Schobert</h6>
                    <h6>Last updated August 19, 2023</h6>
                    <p>The organization is the key to a more stress-free study day. In this post,
                        you'll learn how to organize your environment and routines to be more productive
                        and focused.</p>
                    <p><strong>Tidy Workspace:</strong> Create a tidy workspace where you can work efficiently. Reduce
                        distractions and make sure you have adequate light and order.</p>
                    <p><strong>Structured weekly schedule:</strong> Create a weekly schedule in which you enter lectures,
                        studies, free time, and other commitments. This will help you keep track of your time.</p>
                    <p><strong>Plan ahead:</strong> Plan ahead by marking important dates, deadlines, and exams on your
                        calendar. This will help you avoid last-minute stress.</p>
                    <p><strong>Digital or analog:</strong> Choose the organizational tool that suits you best - a
                        physical diary, an organizer app, or notebooks.</p>
                    <p><strong>Minimize decisions:</strong> Reduce unnecessary decisions by, for example, getting your clothes 
                        ready for the next day or the night before.</p>
                    <p><em>With good organization, you'll create an environment that helps you be more 
                        productive, stay on top of things, and get the most out of your studies.</em></p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default OrganizationTips;