<div id="month-container">
    <div class="header">
        <div id="title"><span>March</span></div>
        <div id="switcher">
            <button class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                    /></svg
                >
            </button>
            <button class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    /></svg
                >
            </button>
        </div>
    </div>
    <div id="month">
        <div class="day">
            <div class="day-header">
                <span>March 1st</span>
                <span>Wednesday</span>
            </div>
            <div class="events">
                <div class="event">
                    <span class="time">15:00</span>
                    <span class="title">Event title</span>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../assets/variables.scss";
    #month-container {
        height: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        .header {
            position: relative;
            display: flex;
            align-items: center;
            font-size: 2.5rem;

            #title {
                flex-grow: 10;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
            }

            #switcher {
                flex-grow: 1;
                display: flex;
                align-items: center;
                justify-content: space-around;
                height: 100%;
                font-size: 1.2rem;

                .icon {
                    height: 100%;
                    aspect-ratio: 1 / 1;
                    padding: 5px;
                    background: none;
                    border: none;
                    outline: none;
                    cursor: pointer;

                    svg {
                        fill: $foreground-color;
                        height: 100%;
                    }
                }
            }
        }

        #month {
            flex-grow: 1;
            display: flex;
            overflow-y: auto;
            padding: 10px;

            .events {
                display: flex;
                flex-direction: column;
                align-items: stretch;
                gap: 5px;
                padding: 5px;

                .event {
                    width: 100%;
                    font-size: 1.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    background-color: $accent-color;
                    border-radius: 5px;
                }
            }

            &::-webkit-scrollbar {
                width: 10px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: lighten($background-color, 10);
            }

            .day {
                border: 1px solid $foreground-color;
                width: 180px;
                height: 180px;
                border-radius: 5px;

                .day-header {
                    width: 100%;
                    height: 50px;
                    background-color: lighten($background-color, 25);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.2rem;
                    border-bottom: 1px solid $foreground-color;
                    border-radius: 5px 5px 0 0;
                }
            }
        }
    }
</style>
