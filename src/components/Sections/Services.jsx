import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/child_vaccine.jpg";
import AddImage2 from "../../assets/img/add/pregnant.jpeg";
import AddImage3 from "../../assets/img/add/vaccine.jpeg";
import AddImage4 from "../../assets/img/add/yoga.jpg";
import { Link } from "react-router-dom";

export default function Services() {
	return (
		<Wrapper id="services">
			{/* <div className="lightBg" style={{ padding: "50px 0" }}>
				<div className="container">
					<ClientSlider />
				</div>
			</div> */}
			<div className="whiteBg" style={{ padding: "60px 0" }}>
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Our Helpful Services</h1>
						<p className="font13">
						We stand out as an integrated platform dedicated to providing comprehensive healthcare solutions for mothers and children worldwide.
						<br />
						Our platform addresses the critical healthcare needs of mothers and children, making a difference in the lives of disadvantaged and vulnerable families.
							
							<br />
							We are committed to ensuring that maternal and child health is accessible to all, regardless of their circumstances.
						</p>
					</HeaderInfo>
					<ServiceBoxRow className="flex">
						<ServiceBoxWrapper>
							<ServiceBox
								icon="roller"
								title="Explore Maternal & Child Health Blogs"
								subtitle="Join the conversation on vital maternal and child health topics. Read our blogs for valuable insights and feel free to contribute. Visit our blogs section now."
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="monitor"
								title="Vaccination Tracker"
								subtitle="Our Vaccination Tracker offers a 3-month schedule for your child's vaccinations, allowing you to plan ahead effectively. "
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="browser"
								title="Get Notified"
								subtitle="Our notification system ensures that you never miss a crucial vaccination date for your child. We'll send you timely  reminders to keep you informed and help you prioritize your child's health. Stay on top of your child's vaccination schedule with our helpful notifications."
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
<<<<<<< Updated upstream
								icon="printer"
								title="Nutrition Tracker for Parents and Children"
								subtitle="Track nutrition for both parents and children aged 0-5 years. Get personalized guidance for a healthy family."
=======
								icon="apple"
								title="Easy doctor's appointment"
								subtitle="We use google maps to get the gynaecologist's location incase of severe period pain or other problems. Select the nearest gynae location and book an appointment with a form."
>>>>>>> Stashed changes
							/>
						</ServiceBoxWrapper>
					</ServiceBoxRow>
				</div>
				<div className="lightBg">
					<div className="container">
						<Advertising className="flexSpaceCenter">
							<AddLeft>
								<h4 className="font15 semiBold">
									Share your stories through us to the world
								</h4>
								<h2 className="font40 extraBold">Let's Break the Silence on Maternal and Child Health</h2>
								<p className="font12">
								
Sign up and start contributing your own blogs on maternal and child health. we respect your privacy, so you can choose to remain anonymous or privately share your story with us
								</p>
								<ButtonsRow
									className="flexNullCenter"
									style={{ margin: "30px 0" }}
								>
									<div style={{ width: "190px" }}>
										<Link to="/login">
											<FullButton title="Share the world" />
										</Link>
									</div>
									<div style={{ width: "190px", marginLeft: "15px" }}>
										<Link to= "/contact">
											<FullButton title="Share only to Us" border />
										</Link>
									</div>
								</ButtonsRow>
							</AddLeft>
							<AddRight>
								<AddRightInner>
									<div className="flexNullCenter">
										<AddImgWrapp1 className="flexCenter">
											<img
												src={AddImage1}
												
												alt="Stop_the_Stigma"
											/>
										</AddImgWrapp1>
										<AddImgWrapp2>
											<img
												src={AddImage3}
												
												alt="Girl_power"
											/>
										</AddImgWrapp2>
									</div>
									<div className="flexNullCenter">
										<AddImgWrapp3>
											<img
												src={
													AddImage2
												}
												alt="Stop_the_Stigma"
											/>
										</AddImgWrapp3>
										<AddImgWrapp4>
											<img
												src={
													AddImage4
												}
												alt="Stop_the_Stigma"
											/>
										</AddImgWrapp4>
									</div>
								</AddRightInner>
							</AddRight>
						</Advertising>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;
const ServiceBoxRow = styled.div`
	@media (max-width: 860px) {
		flex-direction: column;
	}
`;
const ServiceBoxWrapper = styled.div`
	width: 20%;
	margin-right: 5%;
	padding: 80px 0;
	@media (max-width: 860px) {
		width: 100%;
		text-align: center;
		padding: 40px 0;
	}
`;
const HeaderInfo = styled.div`
	@media (max-width: 860px) {
		text-align: center;
	}
`;
const Advertising = styled.div`
	margin: 80px 0;
	padding: 100px 0;
	position: relative;
	@media (max-width: 1160px) {
		padding: 100px 0 40px 0;
	}
	@media (max-width: 860px) {
		flex-direction: column;
		padding: 0 0 30px 0;
		margin: 80px 0 0px 0;
	}
`;
const ButtonsRow = styled.div`
	@media (max-width: 860px) {
		justify-content: space-between;
	}
`;
const AddLeft = styled.div`
	width: 50%;
	p {
		max-width: 475px;
	}
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
		text-align: center;
		h2 {
			line-height: 3rem;
			margin: 15px 0;
		}
		p {
			margin: 0 auto;
		}
	}
`;
const AddRight = styled.div`
	width: 50%;
	position: absolute;
	top: -70px;
	right: 0;
	@media (max-width: 860px) {
		width: 80%;
		position: relative;
		order: 1;
		top: -40px;
	}
`;
const AddRightInner = styled.div`
	width: 100%;
`;
const AddImgWrapp1 = styled.div`
	width: 48%;
	margin: 0 6% 10px 6%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
const AddImgWrapp2 = styled.div`
	width: 30%;
	margin: 0 5% 10px 5%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
const AddImgWrapp3 = styled.div`
	width: 20%;
	margin-left: 40%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
const AddImgWrapp4 = styled.div`
	width: 30%;
	margin: 0 5%auto;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
