<template>
  <div class="pptist-editor">
    <EditorHeader class="layout-header" />
    <div class="layout-content">
      <Thumbnails class="layout-content-left" />
      <div class="layout-content-center">
        <CanvasTool class="center-top" />
        <Canvas v-if="pptid" class="center-body" :style="{ height: `calc(100% - ${remarkHeight + 40}px)` }" :pptid="pptid" />
        <Remark v-if="pptid" class="center-bottom" v-model:height="remarkHeight" :style="{ height: `${remarkHeight}px` }" :pptid="pptid" />
      </div>
      <Toolbar v-if="pptid" class="layout-content-right" :pptid="pptid" />
    </div>
  </div>

  <SelectPanel v-if="showSelectPanel" />
  <SearchPanel v-if="showSearchPanel" />
  <NotesPanel v-if="showNotesPanel" />

  <Modal :visible="!!dialogForExport" :width="680" @closed="closeExportDialog()">
    <ExportDialog />
  </Modal>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/store'
import useGlobalHotkey from '@/hooks/useGlobalHotkey'
import usePasteEvent from '@/hooks/usePasteEvent'

import EditorHeader from './EditorHeader/index.vue'
import Canvas from './Canvas/index.vue'
import CanvasTool from './CanvasTool/index.vue'
import Thumbnails from './Thumbnails/index.vue'
import Toolbar from './Toolbar/index.vue'
import Remark from './Remark/index.vue'
import ExportDialog from './ExportDialog/index.vue'
import SelectPanel from './SelectPanel.vue'
import SearchPanel from './SearchPanel.vue'
import NotesPanel from './NotesPanel.vue'
import Modal from '@/components/Modal.vue'
import { useRoute } from 'vue-router'

const mainStore = useMainStore()
const { dialogForExport, showSelectPanel, showSearchPanel, showNotesPanel } =
  storeToRefs(mainStore)
const closeExportDialog = () => mainStore.setDialogForExport('')

const remarkHeight = ref(40)

useGlobalHotkey()
usePasteEvent()

const route = useRoute()
const pptid = ref<string | null>(null)

function updatePptid() {
  pptid.value = (route.query.pptid as string) || ''
}

updatePptid()

// 使用watch监听路由对象的变化
watch(
  () => route.query,
  () => {
    updatePptid()
  }
)

// 使用 onBeforeMount 确保在组件挂载前更新 pptid
onBeforeMount(() => {
  updatePptid()
})
</script>

<style lang="scss" scoped>
.pptist-editor {
  height: 100%;
}
.layout-header {
  height: 40px;
}
.layout-content {
  height: calc(100% - 40px);
  display: flex;
}
.layout-content-left {
  width: 160px;
  height: 100%;
  flex-shrink: 0;
}
.layout-content-center {
  width: calc(100% - 160px - 260px);

  .center-top {
    height: 40px;
  }
}
.layout-content-right {
  width: 260px;
  height: 100%;
}
</style>