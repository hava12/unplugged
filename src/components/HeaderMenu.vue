<template>
    <header>
        <login-menu :class="['modal', { activeBlock: !isLogin }]" v-on:closeModal="closeModal()" />
        <nav class="navbar">
            <div class="navbar-logo">
                <router-link to="/" exact>
                    <img src="../assets/logo.png" style="width:2rem; height:2rem" alt="logoImg" />
                    <a href>MagicHour</a>
                </router-link>
            </div>
            <div :class="['navbar-menu', { activeFlex: isActive }]">
                <li>
                    <a href @click="$router.push('/')">Main</a>
                </li>
                <li>
                    <a href @click="$router.push('/schedule/list')">Schedule</a>
                </li>
                <li>
                    <a href @click="$router.push('/board/list')">Board</a>
                </li>
                <li>
                    <a href @click="$router.push('/introduce/main')">Introduce</a>
                </li>
                <li>
                    <a href>Management</a>
                </li>
            </div>
            <div :class="['navbar-icons', { activeFlex: isActive }]">
                <li>
                    <a href>
                        <img src="../assets/instagram.png" style="width:1.0rem; height:1.0rem" />
                    </a>
                </li>
                <li>
                    <a href>
                        <img src="../assets/facebook.png" style="width:1.0rem; height:1.0rem" />
                    </a>
                </li>
                <li>
                    <a href>
                        <img src="../assets/youtube.png" style="width:1.0rem; height:1.0rem" />
                    </a>
                </li>
            </div>

            <a class="navbar-toggle" @click="onToggle()">toggle</a>
        </nav>
    </header>
</template>

<script>
import LoginMenu from "./main/Login.vue";
export default {
    data() {
        return {
            isActive: false,
            isLogin: true,
        };
    },
    created() {
        const storage = window.sessionStorage;
        // this.getLoginInfo(storage.getItem("jwt-auth-token"));
        if (storage.getItem("jwt-auth-token") == null) {
            this.isLogin = false;
        }
    },
    methods: {
        onToggle() {
            this.isActive = !this.isActive;
        },
        closeModal() {
            this.isLogin = true;
        },
        getLoginInfo(token) {
            var params = new URLSearchParams();
            params.append("token", token);
            this.$axios
                .post("/api/validationUserToken", params)
                .then((response) => {
                    console.log(response.data);
                    this.isLogin = response.data;
                })
                .catch(() => {
                    this.isLogin = false;
                });
        },
    },
    components: {
        LoginMenu,
    },
};
</script>

<style>
body {
    font-size: 1rem;
    margin: 0;
}
.navbar a {
    color: rgb(255, 255, 255);
}
.navbar {
    position: absolute;
    top: 0;
    width: 100%;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: hsl(0, 0%, 0%);
    /* padding: 0rem 0.6rem; */
}
.navbar-logo {
    color: white;
}
.navbar-logo a img {
    vertical-align: middle;
}
.navbar-icons li a img {
    vertical-align: middle;
}
.navbar-menu {
    display: flex;
    list-style: none;
    padding-left: 0;
}
.navbar-menu li {
    padding: 0.4rem 0.6rem;
}
.navbar-menu li:hover {
    /* background-color: plum; */
    border-radius: 0.2rem;
    font-weight: bold;
}
.navbar-icons {
    list-style: none;
    color: white;
    display: flex;
}
.navbar-icons li {
    padding: 0.4rem 0.6rem;
}
.navbar-toggle {
    position: absolute;
    right: 1.6rem;
    font-size: 0.7rem;
    color: #d49465;
    display: none;
}

@media screen and (max-width: 768px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
        /* padding: 0.4rem 1.2rem; */
    }
    .navbar-menu {
        flex-direction: column;
        align-items: center;
        width: 100%;
        display: none;
    }
    .navbar-menu li {
        width: 100%;
        text-align: center;
    }

    .navbar-icons {
        justify-content: center;
        width: 100%;
        display: none;
    }
    .navbar-toggle {
        display: inline;
    }
}
</style>
