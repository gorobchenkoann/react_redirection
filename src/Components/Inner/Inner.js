import React from 'react';
import { Link } from 'react-router-dom';

export class Inner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    // componentDidMount() {
    //     this.getName();
    // }

    // getName () {
    //     fetch('/api/inner')
    //     .then(res => res.json())
    //     .then(name => this.setState({ name }))
    // }

    render() {
        const name = this.state.name;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <Link to="/">Home Page</Link>
            </div>
        )
    }
}