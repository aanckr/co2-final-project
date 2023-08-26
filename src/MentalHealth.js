import "./Track.css";

function MentalHealth (){
    return (
        <div id="mental-health">

            <h3 className="track-headline">Mental Health</h3>

            <form>

                <label className="track-labeling"> 
                    How is your mood? <br/>
                    <input type="range" min={1} max={5}/>
                </label> <br/>

                <label className="track-labeling">
                    How was your stress level? <br/>
                    <input type="range" min={1} max={5}/>
                </label> <br/>

                <label className="track-labeling">
                    How was your sleep quality? <br/>
                    <input type="range" min={1} max={5}/>
                </label> <br/>

                <label className="track-labeling">
                    How many hours did you sleep? <br/>
                    <input className="last-field" type="number" />
                </label>

            </form>
    
        </div>
    )
}

export default MentalHealth;