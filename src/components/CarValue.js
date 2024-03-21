import { useSelector } from "react-redux";

function CarValue() {

    const totalCost = useSelector(({ cars: { carList, searchTerm } }) => {

        return carList.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).reduce((accumulator, car) => accumulator + car.cost, 0);

    });

    return (
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    );

}

export default CarValue;
