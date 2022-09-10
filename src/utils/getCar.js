import React from "react";
import API from "./API";
import Car from "./Car";

export class GetCar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            engineType: null,
            mark: null,
            model: null,
            price: null
        };
    }


    render() {
        const {id, engineType, mark, model, price, isLoading} = this.state;
        return (
            <Car isLoading={isLoading} id={id} engineType={engineType} mark={mark} model={model} price={price}/>
        );
    }

    async componentDidMount() {
        let carData = await API.get('/cars');
        let num = this.props.num;
        carData = carData.data[num];
        console.log(carData);
        const id = `${carData.id} `
        const engineType = `${carData.engineType} `;
        const mark = `${carData.mark} `;
        const model = `${carData.model} `;
        const price = `${carData.price} `;

        this.setState({
            ...this.state, ...{
                isLoading: false,
                id,
                engineType,
                mark,
                model,
                price
            }
        });
    }
}

export default GetCar