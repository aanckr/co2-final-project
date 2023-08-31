import "./Track.css";

function Lifestyle ({setDietaryHabits, setActivityTime, setTobaccoUse, setAlcoholConsumption, setDrugUse}){
    return (
        <div id="lifestyle">

            <h3 className="track-headline">Lifestyle</h3>

            <form>

                <label className="track-labeling">
                    How did you eat today?
                    <input className="field" list="eat" name="eat" onChange={(e) => setDietaryHabits(e.target.value)}/>
                        <datalist id="eat" >
                            <option value="Vegetarian" />
                            <option value="Vegan" />
                            <option value="Omnivorous" />
                            <option value="Other" />
                        </datalist>
                </label> <br/>

                <label className="track-labeling">
                    How many hours have you been active?
                    <input className="field" type="number" min={0} max={24} onChange={(e) => setActivityTime(e.target.value)}/>
                </label> <br/>


                <label className="track-labeling">Did you consume tobacco?</label> <br/>
                <label className="btn-labeling">
                    <input className="track-btn" type="radio" name="tobacco" onChange={(e) => setTobaccoUse('Yes')}/>
                    Yes
                </label>
                <br/>
                <label className="btn-labeling">
                    <input className="track-btn" type="radio" name="tobacco" onChange={(e) => setTobaccoUse('No')}/>
                    No
                </label> <br/>


                <label className="track-labeling">Did you consume alcohol?</label> <br/>
                <label className="btn-labeling">
                    <input className="track-btn" type="radio" name="alcohol" onChange={(e) => setAlcoholConsumption('Yes')}/>
                    Yes
                </label>
                <br/>
                <label className="btn-labeling">
                    <input className="track-btn" type="radio" name="alcohol" onChange={(e) => setAlcoholConsumption('No')}/>
                    No
                </label> <br/>


                <label className="track-labeling">Did you consume drugs?</label> <br/>
                <label className="btn-labeling">
                    <input className="track-btn" type="radio" name="drugs" onChange={(e) => setDrugUse('Yes')}/>
                    Yes
                </label>
                <br/>
                <label className="btn-labeling">
                    <input id="last-field" className="track-btn" type="radio" name="drugs" onChange={(e) => setDrugUse('No')}/>
                    No
                </label>

            </form>
    
        </div>
    )
}

export default Lifestyle;