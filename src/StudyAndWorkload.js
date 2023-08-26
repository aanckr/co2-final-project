import "./Track.css";

function StudyAndWorkload (){
    return (
        <div id="study-and-workload">

            <h3 className="track-headline">Study and Workload</h3>

            <form>

                <label className="track-labeling">
                    How many hours have you studied on campus?
                    <input className="field" type="number"/>
                </label> <br/>

                <label className="track-labeling">
                    How many hours have you studied at home?
                    <input className="field" type="number"/>
                </label> <br/>

                <label className="track-labeling">
                    How many hours did you work?
                    <input className="last-field" type="number"/>
                </label> <br/>

            </form>
    
        </div>
    )
}

export default StudyAndWorkload;