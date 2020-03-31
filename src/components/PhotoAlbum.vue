<template>
  <div>
    <el-row :gutter="20">
      <el-col :sm="8" :md="6"
        v-for="(img, idx) in imgs" :key="idx" style="padding: 20px;">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="hover"
        >
          <img
            :src="`${img.square}`"
            :alt="`${img.title}`"
            class="image"
            @click="showLightbox(idx)"
          >
          <h2 class="text-center text-primary">{{ img.title }}</h2>
        </el-card>
      </el-col>
    </el-row>
    <vue-easy-lightbox
      :moveDisabled="true"
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';

export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      elements: [],
      imgs: '',
      visible: false,
      index: 0,
    };
  },
  methods: {
    getAlbum() {
      const api = 'https://emma.pixnet.cc/album/elements?set_id=4555593&user=jiney&with_detail=1&format=json';
      const vm = this;
      vm.$http.get(api).then((res) => {
        vm.elements = res.data.elements;
        this.filterImg();
      });
    },
    showLightbox(idx) {
      const vm = this;
      vm.index = idx;
      vm.visible = true;
    },
    filterImg() {
      const vm = this;
      vm.imgs = vm.elements.map((item) => {
        const temp = {};
        temp.square = item.square;
        temp.src = item.large;
        temp.title = item.title;
        return temp;
      });
    },
    handleHide() {
      this.visible = false;
    },
  },
  mounted() {
    this.getAlbum();
  },
};
</script>
