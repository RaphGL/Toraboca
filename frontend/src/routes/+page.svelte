<div class="fullscreen">
	<h1>Toraboca</h1>
	<div class="login-box">
		<form>
			<label for="username">Username</label>
			<input type="text" placeholder="username" />

			<label for="password">Password</label>
			<input type="password" placeholder="password" />
			<input type="submit" value="Login" />
		</form>
		<a href="#">Forgot your password?</a>
	</div>
</div>

<style>
	.fullscreen {
		display: flex;
		height: 100vh;
		width: 100vw;
	}
	h1 {
		font-size: 4em;
		margin: auto;
	}

	.login-box {
		display: flex;
		flex-direction: column;
		gap: 1em;
		background-color: var(--bg-color2);
		border-radius: var(--rounded-border);
		width: 30%;
		height: fit-content;
		margin: auto;
		padding: 3em;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1em;

		label {
			font-weight: bold;
		}

		input {
			font-size: 1em;
			background-color: var(--bg-color1);
			border: none;
			border-radius: var(--rounded-border);
			color: inherit;
			padding: 1em;
			outline: none;
		}
	}

	input[type='submit'] {
		background-color: var(--bg-color3);
		font-weight: bold;
		padding: 0.8em;
		font-size: 1em;
	}

	a {
		color: var(--fg-color2);
		text-decoration: none;
		text-align: center;

		&:hover {
			text-decoration: underline;
		}
	}
</style>
