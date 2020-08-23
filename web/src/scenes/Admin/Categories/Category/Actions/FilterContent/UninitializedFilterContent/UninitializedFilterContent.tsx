import React from "react";
import { Button, Spin } from "antd";
import { useInitializeCategoryFilterMutation } from "../../../../../../../generated/graphql";
import { useParams } from "react-router";

const UninitializedFilterContent = () => {
	const [
		initializeCategoryFilter,
		{ loading }
	] = useInitializeCategoryFilterMutation({
		variables: {
			categoryId: +(useParams() as any).id
		}
	});

	const onClickInitialize = async () => {
		try {
			const {} = await initializeCategoryFilter();
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<>
			<Spin spinning={loading}>
				<Button type="primary" size="large" onClick={onClickInitialize}>
					Initialize filter
				</Button>
			</Spin>
		</>
	);
};

export default UninitializedFilterContent;
