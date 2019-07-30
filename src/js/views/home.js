import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Context.Consumer>
                    <h1>Personajes</h1>
                    <table className="table table-hover table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                            </tr>
                        </thead>

                        {({ store, actions }) => {
                            if ("characters" in store) {
                                return store.characters.map((item, index) => {
                                    return (
                                        <tbody key={index}>
                                            <tr>
                                                <Link to={"/characters/" + index}>
                                                    <th scope="row" />
                                                    <td>{item.name}</td>
                                                </Link>
                                            </tr>
                                        </tbody>
                                    );
                                });
                            }
                        }}
                    </table>
                </Context.Consumer>
                <Context.Consumer>
                    {({ store, actions }) => {
                        return (
                            <div className="row">
                                <div className="col-md-6">
                                    <button
                                        className={
                                            "btn btn-success btn-block m-2 " +
                                            (store.previousCharacters == null ? "disabled" : "")
                                        }
                                        onClick={() =>
                                            actions.getFetch([
                                                {
                                                    url: store.previousCharacters,
                                                    storePlace: "characters",
                                                    nextUrl: "nextCharacters",
                                                    prevUrl: "previousCharacters"
                                                }
                                            ])
                                        }>
                                        Anterior
									</button>
                                </div>
                                <div className="col-md-6">
                                    <button
                                        className={
                                            "btn btn-success btn-block m-2" +
                                            (store.nextCharacters == null ? "disabled" : "")
                                        }
                                        onClick={() =>
                                            actions.getFetch([
                                                {
                                                    url: store.nextCharacters,
                                                    storePlace: "characters",
                                                    nextUrl: "nextCharacters",
                                                    prevUrl: "previousCharacters"
                                                }
                                            ])
                                        }>
                                        Siguiente
									</button>
                                </div>
                            </div>
                        );
                    }}
                </Context.Consumer>
            </div>
        );
    }
}
