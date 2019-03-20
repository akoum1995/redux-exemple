import React ,{Component}from "react";
import { connect } from "react-redux";


class List extends Component {
constructor(){
super();
this.state = {
    articles:[],
}
}
    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.articles.map((el,i) => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>)
    }
}
function mapStateToProps(state){
    return { articles: state.articles };
};

export default connect(mapStateToProps)(List);