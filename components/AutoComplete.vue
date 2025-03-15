<template>
    <div class="autocomplete-container" v-if="visible">
      <div class="autocomplete-item" v-for="(item, index) in comPleteLikst" :key="index"
        @click="selectSuggestion(item.content)">
        {{ item.content }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      query: {
        type: String,
        default: '',
      },
      comPleteLikst: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        
      };
    },
    methods: {
      selectSuggestion(item) {
        this.$emit('select', item);
      },
    },
    watch: {
      query(newQuery) {
        if (!newQuery) {
          this.$emit('close');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .autocomplete-container {
    position: absolute;
    bottom: 170rpx;
    left: 20rpx;
    width: 80%;
    max-height: 500rpx; /* 固定高度 */
    overflow-y: auto; /* 允许下滑 */
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 20rpx;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    padding: 20rpx;
  }
  
  .autocomplete-item {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #e0e0e0; /* 分割线 */
  }
  
  .autocomplete-item:last-child {
    border-bottom: none; /* 最后一个项不需要分割线 */
  }
  
  .autocomplete-item:hover {
    background: #f0f0f0;
  }
  </style>