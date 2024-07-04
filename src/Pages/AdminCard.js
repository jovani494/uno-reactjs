import { Component } from "react";
import ListCard from "../Components/Admin-card/ListCard";
import AddCard from "../Components/Admin-card/AddCard";
import "./css/AdminCard.css";

export default class AdminCard extends Component{
    render(){
        return(
            <div className="admin-card">
                <AddCard />
                <ListCard />
            </div>
        )
    }
}