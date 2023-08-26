import Footer_start from './Footer_start';

const React = require('react');
const { Link } = require('react-router-dom');

function Homepage() {
    return (
        <div className='color'>
            <div className='color_box'>
                <div className='text_box'>
                    <sectin>
                        <div>
                            <h2>How do you feel today?</h2>
                            <p>Our unique Mental Health Tracker accompanies you on your emotional journey. It's simple and easy to record how you're feeling every day. Share your mood with us - because every emotion counts.</p>
                        </div>
                    </sectin>
                    <section>
                        <div>
                            <h2>Recognize your well-being</h2>
                            <p>Your entered data is analyzed by our advanced system. This gives you insights into what times you feel best and when you might need an extra dose of self-care. The patterns we discover together will help you better understand your mental highs and lows.</p>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h2>Discover our blog</h2>
                            <p>Dive into our blog, which offers a wealth of advice and tips for different areas of life - especially college life. We understand the challenges that studying and everyday life can bring, and give you tools to better deal with them. Get inspired, learn stress management techniques, and find ways to live a balanced life.</p>
                        </div>
                    </section>
                    <br />
                    <section>
                        <div>
                            <p>We're here to guide you on your journey - to a healthier, happier and more fulfilling life. Get started today with the Mental Health Tracker and discover a new level of self-care.</p>
                        </div>
                    </section>
                </div>
            </div>
            < Footer_start/>
        </div>
    );
}

export default Homepage;
