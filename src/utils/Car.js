import React from "react";
import PropTypes from "prop-types";

class Car extends React.Component {
    render() {
        const { id, engineType, mark, model, price, isLoading } = this.props;
        const userDetails = (
            <div className="car-details">
                <span className="id-car">ID:{id} </span>
                <span> Engine type: {engineType}; </span>
                <span> Mark: {mark}; </span>
                <span> Model: {model}; </span>
                <span> Price: {price}; </span>
            </div>
        );
        const loadingMessage = <span className="d-flex m-auto">Loading...</span>;
        return (
            <div>
                {isLoading ? loadingMessage : userDetails}
            </div>
        );
    }
}
Car.propTypes = {
    id: PropTypes.number,
    engineType: PropTypes.string,
    mark: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.number,
    isLoading: PropTypes.bool
};
export default Car;