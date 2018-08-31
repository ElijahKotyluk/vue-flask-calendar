<template>
  <div>
    <div id="header">
      <div>
        <h1>Vue Moment Calendar</h1>
      </div>
      <div>
        <current-month></current-month>
      </div>
    </div>
    <div id="days-bar">
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
      <div>Sun</div>
    </div>
    <div id="calendar">
      <div v-for="week in weeks" class="calendar-week">
          <calendar-days v-for="day in week" :day="day"></calendar-days>
      </div>
    </div>
    <event-form></event-form>
  </div>
</template>


<script>
import CalendarDays from './CalendarDays.vue';
import CurrentMonth from './CurrentMonth.vue';
import EventForm from './EventForm.vue';


  export default {
    name: 'Calendar',
    computed: {
      /* Current Month */
      month() {
        return this.$store.state.currentMonth;
      },
      /* Current Year */
      year() {
        return this.$store.state.currentYear;
      },

      // Generate days in current month.
      days() {

        /* Empty array to push days to. */
        let days = [];
        let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');

        // Push currentDay to days array until all days in the current month are pushed.
        do {
          days.push(currentDay);
          // Instance of moment that increments currentDay until all days in the current month are pushed.
          currentDay = this.$moment(currentDay).add(1, 'days');
        } while (currentDay.month() + 1 === this.month);


        // Add padding days from the end of the previous month.
        // Reset currentDay value to first day of the month.
        currentDay = this.$moment(days[0]);

        const SUNDAY = 0;
        const MONDAY = 1;

        // If statement to correctly render padding days for the month of May.
        if (currentDay.day() !== MONDAY) {
          // Unshift currentDay to days array while currentDay is not Monday.
          do {
            // Instance of moment that decrements currentDay by 1 day.
            currentDay = this.$moment(currentDay).subtract(1, 'days');
            days.unshift(currentDay);
            // 1 is Monday in the moment library.
          } while (currentDay.day() !== MONDAY);
        }


        // Add padding days from the beginning of the following month.
        // Reset currentDay value to last day of the current month.
        currentDay = this.$moment(days[days.length - 1]);

        // If statement to correctly render padding days for the month of May.
        if (currentDay.day() !== SUNDAY) {
          // Push currentDay to days array while currentDay is not Sunday.
          do {
            currentDay = this.$moment(currentDay).add(1, 'days');
            days.push(currentDay);
          // 0 is Sunday in the moment library.
        } while (currentDay.day() !== SUNDAY);
      }

        return days;
      },

      // Group days into blocks of weeks.
      weeks() {
        // Multi-dimensional array that holds week arrays.
        let weeks = [];
        // Array that holds 7 days per week.
        let week = [];

        // Push days to week array.
        for (let day of this.days) {
          week.push(day);
          // When week array holds 7 days, empty the array.
          if (week.length === 7) {
            weeks.push(week);
            week = [];
          }
        }

        return weeks;
      }
    },
    components: {
      CalendarDays,
      CurrentMonth,
      EventForm
    }
  }
</script>


<style lang="scss">
/* Variable styles */
$border-color: rgba(0, 0, 0, 1);
$day-border: 1px solid $border-color;
$padding-days: rgba(172, 252, 172, 1);
$today: rgba(218, 193, 231, 1);
$active: rgba(222, 6, 6, 1);

/* Mixins */
@mixin calendar-row() {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

@mixin calendar-cell() {
  width: 100%;
  padding: 0.5rem;
}

/* Header */
#header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem 0;
  }

  div:last-child {
    button {
      font-size: 1rem;
      padding: 0;
      width: 20px;
      background-color: rgba(255, 255, 255, 1);
      user-select: none;
      border: 1px solid rgba(110, 120, 110, 1);
      border-radius: 2px;
      margin-left: 0.25rem;
      &:focus {
        outline: none;
      }
      &:hover {
        color: rgba(27, 166, 235, 1);
        box-shadow: 0 2px 2px rgba(110, 120, 110, 1);
      }
    }
  }
}

/* List of days above calendar. */
#days-bar {
  @include calendar-row;
  div {
    @include calendar-cell;
  }
}

/* Calendar */
#calendar {
  background-color: rgba(150, 150, 150, 1);

/* Week in Calendar */
  .calendar-week {
    @include calendar-row();

/* Day in Calendar */
    .day {
      @include calendar-cell();
      overflow: hidden;
      height: 100px;
      user-select: none;
      cursor: default;
      border-left: $day-border;
      border-top: $day-border;

/* Last day in each week */
      &:last-child {
        border-right: $day-border;
      }

/* Past days */
      &.past {
        opacity: 0.6;
      }

/* Padding days for previous and next month */
      &.not-current-month {
        background-color: $padding-days;
      }

/* Current day */
      &.today {
        background-color: rgba(245, 97, 97, 1);
      }
/* Active selected day. */
      &.active {
        background-color: rgba(139, 29, 196, 1);
        color: rgba(218, 193, 231, 1);
      }
    }
/* Border for last week row. */
    &:last-child {
      .day {
        border-bottom: $day-border;
      }
    }
  }
}
</style>
