<script lang="ts">
    import { onMount } from "svelte";
    import DayInMonth from "../../componenets/DayInMonth.svelte";
    import { fly } from "svelte/transition";
    import type { LayoutData } from "./$types";

    export let data: LayoutData;

    const halfHourGap = 20;
    let windowWidth: number;
    let daysInMonth: Date[] = [];
    const realCurrentDate = new Date();
    let currentMonthNumber = realCurrentDate.getMonth();
    let currentDayNumber = realCurrentDate.getDate();
    let position = true;

    let currentMonthDate = new Date(
        realCurrentDate.getFullYear(),
        realCurrentDate.getMonth(),
        realCurrentDate.getDate()
    );
    let SelectedMonth = currentMonthDate.toLocaleString("en-EN", { month: "long" });
    let MonthLength = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 0).getDate();
    for (let i = 0; i < MonthLength; i++) {
        daysInMonth.push(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth(), i + 1));
    }

    let currentDayDate = new Date(realCurrentDate.getFullYear(), realCurrentDate.getMonth(), realCurrentDate.getDate());
    let dayAnimationMultiplier = 1;

    $: {
        const dayDifference = currentDayNumber - currentDayDate.getDate();
        dayAnimationMultiplier = dayDifference / Math.abs(dayDifference);
        dayAnimationMultiplier = dayAnimationMultiplier === 0 ? 1 : dayAnimationMultiplier;
        currentDayDate = new Date(realCurrentDate.getFullYear(), realCurrentDate.getMonth(), currentDayNumber);
    }

    $: {
        position = false;
        daysInMonth = [];
        currentMonthDate = new Date(realCurrentDate.getFullYear(), currentMonthNumber, realCurrentDate.getDate());
        SelectedMonth = currentMonthDate.toLocaleString("en-EN", { month: "long" });
        MonthLength = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 0).getDate();
        for (let i = 0; i < MonthLength; i++) {
            daysInMonth.push(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth(), i + 1));
        }
        position = true;
    }

    onMount(() => {
        windowWidth = window.innerWidth;
    });

    const events = data.events.map((value, index) => {
        const startDate = new Date(value.startTime);
        let endDate;
        if (value.endTime) endDate = new Date(value.endTime);

        // TODO UTC or NOT UTC?
        const startHour = startDate.getHours();
        const minutesBefore = startDate.getMinutes() + startHour * 60;
        const halfHoursBefore = minutesBefore / 30;
        const offset = halfHoursBefore * halfHourGap + halfHoursBefore * 2;
        let height = 0;
        //calculate the duration of the event and multiply it by the gap between half hours
        if (endDate) {
            const endHour = endDate.getHours();
            const minutesAfter = endDate.getMinutes() + endHour * 60;
            const halfHoursAfter = minutesAfter / 30;
            height = (halfHoursAfter - halfHoursBefore) * halfHourGap + (halfHoursAfter - halfHoursBefore) * 2;
        }
        return {
            ...value,
            offset,
            height: height > 0 ? height - 2 : halfHourGap,
            startDate: new Date(value.startTime),
            formattedTime: startDate.toLocaleTimeString("en-EN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            })
        };
    });

    function compareDates(date1: Date, date2: Date) {
        if (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        )
            return true;
        return false;
    }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div id="content-container">
    <div id="left-container">
        <div class="header">
            <div id="add" class="button">
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
                <button class="icon" on:click={() => currentDayNumber--}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                        />
                    </svg>
                </button>
                <span>{currentDayDate.toLocaleString("en-EN", { month: "long" })} {currentDayDate.getDate()}.</span>
                <button class="icon" on:click={() => currentDayNumber++}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        />
                    </svg>
                </button>
            </div>
            <div id="reset" class="button">
                <button class="icon" on:click={() => (currentDayNumber = realCurrentDate.getDate())}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <div id="day-container">
            {#key currentDayNumber}
                <div transition:fly={{ x: 50 * dayAnimationMultiplier, duration: 100 }} id="current-day">
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
                    <div id="event-container">
                        {#each events as event}
                            {#if compareDates(event.startDate, currentDayDate)}
                                <div class="event" style="top: {event.offset + 1}px; height: {event.height}px">
                                    <div class="data">
                                        <span>{event.formattedTime}</span>
                                        <span>{event.title}</span>
                                        <div class="desc">{event.description}</div>
                                    </div>
                                </div>
                            {/if}
                        {/each}
                    </div>
                </div>
            {/key}
        </div>
    </div>
    {#if windowWidth > 712}
        <div id="middle-container">
            <div id="month-container">
                <div class="header">
                    <div id="title"><span>{currentMonthDate.getFullYear()} - {SelectedMonth}</span></div>
                    <div id="switcher">
                        <button class="icon" on:click={() => currentMonthNumber--}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                                />
                            </svg>
                        </button>
                        <button class="icon" on:click={() => currentMonthNumber++}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="month-enclosure">
                    {#key currentMonthNumber}
                        <div transition:fly={{ x: 600, duration: 200 }} id="month">
                            {#each daysInMonth as day (day.toISOString())}
                                <DayInMonth {day} />
                            {/each}
                        </div>
                    {/key}
                </div>
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
    @import "../../assets/variables";

    #content-container {
        display: grid;
        grid-template-columns: 1fr 4fr;
        height: 100%;
        flex-grow: 10;
    }

    #left-container {
        border-right: 1px solid $foreground-color;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        .header {
            display: flex;
            padding: 5px;
            align-items: center;
            justify-content: space-between;

            .button {
                flex-grow: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
            }

            #reset {
                height: 90%;
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

        #day-container {
            position: relative;
            flex-grow: 1;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            display: flex;

            &::-webkit-scrollbar {
                width: 10px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: lighten($background-color, 10);
            }

            #current-day {
                position: relative;
                display: flex;
                flex-direction: column;
                width: 100%;

                #event-container {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    padding-left: 1%;
                    padding-right: 1%;
                    .event {
                        position: relative;
                        width: 90%;
                        left: 10%;
                        top: calc(3px + 20px);
                        background-color: $accent-color;
                        border-radius: 4px;
                        overflow: hidden;

                        .data {
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            flex-wrap: wrap;
                            padding-left: 10px;
                            padding-right: 10px;

                            .desc {
                                width: 100%;
                                text-align: center;
                            }
                        }
                    }
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
    }

    #middle-container {
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

        #month-enclosure {
            flex-grow: 1;
            position: relative;
            width: 100%;
            overflow: hidden;
        }

        #month {
            position: absolute;
            height: 100%;
            width: 100%;
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
