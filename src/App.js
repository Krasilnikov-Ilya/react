import './App.css';
import User from "./utils/User";
import Card from 'react-bootstrap/Card';
import React from "react";
import GetUser from "./utils/getUser";

function App() {

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
                            <GetUser/>
                        </Card>
                        <Card className="card-user">
                            <GetUser/>
                        </Card>
                        <Card className="card-user">
                            <GetUser/>
                        </Card>
                    </div>
                </section>
            </div>
        </div>

    );
}

export default App


