import "./Overview.css";

function PersonalMessage (){

    const messages = [
        "Every day may not be good, but there's something good in every day.",
        "You are stronger than you think.",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "Difficult roads often lead to beautiful destinations.",
        "The only person you should try to be better than is the person you were yesterday.",
        "You are enough just as you are.",
        "The sun will rise, and we will try again.",
        "You are capable of achieving great things.",
        "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
        "Inhale the future, exhale the past.",
        "You are not alone in this journey.",
        "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
        "Storms don't last forever.",
        "You have the power to create change.",
        "The present moment is a gift. Enjoy it fully.",
        "You are deserving of love, happiness, and inner peace.",
        "Small steps forward are still progress.",
        "Your mental well-being matters more than any achievement.",
        "Surround yourself with those who lift you higher.",
        "Keep going. You're making progress even if it doesn't seem like it."
    ];

    var random = Math.floor(Math.random()*messages.length);
    var rValue = messages[random];


    return (
        <div id="personal-message">

            <h3 className="overview-headline">Messages</h3>
            <span id="message">{rValue}</span>
    
        </div>
    )
}

export default PersonalMessage;