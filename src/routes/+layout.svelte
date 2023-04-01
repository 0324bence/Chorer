<div id="main-container">
    <div id="left-container">
        <slot />
    </div>
    <div id="sidebar">
        <div id="profile-pic">
            <span>D</span>
            <span>B</span>
        </div>
        <div id="home" class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                    d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
            </svg>
            <span>Home</span>
        </div>
        <div id="people" class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
                />
            </svg>
            <span>People</span>
        </div>
        <!--<div id="settings" class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                &lt;!&ndash;! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. &ndash;&gt;
                <path
                    d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                />
            </svg>
        </div>-->
    </div>
</div>

<style lang="scss">
    @import "../assets/variables.scss";

    #main-container {
        background-color: $background-color;
        color: $foreground-color;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: stretch;
    }

    #left-container {
        flex-grow: 10;
        height: 100%;
    }

    #sidebar {
        width: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 15px;

        .icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            aspect-ratio: 1 / 1;
            fill: $foreground-color;
            padding: 5px;

            svg {
                height: 100%;
                aspect-ratio: 1 / 1;
            }
        }

        #profile-pic {
            width: 105%;
            aspect-ratio: 1 / 1;
            border-radius: 50%;
            background-color: lighten($background-color, 20);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2px;
        }

        /*#settings {
            margin-top: auto;
        }*/
    }

    @media only screen and (max-width: 712px) {
        #main-container {
            flex-direction: column;
            width: 100%;
            min-height: 100vh;
        }
        #sidebar {
            border-radius: 5px 5px 0 0;
            height: 100px;
            width: 100%;
            flex-direction: row-reverse;
            justify-content: space-around;
            background-color: lighten($background-color, 30);

            .icon {
                height: 100%;
                width: auto;
                aspect-ratio: 1 / 1;
                fill: $foreground-color;
                display: grid;
                padding: 5px;
                place-items: center;
            }

            #profile-pic {
                height: 90%;
                width: auto;
                aspect-ratio: 1 / 1;
                border-radius: 50%;
                background-color: lighten($background-color, 20);
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2px;
            }
        }
        #left-container {
            height: auto;
            overflow: hidden;
        }
    }

    :global(.header) {
        width: 100%;
        border-bottom: 1px solid $foreground-color;

        height: 60px;
        min-height: 60px;
    }
</style>
