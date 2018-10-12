import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/normalize.css/normalize.css';

import Header from './components/Header';
import Statistic from './components/Statistic';
import Repos from './components/Repos';
import Footer from './components/Footer';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: 0,
            following: 0,
            publicRepos: 0,
            userSince: "N/A",
            repos: []
        }
    }
    componentDidMount() {
        // Fetch User Statistics
        fetch('https://api.github.com/users/nikelaz')
        .then(res => res.json())
        .then(res => {
            this.setState({
                followers: res.followers,
                following: res.following,
                publicRepos: res.public_repos,
                userSince: res.created_at.split('-')[0]
            });
        });

        // Fetch All Repositories
        fetch('https://api.github.com/users/nikelaz/repos')
        .then(res => res.json())
        .then(res => {
            const repos = [];
            res.forEach(node => {
                repos.push(node.name);
            });
            this.setState({repos});
        });
    }
    render() {
        const { following, followers, publicRepos, userSince, repos } = this.state;
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <Statistic description="Public Repos">{publicRepos}</Statistic>
                    <Statistic description="User Since">{userSince}</Statistic>
                    <Statistic description="following">{following}</Statistic>
                    <Statistic description="followers">{followers}</Statistic>
                </div>
                <div className="row">
                    <Repos data={repos} />
                </div>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Application />, document.getElementById('app'));