import React from "react";
import Pagination from "./Pagination";

class ListWithPagination extends React.Component {
	state = {
		currentPage: 1,
		postsPerPage: 3,
	};

	paginate = pageNumber => this.setState({ currentPage: pageNumber });

	componentDidUpdate(prevProps) {
		if (this.props.list !== prevProps.list) {
			this.setState({ currentPage: 1 });
		}
	}

	render() {
		const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
		const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
		const currentPosts = this.props.list.slice(
			indexOfFirstPost,
			indexOfLastPost
		);

		return (
			<div>
				<ul className={"WhoWeHelp__list"}>
					{currentPosts.map((el, index) => (
						<li key={index}>
							<h4 className={"WhoWeHelp__name"}>{el.name}</h4>
							<p className={"WhoWeHelp__description"}>{el.description}</p>
							<div className={"WhoWeHelp__objective"}>{el.objective}</div>
						</li>
					))}
				</ul>
				<Pagination
					postPerPage={this.state.postsPerPage}
					totalPost={this.props.list.length}
					paginate={this.paginate}
				/>
			</div>
		);
	}
}

export default ListWithPagination;
