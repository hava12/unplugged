<template>
    <div>
        <div class="body-image-top">
            <img src="../../assets/bodyImageTop.png" alt="메인이미지" style="width:100%; height: 60vh">
        </div> 
        <div class="body-menu">
            <div class="body-menu-top">
                    <div class="schedule-menu">
                        <h3><a href="">Schedule</a></h3>
                        <h4><a href="/schedule/list">more</a></h4>
                    </div>
                    <div class="schedule-list">
                        <main-schedule-div class="main-schedule" :calendar='mainCalendarList[0]' />
                        <main-schedule-div class="main-schedule" :calendar='mainCalendarList[1]' />
                        <main-schedule-div class="main-schedule" :calendar='mainCalendarList[2]' />
                    </div>
            </div>
            <div class="body-menu-middle">
                    <!-- <div><a href="">회의록</a></div>
                    <div>회의록 List</div> -->
            </div>
            <div class="body-menu-bottom">
                c
            </div>
        </div>
    </div>
</template>

<script>
import MainScheduleDiv from './MainScheduleDiv.vue';

export default {
    data() {
        return {
            year: "",
            month: "",
            mainCalendarList: [],
        }
    },
  components: {
      MainScheduleDiv
  },
  methods: {
      getMainCalendar() {
          this.$axios.get(`/api/main/mainList/${this.year}/${this.month}`)
              .then((response) =>{
                  this.mainCalendarList = response.data.calendarList;
                  console.log(response.data);
              })
      } 
  },
  created(){
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      this.year = year;
      this.month = month;
      this.getMainCalendar();
  },
}
</script>

<style>
    .body-menu {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        background: rgb(255, 255, 255);
    }
    .schedule-menu {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100%;
        overflow: hidden;
        border-bottom: 1px solid #d6d6d6;
    }
    .schedule-menu > * {
        margin:1rem;
    }
    .schedule-list{
        display: flex;
    }
    .body-menu-middle {
        display: flex;
        flex-direction: column;
        height: 80vh;
    }
    .body-menu-middle div:nth-child(2) {
        flex: 1;
    }
    .body-menu-top {
        display: flex;
        flex-direction: column;
    }
</style>