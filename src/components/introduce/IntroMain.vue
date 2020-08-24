<template>
    <body class="intro_main" :id="'intro_main_' + intro_main">
        <div class="intro_content_box" id="intro_content_box_0" :style="intro_content_box_style[0]">
            <div :class="['intro_content', 'font-medium', 'bold']" :style="intro_content_box_style[0].children[0]">안녕하세요</div>
            <div :class="['intro_content', 'font-medium', 'bold']" :style="intro_content_box_style[0].children[1]">우리는</div>
            <div :class="['intro_content', 'font-big', 'bold']" :style="intro_content_box_style[0].children[2]">01</div>
            <div :class="['intro_content', 'font-big', 'bold', 'alwaysDisplay']" :style="intro_content_box_style[0].children[3]">young one</div>
        </div>
        <div :class="['intro_content_box', 'font-medium']" id="intro_content_box_1" :style="intro_content_box_style[1]">
            <div :class="['intro_content', 'font-medium', 'bold']" :style="intro_content_box_style[1].children[0]">우리는 만듭니다.<br /></div>
            <div :class="['intro_content', 'font-small', 'bold']" :style="intro_content_box_style[1].children[1]">
                메시지가 결여된,<br />
                자극적인 콘텐츠만 강조하는 현 문화에 물음표를 던집니다.<br />
                우리는 유행을 따라가지 않고 순수한 노력과 연구를 통해 시간이 지나도 변하지 않는 가치를 지니는 음악을 만들고자 합니다.<br /><br />
                또한, 우리는 뮤직비디오를 제작하여 우리의 메시지를 더욱 명확하게 드러낼 것입니다.
            </div>
        </div>
        <div :class="['intro_content_box', 'font-small']" id="intro_content_box_2" :style="intro_content_box_style[2]">222</div>
    </body>
</template>

