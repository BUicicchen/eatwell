import Head from "next/head";
import * as ui from "@material-ui/core";
import Button from '@material-ui/core/Button'

const useStyles = ui.makeStyles((theme) => ({
	heading: {
		color: "red",
	},
	avatar: {
		height: theme.spacing(13),
		width: theme.spacing(13),
		margin: "auto",
	},
	btn: {
		width: "8rem",
		display: "block",
		margin: "auto",
		textAlign: "center",
		marginTop: "1rem"
	}


}));

export default function userAuth() {
	const classes = useStyles();

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className={classes.heading}>User Profile Page</h1>
			<ui.Avatar
				src="https://pbs.twimg.com/profile_images/988263662761775104/Bu1EDlWo.jpg"
				alt="profile pic"
				className={classes.avatar}
			/>

<Button
  variant="contained"
  component="label"
  className={classes.btn}
>
  Upload File
  <input
    type="file"
    style={{ display: "none" }}
  />
</Button>

		</div>
	);
}
