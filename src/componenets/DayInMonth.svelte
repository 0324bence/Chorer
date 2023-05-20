<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import compareDates from "../lib/CompareDates";

    interface Event {
        title: string;
        formattedTime: string;
    }
    export let day: Date;
    export let events: Array<Event>;

    const dispatcher = createEventDispatcher();

    function handleClick() {
        dispatcher("dayClicked", day);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="day {compareDates(new Date(), day) ? 'today' : ''}" on:click={() => handleClick()}>
    <div class="day-header">
        <span>{day.toLocaleString("en-EN", { month: "long", day: "numeric" })}.</span>
        <span>{day.toLocaleString("en-En", { weekday: "long" })}</span>
    </div>
    <div class="events">
        {#each events as event}
            <div class="event">
                <span class="time">{event.formattedTime}</span>
                <span class="title">{event.title}</span>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    @import "../assets/variables.scss";
    .day {
        border: 1px solid $foreground-color;
        width: 180px;
        height: 180px;
        border-radius: 5px;
        transition: background-color 0.1s linear;

        &:hover {
            cursor: pointer;
            background-color: lighten($background-color, 10);
        }

        &.today .day-header {
            background-color: lighten($accent-color, 10);
        }

        .day-header {
            cursor: pointer;
            color: inherit;
            outline: none;
            border: none;
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

            &:hover {
                background-color: lighten($background-color, 40);
            }

            &:focus {
                background-color: lighten($background-color, 40);
            }
        }

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
    }
</style>
