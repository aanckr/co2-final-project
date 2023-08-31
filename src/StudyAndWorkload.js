import "./Track.css";

function StudyAndWorkload ({setStudyTime, setLearningTime, setWorkTime}){
    return (
        <div id="study-and-workload">

            <h3 className="track-headline">Study and Workload</h3>

            <form>

                <label className="track-labeling">
                    How many hours have you studied on campus?
                    <input className="field" type="number" min={0} max={24} onChange={(e) => setStudyTime(e.target.value)}/>
                </label> <br/>

                <label className="track-labeling">
                    How many hours have you studied at home?
                    <input className="field" type="number" min={0} max={24} onChange={(e) => setLearningTime(e.target.value)}/>
                </label> <br/>

                <label className="track-labeling">
                    How many hours did you work?
                    <input className="last-field" type="number" min={0} max={24} onChange={(e) => setWorkTime(e.target.value)}/>
                </label> <br/>

            </form>
    
        </div>
    )
}

export default StudyAndWorkload;