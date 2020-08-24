<template>
  <!-- The Modal -->
  <div>
    <!-- Modal content -->
    <div v-if="modalType === 'put'" class="modal-content calendar-modal-content">
      <span class="close" @click="closeModal();">&times;</span>
      <h2>Add Schedule</h2>
      <form class="modalForm">
        <ul>
          <li>
            <label for="Subject">제목</label>
            <input type="text" id="Subject" name="Subject" v-model="subject" />
          </li>
          <li>
            <label for="Content">내용</label>
            <textarea name="Content" id="Content" cols="30" rows="10" v-model="content"></textarea>
          </li>
          <li>
            <label for="Date">날짜</label>
            <p>{{modalDate}}</p>
            <input type="hidden" id="Date" name="Date" :value="modalDate" />
          </li>
          <li>
            <label for="Time">시간</label>
            <p>
              <select id="Time" name="Time" class="selectBox" v-model="time">
                <option value="00">00</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
              </select>
              :
              <select id="Minute" name="Minute" class="selectBox" v-model="minute">
                <option value="00">00</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
            </p>
          </li>
          <li class="btn-li">
            <button class="btn" onclick="return false" @click="createOrModSchedule()">생성</button>
            <button class="btn" onclick="return false" @click="closeModal();">취소</button>
          </li>
        </ul>
      </form>
    </div>
    <div v-else class="modal-content calendar-modal-content">
      <span class="close" @click="closeModal();">&times;</span>
      <h2>Schedule</h2>
      <ul class="get-modal-ul">
        <li>
          <label for="Subject">제목</label>
          <p>{{calendar.calSubject}}</p>
        </li>
        <li>
          <label for="Content">내용</label>
          <p style="height:20vh">{{calendar.calContent}}</p>
        </li>
        <li>
          <label for="Date">날짜</label>
          <p>{{calendar.calDate}}</p>
          <input type="hidden" id="Date" name="Date" :value="modalDate" />
        </li>
        <li>
          <label for="Time">시간</label>
          <p>{{calendar.calTime}}</p>
        </li>
        <li class="btn-li" style="border:none;">
          <button class="btn" onclick="return false" @click="closeModal();">닫기</button>
          <button
            class="btn btn-delete"
            onclick="return false"
            @click="deleteSchedule(calendar.calSeq);"
          >삭제</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subject: "",
      content: "",
      time: "00",
      minute: "00",
    };
  },
  props: {
    // isModalActive: Boolean,
    modalDate: String,
    modalType: String,
    calendar: null,
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    createOrModSchedule() {
      var params = new URLSearchParams();
      params.append("calSubject", this.subject);
      params.append("calContent", this.content);
      params.append("calTime", this.time);
      params.append("calMinute", this.minute);
      params.append("calDate", this.modalDate);

      this.$axios.post("/api/insertCalendar", params).then(() => {
        alert("일정이 등록되었습니다.");
      });
      location.reload();
    },
    deleteSchedule(calSeq) {
      this.$axios.delete(`/api/deleteCalendar/${calSeq}`).then(() => {
        alert("삭제되었습니다.");
      });
      location.reload();
    },
  },
};
</script>

<style>
.get-modal-ul li {
  border-bottom: 0.1px solid rgb(155, 155, 155);
}
.modal-content ul li {
  display: flex;
  justify-self: center;
  width: 95%;
  padding: 0.4rem 0;
}
.btn-li {
  justify-content: flex-end;
}
.modal-content ul li input,
.modal-content ul li textarea,
.modal-content ul li p {
  margin: 0;
  padding: 0;
  margin-left: 2rem;
  flex: 4;
}
.modal-content ul li label {
  margin: 0;
  padding: 0;
  flex: 1;
}
/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
}
.calendar-modal-content {
  width: 50%;
}
/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>