<script>
// import MainScheduleDivVue from "../main/MainScheduleDiv.vue";
export default {
    data() {
        return {
            intro_main: 0,
            yOffset: 0,
            contentYStartLength: 0,
            contentYEndLength: 0,
            currenctYLength: 0,
            yRatio: 0,
            intro_content_box: {
                values: [
                    {
                        //0
                        contentHeight: 10,
                        children: [
                            {
                                opacity: [1, 1, 0, { start: 0, middle_start: 0.15, middle_end: 0.25, end: 0.3 }],
                                top: [50, 45, 40, { start: 0, middle_start: 0.15, middle_end: 0.25, end: 0.3 }],
                            },
                            {
                                opacity: [0, 1, 0, { start: 0.3, middle_start: 0.35, middle_end: 0.45, end: 0.5 }],
                                top: [50, 45, 40, { start: 0.3, middle_start: 0.35, middle_end: 0.45, end: 0.5 }],
                            },
                            {
                                opacity: [0, 1, 0, { start: 0.5, middle_start: 0.6, middle_end: 0.7, end: 0.8 }],
                                top: [50, 45, 40, { start: 0.5, middle_start: 0.6, middle_end: 0.7, end: 0.8 }],
                            },
                            {
                                opacity: [0, 1, 1, { start: 0.75, middle_start: 0.8, middle_end: 0.85, end: 1 }],
                                top: [50, 45, 0, { start: 0.75, middle_start: 0.8, middle_end: 0.85, end: 1 }],
                            },
                        ],
                    },
                    {
                        //1
                        contentHeight: 10,
                        children: [
                            {
                                opacity: [0, 1, 0, { start: 0, middle_start: 0.15, middle_end: 0.5, end: 0.55 }],
                                top: [30, 15, 12, { start: 0, middle_start: 0.15, middle_end: 0.5, end: 0.55 }],
                            },
                            {
                                opacity: [0, 1, 0, { start: 0.075, middle_start: 0.225, middle_end: 0.5, end: 0.55 }],
                                top: [50, 20, 14, { start: 0.075, middle_start: 0.225, middle_end: 0.5, end: 0.55 }],
                            },
                            {
                                opacity: [1, 1, 0, { start: 0.5, middle_start: 0.6, middle_end: 0.7, end: 0.8 }],
                                top: [50, 45, 40, { start: 0.5, middle_start: 0.6, middle_end: 0.7, end: 0.8 }],
                            },
                            {
                                opacity: [1, 1, 1, { start: 0.75, middle_start: 0.8, middle_end: 0.85, end: 1 }],
                                top: [50, 45, 0, { start: 0.75, middle_start: 0.8, middle_end: 0.85, end: 1 }],
                            },
                        ],
                    },
                    {
                        //2
                        contentHeight: 5,
                        children: [
                            { opacity: [0, 1, 0, { start: 0.2, middle_start: 0.3, middle_end: 0.3, end: 0.4 }] },
                            { opacity: [0, 1, 0, { start: 0.2, middle_start: 0.3, middle_end: 0.3, end: 0.4 }] },
                            { opacity: [0, 1, 0, { start: 0.2, middle_start: 0.3, middle_end: 0.3, end: 0.4 }] },
                        ],
                    },
                ],
            },
            intro_content_box_style: [
                {
                    //0
                    children: [
                        { opacity: 1, top: "50vh" },
                        { opacity: 0, top: "50vh" },
                        { opacity: 0, top: "50vh" },
                        { opacity: 0, top: "50vh" },
                    ],
                },
                {
                    //1
                    children: [
                        { opacity: 0, top: "50vh" },
                        { opacity: 0, top: "50vh" },
                        { opacity: 1, top: "50vh" },
                        { opacity: 1, top: "50vh" },
                    ],
                },
                {
                    //2
                    opacity: 1,
                    height: 0,
                },
            ],
        };
    },
    created() {},
    mounted() {
        for (let i = 0; i < this.intro_content_box_style.length; i++) {
            this.intro_content_box_style[i].height = window.innerHeight * this.intro_content_box.values[i].contentHeight + "px";
        }
        window.addEventListener("resize", () => {
            for (let i = 0; i < this.intro_content_box_style.length; i++) {
                this.intro_content_box_style[i].height = window.innerHeight * this.intro_content_box.values[i].contentHeight + "px";
            }
            this.setSize();
            this.setContents();
        });
        window.addEventListener("scroll", () => {
            this.setSize();
            this.setContents();
        });
    },
    methods: {
        setSize() {
            //현재 위치의 yOffset
            this.yOffset = window.pageYOffset;
            //현재 보여지는 div 의 번호 [intro_main]
            this.intro_main = 0;
            this.contentYEndLength = 0;
            this.contentYStartLength = 0;
            this.currenctYLength = 0;
            for (let i = 0; i < this.intro_content_box_style.length; i++) {
                this.contentYEndLength += parseInt(this.intro_content_box_style[i].height);

                if (this.contentYEndLength > this.yOffset) {
                    this.currenctYLength = parseInt(this.intro_content_box_style[i].height);
                    break;
                } else {
                    this.intro_main++;
                }
                this.contentYStartLength += parseInt(this.intro_content_box_style[i].height);
            }

            this.yRatio = (this.yOffset - this.contentYStartLength) / this.currenctYLength;
            // console.log(this.currenctYLength);
            // console.log(this.yRatio);
            // console.log(this.intro_main);
            // console.log(this.contentYEndLength);
            // console.log(this.contentYStartLength);
            // console.log(this.yOffset);
        },
        getOpacityRatioEnd(opacity) {
            return opacity[1] - ((this.yRatio - opacity[3].middle_end) / (opacity[3].end - opacity[3].middle_end)) * (opacity[1] - opacity[2]);
        },
        setOpacity(opacity, styleOpacity) {
            var opacityRatio = 0;
            if (this.yRatio < opacity[3].start) {
                styleOpacity.opacity = opacity[0];
            } else if (this.yRatio >= opacity[3].start && this.yRatio < opacity[3].middle_start) {
                // (현재 Y - 시작 Y) / (끝 Y - 시작Y) * Opacity 비율
                opacityRatio =
                    opacity[0] + ((this.yRatio - opacity[3].start) / (opacity[3].middle_start - opacity[3].start)) * (opacity[1] - opacity[0]);
                styleOpacity.opacity = opacityRatio;
            } else if (this.yRatio >= opacity[3].middle_start && this.yRatio < opacity[3].middle_end) {
                styleOpacity.opacity = opacity[1];
            } else if (this.yRatio >= opacity[3].middle_end && this.yRatio < opacity[3].end) {
                opacityRatio = this.getOpacityRatioEnd(opacity);
                styleOpacity.opacity = opacityRatio;
            } else {
                styleOpacity.opacity = opacity[2];
            }
        },
        setTop(top, styleTop) {
            var topRatio = 0;
            if (this.yRatio < top[3].start) {
                styleTop.top = `${top[0]}vh`;
            } else if (this.yRatio >= top[3].start && this.yRatio < top[3].middle_start) {
                topRatio = (this.yRatio - top[3].start) / (top[3].middle_start - top[3].start);
                styleTop.top = `${top[0] + (top[1] - top[0]) * topRatio}vh`;
            } else if (this.yRatio >= top[3].middle_start && this.yRatio < top[3].middle_end) {
                styleTop.top = `${top[1]}vh`;
            } else if (this.yRatio >= top[3].middle_end && this.yRatio < top[3].end) {
                topRatio = (this.yRatio - top[3].middle_end) / (top[3].end - top[3].middle_end);
                styleTop.top = `${top[1] + (top[2] - top[1]) * topRatio}vh`;
            } else {
                styleTop.top = `${top[2]}vh`;
            }
        },
        setContents() {
            var children = this.intro_content_box.values[this.intro_main].children;
            var childrenStyle = this.intro_content_box_style[this.intro_main].children;
            switch (this.intro_main) {
                case 0:
                    //안녕하세요
                    var childrenOpacity_0 = children[0].opacity;
                    var childrenTop_0 = children[0].top;
                    var childrenStyle_0 = childrenStyle[0];
                    this.setOpacity(childrenOpacity_0, childrenStyle_0);
                    this.setTop(childrenTop_0, childrenStyle_0);

                    //우리는
                    var childrenOpacity_1 = children[1].opacity;
                    var childrenTop_1 = children[1].top;
                    var childrenStyle_1 = childrenStyle[1];
                    this.setOpacity(childrenOpacity_1, childrenStyle_1);
                    this.setTop(childrenTop_1, childrenStyle_1);

                    //01
                    var childrenOpacity_2 = children[2].opacity;
                    var childrenTop_2 = children[2].top;
                    var childrenStyle_2 = childrenStyle[2];
                    this.setOpacity(childrenOpacity_2, childrenStyle_2);
                    this.setTop(childrenTop_2, childrenStyle_2);

                    //YoungOne
                    var childrenOpacity_3 = children[3].opacity;
                    var childrenTop_3 = children[3].top;
                    var childrenStyle_3 = childrenStyle[3];
                    this.setOpacity(childrenOpacity_3, childrenStyle_3);
                    this.setTop(childrenTop_3, childrenStyle_3);
                    break;
                case 1:
                    childrenOpacity_0 = children[0].opacity;
                    childrenTop_0 = children[0].top;
                    childrenStyle_0 = childrenStyle[0];

                    this.setOpacity(childrenOpacity_0, childrenStyle_0);
                    this.setTop(childrenTop_0, childrenStyle_0);

                    childrenOpacity_1 = children[1].opacity;
                    childrenTop_1 = children[1].top;
                    childrenStyle_1 = childrenStyle[1];

                    this.setOpacity(childrenOpacity_1, childrenStyle_1);
                    this.setTop(childrenTop_1, childrenStyle_1);
                    break;
                case 2:
                    console.log(children);
                    break;
                default:
                    break;
            }
            //   console.log(window.scrollY);
        },
    },
};
</script>

<style>
.intro_main {
    /* background: linear-gradient(to bottom, rgb(240, 240, 240), rgb(240, 240, 240), rgb(238, 198, 124), rgb(190, 138, 194)); */
    background: linear-gradient(to bottom, rgb(240, 240, 240), rgb(240, 240, 240), rgb(159, 156, 156));
}
.font-big {
    font-size: 4rem;
    /* background: gold; */
}
.font-medium {
    font-size: 3rem;
}
.font-small {
    font-size: 1.5rem;
}
.intro_content {
    display: none;
    position: fixed;
    top: 45vh;
    word-break: keep-all;
}
.intro_content_box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    align-items: center;
}

#intro_main_0 #intro_content_box_0 .intro_content,
#intro_main_1 #intro_content_box_1 .intro_content,
#intro_main_2 #intro_content_box_2 .intro_content {
    display: block;
}
.alwaysDisplay {
    display: block;
}
@media screen and (max-width: 768px) {
    .font-big {
        font-size: 3rem;
        /* background: gold; */
    }
    .font-medium {
        font-size: 1.5rem;
    }
    .font-small {
        font-size: 1rem;
    }
}
</style>
