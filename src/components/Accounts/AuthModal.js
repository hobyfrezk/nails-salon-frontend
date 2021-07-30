import LoginModal from "components/Accounts/LoginModal";
import SignUpModal from "components/Accounts/SignUpModal";

const AuthModal = ({ open, type, handleClose, loginState, signUpState, setAuthState }) => {
	if (type === "login") {
		return (
			<LoginModal
				open={open}
				handleClose={handleClose}
				signUpState={signUpState}
				setAuthState={setAuthState}
			/>
		);
	}
	if (type === "signup") {
		return (
			<SignUpModal
				open={open}
				handleModalClose={handleClose}
				loginState={loginState}
				setAuthState={setAuthState}
			/>
		);
	}
};

export default AuthModal;
