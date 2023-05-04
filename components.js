//== Root Component ============================================================
const RootComponent = {
  name: 'RootComponent'
}

//== Initializer ============================================================
const InitializerComponent = {
  name: 'InitializerComponent',
  emits: ['recLevelChanged', 'jsonCallStarted', 'jsonCallEnded']
};

//== Viewer ============================================================
const ViewerComponent = {
  name: 'ViewerComponent',
  props: ['currentElements', 'currentLevel', 'maxLevel'],
  emits: ['directoryClicked', 'goBack']
};

//== File ============================================================
const FileComponent = {
  name: 'FileComponent',
  props: ['url']
};

//== Directory ============================================================
const DirectoryComponent = {
  name: 'DirectoryComponent',
  props: ['url'],
  emits: ['directoryClicked']
};

//<a @click="$emit('directoryClicked')" href="javascript:void(0)">{{folderName}}</a>

const app = Vue.createApp(RootComponent);
app.component('InitializerComponent', InitializerComponent);
app.component('ViewerComponent', ViewerComponent);
app.component('FileComponent', FileComponent);
app.component('DirectoryComponent', DirectoryComponent);
const vm = app.mount("#app");
