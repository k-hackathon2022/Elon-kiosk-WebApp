import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { useEffect, useState } from "react";
import { IGets } from "../api/menuget";
import Loading from "../components/Loading";

function convenientmenu() {
	const [data, setData] = useState<IGets>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<unknown>();
	const mock = new AxiosMockAdapter(axios, { delayResponse: 1000 });

	const RestGet = async () => {
		try {
			setError(null);
			const response = await axios.get("/gets");
			setData(response.data.content);
			setLoading(false);
		} catch (e) {
			setError(e);
		}
	};

	mock.onGet("/gets").reply(() => {
		const gets = {
			error: null,
			content: [
				{
					food_number: 1,
					food_category: "커피",
					store_id: 1004,
					food_name: "아메리카노",
					price: 3500,
					food_pic: "이미지 주소",
					food_explanation: "시원한 아메리카노",
				},
				{
					food_number: 2,
					food_category: "라떼",
					store_id: 1004,
					food_name: "카페라떼",
					price: 4000,
					food_pic: "이미지 주소",
					food_explanation: "따뜻한 카페라떼",
				},
				{
					food_number: 3,
					food_category: "티",
					store_id: 1004,
					food_name: "녹차",
					price: 3000,
					food_pic: "이미지 주소",
					food_explanation: "따듯한 녹차",
				},
			],
		};
		return [200, gets];
	});

	useEffect(() => {
		RestGet();
	}, []);

	return <>{loading ? <Loading /> : <span> isConvenientmain</span>}</>;
}

export default convenientmenu;