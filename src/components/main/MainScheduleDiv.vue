<template>
    <div v-if="calendar != null" class="schedule">
        <div>주제 - {{calendar.calSubject}}</div>
        <div>일시 - {{calendar.calDate}} / {{calendar.calTime}}</div>
        <div>내용 - {{calendar.calContent}}</div>
    </div>
    <div v-else class="schedule">
        <div></div>
        <div>일정이 없습니다</div>
        <div></div>
    </div>
</template>

<script>
export default {
    props: {
        calendar: Object,
    }
}
</script>

<style>
    .schedule {
        margin: 0.5rem;
        font-size: 1rem;
        /* border: 4px solid rgb(162, 156, 156); */
        flex:1;
        display: flex;
        flex-direction: column;
        height: 100%;
        text-align: center;
    }
    .schedule div {
        margin: 0.8rem ;
        font-weight: bold;
        /* border-bottom: 1px solid rgb(0, 0, 0); */
        /* flex:1; */
    }
    .schedule div:nth-child(1) {
        flex: 1;
    }
    .schedule div:nth-child(2) {
        flex: 1;
    }
    .schedule div:nth-child(3) {
        flex: 4;
    }
    @media screen and (max-width: 768px){
        .schedule:nth-child(2), .schedule:nth-child(3){
            display: none;
        }
    }
</style>