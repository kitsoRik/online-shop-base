import React from "react";
import { useCurrentUserQuery } from "../../../generated/graphql";
import { Button } from "antd";
import { Link } from "react-router-dom";

const User = () => {
	const { data, loading } = useCurrentUserQuery();

	if (loading) return <div>Loading...</div>;

	if (data?.currentUser) {
		return <span>{data.currentUser.email}</span>;
	}

	return (
		<div>
			<Button>
				<Link to="/login">Log in</Link>
			</Button>
		</div>
	);
};

export default User;
