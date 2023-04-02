<script lang="ts">
    import DayInMonth from "../../componenets/DayInMonth.svelte";

    const halfHourGap = 20;
    let windowWidth;
    const daysInMonth: Date[] = [];
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString("en-EN", { month: "long" });
    const currentMonthLength = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    for (let i = 0; i < currentMonthLength; i++) {
        daysInMonth.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1));
    }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div id="content-container">
    <div id="left-container">
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
    {#if windowWidth > 712}
        <div id="middle-container">
            <div id="month-container">
                <div class="header">
                    <div id="title"><span>March</span></div>
                    <div id="switcher">
                        <button class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                                />
                            </svg>
                        </button>
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
                <div id="month">
                    {#each daysInMonth as day}
                        <DayInMonth {day} />
                    {/each}
                </div>
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
    @import "../../assets/variables";

    #content-container {
        display: flex;
        height: 100%;
        flex-grow: 10;
    }

    #left-container {
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

    #month-container {
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
            overflow: hidden;
            display: grid;
            grid-auto-flow: row;
            justify-content: space-between;
            flex-wrap: wrap;
            overflow-y: auto;
            padding: 15px;
            grid-gap: 15px;
            //grid-template-rows: repeat(auto-fill, 180px);
            grid-template-columns: repeat(auto-fit, 180px);

            &::-webkit-scrollbar {
                width: 10px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: lighten($background-color, 10);
            }
        }
    }

    @media only screen and (max-width: 712px) {
        #content-container {
            width: 100%;
        }
        #left-container {
            width: 100%;
        }
    }
</style>
