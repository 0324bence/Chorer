<div id="main-container">
    <div id="current-day-container">
        <div class="header">a</div>
        <div id="current-day">a</div>
    </div>
    <div id="month-container">a</div>
    <div id="sidebar">a</div>
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
            height: 40px;
        }

        #current-day {
            flex-grow: 1;
        }
    }
    #month-container {
        flex-grow: 4;
        border-right: 1px solid $foreground-color;
    }
    #sidebar {
        width: 100px;
    }

    .header {
        width: 100%;
        border-bottom: 1px solid $foreground-color;
    }
</style>
