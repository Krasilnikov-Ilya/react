import './App.css';
import User from "./utils/User";
import Card from 'react-bootstrap/Card';
import React from "react";
import API from "./utils/API";

class getUser extends React.Component {
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
        // Load async data.
        let userData = await API.get('/');
        // Парсим резульатты.
        userData = userData.data[1];
        console.log(userData);
        // Обновляем стейт и ререндерим наш компонент.
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

function App() {
    let components = {
        'get_user': getUser
    }

    return (
        <div className="App">
            <header className="App-header">
                <button className="Nav-btn">
                    <p>
                        Create
                    </p>
                </button>
                <button className="Nav-btn">
                    <p>
                        Read
                    </p>
                </button>
                <button className="Nav-btn">
                    <p>
                        Update
                    </p>
                </button>
                <button className="Nav-btn">
                    <p>
                        Delete
                    </p>
                </button>
                <button className="Nav-btn">
                    <p>
                        И другая навигация
                    </p>
                </button>
            </header>
            <div className="container">
                <section className="workspace-up">
                    <button className="go-btn">
                        <p>
                            получение страницы пользователей
                        </p>
                        <form>
                            <input className="query"/>
                        </form>
                    </button>
                    <button className="go-btn">
                        <p>
                            получение одного пользователя
                        </p>
                        <form>
                            <input className="query"/>
                        </form>
                    </button>
                    <button className="go-btn">
                        <p>
                            получение диапазона пользователей
                        </p>
                        <form>
                            <input className="query"/>
                        </form>
                    </button>
                    <div className="status-block">
                            <span> Status: </span>
                            <span> 200 OK </span>
                    </div>
                </section>

                <section className="workspace-bottom">
                    <div className="data-box">
                        <Card className="card-user">

                        </Card>
                        <Card className="card-user">
                            <User id="13" firstName="Илья" secondName="Красильников" age="28" sex="male" money="-0.00"/>
                        </Card>
                        <Card className="card-user">
                            <User id="13" firstName="Илья" secondName="Красильников" age="28" sex="male" money="-0.00"/>
                        </Card>
                    </div>
                </section>
            </div>
        </div>

    );
}

export default App


