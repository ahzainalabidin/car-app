import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";
import { createSelector } from "reselect";

function CarForm() {

    const dispatch = useDispatch();

    const memoizedForm = createSelector(
        (state) => state.form.name,
        (state) => state.form.cost,
        (name, cost) => {
            return { name, cost };
        }
    );

    const { name, cost } = useSelector(memoizedForm);

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    };

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name, cost }));
    };

    return (
        <div className="car-form panel">

            <h4 className="subtitle is-3">Add Car</h4>

            <form onSubmit={handleSubmit}>
                <div className="field-group">

                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            className="input is-expanded"
                            value={cost || ''}
                            onChange={handleCostChange}
                            type="number"
                        />
                    </div>

                    <div className="field">
                        <button className="button is-link">Submit</button>
                    </div>

                </div>
            </form>

        </div>
    );

}

export default CarForm;
