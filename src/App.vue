<template>
  <div/>
</template>

<script lang="ts">
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';
import { Label } from './data';

@Component
export default class App extends Vue {
  @Prop({ required: true })
  time!: Label;
}

</script>
