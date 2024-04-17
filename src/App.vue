<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  // console.log("App Launch");
});
onShow(() => {
  // console.log("App Show");
});
onHide(() => {
  // console.log("App Hide");
});
</script>

<style lang="scss">
@import "uview-plus/index.scss";
@import "@/styles/index.scss";

page,
view {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

page {
  // animate.css
  height: 100%;
  width: 100%;
  user-select: text;
  -webkit-user-select: text;

  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
}
</style>
