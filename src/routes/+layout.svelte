<script lang="ts">
    const halfHourGap = 20;
</script>

<div id="main-container">
    <div id="current-day-container">
        <div class="header">
            <div id="add">
                <button class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                        />
                    </svg>
                </button>
            </div>
            <div id="day-switcher">
                <button class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                        />
                    </svg>
                </button>
                <span>March 15th</span>
                <button class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <div id="current-day">
            {#each Array(24) as k, i}
                <div class="day" style="gap: {halfHourGap}px">
                    <hr class="hidden" />
                    <div class="dashed" />
                    <div class="numline">
                        <span>{i + 1}</span>
                        <hr />
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <div id="middle-container">
        <slot />
    </div>
    <div id="sidebar">
        <div id="profile-pic">
            <span>D</span>
            <span>B</span>
        </div>
        <div id="friends" class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
                />
            </svg>
        </div>
        <div id="groups" class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"
                />
            </svg>
        </div>
        <div id="settings" class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                />
            </svg>
        </div>
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

    #current-day-container {
        flex-grow: 1;
        border-right: 1px solid $foreground-color;
        display: flex;
        flex-direction: column;

        .header {
            display: flex;
            padding: 5px;
            align-items: center;
            justify-content: space-between;

            #add {
                flex-grow: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
            }

            #day-switcher {
                height: 100%;
                flex-grow: 4;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                font-size: 1.5rem;
            }

            .icon {
                height: 100%;
                aspect-ratio: 1 / 1;
                padding: 5px;
                background: none;
                border: none;
                outline: none;
                cursor: pointer;
                display: grid;
                place-items: center;

                svg {
                    fill: $foreground-color;
                    height: 100%;
                }
            }
        }

        #current-day {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            overflow-y: auto;

            &::-webkit-scrollbar {
                width: 10px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: lighten($background-color, 10);
            }

            .day {
                flex-grow: 1;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-left: 1%;
                padding-right: 1%;

                hr {
                    border-color: $foreground-color;
                    width: 100%;
                }

                .hidden {
                    visibility: hidden;
                }

                .dashed {
                    height: 1px;
                    background: repeating-linear-gradient(
                        to right,
                        transparent,
                        transparent 5px,
                        $foreground-color 5px,
                        $foreground-color 10px
                    );
                }

                .numline {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    height: 1px;

                    hr {
                        flex-grow: 1;
                    }
                }
            }
        }
    }

    #middle-container {
        flex-grow: 9;
        height: 100%;
        border-right: 1px solid $foreground-color;
    }

    #sidebar {
        width: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 15px;

        .icon {
            width: 100%;
            aspect-ratio: 1 / 1;
            fill: $foreground-color;
            display: grid;
            padding: 5px;
            place-items: center;
        }

        #profile-pic {
            width: 100%;
            aspect-ratio: 1 / 1;
            border-radius: 50%;
            background-color: lighten($background-color, 20);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2px;
        }

        #settings {
            margin-top: auto;
        }
    }

    :global(.header) {
        width: 100%;
        border-bottom: 1px solid $foreground-color;

        height: 60px;
        min-height: 60px;
    }
</style>
