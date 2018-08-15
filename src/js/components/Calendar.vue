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
  </div>
</template>


<script>
import CalendarDays from './CalendarDays.vue';
import CurrentMonth from './CurrentMonth.vue';

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
        } while ((currentDay.month() + 1) === this.month);


        // Add padding days from the end of the previous month.
        // Reset currentDay value to first day of the month.
        currentDay = this.$moment(days[0]);

        // If statement to correctly render padding days for the month of May.
        if (currentDay.day() !== 1) {
          // Unshift currentDay to days array while currentDay is not Monday.
          do {
            // Instance of moment that decrements currentDay by 1 day.
            currentDay = this.$moment(currentDay).subtract(1, 'days');
            days.unshift(currentDay);
            // 1 is Monday in the moment library.
          } while (currentDay.day() !== 1);
        }


        // Add padding days from the beginning of the following month.
        // Reset currentDay value to last day of the current month.
        currentDay = this.$moment(days.length - 1);

        // If statement to correctly render padding days for the month of May.
        if (currentDay.day() !== 0) {
          // Push currentDay to days array while currentDay is not Sunday.
          do {
            currentDay = this.$moment(currentDay).add(1, 'days');
            days.push(currentDay);
          // 0 is Sunday in the moment library.
          } while (currentDay.day() !== 0);
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
      CurrentMonth
    }
  }
</script>


<style lang="scss">
$border-color: rgba(0, 0, 0, 1);
$day-border: 1px solid $border-color;
$padding-days: rgba(140, 145, 140, 1);
$today: rgba(218, 193, 231, 1);
$active: rgba(222, 6, 6, 1);

@mixin calendar-row() {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

@mixin calendar-cell() {
  width: 100%;
  padding: 0.5rem;
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
        color: $padding-days;
      }

/* Current day */
      &.today {
        background-color: $today;
      }
/* Active selected day. */
      &.active {
        background-color: $today;
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
