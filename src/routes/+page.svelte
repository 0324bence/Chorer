<script lang="ts">
    import pb from "../lib/pocketbase";
    let isRegister = false;
</script>

<div id="main-container">
    <div id="login">
        {#if isRegister}
            <h1>Register new account</h1>
            <form action="">
                <input required type="text" placeholder="Username" />
                <input required type="email" placeholder="Email" />
                <input required type="password" placeholder="Password" />
                <input type="submit" value="Register" />
            </form>
            <button class="register-switch" on:click={() => (isRegister = false)}>Log in to account</button>
        {:else}
            <h1>Log in</h1>
            <form action="">
                <input required type="text" placeholder="Username" />
                <input required type="password" placeholder="Password" />
                <input type="submit" value="Login" />
            </form>
            <button class="register-switch" on:click={() => (isRegister = true)}>Register new account</button>
        {/if}
    </div>
</div>

<style lang="scss">
    @import "../assets/variables.scss";
    #main-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        background-color: $background-color;

        #login {
            width: 400px;
            border-radius: 10px;
            border: 1px solid $foreground-color;
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            padding: 20px 0 20px 0;
            gap: 20px;

            h1 {
                color: $foreground-color;
                font-size: 4rem;
            }

            .register-switch {
                color: $foreground-color;
                width: fit-content;
                background: none;
                border: none;
                cursor: pointer;
                text-decoration: underline;
            }

            form {
                flex-grow: 1;
                width: 100%;
                display: flex;
                flex-direction: column;
                //justify-content: center;
                align-items: center;
                gap: 20px;
                color: $background-color;

                input {
                    width: 80%;
                    height: 40px;
                    border-radius: 5px;
                    border: none;
                    padding: 0 10px;
                    font-size: 1.2rem;

                    &[type="submit"] {
                        background-color: $foreground-color;
                        font-size: 1.5rem;
                        cursor: pointer;

                        &:hover {
                            background-color: darken($foreground-color, 10);
                        }
                    }
                }
            }
        }
    }
</style>
