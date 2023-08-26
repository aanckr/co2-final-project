import "./Track.css";

function Lifestyle (){
    return (
        <div id="lifestyle">

            <h3 className="track-headline">Lifestyle</h3>

            <form>

                <label className="track-labeling">
                    How did you eat today?
                    <input className="field" list="eat" name="eat" />
                        <datalist id="eat" >
                            <option value="Vegetarian" />
                            <option value="Vegan" />
                            <option value="Omnivorous" />
                            <option value="Other" />
                        </datalist>
                </label> <br/>

                <label className="track-labeling">
                    How many hours have you been active?
                    <input className="field" type="number"/>
                </label> <br/>


                <label className="track-labeling">Did you consume tobacco?</label> <br/>
                <label className="btn-labeling">
                    <input className="track-btn" type="radio" name="tobacco"/>
                    Yes
                </label>

                <label className="btn-labeling">
                    <input className="track-btn" type="radio" name="tobacco"/>
                    No
                </label> <br/>


                <label className="track-labeling">Did you consume alcohol?</label> <br/>
                <label className="btn-labeling">
                    <input className="track-btn" type="radio" name="alcohol"/>
                    Yes
                </label>

                <label className="btn-labeling">
                    <input className="track-btn" type="radio" name="alcohol"/>
                    No
                </label> <br/>


                <label className="track-labeling">Did you consume drugs?</label> <br/>
                <label className="btn-labeling">
                    <input className="track-btn" type="radio" name="drugs"/>
                    Yes
                </label>

                <label className="btn-labeling">
                    <input className="track-btn" type="radio" name="drugs"/>
                    No
                </label>

            </form>
    
        </div>
    )
}

export default Lifestyle;