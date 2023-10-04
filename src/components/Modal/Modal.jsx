import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
// import Image from "next/image";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { auth, db } from "../../firebase";
//INTERNAL IMPORT
import "./Modal.css";
// import images from "../../assets";

const Modal = ({ setOpenModel }) => {
	const [user, setuser] = useState({
		title: "",
		desp: "",
		day: "",
		time: "",
	});
	function uploadRemind() {
		emailjs.send("service_x61wyzw","template_lt1ya2d",{
			from_name: "the mothers app",
			to_name: "username",
			message: "congratulations on travelling 70% to motherhood!",
			to_email: "bithuntermaniac@gmail.com",
			}, "UnRnsiy96B9i1Zwje").then(function(response) {
			console.log('Email sent successfully:', response);
		}, function(error) {
			console.error('Email failed to send:', error);
		});
		db.collection("blogs")
			.doc(auth.currentUser?.uid)
			.collection("reminders")
			.add(user)
			.then(() => {
				setuser({
					title: "",
					text: "",
					tag: "",
					Date: new Date().toLocaleDateString(),
					Time: new Date().toLocaleTimeString(),
				});
				toast.success("Reminder Setted!!!");
				setTimeout(() => {
					setOpenModel(false);
				}, 2000);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	//USESTATE
	const walletMenu = ["MetaMask", "Coinbase", "Wallet", "WalletConnet"];
	return (
		<div className={"Model"}>
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				containerClassName=""
				containerStyle={{}}
				toastOptions={{
					// Define default options
					className: "",
					duration: 5000,
					style: {
						background: "#FA4C86",
						color: "#fff",
					},

					// Default options for specific types
					success: {
						duration: 3000,
						theme: {
							primary: "#FA4C86",
							secondary: "black",
						},
					},
				}}
			/>
			<div className={"Model_box"} style={{ width: "40rem" }}>
				<div className={"Model_box_heading"}>
					<p style={{ color: "#E52F8A" }}>Set a Reminder</p>
					<div
						className={"Model_box_heading_img"}
						onClick={() => setOpenModel(false)}
						style={{ cursor: "pointer" }}
					>
						<AiOutlineCloseSquare color="#E52F8A" size={50} />
					</div>
				</div>

				<div
					className={"Model_box_wallet"}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<input
						type={"text"}
						style={{
							padding: "6px 20px",
							width: "70%",
							borderRadius: "10px",
							margin: "15px",
						}}
						onChange={(e) => {
							setuser({ ...user, title: e.target.value });
						}}
						className="inp"
						placeholder="Enter Reminder Name"
					/>
					<textarea
						type={"text"}
						style={{
							padding: "6px 20px",
							width: "70%",
							borderRadius: "10px",
							margin: "15px",
						}}
						className="inp"
						onChange={(e) => {
							setuser({ ...user, desp: e.target.value });
						}}
						placeholder="Enter Description"
					/>
					<input
						type={"date"}
						style={{
							padding: "6px 20px",
							width: "70%",
							borderRadius: "10px",
							margin: "15px",
						}}
						className="inp"
						onChange={(e) => {
							setuser({ ...user, day: e.target.value });
						}}
						placeholder="Enter Reminder Name"
					/>
					<input
						type={"time"}
						style={{
							padding: "6px 20px",
							width: "70%",
							borderRadius: "10px",
							margin: "15px",
						}}
						onChange={(e) => {
							setuser({ ...user, time: e.target.value });
						}}
						className="inp"
						placeholder="Enter Reminder Name"
					/>

					<button
						style={{
							padding: "7px 20px",
							borderRadius: "7px",
							background: "#E52F8A",
							color: "white",
						}}
						onClick={uploadRemind}
					>
						Submit
					</button>
				</div>

				<p className={"Model_box_para"} style={{ textAlign: "center" }}>
					By Providing information, you agree to Shewin
					<br /> Terms of Service and consent to its Privacy Policy.
				</p>
			</div>
		</div>
	);
};

export default Modal;
