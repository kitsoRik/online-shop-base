import React from "react";
import { Card, Typography } from "antd";
import Meta from "antd/lib/card/Meta";

interface Props {
	title: string;
	price: number;
	photoUrl?: string;
}

const ProductCard = ({
	title,
	price,
	photoUrl = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
}: Props) => {
	return (
		<Card
			hoverable
			style={{ width: 240 }}
			cover={<img alt="Photo" src={photoUrl} />}
		>
			<Meta
				title={<Typography.Title>{title}</Typography.Title>}
				description={price}
			/>
		</Card>
	);
};

export default ProductCard;
