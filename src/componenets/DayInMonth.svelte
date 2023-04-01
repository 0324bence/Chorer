<script lang="ts">
    export let day: Date;
</script>

<div class="day">
    <div class="day-header">
        <span>{day.toLocaleString("en-EN", { month: "long", day: "numeric" })}.</span>
        <span>{day.toLocaleString("en-En", { weekday: "long" })}</span>
    </div>
    <div class="events">
        <div class="event">
            <span class="time">15:00</span>
            <span class="title">Event title</span>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../assets/variables.scss";
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
