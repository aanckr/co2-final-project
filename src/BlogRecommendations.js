import "./Overview.css";
import { useParams } from "react-router-dom";

function BlogRecommendations (){

    let { user_name } = useParams();

    const blogPosts = [
        "Understanding and Managing Stress",
        "Time management and stress reduction",
        "Relaxation techniques for stressful study life",
        "The importance of breaks and social support",
        "The art of time management",
        "Organization tips for an orderly study day",
        "Time efficiency in your studies",
        "Understanding Cognitive Enhancement",
        "The interplay of memory and learning strategies",
        "The power of metacognition",
        "The link between physical activity and mental health",
        "How physical activity affects mental health"
    ];

    const blogPostsLinks = [
        `http://localhost:3000/Blog/understanding_and_managing/${user_name}`,
        `http://localhost:3000/Blog/time_management/${user_name}`,
        `http://localhost:3000/Blog/relaxation_techniques/${user_name}`,
        `http://localhost:3000/Blog/importance_of_breaks/${user_name}`,
        `http://localhost:3000/Blog/art_of_time_management/${user_name}`,
        `http://localhost:3000/Blog/organization_tips/${user_name}`,
        `http://localhost:3000/Blog/time_efficiency/${user_name}`,
        `http://localhost:3000/Blog/understanding_cognitive_enhancement/${user_name}`,
        `http://localhost:3000/Blog/interplay_of_memory/${user_name}`,
        `http://localhost:3000/Blog/power_of_metacognition/${user_name}`,
        `http://localhost:3000/Blog/physical_activity_and_mental_health/${user_name}`,
        `http://localhost:3000/Blog/physical_activity_affects_mental_health/${user_name}`
    ];

    var random = Math.floor(Math.random()*blogPosts.length);
    var blogValue = blogPosts[random];
    var linkValue = blogPostsLinks[random];
    
    const link = () => {
        window.location.href = linkValue;
    };

    return (
        <div id="blog-recommendations">

            <h3 className="overview-headline">Blog Recommendations</h3>

            <span onClick={link}>
                {blogValue}
            </span>
    
        </div>
    )
}

export default BlogRecommendations;