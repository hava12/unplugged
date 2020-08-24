<template>
    <div class="body-menu">
        <header>
            <h1>Board</h1>
        </header>
        <div class="boardHeader boardList">
            <ul>
                <li>No</li>
                <li>Subject</li>
                <li>Date</li>
                <li>Writter</li>
            </ul>
        </div>
        <div v-for="index in listSize" :key="index" class="boardBody boardList">
            <ul v-if="boardList[index - 1] != null">
                <li>{{index}}</li>
                <li><a href="">{{boardList[index - 1].boardSubject}}</a></li>
                <li>{{boardList[index - 1].boardDate}}</li>
                <li>{{boardList[index - 1].boardWriter}}</li>
            </ul>
            <ul v-else >
                <li>3</li>
                <li><a href="">4</a></li>
                <li>6</li>
                <li>7</li>
            </ul>
        </div>
        <div class="board-btn-div">
            <button class="btn" >생성</button>
        </div>
        <div class="paging-div">
            <ul>
                <li v-for="index in 10"  :key="index">
                   <a href=""><span class="page-span">{{index}}</span></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listSize: 15,
            boardList: []
        }
    },
    created() {
        this.getBoardList(1);
    },
    methods: {
        getBoardList(page){
            this.$axios.get(`/api/board/list/${page}`)
                .then((response) => {
                    this.boardList = response.data.boardList;
                    console.log(this.boardList)
                })
        }
    },
}
</script>

<style>
    .paging-div ul, .board-btn-div{
        margin-top: 1rem;
        text-align: center;
    }   
    .paging-div ul li{
        display: inline-block;
    }
    .paging-div ul li:nth-child(1) {
        border-left: 1px solid darkgrey ;
    }
    .page-span {
        font-weight: bold;
        border-right: 1px solid darkgrey ;
        padding: 0 .5rem;
    }
    .boardList ul {
        display: flex;
        margin: 0;
        padding: 0;
    }
    .boardList ul li {
        padding: 0.7rem 0px;
    }
    .boardList ul li:nth-child(1){
        text-align: center;
        flex: 1;
    }
    .boardList ul li:nth-child(2){
        flex: 7;
    }
    .boardList ul li:nth-child(3){
        text-align: center;
        flex: 2;
    }
    .boardList ul li:nth-child(4){
        text-align: center;
        flex: 1;
    }
    .boardHeader {
        text-align: center;
    }
    .boardHeader ul li{
        flex: 1;
        display: inline-block;
        width: 100%;
        height: 100%;
        border: 1px solid white;
        background: rgb(247, 241, 241);
    }
</style>