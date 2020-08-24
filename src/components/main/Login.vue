<template>
  <div>
    <div class="modal-content login-modal-content">
      <!-- <span class="close" @click="closeModal();">&times;</span> -->
      <h2>로그인이 필요합니다.</h2>
      <form class="modalForm" action="/api/login">
        <ul>
          <li>
            <label for="userId">아이디</label>
            <input type="text" name="userId" id="userId" v-model="userId" />
          </li>
          <li>
            <label for="password">비밀번호</label>
            <input type="password" name="password" id="password" v-model="userPassword" />
          </li>
          <li class="btn-li">
            <button class="btn" onclick="return false" @click="actionLogin();">로그인</button>
            <!-- <button class="btn" onclick="return false" @click="deleteSchedule(calendar.calSeq);">삭제</button> -->
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
const storage = window.sessionStorage;
export default {
  data() {
    return {
      userId: "",
      userPassword: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    actionLogin() {
      var params = new URLSearchParams();
      params.append("userId", this.userId);
      params.append("userPassword", this.userPassword);
      this.$axios.post("/api/actionLogin", params).then((response) => {
        storage.setItem("jwt-auth-token", response.headers["jwt-auth-token"]);
        // alert(storage.getItem("jwt-auth-token"));
        if (response.data != null) {
          this.closeModal();
        }
      });
    },
  },
};
</script>

<style>
/* Modal Content/Box */
.login-modal-content {
  width: 350px; /* Could be more or less, depending on screen size */
}
</style>