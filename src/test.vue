<template>
<div>
  <p>Just a test</p>
</div>
</template>

<script>
// import KSelect from '@/components/select/index';

export default {
  name: 'school_resources',
  data() {
    return {
      dialogInfo: {
        type: '',
        content: [],
        failContent: [],
        successContent: [],
        visible: false,
      },
      fileTypeMaps: {
        1: '试卷',
        2: '视频',
        3: '课件',
        4: '文档',
      },
      tabs: [
        {
          id: 1,
          name: '我的上传',
        },
        {
          id: 2,
          name: '本校资源库',
        },
      ],
      total: 0,
      currentPage: 1,
      currentTab: {},
      typeId: 0,
      subjectId: 0,
      termId: 0,
      keyWord: '',
      order: 1,
      schoolResources: [],
      typeList: [
        {
          id: 0,
          name: '全部分类',
        },
        {
          id: 1,
          name: '试卷',
        },
        {
          id: 2,
          name: '视频',
        },
      ],
      subjectList: [],
      privilegeType: 0,
      listLoading: false,
    };
  },
  methods: {
    testFunc() {
      const popup = 'test';
      console.log(popup);
    },
  },
};
</script>

<style lang='less' scoped>
</style>
