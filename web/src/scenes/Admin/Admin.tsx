import React, { useEffect } from "react";
import Routes from "./Routes";
import { setHeaderContent } from "../../components/Header/Header";

const Admin = () => {
	useEffect(() => {
		return setHeaderContent(<div>123</div>);
	}, []);

	return <Routes />;
};

export default Admin;
