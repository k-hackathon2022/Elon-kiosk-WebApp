import styled from "@emotion/styled";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import ConvenientButton from "../components/ConvenientButton";
import ConvenientLayout from "../components/ConvenientLayout";
import ConvenientTitle from "../components/ConvenientTitle";

const Menu = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	//gap: 5px;
`;

const Home = () => {
	const navigate = useNavigate();
	const { storeid } = useParams();

	useEffect(() => {
		if (storeid !== undefined) {
			sessionStorage.setItem("storeid", storeid);
		}
	}, []);

	return (
		<>
			<ConvenientLayout>
				<ConvenientTitle>
					<span>
						주문을하는 데 도움이 필요하거나 큰 글씨로 봐야 하는 노약자 혹은
						장애인인가요?
					</span>
				</ConvenientTitle>
				<Menu>
					<ConvenientButton
						color="green"
						oper={() => {
							sessionStorage.setItem("isConvenient", "yes");
							navigate("/convenientmode");
						}}
					>
						<span>예</span>
					</ConvenientButton>
					<ConvenientButton
						color="red"
						oper={() => {
							sessionStorage.setItem("isConvenient", "no");
							navigate("/normalmode");
						}}
					>
						<span>아니요</span>
					</ConvenientButton>
				</Menu>
			</ConvenientLayout>
		</>
	);
};

export default Home;
