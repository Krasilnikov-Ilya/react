import React from "react";
import User from "./User";
import API from "./API";

export class GetUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            first_name: null,
            second_name: null,
            id: null
        };
    }

    render() {
        const {
            isLoading, id, firstName, secondName, sex, age, money} = this.state;
        return (
            <User isLoading={isLoading} id={id} firstName={firstName} secondName={secondName} sex={sex} age={age} money={money}/>
        );
    }

    async componentDidMount() {
        let userData = await API.get('/');
        userData = userData.data[25];
        console.log(userData);
        const id = `${userData.id} `
        const firstName = `${userData.firstName} `;
        const secondName = `${userData.secondName} `;
        const sex = `${userData.sex}`;
        const age = `${userData.age}`;
        const money = `${userData.money}`;

        this.setState({
            ...this.state, ...{
                isLoading: false,
                id,
                firstName,
                secondName,
                sex,
                age,
                money
            }
        });
    }
}
export default GetUser