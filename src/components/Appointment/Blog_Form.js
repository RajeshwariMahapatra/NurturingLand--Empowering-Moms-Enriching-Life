import React, { useEffect, useState } from "react";
// import "../assets/scss/components/BlogForm.scss"
import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { Toaster, toast } from "react-hot-toast";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";
import "./user.css";
import { onAuthStateChanged } from "firebase/auth";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const BlogForm = () => {
	const navigate = useNavigate();
	const userActivity = () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				// ...
			} else {
				// User is signed out
				navigate("/");
				// ...
			}
		});
	};

	useEffect(() => {
		userActivity();
	}, []);
	const [user, setuser] = useState({
		title: "",
		text: "",
		tag: "",
		Date: new Date().toLocaleDateString(),
		Time: new Date().toLocaleTimeString(),
	});

	const handleUserDoc = (e) => {
		e.preventDefault();
		const docRef = addDoc(collection(db, "AllBlogs"), {
			...user,
			name: auth.currentUser?.displayName,
		})
			.then(() => {})
			.catch((err) => {
				console.log(err);
			});

		db.collection("blogs")
			.doc(auth.currentUser?.uid)
			.collection("blog")
			.add(user)
			.then(() => {
				toast.success("Blog published!!!");
				setuser({
					title: "",
					text: "",
					tag: "",
					Date: new Date().toLocaleDateString(),
					Time: new Date().toLocaleTimeString(),
				});
				navigate("/dashboard");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div
				className="main-user"
				style={{ paddingTop: "50px", paddingBottom: "50px" }}
			>
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
							background: "#9738a4",
							color: "#fff",
						},

						// Default options for specific types
						success: {
							duration: 3000,
							theme: {
								primary: "#9738a4",
								secondary: "black",
							},
						},
					}}
				/>
				<div
					className="container"
					style={{
						background: "#8A4F92",
						padding: "20px 20px",
						borderRadius: "15px",
					}}
				>
					<Link to={"/dashboard"}>
						<button
							style={{
								padding: "7px 20px",
								background: "white",
								color: "#8A4F92",
								fontWeight: "600",
								borderRadius: "10px",
								cursor: "pointer",
							}}
						>
							<KeyboardBackspaceIcon />{" "}
							<span style={{ marginLeft: "4px" }}>Back</span>
						</button>
					</Link>
					<div className="card" style={{ width: "45rem" }}>
						<div className="card-image1">
							<h2 className="card-heading">
								Get started with
								<small>Write Your First Post!!</small>
							</h2>
						</div>
						<form className="card-form" onSubmit={handleUserDoc}>
							<div className="input">
								<input
									type="text"
									className="input-field"
									onChange={(e) => {
										setuser({ ...user, title: e.target.value });
									}}
									required
								/>
								<label className="input-label">Title</label>
							</div>
							<div className="input">
								<textarea
									rows={2}
									cols={3}
									className="input-field"
									onChange={(e) => {
										setuser({ ...user, text: e.target.value });
									}}
									required
								/>
								<label className="input-label">Write your post</label>
							</div>
							<div className="input">
								<input
									type="text"
									onChange={(e) => {
										setuser({ ...user, tag: e.target.value });
									}}
									className="input-field"
									required
								/>
								<label className="input-label">Write Appropiate Tags</label>
							</div>
							<div className="action">
								<button className="action-button" type="submit" onClick={handleUserDoc}>
									Publish
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogForm;
