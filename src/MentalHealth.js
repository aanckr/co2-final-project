import "./Track.css";

function MentalHealth (setGeneralMood, setStressLevel, setSleepQualtiy, setSleepDuration){
    return (
        <div id="mental-health">

            <h3 className="track-headline">Mental Health</h3>

            <form>

                <label className="track-labeling"> 
                    How is your mood? <br/>
                    <input type="range" min={1} max={5} onChange={(e) => setGeneralMood(e.target.value)}/>
                </label> <br/>

                <label className="track-labeling">
                    How was your stress level? <br/>
                    <input type="range" min={1} max={5} onChange={(e) => setStressLevel(e.target.value)} />
                </label> <br/>

                <label className="track-labeling">
                    How was your sleep quality? <br/>
                    <input type="range" min={1} max={5} onChange={(e) => setSleepQualtiy(e.target.value)} />
                </label> <br/>

                <label className="track-labeling">
                    How many hours did you sleep? <br/>
                    <input className="last-field" type="number"  onChange={(e) => setSleepDuration(e.target.value)} />
                </label>

            </form>
    
        </div>
    )
}

export default MentalHealth;