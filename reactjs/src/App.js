import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostForm from './PostForm';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTable: []
        }
    }

    //call api and set data from api to datatable
    componentDidMount() {
        const apiUrl = "https://jsonplaceholder.typicode.com/posts";
        let context = this;
        fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (posts) {
                context.setState({
                    dataTable: posts
                })
            });
    }

    render() {
        return (
            <div className="App">
                <div style={{ maxHeight: "500px", overflow: "auto" }}>
                    <table border="1">
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                        {

                            this.state.dataTable.length !== 0 ?
                                this.state.dataTable.map(function (item, index) {
                                    return (
                                        <tr key={index}>
                                            <td>{item.userId}</td>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.body}</td>
                                        </tr>
                                    );
                                }) : null
                        }
                    </table>
                </div>
                <PostForm                    
                    options={{
                        //recive data from child class is title and body, and push data to datatable
                        onSubmit: (data) => {
                            console.log(data);
                            let dataTable = this.state.dataTable;
                            var largest = dataTable.reduce(function(x,y) {
                                return (x.id > y.id) ? x.id : y.id;
                            });
                            console.log(largest);

                            dataTable.push({
                                userId: 112,
                                id: largest + 1,
                                ...data
                            });
                            this.setState({
                                dataTable
                            })
                        }
                    }}
                />
            </div>
        );
    }
}
export default App;
