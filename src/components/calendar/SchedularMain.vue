<template>

  <div class="body-menu">
    <calendar-modal v-on:closeModal="closeModal()" 
        :modalType="this.modalType" 
        :modalDate="this.modalDate"
        :calendar="this.calendar"
        :class="['modal', {activeBlock : modalActiveYn}]" />
    
    <div id="calendar-wrap">
        <header>
            <h2>{{year}}</h2>
            <h1>
                <a style="cursor: pointer;" 
                    @click="goLastMonth(`${month}`)">&lt;
                </a> 
                {{month+1}} 
                <a style="cursor: pointer;" 
                    @click="goNextMonth(`${month}`)">&gt;
                </a>
            </h1>
        </header>


        <div id="calendar">
            <ul class="weekdays">
                <li class="weekend">Sunday</li>
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
            </ul>
            <!-- Days from previous month -->
            <ul v-for="calendarLengthIndex in calendarLength" :key="calendarLengthIndex" class="days">
                <template v-if="calendarLengthIndex == 1">
                    <li v-for="i in firstDayOfWeek" :key="i" class="day other-month">
                    </li>
                    <template v-for="j in 7" > 
                        <li v-if="j > firstDayOfWeek" :key="j" class="day">
                            <div class="date">{{j-firstDayOfWeek}} </div>
                            
                            <a class="addCalendarBtn" @click="addCalendar(`${j-firstDayOfWeek}`)">+</a>

                            <div v-if="calendarList[j-firstDayOfWeek-1][0] != null" 
                                class="event"
                                @click="getCalendarDetail(calendarList[j-firstDayOfWeek-1][0].calSeq)">
                                <div class="event-desc">
                                    {{calendarList[j-firstDayOfWeek-1][0].calSubject}}
                                </div>
                                <div class="event-time">
                                    {{calendarList[j-firstDayOfWeek-1][0].calTime}}
                                </div>
                            </div>              
                        </li>
                    </template>
                </template>
                <template v-else>
                    <template v-for="j in 7"> 
                        <li v-if="7 * (calendarLengthIndex-1) + j - firstDayOfWeek <= lastDayOfMonth" :key="j" class="day">
                            <div class="date">{{7 * (calendarLengthIndex-1) - firstDayOfWeek + j}}</div>
                            <a class="addCalendarBtn" @click="addCalendar(`${7 * (calendarLengthIndex-1) - firstDayOfWeek + j}`)">+</a>

                            <div v-if="calendarList[7 * (calendarLengthIndex-1) - firstDayOfWeek + j-1][0] != null" 
                                class="event"
                                @click="getCalendarDetail(calendarList[7 * (calendarLengthIndex-1) - firstDayOfWeek + j-1][0])">
                                <div class="event-desc">
                                    {{calendarList[7 * (calendarLengthIndex-1) - firstDayOfWeek + j-1][0].calSubject}}
                                </div>
                                <div class="event-time">
                                    {{calendarList[7 * (calendarLengthIndex-1) - firstDayOfWeek + j-1][0].calTime}}
                                </div>
                            </div>                
                        </li>
                        <li v-else :key="j" class="day other-month">
                        </li>
                    </template>
                </template>
            </ul>
        </div><!-- /. calendar -->
    </div><!-- /. wrap -->
</div>
</template>

<script>
import CalendarModal from './CalendarModal.vue'
export default {
    data() {
        return {
            year: "",
            month: "",
            calendarList: [],
            calendar: null,
            ci: 0,
            firstDayOfWeek: null,
            lastDayOfMonth: null,
            calendarLength: null,
            modalActiveYn: false,
            modalDate: "",
            modalType: "",
        }
    },
    components:{
        CalendarModal
    },
    created() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        this.year = year;
        this.month = month;
        this.getCalendarList();
    },
    methods: {
        getCalendarList(){
            this.$axios.get(`/api/calendarList/${this.year}/${this.month}`)
                .then((response) => {
                    this.calendarList = response.data.calendarList;
                    this.firstDayOfWeek = response.data.firstDayOfWeek;
                    this.lastDayOfMonth = response.data.lastDayOfMonth;
                    this.calendarLength = Math.ceil((this.firstDayOfWeek - 1 + this.lastDayOfMonth)/7);
                })
        }
        ,
        goLastMonth(month) {
            if(month == 0){
                this.month = 11;
                this.year = this.year - 1;
            } else {
                this.month = parseInt(month) - 1 ;
            }
            this.getCalendarList();
        },
        goNextMonth(month) {
            if(month == 11){
                this.month = 0;
                this.year = this.year + 1;
            } else {
                this.month = parseInt(month) + 1 ;
            }    
            this.getCalendarList();
        },
        addCalendar(calDate){
            this.modalActiveYn = true;
            this.modalType =  'put'
            this.modalDate = this.year + ((this.month + 1) + '').padStart(2,'0') + calDate.padStart(2,'0')
        },
        closeModal(){
            this.modalActiveYn = false;
        },
        getCalendarDetail(calendar) {
            this.calendar = calendar;
            this.modalType =  'get'
            this.modalActiveYn = true;
        }
    }
}
</script>

<style>
    .addCalendarBtn {
        font-size: 1.3rem;
        font-style: bold;
        float: right;
        cursor: pointer;
        display: none;
    }
    .addCalendarBtn::after{
        float: none;
    }
    #calendar .day:hover .addCalendarBtn {
        display: inline;
    }
    header {
        text-align: center;
    }
    #calendar {
        width: 100%;
        font-size: 1rem;
    }
    #calendar a {
        color: #000000;
        text-decoration: none;
    }
    #calendar ul {
        padding: 0;
        margin: 0;
        width: 100%;
        display: flex;
    }
    #calendar li {
        width: 14.342%;
        padding: 5px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        margin-right: -1px;
        margin-bottom: -1px;
    }
    #calendar ul.weekdays {
        height: 40px;
        background: #ffffff;
    }
    #calendar ul.weekdays li {
        text-align: center;
        text-transform: uppercase;
        line-height: 20px;
        border: none !important;
        padding: 10px 6px;
        color: black;
        font-size: 0.8rem;
    }
    #calendar ul.weekdays li:nth-child(1) {
        color: red;

    }
    #calendar .days li {
        height: 180px;
    }
    #calendar .days li:hover {
        background: #d3d3d3;
    }
    #calendar .date {
        display: inline-block;
        text-align: center;
        margin-bottom: 5px;
        padding: 4px;
        background: #333;
        color: #fff;
        width: 10px;
        border-radius: 50%;
        font-size: 0.55rem;
    }
    #calendar .event {
        clear: both;
        cursor: pointer;
        display: block;
        font-size: 0.8rem;
        border-radius: 4px;
        padding: 5px;
        margin-top: 40px;
        margin-bottom: 5px;
        line-height: 14px;
        background: #c8cece;
        border: 1px solid #c8cece;
        color: black;
        text-decoration: none;
    }
    #calendar .event-desc {
        color: black;
        margin: 3px 0 7px 0;
        text-decoration: none;
    }
    #calendar .other-month {
        background: #f5f5f5;
        color: #666;
    }
    
    /* ============================
                Mobile Responsiveness
    ============================*/
    @media (max-width: 768px) {
        #calendar .weekdays, #calendar .other-month {
            display: none;
        }

        #calendar ul {
            flex-direction: column;
        }
        #calendar li {
            height: auto !important;
            border: 1px solid #ededed;
            width: 100%;
            padding: 10px;
            margin-bottom: -1px;
        }
    }
</style>