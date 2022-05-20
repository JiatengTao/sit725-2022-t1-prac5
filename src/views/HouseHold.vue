<template>
  <div>
  <div id="Aside">
    <Aside />
    <div style="width:100%; height:100%">
    <div style="margin: 10px; margin-left:30%">
      <el-input v-model="searchTable" placeholder="Enter your key words" style="width:20%"></el-input>
      <el-button type="primary" style="margin: 5px">Search</el-button>
      <el-button type="primary">Create</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" align="center" label="Date" width="250" sortable/>
    <el-table-column prop="amount" align="center" label="Amount" width="250" />
    <el-table-column prop="description" align="center" label="Description" />
  </el-table>
  </div>
  </div>
  </div>
</template>

<script>
import Aside from "@/components/Aside";
export default {
  created() {
    this.$store.state.ifFrameShow=true
  },
  name: 'houseHold',
  components: {
    Aside
  },
  data(){
    searchTable: ''
    return{
      tableData:[
  {
    date: '2016-05-03',
    amount: '10',
    description: 'Coles Uid111',
  },
  {
    date: '2016-05-02',
    amount: '20',
    description: 'BigW Uid112',
  },
  {
    date: '2016-05-04',
    amount: '30',
    description: 'Kmart Uid113',
  },
  {
    date: '2016-05-01',
    amount: '30',
    description: 'Myki Uid114',
  },
]
    }
  }
  
}
</script>

<style>

</style>
