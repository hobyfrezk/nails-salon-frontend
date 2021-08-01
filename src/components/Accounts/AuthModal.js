import LoginModal from "components/Accounts/LoginModal";
import SignUpModal from "components/Accounts/SignUpModal";

const AuthModal = ({ open, type, handleClose, loginState, signUpState }) => {
	if (type === "login") {
		return (
			<LoginModal
				open={open}
				handleClose={handleClose}
				signUpState={signUpState}
			/>
		);
	}
	if (type === "signup") {
		return (
			<SignUpModal
				open={open}
				handleModalClose={handleClose}
				loginState={loginState}
			/>
		);
	}
};

export default AuthModal;
